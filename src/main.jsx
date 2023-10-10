import React from 'react';
import ReactDOM from 'react-dom/client';
import Accueil from './accueil.jsx';

window.React = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>,
)