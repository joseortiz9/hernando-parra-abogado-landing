import React, {FC, ReactNode, SVGProps, useEffect} from "react";
import {LogoWrapper} from "./styles";
import {IBgStyleProp} from "../index";

interface ISocialIconProps {
    logoComponent: FC<SVGProps<SVGSVGElement>>
    lastElement?: boolean
}
const SocialIconWrapper = ({logoComponent, lastElement, bgStyle}: ISocialIconProps & IBgStyleProp) => {
    const MySvg =  logoComponent as FC<SVGProps<SVGSVGElement>>;
    return(
        <LogoWrapper className={lastElement ? "" : "mr-4"} bgStyle={bgStyle}>
            <MySvg fill={(bgStyle === "white") ? "#C3C4C8" : "#023324"} width={20} height={20} />
        </LogoWrapper>
    );
};

export default SocialIconWrapper;