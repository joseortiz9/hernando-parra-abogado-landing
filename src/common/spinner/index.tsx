import React from "react";
import {Spinner} from "react-bootstrap";
import styled from "styled-components";

const SpinLoaderWrapper = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 300;
  margin-left: -16px;
  margin-top: -16px;
`;

const SpinLoader = () => {
    return(
        <SpinLoaderWrapper animation="grow" variant="success" role="status">
            <span className="sr-only">Loading...</span>
        </SpinLoaderWrapper>
    );
}

export default SpinLoader;