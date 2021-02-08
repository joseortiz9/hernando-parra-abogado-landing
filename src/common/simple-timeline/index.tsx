import React from "react";

import {ExperiencesData} from "../../data/Experiences";
import {VerticalTimelineWrapper, IconWrapper, VerticalTimelineElementWrapper} from "./styles";

const SimpleTimeline = () => {
    return(
        <VerticalTimelineWrapper>
            {
                ExperiencesData.map((item) => (
                    <VerticalTimelineElementWrapper key={item.props.date}
                                             date={item.props.date}
                                             icon={item.props.icon ? item.props.icon : <IconWrapper />}
                                             className={item.props.icon ? "element-with-icon" : ""}
                                             contentStyle={{background: '#C1E5C0', color: '#023324', padding: "0.5rem", lineHeight: "18px" }}
                                             >
                        <span dangerouslySetInnerHTML={{__html: item.content}} />
                    </VerticalTimelineElementWrapper>
                ))
            }
        </VerticalTimelineWrapper>
    );
};

export default SimpleTimeline;