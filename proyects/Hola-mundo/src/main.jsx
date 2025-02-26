//punto de entrada de la app 
import React, { Fragment, StrictMode } from 'react' //se importa react
import { createRoot } from 'react-dom/client' //y el react dom

import './index.css'
import { App } from './App.jsx'


createRoot(document.getElementById('root')).render( //crea el elemento y se pone entre parentesis el elemento donde queremos renderizar
  <App/>
)
