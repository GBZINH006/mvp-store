import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

export default function Login({ toastRef }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handle() {
    const ok = login(email, pass);
    if (ok) {
      toastRef?.current?.show({ severity: "success", summary: "Bem vindo", detail: email });
      navigate("/admin");
    } else {
      toastRef?.current?.show({ severity: "error", summary: "Erro", detail: "Credenciais inválidas" });
    }
  }

  return (
    <div className="p-4 flex justify-content-center">
      <Card title="Acesso Admin" className="w-20rem">
        <div className="p-fluid">
          <label>Email</label>
          <InputText value={email} onChange={(e)=> setEmail(e.target.value)} />
          <label className="mt-2">Senha</label>
          <Password value={pass} onChange={(e)=> setPass(e.target.value)} feedback={false} />
          <Button label="Entrar" className="mt-3 w-full" onClick={handle} />
        </div>
      </Card>
    </div>
  );
}
