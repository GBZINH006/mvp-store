import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api.js";
import { useCart } from "../contexts/CartContext.jsx";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

export default function Details({ toastRef }) {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get(`/products/${id}`)
      .then((res) => setProd(res.data))
      .catch((err) => {
        console.error(err);
        toastRef?.current?.show({ severity: "error", summary: "Erro", detail: "Produto não encontrado" });
      })
      .finally(()=> setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6">Carregando...</div>;
  if (!prod) return <div className="p-6">Produto não encontrado</div>;

  function handleAdd() {
    addToCart(prod, qty);
    toastRef?.current?.show({ severity: "success", summary: "Adicionado", detail: `${prod.title} x${qty}` });
  }

  return (
    <div className="p-4 grid">
      <div className="col-12 md:col-6 flex justify-content-center">
        <img src={prod.image} alt={prod.title} style={{ maxWidth: 360, objectFit: "contain" }} />
      </div>

      <div className="col-12 md:col-6">
        <h2>{prod.title}</h2>
        <p className="text-muted">{prod.category}</p>
        <h3 className="price">R$ {prod.price.toFixed(2).replace(".", ",")}</h3>
        <p>{prod.description}</p>

        <div className="flex align-items-center gap-3 mt-3">
          <InputNumber value={qty} min={1} onValueChange={(e)=> setQty(e.value)} />
          <Button label="Adicionar ao carrinho" icon="pi pi-shopping-cart" onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
}
