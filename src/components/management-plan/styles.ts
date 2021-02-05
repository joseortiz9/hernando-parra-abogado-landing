import styled from "styled-components";

const PlanImgWrapper = styled.div`
  img {
    transform: scale(1);
    transition: .3s ease-in-out;
  }
  img:hover {
    transform: scale(1.2);
  }
`;

export {PlanImgWrapper};