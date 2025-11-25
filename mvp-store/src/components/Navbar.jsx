import { Menubar } from "primereact/menubar";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useCart } from "../contexts/CartContext.jsx";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const items = [
    { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
    { label: "Produtos", icon: "pi pi-tags", command: () => navigate("/") },
    { label: "Carrinho", icon: "pi pi-shopping-cart", command: () => navigate("/cart") },
  ];

  const end = (
    <div className="flex align-items-center gap-3">
      <Link to="/cart" className="cart-link">
        <i className="pi pi-shopping-cart" />
        <Badge value={cart.length} severity="info" className="ml-2" />
      </Link>

      {user ? (
        <>
          <span className="user-text">Olá, {user.email}</span>
          <Button label="Sair" className="p-button-text" onClick={logout} />
        </>
      ) : (
        <Button label="Login" icon="pi pi-sign-in" onClick={() => navigate("/login")} />
      )}
    </div>
  );

  return <Menubar model={items} end={end} />;
}
