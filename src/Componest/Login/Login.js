import styled from 'styled-components';
import ImagemFundo from '../../assets/Login/Imagem-Fundo.png';
import React from 'react';


export const Img_Fundo = styled.main`
  // border: 2px solid red; 
  height: 100vh;
  background-image: url(${ImagemFundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Sessao_Login = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box_Login = styled.div`
 background-color: #ffffff;
  
`
export const Box_Logo = styled.div`
  display: flex;
  justify-content: center;
`
export const Logo = styled.img`
  transition: transform 0.3s ease;

  &:hover{
   transform: scale(1.1);
  }
`

export const Box_Inputs = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`
export const Box_Input_Senha = styled.div`
  margin-top: 25px;
`
export const Input = styled.input`
 border: none;
 border-bottom: 2px solid black;
 outline: none;
 width: 100%;
 transition: 0.3s ease;
 margin-top: 15px;
 color: black;
 font-weight: 500;
 font-size: 15px;
 background-color: #ffffff;
 

 &:hover{
 border-bottom-color: #2D8034 ;
 }

 &:focus{
  border-bottom-color: #2D8034 ;
 }
`

 export const Paragrafo = styled.p`
   font-size: 17px;
  font-weight: 600;
  opacity: 50%;
  /* border: 2px solid red; */
  max-width: 100px;
  display: flex;
  justify-content: start;
`
