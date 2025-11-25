import { motion } from "framer-motion";
import { Button } from "primereact/button";


export function MotionProductDetail({ product, onClose, onAdd }) {
return (
<motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose}>
<motion.div
className="detail-modal"
initial={{ scale: 0.6, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
onClick={(e) => e.stopPropagation()}
>
<img src={product.image} className="detail-img" />
<h2>{product.title}</h2>
<p>{product.description}</p>
<h3>R$ {product.price}</h3>


<Button label="Adicionar ao carrinho" icon="pi pi-plus" onClick={() => onAdd(product)} />
</motion.div>
</motion.div>
);
}