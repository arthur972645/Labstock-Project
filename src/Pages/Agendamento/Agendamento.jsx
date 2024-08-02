import React from "react";
import Navbar from "../../Componest/Navbar/Navbar.jsx";
import FormularioAgendamento from "../../Componest/Agendamento_components/Formulario_agendamento.jsx";
import Footer from '../../Componest/Footer/Footer.jsx'
import { SessaoFormularioAgendamento, SessaoFooter,CorFundo } from "./Agendamento.js"; 

const Agendamento = () => {
  return (
    <>
      <Navbar />
      <SessaoFormularioAgendamento>
        <FormularioAgendamento />
      </SessaoFormularioAgendamento>
      <SessaoFooter>
        <Footer/>
      </SessaoFooter>
      </>
  );
};

export default Agendamento;
