
interface INavsArray extends Array<INavLinkProps>{}

export const LandingNavs: INavsArray = [
    {
        sectionID: "time-to-change",
        content: "Inicio"
    },
    {
        sectionID: "about-me",
        content: "Sobre mí"
    },
    {
        sectionID: "principles-values",
        content: "Volvernos a encontrar"
    },
    {
        sectionID: "management-plan",
        content: "Programa"
    },
];

export const RouterNavs: INavsArray = [
    {
        hrefID: "columns",
        content: "Columnas"
    },
];