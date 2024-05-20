# Verba: La documentación técnica del Golden RAGtriever

Este documento proporciona una descripción general de la arquitectura modular general de Verba.

![Demostración de Verba](https://github.com/weaviate/Verba/blob/dev/img/verba_architecture.png)

## Arquitectura del sistema

El sistema de Verba está construido de forma modular y consta de cinco componentes principales: lector, fragmentadores, incrustador, recuperadores y generadores. Cada componente está diseñado con una interfaz que describe sus métodos, expectativas de entrada y especificaciones de salida. Los administradores de componentes supervisan las operaciones de sus respectivos componentes, asegurando un flujo de datos fluido a través del sistema. En el centro de la arquitectura se encuentra Verba Manager, que organiza todo el proceso desde la entrada de datos hasta la generación de respuestas.

### 1. Lector

**Objetivo:**
El módulo Lector es responsable de cargar varios formatos de datos en el sistema Verba.

**Entrada: Lista[FileData]**

```pitón

clase FileData(BaseModel):
nombre de archivo: str
extensión: cadena
contenido: cadena

```

**Salida: Lista[Documento]**

```pitón

Documento de clase:
definición __init__(
ser,
texto: cadena = "",
tipo: cadena = "",
nombre: cadena = "",
ruta: cadena = "",
enlace: cadena = "",
marca de tiempo: cadena = "",
lector: str = "",
meta: dict = Ninguno,
):
si meta es Ninguno:
meta = {}
self._text = texto
self._type = tipo
self._name = nombre
self._path = ruta
self._link = enlace
self._timestamp = marca de tiempo
self._reader = lector
self._meta = meta
self.chunks: lista[Chunk] = []

```

### 2. Trozos

**Objetivo:**
Los fragmentadores segmentan documentos más grandes en fragmentos más pequeños y manejables, adecuados para la vectorización y la recuperación.

**Entrada y salida: Lista[Documento]**

```pitón

fragmento de clase:
definición __init__(
ser,
texto: cadena = "",
nombre_doc: cadena = "",
tipo_doc: cadena = "",
doc_uuid: cadena = "",
trozo_id: cadena = "",
):
self._text = texto
self._doc_name = nombre_doc
self._doc_type = tipo_doc
self._doc_uuid = doc_uuid
self._chunk_id = fragmento_id
self._tokens = 0
self._vector = Ninguno
self._score = 0

```

> La Clase de Documento contiene una lista de fragmentos, el Chunker agregará los fragmentos a esa lista. Se omitirá la fragmentación si el documento ya contiene fragmentos.

### 3. Incrustadores

**Objetivo:**
Embedder toma los datos fragmentados, los transforma en forma vectorizada y los ingiere en Weaviate.

**Entrada: Lista[Documento]**

### 4. Perros perdigueros

**Objetivo:**
Los recuperadores tienen la tarea de localizar los fragmentos más relevantes en función de las consultas de los usuarios utilizando metodologías de búsqueda vectorial.

**Salida: Lista[fragmento]**

### 5. Generadores

**Objetivo:**
Los generadores sintetizan respuestas utilizando los fragmentos recuperados y el contexto de las consultas de los usuarios.

**Entrada: cadena**
**Salida: cadena**

## Componente principal: Verba Manager

### Descripción general

Verba Manager es el corazón del sistema, contiene todos los administradores de componentes y facilita el flujo de datos desde la lectura hasta la generación de respuestas.

### Interacción con FastAPI

La aplicación FastAPI sirve como interfaz para el frontend e interactúa únicamente con Verba Manager.
Esta encapsulación garantiza una base de código limpia y fácil de mantener donde los puntos finales de la API se comunican con un único punto de referencia dentro del ecosistema de Verba.
