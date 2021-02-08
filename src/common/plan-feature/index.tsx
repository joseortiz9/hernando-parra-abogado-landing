import React, {FC} from "react";
import {IFeatureProps} from "../principle-feature";
import {FeatureWrapper, ImageWrapper, IndexWrapper, TitleWrapper} from "./styles";

interface IPlanProps {
    index: string
    indexColor: string
}

const PlanFeatureWrapper: FC<IFeatureProps & IPlanProps> =
    ({index, indexColor, title, logo, children}) => {
    return(
        <FeatureWrapper className="mb-4 shadow">
            <ImageWrapper src={logo} className="mb-3 mr-lg-4" />
            <div className="d-flex align-items-center">
                <IndexWrapper className="mr-2" style={{color: indexColor}}>{index}</IndexWrapper>
                <TitleWrapper>{title}</TitleWrapper>
            </div>
            <div className="mt-2">{children}</div>
        </FeatureWrapper>
    );
}

export default PlanFeatureWrapper;