import {Image} from "react-bootstrap";
import AmvLogo from "../assets/logos/timeline/amv.png";
import CourtLogo from "../assets/logos/timeline/corte-constitucional.png";
import CommerceLogo from "../assets/logos/timeline/camara-comercio.png";
import LawLogo from "../assets/logos/timeline/Group.png";
import ColpatriaLogo from "../assets/logos/timeline/colpatria.png";
import CitiLogo from "../assets/logos/timeline/citi.png";

export const ExperiencesData = [
    {
        props: {
            date: '2012 - 2018',
            icon: <Image src={AmvLogo} />,
        },
        content:
            'Miembro del <b>Autorregulador del Mercado de Valores AMV</b>.',
    },
    {
        props: {
            date: '2000 - 2011',
            icon: <Image src={AmvLogo} />,
        },
        content:
            'Miembro de los <b>Tribunales Disciplinarios de las Bolsas de Valores de Bogotá</b>.',
    },
    {
        props: {
            date: '2007 - 2009',
            icon: <Image src={CourtLogo} />,
        },
        content:
            'Conjuez de la <b>Corte Constitucional</b>.',
    },
    {
        props: {
            date: '1999 - Actualidad',
            icon: <Image src={CommerceLogo} />,
        },
        content:
            'Árbitro de las <b>Cámaras de Comercio de Bogotá y Medellín</b>.',
    },
    {
        props: {
            date: '1996 - 2009',
            icon: <Image src={CitiLogo} />,
        },
        content:
            'Secretario General de la <b>Universidad Externado de Colombia</b>.',
    },
    {
        props: {
            date: '1994 - 1996',
            icon: <Image src={CitiLogo} />,
        },
        content:
            'Director del departamento de Derecho Civil en <b> Externado de Colombia</b>.',
    },
    {
        props: {
            date: '1994 - Actualidad',
            icon: <Image src={LawLogo} />,
        },
        content:
            'Abogado litigante y consultor en <b>Derecho Privado y Financiero</b>.',
    },
    {
        props: {
            date: '1989 - 1994',
            icon: <Image src={ColpatriaLogo} />,
        },
        content:
            'Vicepresidente Jurídico y Secretario General del <b>Banco Colpatria</b>.',
    },
    {
        props: {
            date: '1986 - 1999',
            icon: <Image src={CitiLogo} />,
        },
        content:
            'Abogado interno de <b>Citibank Colombia</b>.',
    },
];