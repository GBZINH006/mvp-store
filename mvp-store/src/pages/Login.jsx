import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "./login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handle() {
    onLogin({ email, pass });
  }

  return (
    <div className="center-page">
      <Card title="Acesso">
        <div className="p-fluid">
          <label>Email</label>
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="mt-2">Senha</label>
          <Password value={pass} onChange={(e) => setPass(e.target.value)} feedback={false} />
          <Button label="Entrar" className="mt-3 w-full" onClick={handle} />
          <Button label="Entrar como convidado" className="mt-2 w-full p-button-text" onClick={() => onLogin({ email: "guest", pass: "" })} />
        </div>
      </Card>
    </div>
  );
}
