# Prueba Técnica Frontend - Sebastián Olivar

Este repositorio contiene el código fuente del frontend de la prueba técnica para el puesto de Desarrollador Fullstack.

## Descripción

El frontend es una aplicación web desarrollada con React que permite a los usuarios agregar, listar, editar y eliminar elementos. La aplicación se conecta a un backend Node.js con Express para realizar las operaciones CRUD.  Se ha puesto especial énfasis en la organización del código, la eficiencia y la escalabilidad, siguiendo una arquitectura cliente-servidor con un backend que utiliza un patrón en capas.

## Tecnologías utilizadas

* React
* Node.js
* Express
* Docker
* Bootstrap

## Instalación

1. Clona el repositorio:

```bash
git clone <https://github.com/SebastianOlivarCorredor/frontend-prueba-tecnica.git>
```

2. Instala las dependencias:

```bash
cd my-app
npm install
```

## Ejecución

### Modo desarrollo

1. Inicia la aplicación en modo de desarrollo:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador web en `http://localhost:3000`.

### Con Docker

Para ejecutar la aplicación con Docker, sigue estos pasos:

1. Asegúrate de tener Docker Desktop instalado.
2. En la raíz del proyecto (que contiene tanto el frontend como el backend), ejecuta:

```bash
docker-compose up -d
```

Esto construirá e iniciará los contenedores del frontend y el backend.


## Configuración

La aplicación se conecta al backend en `http://localhost:3001`. Si necesitas cambiar la URL del backend, puedes modificar el archivo `src/Formulario.js`.

## Estructura del proyecto

```
prueba-tecnica-juan/
├── my-app/  (frontend)
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── formulario.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
│       ├── .gitignore
│       ├── package-lock.json
│       └── package.json
└── backend/  (backend)
    └── index.js  
```

## Notas

* Este proyecto utiliza React Bootstrap para los estilos.
* El backend se encuentra en otro repositorio: `<https://github.com/SebastianOlivarCorredor/backend-prueba-tecnica.git>`
```
