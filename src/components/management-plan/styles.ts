import styled from "styled-components";

const PlanImgWrapper = styled.div`
max-height: 600px;
  img {
    transform: scale(1);
    transition: .3s ease-in-out;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

export {PlanImgWrapper};