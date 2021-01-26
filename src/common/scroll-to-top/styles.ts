import styled from 'styled-components';

const UpButton = styled.div`
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: #01A85B;
  opacity: 0.8;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 10;
  width: 45px;
  height: 45px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  transition: all 0.4s ease;
  @media screen and (max-width: 768px) {
    right: 30px;
    bottom: 30px;
  }
`;

const UpArrow = styled.i`
    border-color: transparent transparent white;
    border-style: solid;
    border-width: 13px;
    height: 0;
    width: 0;
`;

export {UpButton, UpArrow};