# Video Management App

Una aplicación web que permite gestionar y mostrar videos por categorías. Los usuarios pueden agregar, editar y ver videos organizados en diferentes categorías como Frontend, Backend, Innovación y Gestión.

## Funcionalidades

- **Ver videos**: Muestra los videos divididos en categorías.
- **Agregar nuevos videos**: Permite al usuario agregar nuevos videos a través de un formulario.
- **Editar videos**: Los videos pueden ser editados mediante un modal, actualizando la información de cada video.
- **Categorías**: Los videos están organizados en categorías como "Frontend", "Backend", "Innovación y Gestión".

## Tecnologías

- **React**: Librería para la construcción de la interfaz de usuario.
- **JSON Server**: Servidor API simulado para almacenar y gestionar datos en formato JSON.
- **Styled Components**: Para el estilo de los componentes en la aplicación.
- **Fetch API**: Para realizar solicitudes HTTP (GET, POST, PUT).

## Requisitos

- Tener **Node.js** y **npm** instalados.
- Tener **json-server** instalado de manera global para simular la API.

## Instalación

1. **Clona el repositorio**:

    ```bash
    git clone <url-del-repositorio>
    ```

2. **Instala las dependencias del proyecto**:

    En la raíz del proyecto, ejecuta:

    ```bash
    npm install
    ```

3. **Instala json-server globalmente**:

    ```bash
    npm install -g json-server
    ```

4. **Inicia el servidor JSON**:

    Crea un archivo `db.json` en la raíz del proyecto con una estructura similar a esta:

    ```json
    {
      "videos": [
           "titulo": "Equipo Front End",
          "categoria": "Frontend",
          "imagen": "https://i.ytimg.com/vi/rpvrLaBQwgg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkb-PJrLWrffCvsevbaS6oMxcyhQ",
          "video": "https://youtu.be/rpvrLaBQwgg?si=qtaG9_BfFRQWIoG5",
          "descripcion": "Descripción del video",
          "id": "1"
        {
          "id": "2",
          "titulo": "Front-end vs. Back-end: ¡Descubre el lado perfecto para ti!",
          "categoria": "Backend",
          "imagen": "https://i.ytimg.com/vi/QjOWz9avkg8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLASVGtnx4FYMKU6rqLwKOdCS6xQoQ",
          "video": "https://youtu.be/QjOWz9avkg8?si=d4q0GCDyRIJtZQv9",
          "descripcion": "Descripción del video"
        }
      ]
    }
    ```

    Luego, ejecuta el servidor con:

    ```bash
    json-server --watch db.json
    ```

5. **Inicia la aplicación React**:

    En la raíz del proyecto, ejecuta:

    ```bash
    npm start
    ```

    Esto abrirá la aplicación en `http://localhost:3000`.
