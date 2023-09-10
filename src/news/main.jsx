import React from 'react'
import ReactDOM from 'react-dom/client'
import News from './News.jsx'

window.React = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <News />
  </React.StrictMode>,
)
