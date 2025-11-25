import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function ProductDetails() {
const { id } = useParams();
const [product, setProduct] = useState(null);


useEffect(() => {
fetch(`https://fakestoreapi.com/products/${id}`)
.then((res) => res.json())
.then((data) => setProduct(data));
}, [id]);


if (!product) return <h2>Carregando...</h2>;


return (
<div style={{ padding: 20 }}>
<Link to="/">⬅ Voltar</Link>
<div style={styles.box}>
<img src={product.image} style={styles.img} />
<div>
<h2>{product.title}</h2>
<p>{product.description}</p>
<h3>R$ {product.price}</h3>
</div>
</div>
</div>
);
}


const styles = {
box: {
display: "flex",
gap: 30,
marginTop: 20,
background: "#fff",
padding: 20,
borderRadius: 12,
boxShadow: "0 0 10px #ccc",
},
img: { width: 250, height: 250, objectFit: "contain" },
};