import React, {useCallback, useEffect, useState} from "react";
import {UpButton, UpArrow} from "./styles";

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = useCallback(() => {
            const headerHeight = window.screenY;
            setShowScroll(window.pageYOffset > headerHeight);
        },
        [showScroll],
    );

    useEffect(() => {
            window.addEventListener('scroll', checkScrollTop);
            return () => window.removeEventListener('scroll', checkScrollTop);
        },
        [checkScrollTop],
    );

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <UpButton onClick={scrollTop} className={"d-" + (showScroll ? "flex" : "none")}>
            <UpArrow />
        </UpButton>
    );
};

export default ScrollToTop;
