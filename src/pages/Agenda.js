import React, { useState } from "react";
import "../styles/pages/Agenda.css";

export default function Agenda({isOpen}) {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    data: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Agendamento marcado com sucesso!")
    // Limpa o formulário após o envio
    setFormData({ nome: "", contato: "", data: "" });
    isCardOpen()
  };

  const isCardOpen = () => {
    isOpen();
  }

  return (
    <div className="agenda-container">
        <p onClick={isCardOpen}>X</p>
      <h2>Agenda</h2>
      <form className="agenda-form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contato:
          <input
            type="text"
            name="contato"
            value={formData.contato}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Data:
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="button-edit">Salvar</button>
      </form>
    </div>
  );
}
