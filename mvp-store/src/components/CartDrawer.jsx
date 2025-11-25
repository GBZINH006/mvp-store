import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useCart } from "../contexts/CartContext.jsx";
import "./cartDrawer.css";

export default function CartDrawer({ visible, onHide, onCheckout }) {
  const { cart, removeFromCart, updateQty, clearCart, total } = useCart();

  return (
    <Sidebar visible={visible} position="right" onHide={onHide} className="cart-sidebar">
      <h3>Carrinho</h3>

      {cart.length === 0 ? (
        <div className="empty">Seu carrinho tá vazio 😢</div>
      ) : (
        <div className="cart-list">
          {cart.map(item => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.title} />
              <div className="meta">
                <div className="title">{item.title}</div>
                <div className="price">R$ {(item.price * item.qty).toFixed(2)}</div>
                <div className="controls">
                  <input type="number" min="1" value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value))} />
                  <Button icon="pi pi-trash" className="p-button-text" onClick={() => removeFromCart(item.id)} />
                </div>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <div className="total">Total: R$ {total.toFixed(2)}</div>
            <div className="actions">
              <Button label="Limpar" className="p-button-secondary" onClick={clearCart} />
              <Button label="Finalizar" className="p-button-success" onClick={() => { onCheckout(); onHide(); }} />
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
}
