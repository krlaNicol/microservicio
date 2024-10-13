Proyecto Full Stack con Node.js, Express, PostgreSQL y Angular

Este proyecto consiste en la creación de un microservicio utilizando Node.js con Express, que se conecta a una base de datos PostgreSQL. El frontend está desarrollado en Angular y consume los datos del microservicio para mostrarlos en un formulario sencillo.
*...Se implemento el método GER y también el POST para mejorar la dinámica del ejercicio. ...*

*...Pasos para ejecutar el backend (Node.js + Express) localmente...*

Paso 1: Clonar el repositorio, utilice los siguientes comandos 

git clone <URL_DEL_REPOSITORIO>
cd nombre-del-repositorio

Paso 2: Instalar las dependencias necesarias, en este caso como se utilizo Node se ejecuta el siguiente comando: 

npm install

Paso 3 y 4

Se debe configurar la base de datos PostgreSQL: Asegúrate de que tu base de datos PostgreSQL esté en funcionamiento y crea una nueva base de datos para el proyecto.

Configurar las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega la configuración para la conexión a la base de datos:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_la_base_de_datos
DB_PORT=5432

Paso 5: Iniciar servidor 

npm start

El backen se dispuso en la dirección http://localhost:3000/api/data

*..Comandos para crear la tabla usuarios en PostgreSQL..*

Para la creación de la tabla se ejecuto el siguiente comando dentro del panel SQL

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    edad INT
);

*...Pasos para ejecutar el frontend (Angular) localmente...*

Paso 1:Navegar al directorio del frontend

cd nombre-del-directorio-frontend

Paso 2: Instalar las dependencias, para ello se uso este código:

npm install

Paso 3: iniciar la aplicación de Angular con el código:

ng serve

El frontend estará disponible en http://localhost:4200/

*...Pruebas del microservicio...*

Pruebas utilizando Postman

Paso 1: Probar el método GET

Utilizar la URL: http://localhost:3000/api/data
Elegir Método: GET
Se debería recibir un JSON con los datos de la tabla usuarios

Paso 2: Probar el método POST:

Utilizar la URL: http://localhost:3000/api/data
Elegir Método: POST
En el (body) cuerpo de la solicitud (en formato JSON)

ejemplo: 

{
  "nombre": "Juan Pérez",
  "correo": "juan.perez@example.com",
  "edad": 30
}

Si la solicitud es exitosa, el nuevo usuario se agregará a la base de datos.

*....Pruebas desde el frontend....*

Paso 1: Abre la aplicación Angular en http://localhost:4200/.

Paso 2: Se debería de ver un formulario que muestra los usuarios existentes.

Paso 3: Completa el formulario y envíalo para agregar un nuevo usuario (esto activará el método POST del backend).

Paso 4: Los datos deberían actualizarse automáticamente y mostrar el nuevo usuario en la lista.


























