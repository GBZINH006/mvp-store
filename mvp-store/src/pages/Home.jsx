import { useEffect, useState } from "react";
import { api } from "../services/api.js";
import ProductCard from "../components/ProductCard.jsx";
import { Skeleton } from "primereact/skeleton";

export default function Home({ toastRef }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error(err);
        toastRef?.current?.show({ severity: "error", summary: "Erro", detail: "Não foi possível carregar produtos" });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h2 className="page-title">Produtos em destaque</h2>

      {loading ? (
        <div className="grid">
          {[1,2,3,4,5,6,7,8].map((i)=>(
            <div key={i} className="col-12 md:col-6 lg:col-3 p-3">
              <Skeleton width="100%" height="180px" />
              <Skeleton width="80%" height="1.2rem" className="mt-2" />
              <Skeleton width="40%" height="1.2rem" className="mt-2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
