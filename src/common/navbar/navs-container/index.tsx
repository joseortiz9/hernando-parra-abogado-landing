import React from "react";
import {LandingNavs, RouterNavs} from "../../../router/LandingNavs";
import NavLink from "../nav-link";
import {useLocation} from "react-router-dom";

const NavsContainer = () => {
    const location = useLocation();
    const isLanding = location.pathname === "/";
    return(
        <>
            {
                isLanding &&
                LandingNavs.map((nav) =>
                    <NavLink key={nav.content} {...nav} />
                )
            }
            {
                RouterNavs.flatMap((nav) =>
                    (nav.hrefID === "/" && isLanding)
                        ? []
                        : <NavLink key={nav.content} {...nav} />)
            }
        </>
    )
};

export default NavsContainer;