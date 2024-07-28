import React from "react";
import Navbar from "../../Componest/Navbar/Navbar.jsx";
import Equipamentos from "../../Componest/Equipamentos_components/Equipamentos_Componnensts.jsx";
import { SessaoEquipamentos, SessaoFooter, CorFundo } from "./Equipamentos.js"; // Importando os componentes estilizados
import Footer from "../../Componest/Footer/Footer.jsx";

const Equipamentos_P = () => {
  return (
    <CorFundo>
      <Navbar />
      <SessaoEquipamentos>
        <Equipamentos />
      </SessaoEquipamentos>
      <SessaoFooter>
        <Footer/>
      </SessaoFooter>
    </CorFundo>
  );
};

export default Equipamentos_P;
