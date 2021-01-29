
export interface INavLinkProps {
    hrefID: string
    content: string
}
interface INavsArray extends Array<INavLinkProps>{}

export const navsLanding: INavsArray = [
    {
        hrefID: "time-to-change",
        content: "Presentación"
    },
    {
        hrefID: "about-me",
        content: "Acerca de"
    },
    {
        hrefID: "principles-values",
        content: "Principios"
    },
    {
        hrefID: "management-plan",
        content: "Plan de gestión"
    },
    {
        hrefID: "video-section",
        content: "Video"
    },
];