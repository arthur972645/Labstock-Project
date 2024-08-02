import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1999px; 
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden; 

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto; 
  }

  @media(max-width: 700px){
    width: 100%;
    height: auto;
    border-radius: 10px; 
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;

  @media(max-width: 768px){
    height: auto; 
  }

  @media(max-width: 700px){
    border-radius: 10px; 
  }
`;

export const SessaoCarrosel2 = styled.section`
 
`;