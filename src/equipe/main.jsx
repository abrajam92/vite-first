import React from 'react'
import ReactDOM from 'react-dom/client'
import Equipe from './Equipe.jsx'

window.React = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Equipe />
  </React.StrictMode>,
)
