import styled from "styled-components";

const SectionWrapper = styled.section`
  margin-top: 15rem;
  @media screen and (max-width: 575px) {
    margin-top: 10rem;
  }
`;

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

export {SectionWrapper, PlanImgWrapper};