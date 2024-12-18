# Prueba Fullstack Juan Camilo Rivas Velasco

## Tecnologías Utilizadas

+ Frontend
    + React
    + Axios
    + CSS
+ Backend
	* Django
	* Django REST Framework
	* SQLite (como base de datos)

## Requerimientos Previos

+ Tener instalado
    + Node.js
    + Python 3.12.3
    + Git

## Instalación
##### Clona el repositorio
`git clone https://github.com/Juancribas24/FrontendPrueba.git`

`cd PruebaFullstack`

## Configura el Backend
`cd backend`

##### Crea el entorno virtual
`python -m venv venv`

##### Instala Django
`pip install django djangorestframework django-cors-headers`

##### Ejecuta las migraciones
`python manage.py migrate`

##### Inicia el servidor
`python manage.py runserver`

## Configura el Frontend
##### Ve a la carpeta frontend
`cd frontend`

##### Instala dependencias
`npm install`

##### Inicia el servidor
`npm run dev`


# Capturas
Frontend

[![UIPrueba.png](https://i.postimg.cc/9F4PrV0X/UIPrueba.png)](https://postimg.cc/fJNSrGY1)

Backend

[![Django-Rest-Prueba.png](https://i.postimg.cc/J49NXgHN/Django-Rest-Prueba.png)](https://postimg.cc/TpJ5Mt91)  

## Despliegue con Docker y Render
Este proyecto utiliza Docker para contenerizar tanto el frontend como el backend. Ambos servicios fueron desplegados en Render, una plataforma que simplifica la administración y ejecución de contenedores en la nube.

## Archivos clave:
Frontend Dockerfile: Define el entorno del frontend.
Backend Dockerfile: Define el entorno del backend.

## Enlaces de despliegue
- Frontend: [https://frontendprueba-mutj.onrender.com](https://frontendprueba-mutj.onrender.com)
- Backend: [https://backendprueba-2n76.onrender.com](https://backendprueba-2n76.onrender.com)/api/items


Contacto Creador: [Juancribas]

📧 Correo: [juancamilo927@gmail.com]
¡Gracias por explorar este proyecto! 🚀
