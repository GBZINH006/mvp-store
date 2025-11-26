import React, { useMemo, useState } from "react";
import ProductModal from "./ProductModal.jsx";

export default function ProductList({ products = [], addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const setCat = new Set(products.map((p) => p.category).filter(Boolean));
    return ["all", ...Array.from(setCat)];
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const byCat = category === "all" ? true : p.category === category;
      const bySearch = p.title.toLowerCase().includes(search.toLowerCase());
      return byCat && bySearch;
    });
  }, [products, category, search]);

  return (
    <section className="products-section">
      <div className="controls">
        <input
          className="search-input"
          placeholder="Pesquisar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="select-cat" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="products-grid">
        {filtered.map((p) => (
          <article key={p.id} className="product-card" onClick={() => setSelected(p)}>
            <div className="image-wrap">
              <img src={p.image} alt={p.title} />
            </div>

            <h3 className="product-title">{p.title}</h3>
            <div className="product-meta">
              <div className="product-price">R$ {Number(p.price).toFixed(2).replace(".", ",")}</div>
              <button
                className="add-btn"
                onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                title="Adicionar ao carrinho"
              >
                +Carrinho
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={(p) => { addToCart(p); setSelected(null); }} />}
    </section>
  );
}
