import React from "react";
import Navbar from "../../Componest/Navbar/Navbar.jsx";
import FormularioAgendamento from "../../Componest/Agendamento_components/Formulario_agendamento.jsx";
import { SessaoFormularioAgendamento } from "./Agendamento.js"; // Importando os componentes estilizados

const Agendamento = () => {
  return (
    <>
      <Navbar />
      <SessaoFormularioAgendamento>
        <FormularioAgendamento />
      </SessaoFormularioAgendamento>
    </>
  );
};

export default Agendamento;
