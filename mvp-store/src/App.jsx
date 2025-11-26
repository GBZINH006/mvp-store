import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import CepBox from "./components/CepBox";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // pega produtos da FakeStore
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    const fly = document.createElement("div");
    fly.className = "fly-item";
    fly.textContent = "+1 no carrinho";
    document.body.appendChild(fly);
    setTimeout(() => fly.remove(), 800);
  };

  const addProductAdmin = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
    setPage("home");
  };

  return (
    <div className="app-wrap">

      {/* Header */}
      <header className="nav-top">
        <h1 className="logo">GbzinStore 🛒</h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("cart")}>Carrinho ({cart.length})</button>
          <button onClick={() => setPage("admin")}>Admin</button>
        </nav>
      </header>

      {/* Pages */}
      {page === "home" && (
        <>
          <CepBox />
          <ProductList products={products} addToCart={addToCart} />
        </>
      )}

      {page === "cart" && <Cart cart={cart} />}

      {page === "admin" && <Admin addProduct={addProductAdmin} />}
    </div>
  );
}
