import styled from 'styled-components';

export const Main_Buttons = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

export const Styled_buttons = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #194D26;
  color: white;
  font-size: 15px;
  font-weight: 700;
  transition: 0.3s ease;

  &:hover{
  transform: scale(1.1);
  background-color: #2D8034;
  }
`