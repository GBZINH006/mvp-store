import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login(username, password) {
        if (username === "admin" && password === "admin123") {
            setUser({ name: "Administrador"});
            return true;
        }
        return false;
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.provider value={{ user, login, logout}}>
            {children}
        </AuthContext.provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}