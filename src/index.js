import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './map/App'//
import { BrowserRouter } from 'react-router-dom';
import App from './roterDom/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { /* <App />*/}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>

);