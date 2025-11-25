import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mvp_user")) || null;
    } catch {
      return null;
    }
  });

  function login(email, pass) {
   
    if (email === "admin@store.com" && pass === "123") {
      const u = { email };
      setUser(u);
      localStorage.setItem("mvp_user", JSON.stringify(u));
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("mvp_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
