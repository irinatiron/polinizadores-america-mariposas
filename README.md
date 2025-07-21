# 🦋 Polinizadores de América: Mariposas

Este proyecto forma parte de una iniciativa educativa basada en el **cuaderno de campo digital**: una aplicación web desarrollada para **documentar y conservar insectos polinizadores** en peligro de desaparición. Nuestro grupo ha trabajado específicamente en el continente 🌎 **América**, centrándonos en las **mariposas**, destacadas polinizadoras y excelentes bioindicadores del estado de los ecosistemas.

## 🌱 Contexto

Los polinizadores están disminuyendo en todo el mundo debido a múltiples factores como el cambio climático, los pesticidas y la pérdida de hábitats. A través de esta herramienta, contribuimos al proceso de **digitalización del conocimiento natural**, tal como promueve la Unión Europea en su **Estrategia de Biodiversidad 2030**.

> Este cuaderno de campo interactivo permite **visualizar, crear, editar y eliminar** registros de mariposas americanas.

## 💻 Objetivo de la app

- Crear una interfaz CRUD que gestione el registro digital de mariposas polinizadoras.
- Fomentar la educación ambiental y el acceso libre a la información biológica.
- Contribuir a la preservación del conocimiento sobre especies nativas del continente americano.

## 🚀 Funcionalidades

- 📋 **Visualización**: Muestra un listado completo de mariposas con información detallada.
- ➕ **Creación**: Permite añadir nuevas especies al cuaderno de campo.
- ✏️ **Edición**: Actualiza los registros existentes.
- 🗑️ **Eliminación**: Elimina registros de forma permanente.


## 🗂️ Estructura del proyecto

- `db.json`: Base de datos local que simula una API REST.
- `CardFrontButterflies.jsx`: Lista y muestra todas las especies registradas.
- `CardBackButterflies.jsx`: Muestra en detalle de una mariposa.
- `FormCreate.jsx`: Componente para registrar nuevas mariposas.
- `EditForm.css`: Formulario para editar una mariposa.
- `App.jsx`: Componente principal de la aplicación.
- `CreatorCard.jsx`: Creadoras del sitio web.

## ⚙️ Tecnologías y librerías utilizadas

- **HTML, CSS, JavaScript**
- **React** 
- **JSON Server** (API fake con `db.json`)

## 📦 Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/irinatiron/polinizadores-america-mariposas.git
   cd polinizadores-america-mariposas

2. Instalar dependencias:
   ```bash
   npm install
   
3. Iniciar el servidor JSON:
   ```bash
   npm run api-fake

4. Ejecutar la aplicación React:
   ```bash
   npm run dev