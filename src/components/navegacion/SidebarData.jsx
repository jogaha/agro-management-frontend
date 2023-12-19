import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Inicio",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Embarques",
    path: "/remision",
    icon: <FaIcons.FaTrailer />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
