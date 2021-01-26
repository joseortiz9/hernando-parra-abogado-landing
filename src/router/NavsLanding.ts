
export interface INavLinkProps {
    hrefID: string
    content: string
}
interface INavsArray extends Array<INavLinkProps>{}

export const navsLanding: INavsArray = [
    {
        hrefID: "about-me",
        content: "Acerca de"
    },
    {
        hrefID: "government-plan",
        content: "Plan de gobierno"
    },
    {
        hrefID: "video-desc",
        content: "video-section"
    },
];