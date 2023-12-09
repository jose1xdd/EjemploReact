import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Componente from './components/Ejemplo'
import Data from './components/Data'
const router = createHashRouter([
    {
      path:'/',
      element:<Componente Datas={Data}/>
    },
    {
      path:'/app',
      element:<App/>  
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
