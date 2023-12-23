import React from 'react'
import ReactDOM from 'react-dom/client'
import './normalize.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.tsx';
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
