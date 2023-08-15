import { AiFillDashboard, AiFillFileAdd } from "react-icons/ai";
import { BiSolidCategoryAlt, BiMessageAltError } from "react-icons/bi";
import { HiNewspaper } from "react-icons/hi";

export const NavData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiFillDashboard />,
    path: "/dashboard",
  },
  {
    id: 2,
    title: " Add Job",
    icon: <AiFillFileAdd />,
    path: "/dashboard/addjob",
  },
  {
    id: 3,
    title: "Add Category",
    icon: <BiSolidCategoryAlt />,
    path: "/dashboard/add-category",
  },
  {
    id: 4,
    title: " Apply Job",
    icon: <HiNewspaper />,
    path: "/dashboard/applyjob",
  },
  {
    id: 5,
    title: "Messages",
    icon: <BiMessageAltError />,
    path: "/dashboard/message",
  },
];
