import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="col-12 md:col-6 lg:col-3 p-3">
      <Card
        title={p.title}
        subTitle={`R$ ${p.price.toFixed(2).replace(".", ",")}`}
        header={
          <div className="card-img-wrap">
            <img src={p.image} alt={p.title} style={{ maxHeight: 160, objectFit: "contain" }} />
          </div>
        }
        className="shadow-2 border-round"
      >
        <p className="m-0 text-truncate">{p.description}</p>
        <div className="mt-3 flex justify-content-between">
          <Link to={`/details/${p.id}`}>
            <Button label="Ver" icon="pi pi-eye" className="p-button-text" />
          </Link>
          <Link to={`/details/${p.id}`}>
            <Button label="Comprar" icon="pi pi-shopping-cart" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
