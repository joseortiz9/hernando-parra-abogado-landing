import styled from "styled-components";
import HeroBgImg from "../../assets/lading-hero1080.png";

const LandingHeroWrapper = styled.section`
  background-image: url("${HeroBgImg}");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 100vh;
`;

export {LandingHeroWrapper};