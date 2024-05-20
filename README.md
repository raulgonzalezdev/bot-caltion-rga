
# Verba

## El RAGtriever dorado

[![Weaviate](https://img.shields.io/static/v1?label=powered%20by&message=Weaviate%20%E2%9D%A4&color=green&style=flat-square)](https://weaviate.io/)
[![Descargas de PyPi](https://static.pepy.tech/personalized-badge/goldenverba?period=total&units=international_system&left_color=grey&right_color=orange&left_text=pip%20downloads)](https://pypi.org/project/goldenverba/) [![Soporte de Docker](https://img.shields.io/badge/Docker_support-%E2%9C%93-4c1?style=flat-square&logo=docker&logoColor=white)](https://docs.docker.com/get-started/) [![Demostración](https://img.shields.io/badge/Check%20out%20the%20demo!-amarillo?&style=flat-square&logo=react&logoColor=white)](https://verba.weaviate.io/)

Bienvenido a Verba: The Golden RAGtriever, una aplicación de código abierto diseñada para ofrecer una interfaz de extremo a extremo, optimizada y fácil de usar para la generación aumentada de recuperación (RAG) lista para usar. En solo unos sencillos pasos, explore sus conjuntos de datos y extraiga información con facilidad, ya sea localmente con HuggingFace y Ollama o mediante proveedores de LLM como OpenAI, Cohere y Google.

```
pip instalar goldenverba
```

![Demostración de Verba](https://github.com/weaviate/Verba/blob/1.0.0/img/verba.gif)

-[Verba](#verba)
-[🎯 ¿Qué es Verba?](#que-es-verba)
-[✨ Características](#listas-de-características)
-[✨ Primeros pasos con Verba](#empezando-con-verba)
-[🔑 Claves API](#claves-api)
-[Weaviate](#weaviate)
-[Ollama](#ollama)
-[Google](#Google)
-[No estructurado](#no estructurado)
-[Abierto AI](#openai)
-[AbrazosCara](#caradeabrazo)
-[Inicio rápido: Implementación con pip](#cómo-implementar-con-pip)
-[Inicio rápido: compilar desde el código fuente](#cómo-construir-desde-fuente)
-[Inicio rápido: Implementación con Docker](#cómo-instalar-verba-con-docker)
-[💾 Tutorial de Verba](#️verba-tutorial)
-[💖 Contribución de código abierto](#contribución-de-código-abierto)
-[🚩 Problemas conocidos](#Problemas conocidos)
-[❔Preguntas frecuentes](#Preguntas más frecuentes)

## ¿Qué es Verba?

Verba es un asistente personal totalmente personalizable para consultar e interactuar con sus datos, **ya sea localmente o implementado a través de la nube**. Resuelva preguntas sobre sus documentos, haga referencias cruzadas de múltiples puntos de datos u obtenga información de bases de conocimientos existentes. Verba combina técnicas RAG de última generación con la base de datos contextual de Weaviate. Elija entre diferentes marcos RAG, tipos de datos, técnicas de fragmentación y recuperación y proveedores de LLM según su caso de uso individual.

## Listas de funciones

| 🤖 Soporte de modelo | Implementado | Descripción |
| --------------------------------- | ----------- | -------------------------------------------------- ----- |
| Ollama (por ejemplo, Llama3) | ✅ | Modelos de Incrustación y Generación Local impulsados por Ollama |
| HuggingFace (por ejemplo, MiniLMEmbedder) | ✅ | Modelos de incrustación local impulsados por HuggingFace |
| Cohere (por ejemplo, Comando R+) | ✅ | Modelos de integración y generación de Cohere |
| Google (por ejemplo, Géminis) | ✅ | Modelos de integración y generación de Google |
| OpenAI (por ejemplo, GPT4) | ✅ | Modelos de integración y generación por OpenAI |

| 📁 Soporte de datos | Implementado | Descripción |
| ------------------ | ----------- | ---------------------------------- |
| Ingestión de PDF | ✅ | Importar PDF a Verba |
| Ingestión de CSV/XLSX | ✅ | Importar datos de tablas a Verba |
| Multimodal | planeado ⏱️ | Importar datos multimodales a Verba |
| IO no estructurado | ✅ | Importar datos a través de no estructurados |

| ✨Características del RAG | Implementado | Descripción |
| ----------------------- | ----------- | -------------------------------------------------- ----------------------- |
| Búsqueda híbrida | ✅ | Búsqueda semántica combinada con búsqueda por palabras clave |
| Almacenamiento en caché semántico | ✅ | Resultados guardados y recuperados según el significado semántico |
| Sugerencia de autocompletar | ✅ | Verba sugiere el autocompletado |
| Filtrado | planeado ⏱️ | Aplique filtros (por ejemplo, documentos, tipos de documentos, etc.) antes de realizar RAG |
| Consulta avanzada | planeado ⏱️ | Delegación de tareas basada en la evaluación LLM |
| Reclasificación | planeado ⏱️ | Cambie la clasificación de los resultados según el contexto para obtener mejores resultados |
| Evaluación del GAR | planeado ⏱️ | Interfaz para evaluar tuberías RAG |
| Metadatos personalizables | planeado ⏱️ | Control gratuito sobre Metadatos |

| 🆒 Bono genial | Implementado | Descripción |
| --------------------- | ----------- | -------------------------------------------------- ----- |
| Soporte de Docker | ✅ | Verba se puede implementar a través de Docker |
| Interfaz personalizable | ✅ | La interfaz de Verba es totalmente personalizable a través de la interfaz |

| 🤝 Bibliotecas RAG | Implementado | Descripción |
| ---------------- | ----------- | ---------------------------------- |
| Pajar | planeado ⏱️ | Implementar tuberías Haystack RAG |
| LlamaIndice | planeado ⏱️ | Implementar oleoductos LlamaIndex RAG |
| Cadena Lang | planeado ⏱️ | Implementar oleoductos LangChain RAG |

> ¿Falta algo? ¡Siéntete libre de crear un nuevo número o discusión con tu idea!

![Escaparate de Verba](https://github.com/weaviate/Verba/blob/1.0.0/img/verba_screen.png)

---

# Primeros pasos con Verba

Tiene tres opciones de implementación para Verba:

-Instalar a través de pip

```
pip instalar goldenverba
```

-Construir desde la fuente

```
clon de git https://github.com/weaviate/Verba

instalación de pip -e.
```

-Utilice Docker para la implementación

**Requisitos previos**: si no estás utilizando Docker, asegúrate de tener`Python >=3.10.0`instalado en su sistema.

Si no está familiarizado con Python y los entornos virtuales, lea el [pautas del tutorial de Python](./PYTHON_TUTORIAL.md).

# Claves API

Antes de iniciar Verba, deberá configurar el acceso a varios componentes según las tecnologías elegidas, como OpenAI, Cohere y HuggingFace a través de un`.env`archivo. Crea esto`.env`en el mismo directorio en el que desea iniciar Verba. Puede encontrar un`.env.ejemplo`archivo en el [goldenverba](./goldenverba/.env.example) directorio.

> Asegúrese de configurar solo las variables de entorno que desea utilizar; las variables de entorno con valores faltantes o incorrectos pueden provocar errores.

A continuación se muestra una lista completa de las claves y variables API que puede necesitar:

| Variable de entorno | Valor | Descripción |
| ------------------------------ | -------------------------------------------------- -------- | -------------------------------------------------- ------------------------------- |
| WEAVIATE_URL_VERBA | URL de su clúster Weaviate alojado | Conéctate a tu [WCS](https://console.weaviate.cloud/) Clúster |
| WEAVIATE_API_KEY_VERBA | Credenciales API para su clúster Weaviate alojado | Conéctate a tu [WCS](https://console.weaviate.cloud/) Clúster |
| OPENAI_API_KEY | Su clave API | Obtener acceso a [Abierto AI](https://openai.com/) Modelos |
| COHERE_API_KEY | Su clave API | Obtener acceso a [Adherirse](https://cohere.com/) Modelos |
| OLLAMA_URL | URL a su instancia de Ollama (por ejemplo, http://localhost:11434 ) | Obtener acceso a [Ollama](https://ollama.com/) Modelos |
| OLLAMA_MODEL | Nombre del modelo (por ejemplo, llama) | Obtenga acceso a un [Ollama](https://ollama.com/) Modelo |
| UNSTRUCTURED_API_KEY | Su clave API | Obtener acceso a [No estructurado](https://docs.unstructured.io/welcome) Ingestión de datos |
| UNSTRUCTURED_API_URL | URL a instancia no estructurada | Obtener acceso a [No estructurado](https://docs.unstructured.io/welcome) Ingestión de datos |
| GITHUB_TOKEN | Tu token de GitHub | Obtenga acceso a la ingesta de datos a través de GitHub |
| GOOGLE_APPLICATION_CREDENTIALS | Credenciales de Google | Obtenga acceso a los modelos de Google |
| GOOGLE_CLOUD_PROJECT | Proyecto de nube de Google | Obtenga acceso a los modelos de Google |
| GOOGLE_API_KEY | Su clave API | Obtenga acceso a los modelos de Google |
| VERBA_PRODUCCIÓN | Verdadero | Ejecute Verba en modo de producción |

## Weaviate

Verba brinda flexibilidad para conectarse a instancias de Weaviate según sus necesidades. De forma predeterminada, Verba opta por [Weaviate integrado](https://weaviate.io/developers/weaviate/installation/embedded) si no detecta el`WEAVIATE_URL_VERBA`y`WEAVIATE_API_KEY_VERBA`Variables de entorno. Esta implementación local es la forma más sencilla de iniciar su base de datos Weaviate para realizar prototipos y pruebas.

Sin embargo, también tienes otras opciones:

**🌩️ Servicio en la nube de Weaviate (WCS)**

Si prefiere una solución basada en la nube, Weaviate Cloud Service (WCS) ofrece un entorno administrado y escalable. Aprenda cómo configurar un clúster en la nube y obtener las claves API siguiendo las instrucciones [Guía de configuración del clúster Weaviate](https://weaviate.io/developers/wcs/guides/create-instance).

**🐳 Implementación de Docker**
Otra alternativa local sólida es implementar Weaviate usando Docker. Para más detalles, consulte el [Guía de Docker de Weaviate](https://weaviate.io/developers/weaviate/installation/docker-compose).

##Ollama

Verba admite los modelos Ollama. Descargue e instale Ollama en su dispositivo (https://ollama.com/download). Asegúrese de instalar su LLM preferido usando`ollama ejecutar <modelo>`.

Probado con`llama3`,`llama3:70b`y`mistral`. Los modelos más grandes generalmente funcionan mejor, pero necesitan más potencia computacional.

> Asegúrese de que Ollama Server se ejecute en segundo plano y de que no ingiera documentos con diferentes modelos de ollama, ya que su dimensión vectorial puede variar, lo que provocará errores.

## Google

Si desea utilizar las funciones de Google, asegúrese de instalar el paquete Google Verba.

```golpecito
pepita instalar goldenverba[google]

o

pepita instalar `.[google]`
```

> Si está utilizando Docker, modifique el Dockerfile en consecuencia

### Incorporaciones de Google

Para Google Embeddings, Verba utiliza Vertex AI Studio dentro de Google Cloud. Puede encontrar instrucciones para obtener una clave [aquí](https://cloud.google.com/iam/docs/create-short-lived-credentials-direct). Si tienes el`gnube`CLI instalada, puede ejecutar el siguiente comando:`token de acceso de impresión de autenticación de gcloud`. **Por el momento, este token de acceso debe renovarse cada hora.**

También es necesario configurar el`GOOGLE_CLOUD_PROJECT`variable de entorno al nombre de su proyecto.

### Google Géminis

Para utilizar Google Gemini, necesita una clave de cuenta de servicio, que es un archivo JSON. Para obtener esto, vaya a "configuración del proyecto" en su consola de Google Cloud, luego a "cuentas de servicio". Cree una nueva cuenta de servicio y luego cree una nueva clave. Descarga esta clave y colócala en la ruta de Verba. Nombralo`gemini_secrets.json`para excluirlo de git automáticamente. Establecer la variable de entorno`GOOGLE_APPLICATION_CREDENTIALS`a la ubicación de este archivo, por ejemplo`gemini_secrets.json`.

También es necesario configurar el`GOOGLE_CLOUD_PROJECT`variable de entorno al nombre de su proyecto.

## No estructurado

Verba admite la importación de documentos a través de IO no estructurada (por ejemplo, texto sin formato, .pdf, .csv y más). Para usarlos necesitas el`UNSTRUCTURED_API_KEY`y`UNSTRUCTURED_API_URL`Variable ambiental. Puedes obtenerlo de [No estructurado](https://unstructured.io/)

> UNSTRUCTURED_API_URL está configurado en`https://api.unstructured.io/general/v0/general`por defecto

## IA abierta

Verba admite modelos OpenAI como Ada, GPT3 y GPT4. Para usarlos, es necesario especificar el`OPENAI_API_KEY`Variable ambiental. Puedes obtenerlo de [Abierto AI](https://openai.com/)

También puedes agregar un`OPENAI_BASE_URL`utilizar proxies como LiteLLM (https://github.com/BerriAI/litellm)

```
OPENAI_BASE_URL=TU-OPENAI_BASE_URL
```

### Azure OpenAI

Para usar Azure OpenAI, debe configurar

-El tipo de API:

```
OPENAI_API_TYPE="azul"
```

-La clave y el punto final:

```
OPENAI_API_KEY=<TU_LLAVE>
OPENAI_BASE_URL=http://XXX.openai.azure.com
```

-Nombre del recurso de Azure OpenAI, que es XXX si su punto final es XXX.openai.azure.com

```
AZURE_OPENAI_RESOURCE_NAME=<TU_AZURE_RESOURCE_NAME>
```

-Debe configurar los modelos, para las incrustaciones y para la consulta.

```
AZURE_OPENAI_EMBEDDING_MODEL="incrustación-de-texto-ada-002"
OPENAI_MODEL="gpt-4"
```

-Por último, como Azure utiliza una cuota por minuto, es posible que deba agregar un tiempo de espera entre cada carga de fragmentos. Por ejemplo, si tiene un límite de 240 000 tokens por minuto, si sus fragmentos son
400 tokens como máximo, luego 100 ms entre consultas deberían estar bien. Si recibe el error 429 de weaviate, aumente este valor.

```
WAIT_TIME_BETWEEN_INGESTION_QUERIES_MS="100"
```

## AbrazandoCara

Si desea utilizar las funciones de HuggingFace, asegúrese de instalar el paquete Verba correcto.

```golpecito
pepita instalar goldenverba[cara de abrazo]

o

pepita instalar `.[cara de abrazo]`
```

> Si está utilizando Docker, modifique el Dockerfile en consecuencia

# Cómo implementar con pip

`Python >=3.10.0`

1.**Inicializar un nuevo entorno Python**

```
python3 -m virtualenv venv
```

2.**Instalar Verba**

```
pip instalar goldenverba
```

3.**Iniciar Verba**

```
comienzo verbal
```

> Puedes especificar --port y --host mediante banderas

4.**Acceso Verba**

```
Visita localhost:8000
```

5.**Cree un archivo .env y agregue variables de entorno**

# Cómo construir desde la fuente

1.**Clonar los repositorios de Verba**

```
clon de git https://github.com/weaviate/Verba.git
```

2.**Inicializar un nuevo entorno Python**

```
python3 -m virtualenv venv
```

3.**Instalar Verba**

```
instalación de pip -e.
```

4.**Iniciar Verba**

```
comienzo verbal
```

> Puedes especificar --port y --host mediante banderas

5.**Acceso Verba**

```
Visita localhost:8000
```

6.**Cree un archivo .env y agregue variables de entorno**

# Cómo instalar Verba con Docker

Docker es un conjunto de productos de plataforma como servicio que utilizan virtualización a nivel de sistema operativo para entregar software en paquetes llamados contenedores. Para comenzar a implementar Verba usando Docker, siga los pasos a continuación. Si necesita instrucciones más detalladas sobre el uso de Docker, consulte [Plan de estudios de Docker](https://docker-curriculum.com/).

0.**Clonar los repositorios de Verba**
Asegúrese de tener Git instalado en su sistema. Luego, abra una terminal o símbolo del sistema y ejecute el siguiente comando para clonar el repositorio de Verba:

```
clon de git https://github.com/weaviate/Verba.git
```

1.**Establezca las variables de entorno necesarias**
Asegúrese de configurar las variables de entorno requeridas en el`.env`archivo. Puede leer más sobre cómo configurarlos en [Sección de claves API](#claves-api)

2.**Ajuste el archivo Docker-Compose**
Puedes usar el`docker-compose.yml`para agregar las variables de entorno requeridas bajo el`verba`servicio y también puede ajustar la configuración de Weaviate Docker para habilitar la autenticación o cambiar otras configuraciones de su instancia de base de datos. Puede leer más sobre la configuración de Weaviate en nuestro [documentación de composición acoplable](https://weaviate.io/developers/weaviate/installation/docker-compose)

> Asegúrese de agregar solo las variables de entorno que realmente necesita. Si no tiene habilitada la autenticación en su Weaviate Cluster, asegúrese de no incluir la`WEAVIATE_API_KEY_VERBA`variable ambiental

2.**Implementar usando Docker**
Con Docker instalado y el repositorio de Verba clonado, navegue hasta el directorio que contiene el archivo Docker Compose en su terminal o símbolo del sistema. Ejecute el siguiente comando para iniciar la aplicación Verba en modo independiente, lo que le permite ejecutarse en segundo plano:

```golpecito

estibador componer arriba -d

```

```golpecito

estibador componer --archivo-env .env arriba -d

```

Este comando descargará las imágenes de Docker necesarias, creará contenedores e iniciará Verba.
Recuerde, Docker debe estar instalado en su sistema para utilizar este método. Para obtener instrucciones de instalación y más detalles sobre Docker, visite la documentación oficial de Docker.

4.**Acceso Verba**

-Puede acceder a su instancia local de Weaviate en`localhost:8080`

-Puede acceder a la interfaz de Verba en`localhost:8000`

Si desea que su instancia Docker instale una versión específica de Verba, puede editar el`Dockerfile`y cambiar la línea de instalación.

```
EJECUTAR pip install -e '.'
```

## Tutorial de Verba

### Página de descripción general

Una vez que tenga acceso a Verba, puede utilizar el`Página de descripción general`para validar si todos los entornos y bibliotecas se configuraron e instalaron correctamente. Puede utilizar la Consola de administración para ver todos los datos almacenados en las colecciones de Weaviate y restablecer ciertas partes de Verba (por ejemplo, documentos, caché, configuración, etc.)

![Demostración de Verba](https://github.com/weaviate/Verba/blob/1.0.0/img/verba_status.png)

### Importa tus datos

Con Verba configurado, está listo para importar sus datos y comenzar a explorar. Utilizar el`Agregar documentos`Página para ingerir tus datos. Puede elegir entre lectores que admitan diferentes tipos de datos, técnicas de fragmentación y modelos de incrustación.

![Demostración de Verba](https://github.com/weaviate/Verba/blob/1.0.0/img/verba_data.png)

### Consulta tus datos

Con los datos importados, puede utilizar el`Chatear`página para hacer cualquier pregunta relacionada. Recibirá fragmentos relevantes que son semánticamente relevantes para su pregunta y una respuesta generada por el modelo elegido. Puede configurar la canalización RAG en el`TRAPO`página.

![Demostración de Verba](https://github.com/weaviate/Verba/blob/1.0.0/img/verba_rag.png)

## Contribución de código abierto

¡Tus contribuciones siempre son bienvenidas! ¡Siéntete libre de contribuir con ideas, comentarios o crear problemas e informes de errores si encuentras alguno! Antes de contribuir, lea el [Guía de contribución](./CONTRIBUYENDO.md). Visita nuestro [Foro de la comunidad Weaviate](https://forum.weaviate.io/) si necesita ayuda.

### Arquitectura del proyecto

Puede obtener más información sobre la arquitectura y la implementación de Verba en su [documentación técnica](./TÉCNICO.md) y [documentación de interfaz](./FRONTEND.md). Se recomienda echarles un vistazo antes de realizar cualquier aportación.

## Problemas conocidos

-**Weaviate Embeeded** actualmente aún no funciona en Windows
-Se solucionará en versiones futuras; hasta entonces, utilice Docker o WCS Deployment

## PREGUNTAS MÁS FRECUENTES

-**¿Verba es multilingüe?**

-Esto depende de si el modelo de generación e integración elegido admite datos multilingües.

-**¿Puedo usar mi servidor Ollama con Verba Docker?**

-¡Sí tu puedes! Asegúrese de que la URL esté configurada en:`OLLAMA_URL=http://host.docker.internal:11434`

-**¿Cómo borrar el almacenamiento integrado de Weaviate?**

-Eliminar el directorio`rm ~/.local/share/weaviate`

-**¿Cómo puedo especificar el puerto?**
-Puedes usar el puerto y el indicador de host.`verba inicio --puerto 9000 -host 0.0.0.0`


