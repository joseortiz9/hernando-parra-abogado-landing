
export interface INavLinkProps {
    hrefID: string
    content: string
}
interface INavsArray extends Array<INavLinkProps>{}

export const navsLanding: INavsArray = [
    {
        hrefID: "time-to-change",
        content: "Inicio"
    },
    {
        hrefID: "about-me",
        content: "Sobre mí"
    },
    {
        hrefID: "principles-values",
        content: "Volvernos a encontrar"
    },
    {
        hrefID: "management-plan",
        content: "Programa"
    },
];