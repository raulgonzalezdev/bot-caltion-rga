from fastapi import FastAPI, WebSocket, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, MetaData, Table, Column, String, Text,Float,Integer, JSON, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import sessionmaker
from sqlalchemy.types import ARRAY
from datetime import datetime, timezone
from typing import List, Optional

from goldenverba.components.chunk import Chunk
from goldenverba.components.document import Document
from goldenverba.components.types import FileData

import logging

import os
from pathlib import Path

from dotenv import load_dotenv
from starlette.websockets import WebSocketDisconnect
from wasabi import msg  # type: ignore[import]
import time
from pydantic import BaseModel, ConfigDict

from goldenverba import verba_manager
from goldenverba.server.types import (
    ResetPayload,
    ConfigPayload,
    QueryPayload,
    GeneratePayload,
    GetDocumentPayload,
    SearchQueryPayload,
    ImportPayload,
)
from goldenverba.server.util import get_config, set_config, setup_managers

load_dotenv()

# Configuración de la conexión a la base de datos PgVector
DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)
metadata = MetaData()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Definir función para obtener la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Check if runs in production
production_key = os.environ.get("VERBA_PRODUCTION", "")
tag = os.environ.get("VERBA_GOOGLE_TAG", "")
if production_key == "True":
    msg.info("API runs in Production Mode")
    production = True
else:
    production = False

manager = verba_manager.VerbaManager()
setup_managers(manager)


# FastAPI App
app = FastAPI()

# Define the documents table
documents_table = Table(
    "documents", metadata,
    Column("id", String, primary_key=True),
    Column("_name", String, unique=True),  # Añadido unique=True para que pueda ser referenciada
    Column("_text", Text),
    Column("_type", String),
    Column("_path", String),
    Column("_link", String),
    Column("_timestamp", String),
    Column("_reader", String),
    Column("_meta", JSONB),
    Column("_score", Integer),
    Column("_vector", JSONB),
    Column("created_at", DateTime, default=lambda: datetime.now(timezone.utc)),
    Column("updated_at", DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc)),
)

# Define the chunks table
chunks_table = Table(
    "chunks", metadata,
    Column("id", String, primary_key=True),
    Column("_doc_name", String, ForeignKey("documents._name")),  # Se mantiene la clave foránea
    Column("_doc_type", String),
    Column("_doc_uuid", String),
    Column("_chunk_id", String),
    Column("_text", Text),
    Column("_tokens", ARRAY(Integer)),  # Asegúrate de que _tokens pueda manejar arrays grandes
    Column("created_at", DateTime, default=lambda: datetime.now(timezone.utc)),
    Column("updated_at", DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc)),
)


metadata.create_all(engine)

origins = [
    "http://localhost:3000",
    "https://verba-golden-ragtriever.onrender.com",
    "http://localhost:8000",
]

# Add middleware for handling Cross Origin Resource Sharing (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent

# Serve the assets (JS, CSS, images, etc.)
app.mount(
    "/static/_next",
    StaticFiles(directory=BASE_DIR / "frontend/out/_next"),
    name="next-assets",
)

# Serve the main page and other static files
app.mount("/static", StaticFiles(directory=BASE_DIR / "frontend/out"), name="app")

@app.get("/")
@app.head("/")
async def serve_frontend():
    return FileResponse(os.path.join(BASE_DIR, "frontend/out/index.html"))

### GET

# Define health check endpoint
@app.get("/api/health")
async def health_check():
    try:
        if manager.client.is_ready():
            return JSONResponse(
                content={"message": "Alive!", "production": production, "gtag": tag}
            )
        else:
            return JSONResponse(
                content={
                    "message": "Database not ready!",
                    "production": production,
                    "gtag": tag,
                },
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            )
    except Exception as e:
        msg.fail(f"Healthcheck failed with {str(e)}")
        return JSONResponse(
            content={
                "message": f"Healthcheck failed with {str(e)}",
                "production": production,
                "gtag": tag,
            },
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        )

