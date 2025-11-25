import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Admin({ toastRef }) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function add() {
    if (!title || !price) {
      toastRef?.current?.show({ severity: "warn", summary: "Preencha", detail: "Título e preço obrigatórios" });
      return;
    }
    const newItem = { id: Date.now(), title, price: parseFloat(price), image };
    setItems((s)=> [newItem, ...s]);
    setTitle(""); setPrice(""); setImage("");
    toastRef?.current?.show({ severity: "success", summary: "Pronto", detail: "Produto criado (local)" });
  }

  function del(id) {
    setItems((s)=> s.filter(i=> i.id !== id));
    toastRef?.current?.show({ severity: "info", summary: "Removido" });
  }

  const actionTemplate = (row) => (
    <Button icon="pi pi-trash" severity="danger" className="p-button-text" onClick={() => del(row.id)} />
  );

  return (
    <div className="p-4">
      <h2>Admin (CRUD local)</h2>

      <Card className="p-3 mb-3">
        <div className="grid">
          <div className="col-12 md:col-4">
            <label>Título</label>
            <InputText value={title} onChange={(e)=> setTitle(e.target.value)} className="w-full" />
          </div>

          <div className="col-12 md:col-3">
            <label>Preço</label>
            <InputText value={price} onChange={(e)=> setPrice(e.target.value)} className="w-full" />
          </div>

          <div className="col-12 md:col-5">
            <label>URL imagem</label>
            <InputText value={image} onChange={(e)=> setImage(e.target.value)} className="w-full" />
          </div>

          <div className="col-12 mt-3">
            <Button label="Adicionar" icon="pi pi-plus" onClick={add} />
          </div>
        </div>
      </Card>

      <Card>
        <DataTable value={items} paginator rows={6}>
          <Column field="title" header="Título" />
          <Column field="price" header="Preço" body={(row) => `R$ ${row.price?.toFixed(2)}`} />
          <Column field="image" header="Imagem" body={(row)=> row.image ? <img src={row.image} alt={row.title} style={{height:50}} /> : "-" } />
          <Column header="Ações" body={actionTemplate} />
        </DataTable>
      </Card>
    </div>
  );
}
