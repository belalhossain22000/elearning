import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
import ContextProvider from './provider/ContextProvider/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ContextProvider>
)
