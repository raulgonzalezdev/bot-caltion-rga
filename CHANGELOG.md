
# Registro de cambios

Todos los cambios notables en este proyecto se documentarán en este archivo.

## [1.0.0] - Hermosa actualización de Verba

### Agregado

- Se agregó DaisyUI
- Base de código de interfaz optimizada
- Diseño Verba completamente reelaborado
- Totalmente responsivo, optimizado para todos los tamaños de pantalla
- Capacidades de personalización
- Se agregaron temas predeterminados, modo oscuro y Weaviate.
- Personalización de texto completo, color e imagen.
- Mejorar la interfaz de chat
- Mejor formato de código Markdown +
- Mantenga las conversaciones guardadas en el almacenamiento del navegador local
- Mejor depuración al proporcionar más información sobre los estados actuales
- Mejorar la interfaz del visor de documentos
- Agregar paginación
- Agregar clasificación
- Usar agregación para filtrar
- Mejorar la descripción general del estado
- Frontend reelaborado + Código optimizado
- Ordenar entradas de estado
- Mejorar la velocidad de carga mediante el uso de agregación
- Mejorar la selección de componentes tanto para ingestión como para RAG
- Se agregó una nueva configuración que se pasará entre el frontend y el backend.
- Base de código limpia, interfaces fusionadas y administradores en archivos individuales
- Se agregaron puntos finales limpios para una mejor legibilidad del código.
- Reelaborado en las interfaces.
- Se agregó una mejor consola y registro para la ingesta.
- Más configuración
- Activar/desactivar el almacenamiento en caché y las sugerencias de autocompletar
- Verba_config.json mejorado
- Posibilidad de habilitar/deshabilitar el almacenamiento en caché + sugerencias automáticas
- Agregue Google Gemini como nuevo integrador y generador
- Se agregó soporte para .CSV (todos los tipos de archivos disponibles en IO no estructurada)
- Más datos de prueba
- Agregar Ollama como generador y componente de incrustación
- Agregar soporte para Cohere R+
- Generación de contexto de WindowRetriever mejorada
- Mostrar contexto RAW en Frontend + Guardar en LocalStorage
- Guardar ajustes y configuración en Weaviate

### Cambió

- Cambiado al marco de AppRouter.
- Se modificó la estructura del proyecto frontend.
- Se modificó la estructura del proyecto backend.
- Componente generador de llamas eliminado

### Fijado

- Uso de la biblioteca aceleradora

## [0.4.0] - 11.04.2024

### Agregado

- Documentación de Docker mejorada
- Configuración mejorada de Docker
- Nuevas variables de entorno para servidores proxy OpenAI: OpenAI_BASE_URL (compatible con LiteLLM) (https://github.com/weaviate/Verba/issues/56)
- Versión aumentada

### Cambió

- Se eliminó spaCy del proyecto.

### Fijado

- Python no funciona en las versiones 3.12, 3.11 y 3.9
- Enlaces de GitHub en LÉAME
- Reparar el vectorizador predeterminado de Docker (https://github.com/weaviate/Verba/issues/50)
- Corregir error ortográfico de requisitos.txt
- Correcciones de errores menores

## [0.3.1] - 15.11.2023

### Agregado

- PDFReader impulsado por PyPDF2
- TokenChunker impulsado por tiktoken
- Ruff Linting (establecido como compromiso previo)
- Formato Markdown para mensajes de chat (https://github.com/weaviate/Verba/issues/48)

### Fijado

- Se agregaron dependencias faltantes.
- Se corrigió el error de reinicio.
- Se corrigió el error de MiniLM Cuda to_device (https://github.com/weaviate/Verba/issues/41)
- Problemas de configuración solucionados (https://github.com/weaviate/Verba/issues/51)
- Se corrigieron los encabezados integrados de Weaviate para Cohere.

## [0.3.0] - 12.09.2023

### Agregado

- Refactorizar la arquitectura modular.
- Agregue la capacidad de importar datos a través de la interfaz, CLI y script
- Agregar lectores (SimpleReader, PathReader, GithubReader, PDFReader)
- Agregar fragmentos (WordChunker, SentenceChunker)
- Agregar incrustadores (ADAEmbedder, SentenceTransformer, Cohere)
- Agregar Generadores (GPT3, GPT4, LLama, Cohere)
- Página de estado
- Restablecer funcionalidad
- Generación de tokens de transmisión
- Carga diferida de documentos
- Agregar copia y etiqueta en caché
- Caché semántica mejorada
- Se agregó soporte para LLama 2 y Cohere.
- Se agregaron nuevos modelos OpenAI.
- Documentación mejorada
- Se agregaron documentos técnicos y pautas de contribución.

### Fijado

- Manejo de errores para la ingesta de datos (manejo del tamaño del fragmento)
- Manejo de Schmea al inicio.

### Cambió

- Se eliminó la lógica de motor simple y avanzado.

## [0.2.3] - 05.09.2023

### Agregado

- Conjunto de datos de ejemplo de documentación de la API de OpenAI

## [0.2.2] - 31.08.2023

### ¡Liberar!

- ¡Lanzada la primera versión de Verba! (muchos por venir :)

### Agregado

- Verba favicon

### Fijado

- Agregar archivos estáticos al paquete
- Weaviate Embedded no se apaga

## [0.1.0] - 29.08.2023

### Agregado

- Preparar Verba para el primer lanzamiento
