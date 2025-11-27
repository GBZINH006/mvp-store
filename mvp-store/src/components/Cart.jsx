import React from "react";

export default function Cart({ cart = [], updateQty, removeFromCart, clearCart }) {
  const total = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);

  return (
    <div className="cart-wrap">
      <h2>Seu Carrinho</h2>

      {cart.length === 0 ? (
        <div className="empty">Seu carrinho está vazio — vai lá comprar 🔥</div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <div className="cart-title">{item.title}</div>
                  <div className="cart-controls">
                    <input
                      type="number"
                      min="1"
                      value={item.qty || 1}
                      onChange={(e) => updateQty(item.id, Math.max(1, Number(e.target.value)))}
                    />
                    <div className="cart-price">R$ {(item.price * (item.qty || 1)).toFixed(2)}</div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remover</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>Total: <b>R$ {total.toFixed(2)}</b></div>
            <div className="cart-actions">
              <button className="admin-btn" onClick={() => { alert("Compra simulada — sem gateway"); clearCart(); }}>Finalizar compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
