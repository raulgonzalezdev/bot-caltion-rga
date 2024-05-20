
# Verba - Documentación del front-end

El frontend de Verba es una aplicación [NextJS](https://nextjs.org/) que se utiliza junto con [TailwindCSS](https://tailwindcss.com/) y [DaisyUI](https://daisyui.com/).

## 🚀 Configurando la interfaz

Para tener su copia local de la interfaz de Verba en funcionamiento, siga estos sencillos pasos:

1. Repositorio de clones

```git

clon de git https://github.com/weaviate/Verba.git

```

1. **Requisito de Node.js**:

- Confirme que la versión de Node.js `>=21.3.0` esté instalada en su sistema. Si necesita instalar o actualizar Node.js, visite el [sitio web de Node.js] oficial (https://nodejs.org/).

2. **Instalación**:

- Navegue hasta el directorio de la interfaz: `cd frontend`
- Ejecute `npm install` para instalar las dependencias necesarias para el proyecto.

3. **Servidor de desarrollo**:
- Inicie la aplicación en modo de desarrollo ejecutando `npm run dev`.
- Abra su navegador web y visite `http://localhost:3000` para ver la aplicación.

## 📦 Creación de páginas estáticas para FastAPI

Si desea servir y actualizar la interfaz a través de FastAPI, necesita crear páginas estáticas:

1. **Proceso de construcción**:
- Ejecute `npm run build` para generar la compilación de producción estática. La salida se dirigirá a la carpeta FastAPI configurada para servir el contenido estático.
