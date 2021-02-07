import styled from "styled-components";

const FeatureWrapper = styled.div`
  @media (min-width: 992px) {
    text-align: left;  
  }
  img {
    width: 115px;
    height: 115px;
    
  }
`;

const FeatureTitle = styled.span`
  font-weight: bold;
  color: #01512C;
  font-size: 16px;
`;

export {FeatureWrapper, FeatureTitle};