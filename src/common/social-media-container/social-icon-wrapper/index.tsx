import React, {FC, SVGProps} from "react";
import {LogoWrapper} from "./styles";
import {IBgStyleProp} from "../index";

interface ISocialIconProps {
    logoComponent: FC<SVGProps<SVGSVGElement>>
    lastElement?: boolean
    url: string
}
const SocialIconWrapper = ({logoComponent, lastElement, url, bgStyle}: ISocialIconProps & IBgStyleProp) => {
    const Logo =  logoComponent as FC<SVGProps<SVGSVGElement>>;
    return(
        <a href={url} target="_blank" rel="noreferrer">
            <LogoWrapper className={lastElement ? "" : "mr-3"} bgStyle={bgStyle}>
                <Logo fill={(bgStyle === "white") ? "#C3C4C8" : "#023324"} width={20} height={20} />
            </LogoWrapper>
        </a>
    );
};

export default SocialIconWrapper;