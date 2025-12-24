# react-basic-routing
Basic React application demonstrating client-side routing using React Router 
Basic React Routing

A React application demonstrating client-side routing using React Router with three main pages: Home, About Us, and Todos.

## Project Structure
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Todos.jsx
│   │   └── NotFound.jsx
└── package.json
## Routes

- `/home` - Home Page
- `/aboutus` - About Us Page
- `/todos` - Todos Page (fetches data from API)
- `*` - 404 Not Found Page

## Features

✅ React Router DOM for navigation  
✅ Navbar with navigation links  
✅ Todos fetched from JSONPlaceholder API  
✅ Grid-based card layout for todos  
✅ 404 Error page for invalid routes  
✅ Clean and responsive design

## How to Run

```bash
npm install
npm start
Technologies Used
React 18
React Router DOM 6
JSONPlaceholder API
