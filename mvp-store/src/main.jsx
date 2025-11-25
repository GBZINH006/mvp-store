import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';


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