# Instalar Python y configurar un entorno virtual

Antes de poder usar Verba, deberá asegurarse de que `Python >=3.10.0` esté instalado en su sistema y de que pueda crear un entorno virtual para una configuración del proyecto más segura y limpia.

## Instalando Python

Se requiere Python para ejecutar Verba. Si no tienes Python instalado, sigue estos pasos:

### Para ventanas:

Descargue el último instalador de Python desde el sitio web oficial de Python.
Ejecute el instalador y asegúrese de marcar la casilla que dice "Agregar Python a la RUTA" durante la instalación.

### Para MacOS:

Puedes instalar Python usando Homebrew, un administrador de paquetes para macOS, con el siguiente comando en la terminal:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Luego instale Python:

```
instalar python
```

### Para Linux:

Python suele venir preinstalado en la mayoría de las distribuciones de Linux. Si no es así, puede instalarlo usando el administrador de paquetes de su distribución. Puede leer más al respecto [aquí](https://opensource.com/article/20/4/install-python-linux)

## Configurar un entorno virtual

Se recomienda utilizar un entorno virtual para evitar conflictos con otros proyectos o paquetes de Python en todo el sistema.

### Instale el paquete virtualenv:

Primero, asegúrese de tener pip instalado (viene con Python si usa la versión 3.4 y superior).
Instale virtualenv ejecutando:

```
instalación de pip virtualenv
```

### Crear un entorno virtual:

Navegue al directorio de su proyecto en la terminal.
Ejecute el siguiente comando para crear un entorno virtual llamado venv (puede nombrarlo como desee):

```
python3 -m virtualenv venv
```

### Activar el entorno virtual:

- En Windows, active el entorno virtual ejecutando:

```
venv\Scripts\activate.bat
```

- En macOS y Linux, actívalo con:

```
fuente venv/bin/activar
```

Una vez que su entorno virtual esté activado, verá su nombre en el mensaje de la terminal. Ahora está listo para instalar Verba siguiendo los pasos proporcionados en las secciones de Inicio rápido.

> Recuerde desactivar el entorno virtual cuando haya terminado de trabajar con Verba simplemente ejecutando desactivar en la terminal.
