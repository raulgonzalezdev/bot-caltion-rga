# init_db.py
from phi.vectordb.pgvector.pgvector2 import PgVector2


def setup_database():
    db_url = "postgresql+psycopg://ai:ai@localhost:5532/ai"
    

    
    # Crear una instancia de PgVector2 para gestionar las tablas
    vector_db_assistant = PgVector2(
        collection="local_rag_assistant",
        db_url=db_url,
        embedder=None
    )
    
    vector_db_documents = PgVector2(
        collection="local_rag_documents_nomic_embed_text",
        db_url=db_url,
        embedder=None
    )
    
    # Crear las tablas
    vector_db_assistant.create()
    vector_db_documents.create()
    
    print("Tablas creadas con éxito.")

if __name__ == "__main__":
    setup_database()
