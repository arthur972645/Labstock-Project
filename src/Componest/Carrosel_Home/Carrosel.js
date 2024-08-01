// Carrosel.styles.js
import styled from 'styled-components';

// Estilize o contêiner do carrossel
export const CarouselContainer = styled.div`
width: 100%;
  border: 2px solid red;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden; /* Garante que as imagens arredondadas não saiam dos limites */
 
  @media(max-width: 400px){
    width: 390px;
    height: px;    
  }
`;

// Estilize as imagens do carrossel
export const SlideImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;

export const SessaoCarrosel2 = styled.section`
border: 2px solid red;

`