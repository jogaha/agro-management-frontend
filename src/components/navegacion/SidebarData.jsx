import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi2";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Inicio",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Embarques",
    path: "/remision/",
    icon: <FaIcons.FaTrailer />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Crear Remision",
        path: "/remision/crear",
        icon: <HiIcons.HiDocumentPlus />,
      },
      {
        title: "Clientes",
        path: "/remision/clientes",
        icon: <HiIcons.HiMiniBuildingOffice2 />,
      },
      {
        title: "Productos",
        path: "/remision/productos",
        icon: <GiIcons.GiFruiting />,
      },
    ],
  },
];
