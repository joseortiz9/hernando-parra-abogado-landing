import React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";

import {ExperiencesData} from "../../data/Experiences";
import {VerticalTimelineWrapper, IconWrapper} from "./styles";

const SimpleTimeline = () => {
    return(
        <VerticalTimelineWrapper>
            {
                ExperiencesData.map((item) => (
                    <VerticalTimelineElement key={item.props.date} {...item.props}
                                             icon={<IconWrapper />}
                                             className='vertical-timeline-element--work'
                                             contentStyle={{background: '#C1E5C0', color: '#023324', padding: "0.5rem", lineHeight: "18px" }}
                                             >
                        <span dangerouslySetInnerHTML={{__html: item.content}} />
                    </VerticalTimelineElement>
                ))
            }
        </VerticalTimelineWrapper>
    );
};

export default SimpleTimeline;