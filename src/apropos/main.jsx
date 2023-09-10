import React from 'react'
import ReactDOM from 'react-dom/client'
import Apropos from './apropos.jsx'

window.React = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apropos />
  </React.StrictMode>,
)
