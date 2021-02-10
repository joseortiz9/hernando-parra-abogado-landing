import React from "react";
import {ColumnsSection} from "../../components";
import columnsData from "../../data/columns.json";

const Columns = () => {
    return(
        <>
            <ColumnsSection data={columnsData} />
        </>
    );
};

export default Columns;