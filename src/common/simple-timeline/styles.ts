import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import styled from "styled-components";

const VerticalTimelineWrapper = styled(VerticalTimeline)`
    /* The line */
    &::before {
      background: #01512C;
      width: 3px;
    }
    
    @media only screen and (min-width: 1170px) {
      &.vertical-timeline.vertical-timeline--two-columns {
        width: 100%;
      }
    }
`;

const VerticalTimelineElementWrapper = styled(VerticalTimelineElement)`
    .vertical-timeline-element-content {
      border-radius: 10px;
    }
    .vertical-timeline-element-icon {
      background: #fff;
      padding: 5px;
      box-shadow: 0 0 0 3px #01512C, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }
    
    &.element-with-icon .vertical-timeline-element-icon {
        padding: 0;
    }
    
    .vertical-timeline-element-content .vertical-timeline-element-date {
      padding: .8em .5em;
      font-weight: 600;
      color: #023324;
      opacity: 1;
    }
    
    @media only screen and (max-width: 1169px) {
      .vertical-timeline-element-content .vertical-timeline-element-date {
        padding: 0;
        float: none;
        margin-top: .6em;
        width: 100%;
        opacity: 0.7;
      }
    }
    @media only screen and (min-width: 1170px) {
      &.vertical-timeline-element {
          margin: 0 0 1.5em 0;
          &.element-with-icon .vertical-timeline-element-icon {
              width: auto;
              height: auto;
              margin-left: -21px;
              margin-top: 0;              
         }
      }
      .vertical-timeline-element-icon {
         width: 30px;
         height: 30px;
         margin-left: -15px;
         margin-top: 10px;
      }
    }
`;

const IconWrapper = styled.div`
  border-radius: 25px;
  width: 100%;
  height: 100%;
  background: #01512C;
`;

export {VerticalTimelineWrapper, VerticalTimelineElementWrapper, IconWrapper};