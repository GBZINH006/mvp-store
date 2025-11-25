import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useCart } from "../contexts/CartContext.jsx";
import "./checkout.css";

export default function CheckoutModal({ visible, onHide }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const { cart, clearCart, total } = useCart();

  async function searchCEP() {
    if (!cep) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      setAddress(data);
    } catch (err) {
      console.error(err);
    }
  }

  function confirm() {
    // fake checkout
    clearCart();
    onHide();
    setAddress(null);
    setCep("");
    alert("Compra finalizada (fictícia). Endereço usado: " + (address?.logradouro || "não informado"));
  }

  return (
    <Dialog header="Finalizar compra" visible={visible} style={{ width: "30rem" }} onHide={onHide}>
      <div className="checkout-body">
        <div className="cart-summary">
          <h4>Resumo</h4>
          <div className="summary-items">
            {cart.map(i => (
              <div key={i.id} className="line">
                <span>{i.title}</span>
                <b>R$ {(i.price * i.qty).toFixed(2)}</b>
              </div>
            ))}
          </div>
          <div className="line total-line"><span>Total</span><b>R$ {total.toFixed(2)}</b></div>
        </div>

        <div className="address-box">
          <h4>Endereço</h4>
          <InputText placeholder="CEP (só números)" value={cep} onChange={(e) => setCep(e.target.value)} />
          <Button label="Buscar CEP" className="mt-2" onClick={searchCEP} />
          {address && (
            <div className="addr">
              <p><b>{address.logradouro}</b></p>
              <p>{address.bairro} — {address.localidade}/{address.uf}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3">
        <Button label="Confirmar compra" className="p-button-success w-full" onClick={confirm} />
      </div>
    </Dialog>
  );
}
