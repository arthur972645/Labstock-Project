import React from 'react';
import Navbar from "../../Componest/Navbar/Navbar.jsx";
import Formulario_Registro from "../../Componest/Registrp_componentes/Registro_Componentes";
import Footer from "../../Componest/Footer/Footer.jsx"
import {  SessaoRegistro, SessaoFooter, CorFundo} from './Registro.js'; // Importando os componentes estilizados

const Registro = () => {
  return (
    <>
      <Navbar />
      <SessaoRegistro>
        <Formulario_Registro />
      </SessaoRegistro>
      <SessaoFooter>
        <Footer/>
      </SessaoFooter>
      </>
  );
};

export default Registro;
