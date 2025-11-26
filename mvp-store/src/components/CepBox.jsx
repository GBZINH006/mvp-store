import React, { useEffect, useState } from "react";

export default function CepBox() {
  const [cep, setCep] = useState("");
  const [addr, setAddr] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // busca automática quando o CEP atingir 8 dígitos
  useEffect(() => {
    const raw = cep.replace(/\D/g, "");
    if (raw.length === 8) {
      (async () => {
        setLoading(true);
        setError(""); setAddr(null);
        try {
          const res = await fetch(`https://viacep.com.br/ws/${raw}/json/`);
          const data = await res.json();
          if (data.erro) {
            setError("CEP não encontrado");
            setAddr(null);
          } else {
            setAddr(data);
            setError("");
          }
        } catch (e) {
          setError("Erro ao buscar CEP");
        } finally {
          setLoading(false);
        }
      })();
    } else {
      setAddr(null);
      setError("");
    }
  }, [cep]);

  return (
    <div className="address-card">
      <label style={{ fontWeight: 700 }}>Consultar CEP (auto)</label>
      <div style={{ display: "flex", gap: 10 }}>
        <input
          className="address-input"
          placeholder="Digite CEP (só números)"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        />
        <div style={{ minWidth: 120 }}>
          <button className="admin-btn" onClick={() => { /* opcional: forçar busca manual */ }}>
            {loading ? "Buscando..." : "OK"}
          </button>
        </div>
      </div>

      {error && <div className="invalid-cep">{error}</div>}

      {addr && (
        <div className="address-result" style={{ marginTop: 8 }}>
          <div><b>{addr.logradouro}</b></div>
          <div>{addr.bairro} — {addr.localidade}/{addr.uf}</div>
        </div>
      )}
    </div>
  );
}
