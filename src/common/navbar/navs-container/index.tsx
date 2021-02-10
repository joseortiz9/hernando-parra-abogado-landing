import React from "react";
import {LandingNavs, RouterNavs} from "../../../router/LandingNavs";
import NavLink from "../nav-link";
import {useHistory} from "react-router-dom";

const NavsContainer = () => {
    const history = useHistory();
    //const isLanding = history.location.pathname === "/";
    return(
        <>
            {
                LandingNavs.map((nav) =>
                    <NavLink key={nav.content} {...nav} />
                )
            }
            {
                RouterNavs.map((nav) =>
                    <NavLink key={nav.content} {...nav} />
                )
            }
        </>
    )
};

export default NavsContainer;