# Get Status meta data
@app.get("/api/get_status")
async def get_status():
    try:
        schemas = manager.get_schemas()
        sorted_schemas = dict(
            sorted(schemas.items(), key=lambda item: item[1], reverse=True)
        )

        sorted_libraries = dict(
            sorted(
                manager.installed_libraries.items(),
                key=lambda item: (not item[1], item[0]),
            )
        )
        sorted_variables = dict(
            sorted(
                manager.environment_variables.items(),
                key=lambda item: (not item[1], item[0]),
            )
        )

        data = {
            "type": manager.weaviate_type,
            "libraries": sorted_libraries,
            "variables": sorted_variables,
            "schemas": sorted_schemas,
            "error": "",
        }

        msg.info("Status Retrieved")
        return JSONResponse(content=data)
    except Exception as e:
        data = {
            "type": "",
            "libraries": {},
            "variables": {},
            "schemas": {},
            "error": f"Status retrieval failed: {str(e)}",
        }
        msg.fail(f"Status retrieval failed: {str(e)}")
        return JSONResponse(content=data)

# Get Configuration
@app.get("/api/config")
async def retrieve_config():
    try:
        config = get_config(manager)
        msg.info("Config Retrieved")
        return JSONResponse(status_code=200, content={"data": config, "error": ""})

    except Exception as e:
        msg.warn(f"Could not retrieve configuration: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={
                "data": {},
                "error": f"Could not retrieve configuration: {str(e)}",
            },
        )

### WEBSOCKETS

@app.websocket("/ws/generate_stream")
async def websocket_generate_stream(websocket: WebSocket):
    await websocket.accept()
    while True:  # Start a loop to keep the connection alive.
        try:
            data = await websocket.receive_text()
            # Parse and validate the JSON string using Pydantic model
            payload = GeneratePayload.model_validate_json(data)
            msg.good(f"Received generate stream call for {payload.query}")
            full_text = ""
            async for chunk in manager.generate_stream_answer(
                [payload.query], [payload.context], payload.conversation
            ):
                full_text += chunk["message"]
                if chunk["finish_reason"] == "stop":
                    chunk["full_text"] = full_text
                await websocket.send_json(chunk)

        except WebSocketDisconnect:
            msg.warn("WebSocket connection closed by client.")
            break  # Break out of the loop when the client disconnects

        except Exception as e:
            msg.fail(f"WebSocket Error: {str(e)}")
            await websocket.send_json(
                {"message": e, "finish_reason": "stop", "full_text": str(e)}
            )
        msg.good("Succesfully streamed answer")

### POST

# Reset Verba
@app.post("/api/reset")
async def reset_verba(payload: ResetPayload):
    if production:
        return JSONResponse(status_code=200, content={})

    try:
        if payload.resetMode == "VERBA":
            manager.reset()
        elif payload.resetMode == "DOCUMENTS":
            manager.reset_documents()
        elif payload.resetMode == "CACHE":
            manager.reset_cache()
        elif payload.resetMode == "SUGGESTIONS":
            manager.reset_suggestion()
        elif payload.resetMode == "CONFIG":
            manager.reset_config()

        msg.info(f"Resetting Verba ({payload.resetMode})")

    except Exception as e:
        msg.warn(f"Failed to reset Verba {str(e)}")

    return JSONResponse(status_code=200, content={})

from phi.document.reader.pdf import PDFReader

