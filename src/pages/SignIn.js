import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {    
    if (!usuario || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        usuario,
        senha,
      });
      if (response.data.data.success) {
        navigate("/users");
      } else {
        alert("Dados de login inválidos");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro na requisição Axios:", error.response?.data);
      } else {
        console.error("Erro inesperado:", error);
      };
    };
  };

  return (
    <>
      <div>Página de Login</div>

      {/* Campo para o Username */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Login</span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={usuario}                // Atualiza o valor com o estado
          onChange={(e) => setUsuario(e.target.value)}  // Atualiza o estado 'usuario' conforme o input
        />
      </div>

      {/* Campo para a Senha */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">Senha</span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-describedby="basic-addon2"
          value={senha}               // Atualiza o valor com o estado
          onChange={(e) => setSenha(e.target.value)}  // Atualiza o estado 'senha' conforme o input
        />
      </div>

      {/* Botão para submeter o login */}
      <button type="button" onClick={handleLogin} className="btn-info">
        Editar
      </button>
    </>
  );
};

export default SignIn;
