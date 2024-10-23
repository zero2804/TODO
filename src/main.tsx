import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/style.css'

let root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <App />
  )
}
