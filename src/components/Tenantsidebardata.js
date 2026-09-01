
import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BiIcons from "react-icons/bi"
import * as GiIcons from "react-icons/gi"
import * as VscIcons from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import * as RiIcons from "react-icons/ri"

import * as HiIcons from "react-icons/hi"

const Tenantsidebardata = () => (  
[
  
   {
    title:"Dashboard",
    icon: <AiIcons.AiFillDashboard/>,
    // path:"tenant/dashboard",
    path:"/tenant/dashboard",
    iconOpen: <MdIcons.MdExpandMore/>,
    iconClosed:<AiIcons.AiOutlineRight/>,
    status:"hide",
    },

    {
    title:"Pay Rent",
    icon:<GiIcons.GiReceiveMoney/>,
    path:"/tenant/payrent",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    status:"hide",
    },

    {
      title:"Create Work Order",
      icon: <BiIcons.BiBuildingHouse/>,
      path:"/tenant/create-work-order",
      iconClosed:<AiIcons.AiOutlineRight/>,
      iconOpen: <MdIcons.MdExpandMore/>,
      status:"hide",
    },
  
    {
    title:"Service Providers",
    icon: <FaIcons.FaPersonBooth/>,
    path:"tenant",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    status:"hide",
    submenu: [
      {
        title:"Mama-Fua",
        icon: <FaIcons.FaPersonBooth/>,
        path:"service-providers/mama-fua",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Electricians",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/electricians",
        iconOpen: <MdIcons.MdExpandMore/>,
      },
      
      {
        title:"Fundis",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/fundis",
        iconOpen: <MdIcons.MdExpandMore/>,
      },
      
      {
        title:"Plumbers",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/plumbers",
        iconOpen: <MdIcons.MdExpandMore/>,
      },
      
      {
        title:"Baby-Sitters",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/baby-sitters",
        iconOpen: <MdIcons.MdExpandMore/>,
      },
      
      {
        title:"Nannies",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/nannies",
        iconOpen: <MdIcons.MdExpandMore/>,
      },
      
      {
        title:"Masons",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/masons",
        iconOpen: <MdIcons.MdExpandMore/>,
      },
      
      {
        title:"Carpenters",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/carpenters",
        iconOpen: <MdIcons.MdExpandMore/>,
      },
      
      {
        title:"House-Cleaners",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/house-cleaners",
        iconOpen: <MdIcons.MdExpandMore/>,
      } ,
      
      {
        title:"Chefs",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/chefs",
        iconOpen: <MdIcons.MdExpandMore/>,
      } ,
      
      {
        title:"House Helps",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"service-providers/house-helps",
        iconOpen: <MdIcons.MdExpandMore/>,
      } 
    ]
    },
   
                
    {
      title:"My Attachments",
      icon: <VscIcons.VscFileSubmodule/>,
      path:"tenant",
      iconClosed:<AiIcons.AiOutlineRight/>,
      iconOpen: <MdIcons.MdExpandMore/>,
      status:"hide",
      submenu: [
        {
          title:"My Work Orders",
          icon: <BiIcons.BiMessageAdd/>,
          path:"attachments/my-work-orders",
         
        },
        
        {
          title:"Evacuation Notices",
          icon: <FaIcons.FaTruckMoving/>,
          path:"attachments/evacuation-notices"
        },

        {
          title:"Monthly Rent Invoices",
          icon: <HiIcons.HiDocumentReport/>,
          path:"attachments/monthly-rent-invoices",
         
        },
        
        {
          title:"Monthly Rental Payment Receipts",
          icon: <RiIcons.RiFilePaper2Line/>,
          path:"attachments/monthly-rent-receipts"
        },

        {
          title:"Rental Agreements",
          icon: <IoIcons.IoMdCreate/>,
          path:"attachments/rental-agreements"
        }
      ]
    }, 

    {
      title:"Reports",
      icon: <VscIcons.VscFileSubmodule/>,
      path:"tenant/reports",
      iconClosed:<AiIcons.AiOutlineRight/>,
      iconOpen: <MdIcons.MdExpandMore/>,
      status:"hide",
      submenu: [
        {
          title:"Monthly Expenditure",
          icon: <BiIcons.BiMessageAdd/>,
          path:"reports/monthy-expenses-report",
         
        },
        
        {
          title:"Monthly Income Statement",
          icon: <FaIcons.FaTruckMoving/>,
          path:"reports/monthly-income-report"
        },

        
      ]
    },
    {
      title:"Support",
      icon: <VscIcons.VscFileSubmodule/>,
      path:"support",
      iconClosed:<AiIcons.AiOutlineRight/>,
      iconOpen: <MdIcons.MdExpandMore/>,
      status:"hide",
    }, 
]


);

export default Tenantsidebardata();
