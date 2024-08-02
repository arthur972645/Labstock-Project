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
  padding-top: 10px;

  @media (max-width: 700px) {
    width: 100%;
    padding-top: 0px;
  }
`;

export const Box_navbar = styled.section`
  background-color: #3A3132;
  border-radius: 20px;
  max-width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 9px 8px 13px -5px rgba(0,0,0,0.52);

  @media (max-width: 700px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const Box_caminho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1300px;

  @media (max-width: 700px) {
    flex-direction: column; 
    align-items: flex-start; 
    width: 100%;
  }
`;

export const Rotas_Styled_Link = styled(Link)`
  color: white;
  font-size: 17px;
  font-weight: 600;
  transition: color 0.3s ease;
  text-decoration: none;
  margin: 5px;

  &:hover {
    color: #64BA6B;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
