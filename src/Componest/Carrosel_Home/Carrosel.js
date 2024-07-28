// Carrosel.styles.js
import styled from 'styled-components';

// Estilize o contêiner do carrossel
export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 20px;
  overflow: hidden; /* Garante que as imagens arredondadas não saiam dos limites */
`;

// Estilize as imagens do carrossel
export const SlideImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;