# Receive query and return chunks and query answer
# Endpoint para importar datos
@app.post("/api/import")
async def import_data(payload: ImportPayload):
    logging = []

    if production:
        logging.append(
            {"type": "ERROR", "message": "Can't import when in production mode"}
        )
        return JSONResponse(
            content={
                "logging": logging,
            }
        )

    try:
        set_config(manager, payload.config)
        documents, logging = manager.import_data(
            payload.data, payload.textValues, logging
        )

        # Generar embeddings usando el embedder y almacenar los documentos en PostgreSQL
        db_session = SessionLocal()
        for doc in documents:
            doc_id = doc.get("id") or f"{doc['_name']}_{datetime.now(timezone.utc).isoformat()}"
            db_session.execute(documents_table.insert().values(
                id=doc_id,
                _name=doc["_name"],
                _text=doc["_text"],
                _type=doc["_type"],
                _path=doc["_path"],
                _link=doc["_link"],
                _timestamp=doc["_timestamp"],
                _reader=doc["_reader"],
                _meta=doc["_meta"],
                _score=doc["_score"],
                _vector=doc["_vector"],
                created_at=datetime.now(timezone.utc),
                updated_at=datetime.now(timezone.utc)
            ))
            for chunk in doc.get("chunks", []):
                db_session.execute(chunks_table.insert().values(
                    id=f"{doc_id}_{chunk.get('_chunk_id')}",
                    _text=chunk.get("_text"),
                    _doc_name=chunk.get("_doc_name"),
                    _doc_type=chunk.get("_doc_type"),
                    _doc_uuid=chunk.get("_doc_uuid"),
                    _chunk_id=chunk.get("_chunk_id"),
                    _tokens=chunk.get("_tokens"),  
                    created_at=datetime.now(timezone.utc),
                    updated_at=datetime.now(timezone.utc)
                ))
        db_session.commit()
        db_session.close()

        logging.append({"type": "INFO", "message": "Documents and chunks loaded and vectors stored successfully."})

        return JSONResponse(
            content={
                "logging": logging,
            }
        )

    except Exception as e:
        logging.append({"type": "ERROR", "message": str(e)})
        return JSONResponse(
            content={
                "logging": logging,
            }
        )


@app.post("/api/set_config")
async def update_config(payload: ConfigPayload):

    if production:
        return JSONResponse(
            content={
                "status": "200",
                "status_msg": "Config can't be updated in Production Mode",
            }
        )

    try:
        set_config(manager, payload.config)
    except Exception as e:
        msg.warn(f"Failed to set new Config {str(e)}")

    return JSONResponse(
        content={
            "status": "200",
            "status_msg": "Config Updated",
        }
    )
  
def retrieve_chunks(self, queries: list[str]) -> list[Chunk]:
            chunks, context = self.retriever_manager.retrieve(
                queries,
                self.client,
                self.embedder_manager.embedders[self.embedder_manager.selected_embedder],
                self.generator_manager.generators[
                    self.generator_manager.selected_generator
                ],
            )
            return chunks, context     
# def retrieve_chunks(query: str, embeddings_model: str):
#     embeddings_model_clean = embeddings_model.replace("-", "_")
#     collection_name = f"local_rag_documents_{embeddings_model_clean}"
    
#     # Conectar a PgVector2
#     db_url = os.getenv("DATABASE_URL", "postgresql+psycopg://ai:ai@localhost:5532/ai")
#     vector_db = PgVector2(db_url=db_url, collection=collection_name)
    
#     # Realizar la búsqueda en la colección de vectores
#     results = vector_db.search(query, limit=5)
    
#     # Convertir los resultados en chunks de documentos
#     chunks = []
#     for result in results:
#         chunks.append({
#             "text": result.content,
#             "doc_name": result.name,
#             "chunk_id": result.meta_data.get("chunk_id", ""),
#             "doc_uuid": result.meta_data.get("doc_uuid", ""),
#             "doc_type": result.meta_data.get("doc_type", ""),
#             "score": result.meta_data.get("score", 0),
#         })
    
#     return chunks

    
# En el método que maneja la consulta, se llamaría a esta función de esta manera:
@app.post("/api/query")
async def query(payload: QueryPayload):
    msg.good(f"Received query: {payload.query}")
    start_time = time.time()  # Start timing
    try:
        chunks = retrieve_chunks(payload.query, payload.embeddings_model)
        context = ""  # Dependiendo de cómo manejes el contexto
        
        elapsed_time = round(time.time() - start_time, 2)  # Calculate elapsed time
        msg.good(f"Succesfully processed query: {payload.query} in {elapsed_time}s")

        if len(chunks) == 0:
            return JSONResponse(
                content={
                    "chunks": [],
                    "took": 0,
                    "context": "",
                    "error": "No Chunks Available",
                }
            )

        return JSONResponse(
            content={
                "error": "",
                "chunks": chunks,
                "context": context,
                "took": elapsed_time,
            }
        )

    except Exception as e:
        msg.warn(f"Query failed: {str(e)}")
        return JSONResponse(
            content={
                "chunks": [],
                "took": 0,
                "context": "",
                "error": f"Something went wrong: {str(e)}",
            }
        )

