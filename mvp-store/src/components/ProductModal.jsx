import React from "react";

export default function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-grid">
          <div className="modal-left">
            <img src={product.image} alt={product.title} className="detail-img" />
          </div>

          <div className="modal-right">
            <h2 className="modal-title">{product.title}</h2>
            <p className="modal-cat">{product.category}</p>
            <p className="modal-desc">{product.description}</p>
            <div className="modal-row">
              <div className="product-price">R$ {Number(product.price).toFixed(2).replace(".", ",")}</div>
              <div className="modal-actions">
                <button className="add-btn" onClick={() => onAdd(product)}>Adicionar</button>
                <button className="close-modal" onClick={onClose}>Fechar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
