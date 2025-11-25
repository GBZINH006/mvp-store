import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { useCart } from "../contexts/CartContext.jsx";
import "./detailModal.css";

export default function ProductDetailModal({ product, visible, onClose }) {
  const { addToCart } = useCart();

  if (!visible || !product) return null;

  function handleAdd() {
    addToCart(product, 1);
    // visual + feedback
    const el = document.createElement("div");
    el.className = "fly-item";
    el.innerText = "+1";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }

  return (
    <div className="overlay" onClick={onClose}>
      <motion.div className="detail-modal"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="detail-left">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-right">
          <h2>{product.title}</h2>
          <p className="cat">{product.category}</p>
          <p className="desc">{product.description}</p>
          <div className="detail-row">
            <div className="price">R$ {product.price.toFixed(2).replace(".", ",")}</div>
            <Button label="Adicionar ao carrinho" icon="pi pi-shopping-cart" onClick={handleAdd} />
          </div>
          <Button label="Fechar" className="p-button-text mt-3" onClick={onClose} />
        </div>
      </motion.div>
    </div>
  );
}
