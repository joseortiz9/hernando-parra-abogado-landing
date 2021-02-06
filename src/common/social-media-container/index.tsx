import React from "react";
import SocialIconWrapper from "./social-icon-wrapper";
import {ReactComponent as LogoTwitter} from "../../assets/logos/twitter.svg";

export interface IBgStyleProp {
    bgStyle?: "green" | "white"
}

interface ISocialMediaContainer {
    classes?: string
}
const SocialMediaContainer = ({classes = "", bgStyle = "white"}: ISocialMediaContainer & IBgStyleProp) => {
    return (
        <div className={classes}>
            {/*<SocialIconWrapper logoComponent={LogoInstagram} bgStyle={bgStyle} url="google.com" />*/}
            <SocialIconWrapper logoComponent={LogoTwitter} bgStyle={bgStyle} url="https://twitter.com/hernandoparran" lastElement />
        </div>
    );
};

export default SocialMediaContainer;