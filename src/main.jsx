import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routerButterfly from './router/Router'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerButterfly} />
  </StrictMode>,
)