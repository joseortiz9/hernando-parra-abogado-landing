import React, {FC} from "react";
import {Image} from "react-bootstrap";
import {FeatureTitle, FeatureWrapper} from "./styles";

interface IFeatureProps {
    title: string
    logo: string
}

const PrincipleFeatureWrapper: FC<IFeatureProps> = ({title, logo, children}) => {
    return(
        <FeatureWrapper className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-start mb-5">
            <Image src={logo} className="mb-3 mr-lg-4" />
            <div>
                <FeatureTitle className="">{title}</FeatureTitle>
                <div className="mt-2">{children}</div>
            </div>
        </FeatureWrapper>
    );
};

export default PrincipleFeatureWrapper;