# Fullstack Notion Clone
![Copy of Copy of Copy of Fullstack Twitter Clone (6)](https://github.com/AntonioErdeljac/notion-clone-tutorial/assets/23248726/66bcfca3-93bf-4aa4-950d-f98c020e1156)

Projeto desenvolvido no curso do site "Code With Antonio" https://www.codewithantonio.com, utilizando Next JS 14.

Tutorial de 8 horas para criar um clone fullstack de ponta a ponta do Notion, tudo com editor de estilo adequado, imagens de capa, documentos aninhados, publicação de documentos em banco de dados público em tempo real e muito mais.

https://notas-lovat.vercel.app/

## Tecnologia

- Next JS 14
- React JS 18
- Convex / Real-time Database
- Tailwind

## Cronograma

- [x] Intro & Demo
- [x] Environment setup
- [x] Folders setup
- [x] Landing page
- [x] Authentication & Database
- [x] Sidebar
- [x] User Settings
- [x] Schema & API
- [x] Sidebar Item
- [x] Document list
- [x] Archive functionality
- [x] Trash box
- [x] Search functionality
- [x] Settings
- [x] Navbar
- [x] Banner component
- [x] Toolbar component (Icon,Title)
- [x] Cover image (File upload)
- [x] Advanced file upload (delete, replace)
- [x] Editor component
- [x] Preview functionality (Publish your work)
- [x] Deployment & Outro

## Key Features:

- Real-time database
- Notion-style editor 📝
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑️
- Authentication 🔐
- File upload
- File deletion
- File replacement
Icons for each document (changes in real-time) 🌠
Expandable sidebar ➡️🔀⬅️
Full mobile responsiveness 📱
Publish your note to the web 🌐
Fully collapsable sidebar ↕️
Landing page 🛬
Cover image of each document 🖼️
Recover deleted files 🔄📄

### Install packages

```shell
npm i
```

### Setup .env file


```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```