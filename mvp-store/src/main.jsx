<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
=======
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
>>>>>>> ff4c5a48729a7abffd26c8ee099bf7062935bf00


<<<<<<< HEAD
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
import 'primereact/resources/themes/lara-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';



import './styles/global.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<CartProvider>
<App />
</CartProvider>
</BrowserRouter>
);
>>>>>>> ff4c5a48729a7abffd26c8ee099bf7062935bf00
