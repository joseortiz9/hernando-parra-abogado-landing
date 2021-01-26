import React from "react";
import { ReactComponent as Logo } from "../../assets/logos/instagram.svg";

interface ISocialMediaContainer {
    classes?: string
}
const SocialMediaContainer = ({classes = ""}: ISocialMediaContainer) => {
    return (
        <div className={classes}>
            <Logo fill="white" width={32} height={32} stroke="green" className="mr-4" />
            <Logo fill="white" width={32} height={32} stroke="green" className="mr-4" />
            <Logo fill="white" width={32} height={32} stroke="green" />
        </div>
    );
};

export default SocialMediaContainer;