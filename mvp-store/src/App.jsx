import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/admin" element={<Admin />} />
</Routes>
</BrowserRouter>
);
}