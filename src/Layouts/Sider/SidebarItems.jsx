import AvtoJavob from "../../Pages/Avtojavob";
import Dashboard from "../../Pages/Dashboard";
import Kalendar from "../../Pages/Kalendar";
import Members from "../../Pages/Members";
import Messages from "../../Pages/Messages";
import Reja from "../../Pages/Rejalash";
import Facebook from "../../Pages/Statistic/Childrens/Facebook";
import Instagram from "../../Pages/Statistic/Childrens/Instagram";
import Tasks from "../../Pages/Tasks";



export const SidebarItems = [
    {
        id: "1",
        label: "Bosh sahifa",
        icon: "/Images/Sidebar.icons/Settings Icon.svg",
        path: "/dashboard",
        element:<Dashboard></Dashboard>
    },
    {
        id: "2",
        label:"Statistika",
        icon: "/Images/Sidebar.icons/Statistika.svg",
        children: [
            {   
                label: "Instagram",
                path: "/instagram",
                element:<Instagram></Instagram>
            },
            {
                label: "Facebook",
                path: "/facebook",
                element:<Facebook></Facebook>
            },
        ]
    },
    {
        id: "3",
        label: "Kalendar",
        icon: "/Images/Sidebar.icons/Kalendar.svg",
        path: "/kalendar",
        element:<Kalendar></Kalendar>
    },
    {
        id: "4",
        label: "Rejalashtirish",
        icon: "/Images/Sidebar.icons/Reja.svg",
        path: "/rejalshtirilgan",
        element:<Reja></Reja>,
    },
    {
        id: "5",
        label: "Avtomatik javob",
        icon: "/Images/Sidebar.icons/Avtomatik.svg",
        path: "/avtojavob",
        element:<AvtoJavob></AvtoJavob>,
    },
    {
        id: "6",
        label: "Xabarlar",
        icon: "/Images/Sidebar.icons/Xabarlar.svg",
        path: "/messages",
        element:<Messages></Messages>
    },
    {
        id: "7",
        label: "Vazifalar",
        icon: "/Images/Sidebar.icons/Vazifalar.svg",
        path: "/tasks",
        element:<Tasks></Tasks>
       
    },
    {
        id: "8",
        label: "A’zolar",
        icon: "/Images/Sidebar.icons/A'zolar.svg",
        path: "/members",
        element:<Members></Members>
    },
]