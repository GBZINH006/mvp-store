import { useState } from "react";


export default function Admin() {
const [cep, setCep] = useState("");
const [address, setAddress] = useState(null);
const [cepError, setCepError] = useState(false);


const handleCep = async (v) => {
setCep(v);


if (v.length === 8) {
const res = await fetch(`https://viacep.com.br/ws/${v}/json/`);
const data = await res.json();


if (data.erro) {
setCepError(true);
setAddress(null);
} else {
setCepError(false);
setAddress(data);
}
}
};


return (
<div style={styles.container}>
<h1>Painel Admin</h1>


<div style={styles.card}>
<h3>Consultar CEP</h3>
<input
placeholder="Digite o CEP"
maxLength={8}
style={styles.input}
value={cep}
onChange={(e) => handleCep(e.target.value)}
/>


{cepError && <p style={{ color: "red" }}>CEP inválido 😒</p>}


{address && (
<div style={styles.result}>
<p><b>Rua:</b> {address.logradouro}</p>
<p><b>Bairro:</b> {address.bairro}</p>
<p><b>Cidade:</b> {address.localidade}</p>
<p><b>UF:</b> {address.uf}</p>
</div>
)}
</div>
</div>
);
}


const styles = {
container: { padding: 20 },
card: {
marginTop: 20,
padding: 25,
background: "#fff",
borderRadius: 14,
boxShadow: "0 0 12px #ccc",
width: 350,
},
input: {
width: "100%",
padding: 12,
borderRadius: 8,
border: "1px solid #bbb",
marginBottom: 12,
}}