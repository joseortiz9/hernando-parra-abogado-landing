import React from "react";
import SocialIconWrapper from "./social-icon-wrapper";
import {ReactComponent as LogoInstagram} from "../../assets/logos/instagram.svg";

export interface IBgStyleProp {
    bgStyle?: "green" | "white"
}

interface ISocialMediaContainer {
    classes?: string
}
const SocialMediaContainer = ({classes = "", bgStyle = "white"}: ISocialMediaContainer & IBgStyleProp) => {
    return (
        <div className={classes}>
            <SocialIconWrapper logoComponent={LogoInstagram} bgStyle={bgStyle} />
            <SocialIconWrapper logoComponent={LogoInstagram} bgStyle={bgStyle} />
            <SocialIconWrapper logoComponent={LogoInstagram} bgStyle={bgStyle} lastElement />
        </div>
    );
};

export default SocialMediaContainer;