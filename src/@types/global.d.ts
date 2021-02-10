declare module '*.pdf'
declare module "*.ttf"

interface INavLinkProps {
    sectionID?: string
    hrefID?: string
    content: string
}

interface IColumnProps {
    logoAuthor?: string
    author: string
    intro: string
    title: string
    subtitle: string
    date: string
    content: string
}