# Retrieve auto complete suggestions based on user input
@app.post("/api/suggestions")
async def suggestions(payload: QueryPayload):
    try:
        suggestions = manager.get_suggestions(payload.query)

        return JSONResponse(
            content={
                "suggestions": suggestions,
            }
        )
    except Exception:
        return JSONResponse(
            content={
                "suggestions": [],
            }
        )

# Retrieve specific document based on UUID
@app.post("/api/get_document")
async def get_document(payload: GetDocumentPayload):
    # TODO Standarize Document Creation
    msg.info(f"Document ID received: {payload.document_id}")

    try:
        document = manager.retrieve_document(payload.document_id)
        document_properties = document.get("properties", {})
        document_obj = {
            "class": document.get("class", "No Class"),
            "id": document.get("id", payload.document_id),
            "chunks": document_properties.get("chunk_count", 0),
            "link": document_properties.get("doc_link", ""),
            "name": document_properties.get("doc_name", "No name"),
            "type": document_properties.get("doc_type", "No type"),
            "text": document_properties.get("text", "No text"),
            "timestamp": document_properties.get("timestamp", ""),
        }

        msg.good(f"Succesfully retrieved document: {payload.document_id}")
        return JSONResponse(
            content={
                "error": "",
                "document": document_obj,
            }
        )
    except Exception as e:
        msg.fail(f"Document retrieval failed: {str(e)}")
        return JSONResponse(
            content={
                "error": str(e),
                "document": None,
            }
        )

## Retrieve and search documents imported to Weaviate
@app.post("/api/get_all_documents")
async def get_all_documents(payload: SearchQueryPayload):
    # TODO Standarize Document Creation
    msg.info("Get all documents request received")
    start_time = time.time()  # Start timing

    try:
        if payload.query == "":
            documents = manager.retrieve_all_documents(
                payload.doc_type, payload.page, payload.pageSize
            )
        else:
            documents = manager.search_documents(
                payload.query, payload.doc_type, payload.page, payload.pageSize
            )

        if not documents:
            return JSONResponse(
                content={
                    "documents": [],
                    "doc_types": [],
                    "current_embedder": manager.embedder_manager.selected_embedder,
                    "error": f"No Results found!",
                    "took": 0,
                }
            )

        documents_obj = []
        for document in documents:

            _additional = document["_additional"]

            documents_obj.append(
                {
                    "class": "No Class",
                    "uuid": _additional.get("id", "none"),
                    "chunks": document.get("chunk_count", 0),
                    "link": document.get("doc_link", ""),
                    "name": document.get("doc_name", "No name"),
                    "type": document.get("doc_type", "No type"),
                    "text": document.get("text", "No text"),
                    "timestamp": document.get("timestamp", ""),
                }
            )

        elapsed_time = round(time.time() - start_time, 2)  # Calculate elapsed time
        msg.good(
            f"Succesfully retrieved document: {len(documents)} documents in {elapsed_time}s"
        )

        doc_types = manager.retrieve_all_document_types()

        return JSONResponse(
            content={
                "documents": documents_obj,
                "doc_types": list(doc_types),
                "current_embedder": manager.embedder_manager.selected_embedder,
                "error": "",
                "took": elapsed_time,
            }
        )
    except Exception as e:
        msg.fail(f"All Document retrieval failed: {str(e)}")
        return JSONResponse(
            content={
                "documents": [],
                "doc_types": [],
                "current_embedder": manager.embedder_manager.selected_embedder,
                "error": f"All Document retrieval failed: {str(e)}",
                "took": 0,
            }
        )

# Delete specific document based on UUID
@app.post("/api/delete_document")
async def delete_document(payload: GetDocumentPayload):
    if production:
        msg.warn("Can't delete documents when in Production Mode")
        return JSONResponse(status_code=200, content={})

    msg.info(f"Document ID received: {payload.document_id}")

    manager.delete_document_by_id(payload.document_id)
    return JSONResponse(content={})

