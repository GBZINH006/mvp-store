import { link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Navbar() {
const { cart } = useCart();

return (
<motion.Nav
initial={{y: -30, opacity: 0}}
animate={{y: 0, opacity: 1}}
transition={{ duration: 0.5 }}
classname="p-3 shadow-2 flex alingn-center justify-between bg-white"
>
<Link to="/" classname="text-2xl font-bold">ShopX</Link>

<div classname="flex gap-3">
<link to="/">home</link>
<link to="/cart">carrinho ({cart.length})</link>
<link to="/login">login</link>
</div>
</motion.nav>
);
}