import React from "react";
import Column from "../../common/column-wrapper";
import {CardColumnsWrapper, ContainerWrapper} from "./styles";

interface IColumnsSectionProps {
    data: Array<IColumnProps>
}

const ColumnsSection = ({data}: IColumnsSectionProps) => {
    return(
        <section>
            <ContainerWrapper>
                <CardColumnsWrapper>
                    {
                        data.reverse().map(item => (
                            // <Col xs={12} md={6} key={item.title} className="mb-3">
                            <Column key={item.title} {...item} />
                            // </Col>
                        ))
                    }
                </CardColumnsWrapper>
            </ContainerWrapper>
        </section>
    );
};

export default ColumnsSection;