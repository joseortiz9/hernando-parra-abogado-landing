import React from "react";
import {UpButton} from "./styles";

const ScrollToTop = () => {
    const scrollUp = () => {
        const element = document.getElementById("intro");
        element?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };

    return (
        <UpButton onClick={scrollUp}>
            UP
        </UpButton>
    );
};

export default ScrollToTop;
