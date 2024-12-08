# Blog API

Este proyecto es una API RESTful para manejar un sistema de blog. La API permite gestionar publicaciones, comentarios y usuarios, y está protegida con autenticación y roles.

---

## **Tabla de Contenidos**

- [Características](#características)
- [Requisitos](#requisitos)
- [Endpoints](#endpoints)
  - [Publicaciones](#publicaciones)
  - [Comentarios](#comentarios)
  - [Usuarios](#usuarios)
- [Middleware](#middleware)
- [Contribución](#contribución)

---

## **Características**

- CRUD para publicaciones, comentarios y usuarios.
- Sistema de autenticación con JWT.
- Gestión de roles para usuarios (autor y administrador).
- Rutas protegidas con middlewares de autenticación y autorización.
- Relación entre usuarios, publicaciones y comentarios.

---

## **Requisitos**

- Node.js (v14 o superior).
- npm o yarn.
- MongoDB como base de datos.

---

## **Endpoints**

### **Publicaciones**

- `POST /posts/create`: Crear una nueva publicación (requiere autenticación).
- `GET /posts`: Obtener todas las publicaciones, incluyendo los usuarios y comentarios asociados.
- `GET /posts/id/:_id`: Obtener una publicación por ID.
- `GET /posts/getByName/:name`: Buscar publicaciones por nombre.
- `DELETE /posts/id/:_id`: Eliminar una publicación por ID (requiere autenticación y ser autor).
- `PUT /posts/id/:_id`: Actualizar una publicación por ID (requiere autenticación y ser autor).
- `PUT /posts/like/:_id`: Dar "like" a una publicación (requiere autenticación).
- `PUT /posts/deleteLike/:_id`: Quitar un "like" de una publicación (requiere autenticación).

---

### **Comentarios**

- `POST /comments/create/:_id`: Crear un nuevo comentario en una publicación específica (requiere autenticación).
- `GET /comments`: Obtener todos los comentarios.
- `DELETE /comments/id/:_id`: Eliminar un comentario por ID.
- `PUT /comments/id/:_id`: Actualizar un comentario por ID.

---

### **Usuarios**

- `POST /users/create`: Registrar un nuevo usuario.
- `POST /users/login`: Iniciar sesión.
- `DELETE /users/logout`: Cerrar sesión (requiere autenticación).
- `GET /users`: Obtener todos los usuarios.
- `GET /users/getCurrentLoggedUser`: Obtener información del usuario autenticado.

---

## **Middleware**

Este proyecto incluye los siguientes middlewares personalizados:

- **authentication**: Verifica que el usuario esté autenticado. Se asegura de que las solicitudes incluyan un token JWT válido.
- **isAuthor**: Comprueba que el usuario autenticado sea el autor de la publicación o comentario, lo cual es requerido para modificar o eliminar.

Ambos middlewares se encuentran en el archivo `middleware/authentication.js`.

---

## **Contribución**

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama para tu contribución (`git checkout -b mi-nueva-funcionalidad`).
3. Realiza tus cambios y haz **commit** (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu repositorio (`git push origin mi-nueva-funcionalidad`).
5. Abre un **pull request** describiendo los cambios que has realizado.

Asegúrate de seguir las mejores prácticas de codificación y de incluir pruebas para nuevas funcionalidades.
