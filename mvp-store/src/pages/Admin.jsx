import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function addProduct() {
    const newItem = {
      id: Date.now(),
      title,
      price,
      image,
    };
    setProducts([...products, newItem]);
    setTitle("");
    setPrice("");
    setImage("");
  }

  function deleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div className="p-4 flex flex-column gap-4">
      <Card title="Adicionar Produto" className="p-3">
        <div className="flex flex-column gap-3">
          <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
          <InputText value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" />
          <InputText value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL da imagem" />
          <Button label="Adicionar" onClick={addProduct} />
        </div>
      </Card>

      <Card title="Produtos" className="p-3">
        <DataTable value={products} paginator rows={5}>
          <Column field="title" header="Título"></Column>
          <Column field="price" header="Preço"></Column>
          <Column field="image" header="Imagem"></Column>
          <Column
            header="Ações"
            body={(row) => (
              <Button label="Excluir" severity="danger" onClick={() => deleteProduct(row.id)} />
            )}
          ></Column>
        </DataTable>
      </Card>
    </div>
  );
}