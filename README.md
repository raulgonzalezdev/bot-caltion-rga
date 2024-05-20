
#  Caltion-Bot-Rga

## Caltion Bot Rga


Bienvenido a Caltion Bot Rga, un proyecto basado en Caltion Bot Rga: The Golden RAGtriever, una aplicación de código abierto de la comunidad diseñada para ofrecer una interfaz de extremo a extremo, optimizada y fácil de usar para la generación aumentada de recuperación (RAG). En este proyecto, hemos adaptado y personalizado la funcionalidad de Caltion Bot Rga para satisfacer nuestras necesidades específicas. Agradecemos a la comunidad de Weaviate por proporcionar la base sobre la cual construimos nuestro proyecto.

Caltion Bot Rga permite explorar conjuntos de datos y extraer información de manera eficiente, ya sea localmente utilizando herramientas como HuggingFace y Ollama, o mediante proveedores de LLM como OpenAI, Cohere y Google. Estamos comprometidos con el desarrollo y la mejora continua de esta aplicación para brindar una experiencia aún más completa y útil a nuestros usuarios.

```
pip install goldenCaltion Bot Rga
```

![Demostración de Caltion Bot Rga](https://github.com/weaviate/Caltion Bot Rga/blob/1.0.0/img/Caltion Bot Rga.gif)

-[Caltion Bot Rga](#Caltion Bot Rga)
-[🎯 ¿Qué es Caltion Bot Rga?](#que-es-Caltion Bot Rga)
-[✨ Características](#listas-de-características)
-[✨ Primeros pasos con Caltion Bot Rga](#empezando-con-Caltion Bot Rga)
-[🔑 Claves API](#claves-api)
-[Weaviate](#weaviate)
-[Ollama](#ollama)
-[Google](#Google)
-[No estructurado](#no estructurado)
-[Abierto AI](#openai)
-[AbrazosCara](#caradeabrazo)
-[Inicio rápido: Implementación con pip](#cómo-implementar-con-pip)
-[Inicio rápido: compilar desde el código fuente](#cómo-construir-desde-fuente)
-[Inicio rápido: Implementación con Docker](#cómo-instalar-Caltion Bot Rga-con-docker)
-[💾 Tutorial de Caltion Bot Rga](#️Caltion Bot Rga-tutorial)
-[💖 Contribución de código abierto](#contribución-de-código-abierto)
-[🚩 Problemas conocidos](#Problemas conocidos)
-[❔Preguntas frecuentes](#Preguntas más frecuentes)

## ¿Qué es Caltion Bot Rga?

Caltion Bot Rga es un asistente personal totalmente personalizable para consultar e interactuar con sus datos, **ya sea localmente o implementado a través de la nube**. Resuelva preguntas sobre sus documentos, haga referencias cruzadas de múltiples puntos de datos u obtenga información de bases de conocimientos existentes. Caltion Bot Rga combina técnicas RAG de última generación con la base de datos contextual de Weaviate. Elija entre diferentes marcos RAG, tipos de datos, técnicas de fragmentación y recuperación y proveedores de LLM según su caso de uso individual.

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
| Ingestión de PDF | ✅ | Importar PDF a Caltion Bot Rga |
| Ingestión de CSV/XLSX | ✅ | Importar datos de tablas a Caltion Bot Rga |
| Multimodal | planeado ⏱️ | Importar datos multimodales a Caltion Bot Rga |
| IO no estructurado | ✅ | Importar datos a través de no estructurados |

| ✨Características del RAG | Implementado | Descripción |
| ----------------------- | ----------- | -------------------------------------------------- ----------------------- |
| Búsqueda híbrida | ✅ | Búsqueda semántica combinada con búsqueda por palabras clave |
| Almacenamiento en caché semántico | ✅ | Resultados guardados y recuperados según el significado semántico |
| Sugerencia de autocompletar | ✅ | Caltion Bot Rga sugiere el autocompletado |
| Filtrado | planeado ⏱️ | Aplique filtros (por ejemplo, documentos, tipos de documentos, etc.) antes de realizar RAG |
| Consulta avanzada | planeado ⏱️ | Delegación de tareas basada en la evaluación LLM |
| Reclasificación | planeado ⏱️ | Cambie la clasificación de los resultados según el contexto para obtener mejores resultados |
| Evaluación del GAR | planeado ⏱️ | Interfaz para evaluar tuberías RAG |
| Metadatos personalizables | planeado ⏱️ | Control gratuito sobre Metadatos |

| 🆒 Bono genial | Implementado | Descripción |
| --------------------- | ----------- | -------------------------------------------------- ----- |
| Soporte de Docker | ✅ | Caltion Bot Rga se puede implementar a través de Docker |
| Interfaz personalizable | ✅ | La interfaz de Caltion Bot Rga es totalmente personalizable a través de la interfaz |

| 🤝 Bibliotecas RAG | Implementado | Descripción |
| ---------------- | ----------- | ---------------------------------- |
| Pajar | planeado ⏱️ | Implementar tuberías Haystack RAG |
| LlamaIndice | planeado ⏱️ | Implementar oleoductos LlamaIndex RAG |
| Cadena Lang | planeado ⏱️ | Implementar oleoductos LangChain RAG |


---

# Primeros pasos con Caltion Bot Rga

Tiene tres opciones de implementación para Caltion Bot Rga:

-Instalar a través de pip

```
pip install goldenverba

```

-Construir desde la fuente

```
 git clone https://gitlab.com/raul.gonzalez.dev/Caltion-Rga-Bot

 pip install -e .
```

-Utilice Docker para la implementación

**Requisitos previos**: si no estás utilizando Docker, asegúrate de tener`Python >=3.10.0`instalado en su sistema.

Si no está familiarizado con Python y los entornos virtuales, lea el [pautas del tutorial de Python](./PYTHON_TUTORIAL.md).

# Claves API

Antes de iniciar Caltion Bot Rga, deberá configurar el acceso a varios componentes según las tecnologías elegidas, como OpenAI, Cohere y HuggingFace a través de un`.env`archivo. Crea esto`.env`en el mismo directorio en el que desea iniciar Caltion Bot Rga. Puede encontrar un`.env.ejemplo`archivo en el [goldenCaltion Bot Rga](./goldenCaltion Bot Rga/.env.example) directorio.

> Asegúrese de configurar solo las variables de entorno que desea utilizar; las variables de entorno con valores faltantes o incorrectos pueden provocar errores.

A continuación se muestra una lista completa de las claves y variables API que puede necesitar:

| Variable de entorno | Valor | Descripción |
| ------------------------------ | -------------------------------------------------- -------- | -------------------------------------------------- ------------------------------- |
| WEAVIATE_URL_VERBA             | URL to your hosted Weaviate Cluster                        | Connect to your [WCS](https://console.weaviate.cloud/) Cluster                    |
| WEAVIATE_API_KEY_VERBA         | API Credentials to your hosted Weaviate Cluster            | Connect to your [WCS](https://console.weaviate.cloud/) Cluster                    |
| OPENAI_API_KEY                 | Your API Key                                               | Get Access to [OpenAI](https://openai.com/) Models                                |
| COHERE_API_KEY                 | Your API Key                                               | Get Access to [Cohere](https://cohere.com/) Models                                |
| OLLAMA_URL                     | URL to your Ollama instance (e.g. http://localhost:11434 ) | Get Access to [Ollama](https://ollama.com/) Models                                |
| OLLAMA_MODEL                   | Model Name (e.g. llama)                                    | Get Access to a specific [Ollama](https://ollama.com/) Model                      |
| UNSTRUCTURED_API_KEY           | Your API Key                                               | Get Access to [Unstructured](https://docs.unstructured.io/welcome) Data Ingestion |
| UNSTRUCTURED_API_URL           | URL to Unstructured Instance                               | Get Access to [Unstructured](https://docs.unstructured.io/welcome) Data Ingestion |
| GITHUB_TOKEN                   | Your GitHub Token                                          | Get Access to Data Ingestion via GitHub                                           |
| GOOGLE_APPLICATION_CREDENTIALS | Google Credentials                                         | Get Access to Google Models                                                       |
| GOOGLE_CLOUD_PROJECT           | Google Cloud Project                                       | Get Access to Google Models                                                       |
| GOOGLE_API_KEY                 | Your API Key                                               | Get Access to Google Models                                                       |
| VERBA_PRODUCTION               | True                                                       | Run Verba in Production Mode                                                      |

## Weaviate

Caltion Bot Rga brinda flexibilidad para conectarse a instancias de Weaviate según sus necesidades. De forma predeterminada, Caltion Bot Rga opta por [Weaviate integrado](https://weaviate.io/developers/weaviate/installation/embedded) si no detecta el`WEAVIATE_URL_VERBA`y`WEAVIATE_API_KEY_VERBA`Variables de entorno. Esta implementación local es la forma más sencilla de iniciar su base de datos Weaviate para realizar prototipos y pruebas.

Sin embargo, también tienes otras opciones:

**🌩️ Servicio en la nube de Weaviate (WCS)**

Si prefiere una solución basada en la nube, Weaviate Cloud Service (WCS) ofrece un entorno administrado y escalable. Aprenda cómo configurar un clúster en la nube y obtener las claves API siguiendo las instrucciones [Guía de configuración del clúster Weaviate](https://weaviate.io/developers/wcs/guides/create-instance).

**🐳 Implementación de Docker**
Otra alternativa local sólida es implementar Weaviate usando Docker. Para más detalles, consulte el [Guía de Docker de Weaviate](https://weaviate.io/developers/weaviate/installation/docker-compose).

##Ollama

Caltion Bot Rga admite los modelos Ollama. Descargue e instale Ollama en su dispositivo (https://ollama.com/download). Asegúrese de instalar su LLM preferido usando`ollama run <model>`.

Probado con`llama3`,`llama3:70b`y`mistral`. Los modelos más grandes generalmente funcionan mejor, pero necesitan más potencia computacional.

> Asegúrese de que Ollama Server se ejecute en segundo plano y de que no ingiera documentos con diferentes modelos de ollama, ya que su dimensión vectorial puede variar, lo que provocará errores.

## Google

Si desea utilizar las funciones de Google, asegúrese de instalar el paquete Google Caltion Bot Rga.

```bash
pip install goldenverba[google]

or

pip install `.[google]`
```

> Si está utilizando Docker, modifique el Dockerfile en consecuencia

### Incorporaciones de Google

Para Google Embeddings, Caltion Bot Rga utiliza Vertex AI Studio dentro de Google Cloud. Puede encontrar instrucciones para obtener una clave [aquí](https://cloud.google.com/iam/docs/create-short-lived-credentials-direct). Si tienes el`gnube`CLI instalada, puede ejecutar el siguiente comando:`token de acceso de impresión de autenticación de gcloud`. **Por el momento, este token de acceso debe renovarse cada hora.**

También es necesario configurar el`GOOGLE_CLOUD_PROJECT`variable de entorno al nombre de su proyecto.

### Google Géminis

Para utilizar Google Gemini, necesita una clave de cuenta de servicio, que es un archivo JSON. Para obtener esto, vaya a "configuración del proyecto" en su consola de Google Cloud, luego a "cuentas de servicio". Cree una nueva cuenta de servicio y luego cree una nueva clave. Descarga esta clave y colócala en la ruta de Caltion Bot Rga. Nombralo`gemini_secrets.json`para excluirlo de git automáticamente. Establecer la variable de entorno`GOOGLE_APPLICATION_CREDENTIALS`a la ubicación de este archivo, por ejemplo`gemini_secrets.json`.

También es necesario configurar el`GOOGLE_CLOUD_PROJECT`variable de entorno al nombre de su proyecto.

## No estructurado

Caltion Bot Rga admite la importación de documentos a través de IO no estructurada (por ejemplo, texto sin formato, .pdf, .csv y más). Para usarlos necesitas el`UNSTRUCTURED_API_KEY`y`UNSTRUCTURED_API_URL`Variable ambiental. Puedes obtenerlo de [No estructurado](https://unstructured.io/)

> UNSTRUCTURED_API_URL está configurado en`https://api.unstructured.io/general/v0/general`por defecto

## IA abierta

Caltion Bot Rga admite modelos OpenAI como Ada, GPT3 y GPT4. Para usarlos, es necesario especificar el`OPENAI_API_KEY`Variable ambiental. Puedes obtenerlo de [Abierto AI](https://openai.com/)

También puedes agregar un`OPENAI_BASE_URL`utilizar proxies como LiteLLM (https://github.com/BerriAI/litellm)

```
OPENAI_BASE_URL=TU-OPENAI_BASE_URL
```

### Azure OpenAI

Para usar Azure OpenAI, debe configurar

-El tipo de API:

```
OPENAI_API_TYPE="azure"
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
AZURE_OPENAI_EMBEDDING_MODEL="text-embedding-ada-002"
OPENAI_MODEL="gpt-4"
```

-Por último, como Azure utiliza una cuota por minuto, es posible que deba agregar un tiempo de espera entre cada carga de fragmentos. Por ejemplo, si tiene un límite de 240 000 tokens por minuto, si sus fragmentos son
400 tokens como máximo, luego 100 ms entre consultas deberían estar bien. Si recibe el error 429 de weaviate, aumente este valor.

```
WAIT_TIME_BETWEEN_INGESTION_QUERIES_MS="100"
```

## AbrazandoCara

Si desea utilizar las funciones de HuggingFace, asegúrese de instalar el paquete Caltion Bot Rga correcto.

```bash
pip install goldenverba[huggingface]

or

pip install `.[huggingface]`
```

> Si está utilizando Docker, modifique el Dockerfile en consecuencia

# Cómo implementar con pip

`Python >=3.10.0`

1.**Inicializar un nuevo entorno Python**

```
python3 -m virtualenv venv
```

2.**Instalar Caltion Bot Rga**

```
pip install goldenverba
```

3.**Iniciar Caltion Bot Rga**

```
verba start
```

> Puedes especificar --port y --host mediante banderas

4.**Acceso Caltion Bot Rga**

```
Visita localhost:8000
```

5.**Cree un archivo .env y agregue variables de entorno**

# Cómo construir desde la fuente

1.**Clonar los repositorios de Caltion Bot Rga**

```
git clone https://gitlab.com/raul.gonzalez.dev/Caltion-Rga-Bot
```

2.**Inicializar un nuevo entorno Python**

```
python3 -m virtualenv venv
```

3.**Instalar Caltion Bot Rga**

```
 pip install -e.
```

4.**Iniciar Caltion Bot Rga**

```
 Caltion Bot Rga start 
```

> Puedes especificar --port y --host mediante banderas

5.**Acceso Caltion Bot Rga**

```
Visita localhost:8000
```

6.**Cree un archivo .env y agregue variables de entorno**

# Cómo instalar Caltion Bot Rga con Docker

Docker es un conjunto de productos de plataforma como servicio que utilizan virtualización a nivel de sistema operativo para entregar software en paquetes llamados contenedores. Para comenzar a implementar Caltion Bot Rga usando Docker, siga los pasos a continuación. Si necesita instrucciones más detalladas sobre el uso de Docker, consulte [Plan de estudios de Docker](https://docker-curriculum.com/).

0.**Clonar los repositorios de Caltion Bot Rga**
Asegúrese de tener Git instalado en su sistema. Luego, abra una terminal o símbolo del sistema y ejecute el siguiente comando para clonar el repositorio de Caltion Bot Rga:

```
 git clone  https://gitlab.com/raul.gonzalez.dev/Caltion-Rga-Bot
```

1.**Establezca las variables de entorno necesarias**
Asegúrese de configurar las variables de entorno requeridas en el`.env`archivo. Puede leer más sobre cómo configurarlos en [Sección de claves API](#claves-api)

2.**Ajuste el archivo Docker-Compose**
Puedes usar el`docker-compose.yml`para agregar las variables de entorno requeridas bajo el`Caltion Bot Rga`servicio y también puede ajustar la configuración de Weaviate Docker para habilitar la autenticación o cambiar otras configuraciones de su instancia de base de datos. Puede leer más sobre la configuración de Weaviate en nuestro [documentación de composición acoplable](https://weaviate.io/developers/weaviate/installation/docker-compose)

> Asegúrese de agregar solo las variables de entorno que realmente necesita. Si no tiene habilitada la autenticación en su Weaviate Cluster, asegúrese de no incluir la`WEAVIATE_API_KEY_Caltion Bot Rga`variable ambiental

2.**Implementar usando Docker**
Con Docker instalado y el repositorio de Caltion Bot Rga clonado, navegue hasta el directorio que contiene el archivo Docker Compose en su terminal o símbolo del sistema. Ejecute el siguiente comando para iniciar la aplicación Caltion Bot Rga en modo independiente, lo que le permite ejecutarse en segundo plano:

```

docker compose up -d


```

```
docker compose --env-file .env up -d


```

Este comando descargará las imágenes de Docker necesarias, creará contenedores e iniciará Caltion Bot Rga.
Recuerde, Docker debe estar instalado en su sistema para utilizar este método. Para obtener instrucciones de instalación y más detalles sobre Docker, visite la documentación oficial de Docker.

4.**Acceso Caltion Bot Rga**

-Puede acceder a su instancia local de Weaviate en`localhost:8080`

-Puede acceder a la interfaz de Caltion Bot Rga en`localhost:8000`

Si desea que su instancia Docker instale una versión específica de Caltion Bot Rga, puede editar el`Dockerfile`y cambiar la línea de instalación.

```
RUN pip install -e '.'

```

## Tutorial de Caltion Bot Rga

### Página de descripción general

Una vez que tenga acceso a Caltion Bot Rga, puede utilizar el`Página de descripción general`para validar si todos los entornos y bibliotecas se configuraron e instalaron correctamente. Puede utilizar la Consola de administración para ver todos los datos almacenados en las colecciones de Weaviate y restablecer ciertas partes de Caltion Bot Rga (por ejemplo, documentos, caché, configuración, etc.)



### Importa tus datos

Con Caltion Bot Rga configurado, está listo para importar sus datos y comenzar a explorar. Utilizar el`Agregar documentos`Página para ingerir tus datos. Puede elegir entre lectores que admitan diferentes tipos de datos, técnicas de fragmentación y modelos de incrustación.



### Consulta tus datos

Con los datos importados, puede utilizar el`Chatear`página para hacer cualquier pregunta relacionada. Recibirá fragmentos relevantes que son semánticamente relevantes para su pregunta y una respuesta generada por el modelo elegido. Puede configurar la canalización RAG en el`TRAPO`página.



## Contribución de código abierto

¡Tus contribuciones siempre son bienvenidas! ¡Siéntete libre de contribuir con ideas, comentarios o crear problemas e informes de errores si encuentras alguno! Antes de contribuir, lea el [Guía de contribución](./CONTRIBUYENDO.md). Visita nuestro [Foro de la comunidad Weaviate](https://forum.weaviate.io/) si necesita ayuda.

### Arquitectura del proyecto

Puede obtener más información sobre la arquitectura y la implementación de Caltion Bot Rga en su [documentación técnica](./TÉCNICO.md) y [documentación de interfaz](./FRONTEND.md). Se recomienda echarles un vistazo antes de realizar cualquier aportación.

## Problemas conocidos

-**Weaviate Embeeded** actualmente aún no funciona en Windows
-Se solucionará en versiones futuras; hasta entonces, utilice Docker o WCS Deployment

## PREGUNTAS MÁS FRECUENTES

-**¿Caltion Bot Rga es multilingüe?**

-Esto depende de si el modelo de generación e integración elegido admite datos multilingües.

-**¿Puedo usar mi servidor Ollama con Caltion Bot Rga Docker?**

-¡Sí tu puedes! Asegúrese de que la URL esté configurada en:

    `OLLAMA_URL=http://host.docker.internal:11434`

-**¿Cómo borrar el almacenamiento integrado de Weaviate?**

-Eliminar el directorio
  `rm ~/.local/share/weaviate`

-**¿Cómo puedo especificar el puerto?**
-Puedes usar el puerto y el indicador de host.

 `Caltion Bot Rga start --port 9000 -host 0.0.0.0`


