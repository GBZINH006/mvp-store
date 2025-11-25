import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit() {
    const ok = login(username, password);
    if (ok) navigate("/admin");
    else alert("Usuário ou senha incorretos");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-content-center p-4"
    >
      <Card title="Login" className="w-20rem shadow-4 p-3">
        <div className="flex flex-column gap-3">
          <span className="p-float-label">
            <InputText
              id="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="user">Usuário</label>
          </span>

          <span className="p-float-label">
            <Password
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
            />
            <label htmlFor="pass">Senha</label>
          </span>

          <Button label="Entrar" onClick={handleSubmit} className="w-full" />
        </div>
      </Card>
    </motion.div>
  );
}