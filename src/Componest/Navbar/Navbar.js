import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Detalhe_navbar from '../../assets/Home/DETALHES.png'
import React from 'react';

export const Sessao_navbar = styled.section`
  // border: 2px solid red;
  display: flex;
  justify-content: center;
  padding: 10px;
`

export const Box_navbar = styled.section`
  background-image: url(${Detalhe_navbar});
  background-position: right;
  background-repeat: no-repeat;
  background-color: #3A3132;
  border-radius: 20px;
  width: 1700px;
  height: 100px;
  display: flex;
  padding: 10px;
`

export const Box_caminho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1300px;
`

export const Rotas_Styled_Link = styled(Link)`
  color: white;
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s ease;
  text-decoration: none;

  &:hover{
  color: #64BA6B;
  }
`