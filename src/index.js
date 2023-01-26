import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Store/ContextProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
 <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContextProvider> 
);

reportWebVitals();
