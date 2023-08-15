import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BandNamesApp } from './BandNamesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BandNamesApp />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

