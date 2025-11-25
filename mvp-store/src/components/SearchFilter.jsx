import React from "react";
import "./searchFilter.css";

export default function SearchFilter({ value, onChange }) {
  return (
    <div className="searchbar">
      <input
        className="search-input"
        placeholder="Pesquisar produto, ex: camiseta, fone, capa..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="clear-btn" onClick={() => onChange("")}>Limpar</button>
    </div>
  );
}
