import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.tsx';
import About from './pages/About/index.tsx';
import Contact from './pages/Contact/index.tsx'

const router = createBrowserRouter([
  {
    path:"/home",
    element: <Home />,
  },
  {
    path:"/about",
    element: <About />,
  },
  {
    path:"/contact",
    element: <Contact />,
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
