import React from "react";
import {Spinner} from "react-bootstrap";

const SpinLoader = () => {
    return(
        <Spinner animation="grow" variant="success" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}

export default SpinLoader;