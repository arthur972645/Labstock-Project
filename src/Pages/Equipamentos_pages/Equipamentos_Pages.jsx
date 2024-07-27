import React from "react";
import Navbar from "../../Componest/Navbar/Navbar.jsx";
import Equipamentos from "../../Componest/Equipamentos_components/Equipamentos_Componnensts.jsx";
import { SessaoEquipamentos } from "./Equipamentos.js"; // Importando os componentes estilizados

const Equipamentos_P = () => {
  return (
    <>
      <Navbar />
      <SessaoEquipamentos>
        <Equipamentos />
      </SessaoEquipamentos>
    </>
  );
};

export default Equipamentos_P;
