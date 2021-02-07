import React from "react";
import SocialIconWrapper from "./social-icon-wrapper";
import {ReactComponent as LogoTwitter} from "../../assets/logos/twitter.svg";
import {ReactComponent as LogoFacebook} from "../../assets/logos/facebook.svg";
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
            <SocialIconWrapper logoComponent={LogoInstagram} bgStyle={bgStyle} url="https://instagram.com/hernandoparran" />
            <SocialIconWrapper logoComponent={LogoFacebook} bgStyle={bgStyle} url="https://www.facebook.com/HernandoParraN" />
            <SocialIconWrapper logoComponent={LogoTwitter} bgStyle={bgStyle} url="https://twitter.com/hernandoparran" lastElement />
        </div>
    );
};

export default SocialMediaContainer;