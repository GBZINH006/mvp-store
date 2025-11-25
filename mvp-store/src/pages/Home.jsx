import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");


useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => setProducts(data));
}, []);


const filtered = products.filter((p) =>
p.title.toLowerCase().includes(search.toLowerCase())
);


return (
<div style={styles.container}>
<h1 style={styles.title}>Loja Online</h1>


<input
placeholder="Pesquisar produto..."
style={styles.search}
value={search}
onChange={(e) => setSearch(e.target.value)}
/>


<div style={styles.grid}>
{filtered.map((p) => (
<Link key={p.id} to={`/product/${p.id}`} style={styles.card}>
<img src={p.image} style={styles.img} />
<h3>{p.title}</h3>
<p>R$ {p.price}</p>
</Link>
))}
</div>
</div>
);
}


const styles = {
container: { padding: 20 },
title: { textAlign: "center" },
search: {
width: "100%",
padding: 12,
borderRadius: 8,
border: "1px solid #aaa",
marginBottom: 20,
},
grid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
gap: 20,
},
card: {
display: "block",
padding: 15,
borderRadius: 12,
boxShadow: "0 0 10px #ddd",
background: "#fff",
}
}