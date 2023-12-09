import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Test from './components/test'
import 'bootstrap/dist/css/bootstrap.min.css';
  const router = createHashRouter([
    {
      path:'/',
      element: <Test/>
    },
    {
      path:'/app',
      element:<App/>  
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
