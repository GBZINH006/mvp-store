import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRouter({ children }) {
    const { user } = useAuth();

    if (!user) return <Navigate to="/Login" />;

    return children;
}