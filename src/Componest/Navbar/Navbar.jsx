import React from "react";
import Imagem_logo from "../../assets/Home/LABSTOCK-removebg-preview 2.png";
import { Link } from "react-router-dom";
import {
  Sessao_navbar,
  Box_navbar,
  Box_caminho,
  Rotas_Styled_Link,
} from "./Navbar.js";

const Navbar = () => {
  return (
    <Sessao_navbar>
      <Box_navbar>
        <Link to="/Home">
          <img src={Imagem_logo} alt="Logo" />
        </Link>
        <Box_caminho>
          <Rotas_Styled_Link to="/Agendamento">AGENDAMENTO</Rotas_Styled_Link>
          <Rotas_Styled_Link to="/Equipamentos">EQUIPAMENTOS</Rotas_Styled_Link>
          <Rotas_Styled_Link to="/Registro">REGISTRO</Rotas_Styled_Link>
        </Box_caminho>
      </Box_navbar>
    </Sessao_navbar>
  );
};

export default Navbar;
