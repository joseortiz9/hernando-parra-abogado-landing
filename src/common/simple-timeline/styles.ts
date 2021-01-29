import {VerticalTimeline} from "react-vertical-timeline-component";
import styled from "styled-components";

const VerticalTimelineWrapper = styled(VerticalTimeline)`
    
    /* The line */
    &::before {
      background: #01512C;
    }
    
    @media only screen and (min-width: 1170px) {
      &.vertical-timeline.vertical-timeline--two-columns {
        width: 100%;
      }
      .vertical-timeline-element {
          margin: 0 0 1.5em 0;
      }
      &.vertical-timeline--two-columns .vertical-timeline-element-icon {
          width: auto;
          height: auto;
          margin-left: -20px;
      }
    }
    .vertical-timeline-element--work .vertical-timeline-element-icon {
      box-shadow: 0 0 0 4px #01512C, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }
`;

export default VerticalTimelineWrapper;