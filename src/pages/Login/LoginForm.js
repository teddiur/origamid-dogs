import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";

export const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" id="username" />
        <Input label="Senha" type="password" id="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">vai</Link>
    </div>
  );
};
