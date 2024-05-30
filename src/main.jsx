import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomerContext from './ContextApi/CustomerContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CustomerContext>
      <App />
    </CustomerContext>
    </BrowserRouter>
  </React.StrictMode>,
)
