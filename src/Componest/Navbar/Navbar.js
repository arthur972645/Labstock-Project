import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sessao_navbar = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #EFEFEF;
  
`;

export const Box_navbar = styled.section`
  background-color: #3A3132;
  border-radius:20px ;
  max-width: 1700px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ajuste conforme necessário */
  padding: 10px;
  box-shadow: 9px 8px 13px -5px rgba(0,0,0,0.52);
`;

export const Box_caminho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1300px;
`;

export const Rotas_Styled_Link = styled(Link)`
  color: white;
  font-size: 17px;
  font-weight: 600;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #64BA6B;
  }
`;
