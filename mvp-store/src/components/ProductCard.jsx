import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
const header = <img src={product.image} alt={product.title} className="w-full h-12rem object-cover" />;

return (
<Motion.div whileHover={{ scale: 1.05 }}>
<Card title={product.title} header={header} classname="m-2 shadow-4 border-round-lg">
<p classname="m-0 text-xl font-bold">R$ {product.price}</p>
<link to={`/detail/${product.id}`}>
</link>
</Card>
</Motion.div>
);
}