import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <Toaster/>
    <RouterProvider router={Routes}></RouterProvider>


  </React.StrictMode>,

)
