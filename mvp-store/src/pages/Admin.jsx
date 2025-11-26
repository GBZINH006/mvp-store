import React, { useState } from "react";

export default function Admin({ addProduct, products = [] }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function save() {
    if (!title || !price || !image) return alert("Preencha nome, preço e imagem.");
    addProduct({ title, price: Number(price), image, category, description });
    setTitle(""); setPrice(""); setImage(""); setCategory(""); setDescription("");
  }

  return (
    <div className="admin-wrap">
      <div className="admin-header">
        <div>
          <h2>Admin — Adicionar produto</h2>
          <p className="muted">Os itens adicionados aparecem automaticamente na Home.</p>
        </div>
      </div>

      <div className="admin-form">
        <input className="admin-input" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="admin-input" placeholder="Preço (ex: 49.9)" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input className="admin-input" placeholder="URL da imagem" value={image} onChange={(e) => setImage(e.target.value)} />
        <input className="admin-input" placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
        <textarea className="admin-input" placeholder="Descrição (opcional)" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
        <button className="admin-btn" onClick={save}>Adicionar produto</button>
      </div>

      <h3 style={{ marginTop: 18 }}>Produtos cadastrados (preview)</h3>
      <div className="products-grid" style={{ marginTop: 10 }}>
        {products.slice(0, 8).map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <div style={{ marginTop: 8, fontWeight: 700 }}>{p.title}</div>
            <div style={{ color: "#2563eb", fontWeight: 800 }}>R$ {Number(p.price).toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
