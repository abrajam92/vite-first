import React from 'react'
import ReactDOM from 'react-dom/client'
import Films from './Films.jsx'

window.React = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Films />
  </React.StrictMode>,
)
