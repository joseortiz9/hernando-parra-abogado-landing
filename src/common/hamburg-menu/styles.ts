import styled from "styled-components";

const HamburgMenuWrapper = styled.button`
  border: 0;
  background: transparent;
  width: 44px;
  cursor: pointer;
  
  > span {
    display: block;
    width: 100%;
    height: 2px;
    margin: 3px 0;
    float: left;
    background-color: #01512C;;
    transition: all 0.3s ease;   
    &:last-child {
      width: calc(100% - 10px);
      margin-bottom: 0;
    }
  }
  &:hover {
    outline: none;
    > span {
      &:last-child {
        width: 100%;
      }
    }
  }
`;

export {HamburgMenuWrapper};