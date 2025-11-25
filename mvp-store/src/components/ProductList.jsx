import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext.jsx";
import "./productList.css";

export default function ProductList({ search = "", onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then(res => { if (mounted) setProducts(res.data); })
      .catch(console.error)
      .finally(() => mounted && setLoading(false));
    return () => mounted = false;
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="product-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="product-card skeleton">
            <div className="img-wrap skeleton-box" />
            <div className="skeleton-line short" />
            <div className="skeleton-line" />
            <div className="skeleton-line price" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="product-grid">
      {filtered.map(item => (
        <motion.div
          key={item.id}
          className="product-card"
          whileHover={{ y: -6 }}
          onClick={() => onSelectProduct(item)}
        >
          <div className="img-wrap">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="meta">
            <h3 className="title">{item.title}</h3>
            <p className="category">{item.category}</p>
            <div className="row">
              <div className="price">R$ {item.price.toFixed(2).replace(".", ",")}</div>
              <Button
                label="Adicionar"
                icon="pi pi-shopping-cart"
                className="p-button-rounded p-button-sm"
                onClick={(e) => { e.stopPropagation(); addToCart(item, 1); /* visual */ flyAnim(); }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// small visual fly animation element
function flyAnim() {
  const el = document.createElement("div");
  el.className = "fly-item";
  el.innerText = "+1";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}
