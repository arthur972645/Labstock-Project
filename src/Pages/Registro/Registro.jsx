import React from "react";
import Navbar from "../../Componest/Navbar/Navbar.jsx";
import Formulario_Registro from "../../Componest/Registrp_componentes/Registro_Componentes";
import { SessaoRegistro } from "./Registro.js"; // Importando os componentes estilizados

const Registro = () => {
  return (
    <>
      <Navbar />
      <SessaoRegistro>
        <Formulario_Registro />
      </SessaoRegistro>
    </>
  );
};

export default Registro;
