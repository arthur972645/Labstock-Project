import styled from 'styled-components'

export const Texto =  styled.section`
  
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 2%;

  
`

export const Titulo1 = styled.div`
  
  width: 100%;
  font-weight:700; 
  font-size: 50px;
  color: #2D8034;

  @media (max-width: 400px){
    font-size: 25px;
    border: 2px solid red;
    width: 390px;
  }
`

export const Subtitulo1 = styled.div`
  font-size:17px;
  width: 100%  ;

  @media (max-width: 400px){
    font-size: 12px;
    border: 2px solid red;
    width: 390px;
  }

`

export const SessaoBoxHome = styled.section`

  padding-top: 2%;
  
`

export const SessaoCorrel= styled.section`
padding-top: 2%;
  
`