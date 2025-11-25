import { useCart } from "../contexts/CartContext.jsx";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

export default function Cart({ toastRef }) {
  const { cart, removeFromCart, updateQty, clearCart, total } = useCart();

  if (cart.length === 0) {
    return <div className="p-6"><h2>Seu carrinho está vazio 😢</h2></div>;
  }

  function handleCheckout() {
    clearCart();
    toastRef?.current?.show({ severity: "success", summary: "Sucesso", detail: "Compra finalizada!" });
  }

  return (
    <div className="p-4">
      <h2>Meu Carrinho</h2>

      <div className="flex flex-column gap-3">
        {cart.map((item) => (
          <Card key={item.id} className="shadow-2">
            <div className="flex align-items-center justify-content-between">
              <div className="flex align-items-center gap-3">
                <img src={item.image} alt={item.title} style={{ height: 72, objectFit: "contain" }} />
                <div>
                  <h3 className="m-0">{item.title}</h3>
                  <div className="text-muted">R$ {item.price.toFixed(2).replace(".", ",")}</div>
                </div>
              </div>

              <div className="flex align-items-center gap-3">
                <InputNumber value={item.qty} min={1} onValueChange={(e)=> updateQty(item.id, e.value)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-text" onClick={()=> removeFromCart(item.id)} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-4">
        <div className="flex justify-content-between align-items-center">
          <div>
            <h3>Total</h3>
            <div className="text-xl font-bold">R$ {total.toFixed(2).replace(".", ",")}</div>
          </div>
          <div style={{ width: 220 }}>
            <Button label="Finalizar compra" icon="pi pi-check" className="w-full" onClick={handleCheckout} />
          </div>
        </div>
      </Card>
    </div>
  );
}
