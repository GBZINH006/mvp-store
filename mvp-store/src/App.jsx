import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { Toast } from "primereact/toast";
import { useRef } from "react";

export default function App() {
  const toastRef = useRef(null);

  return (
    <>
      <Toast ref={toastRef} />
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home toastRef={toastRef} />} />
          <Route path="/details/:id" element={<Details toastRef={toastRef} />} />
          <Route path="/cart" element={<Cart toastRef={toastRef} />} />
          <Route path="/login" element={<Login toastRef={toastRef} />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin toastRef={toastRef} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}
