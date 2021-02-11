
interface INavsArray extends Array<INavLinkProps>{}

export const LandingNavs: INavsArray = [
    {
        sectionID: "intro-banner",
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
        hrefID: "/",
        content: "Externado2027"
    },
    {
        hrefID: "columns",
        content: "Columnas"
    },
];