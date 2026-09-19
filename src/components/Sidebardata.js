
// import React from 'react';
// import * as FaIcons from "react-icons/fa"
// import * as AiIcons from "react-icons/ai"
// import * as IoIcons from "react-icons/io"
// import * as BiIcons from "react-icons/bi"
// import * as GiIcons from "react-icons/gi"
// import * as VscIcons from "react-icons/vsc"
// import * as MdIcons from "react-icons/md"
// import * as RiIcons from "react-icons/ri"

// import * as HiIcons from "react-icons/hi"

// const Sidebardata = () => (  
// [
  
//    {
//     title:"Dashboard",
//     icon: <AiIcons.AiFillDashboard/>,
//     path:"dashboard",
//     iconOpen: <MdIcons.MdExpandMore/>,
//     iconClosed:<AiIcons.AiOutlineRight/>,
//     status:"hide",
//     /*submenu: [
//       {
//         title:"Find Properties",
//         icon: <GiIcons.GiSpanner/>,
//         path:"/attachments/work-orders",
//         iconOpen: <MdIcons.MdExpandMore/>,
//         title:"Evacuation Notice",
       
//       },
      
//       {
//         icon: <IoIcons.IoMdCreate/>,
//         path:"/attachments/evacuation-notice",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       }
//     ] 
//     */
//     },

//     {
//     title:"Properties",
//     icon: <BiIcons.BiBuildingHouse/>,
//     path:"properties",
//     iconClosed:<AiIcons.AiOutlineRight/>,
//     iconOpen: <MdIcons.MdExpandMore/>,
//     status:"hide",

//     submenu: [
//       {
//         title:"View All Properties",
//         icon: <BiIcons.BiBuildingHouse/>,
//         path:"properties/view-all-properties",
//         iconOpen: <MdIcons.MdExpandMore/>,
       
//       },
      
//       {
//         title:"List New Property",
//         icon: <AiIcons.AiOutlineApartment/>,
//         path:"properties/list-property/step1",
//         iconOpen: <MdIcons.MdExpandMore/>,
        
//       }
//     ]
//     },


//     { 
//     title:"Units",
//     icon: <IoIcons.IoIosBed/>,
//     path:"agency/units",
//     iconClosed:<AiIcons.AiOutlineRight/>,
//     iconOpen: <MdIcons.MdExpandMore/>,
//     status:"hide",
//     submenu: [
//       {
//         title:"All Units",
//         icon: <RiIcons.RiHotelFill/>,
//         path:"units/all-units",
//         iconOpen: <MdIcons.MdExpandMore/>,
       
//       },
      
//       {
//         title:"Find Unit",
//         icon: <MdIcons.MdFindInPage/>,
//         path:"units/find-unit",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       },

//       {
//         title:"Create New Unit",
//         icon: <VscIcons.VscSaveAs/>,
//         path:"units/create-new-unit",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       }
//     ]
//     },

//     {
//     title:"Landlords",
//     icon:<GiIcons.GiReceiveMoney/>,
//     path:"landlords",
//     iconClosed:<AiIcons.AiOutlineRight/>,
//     iconOpen: <MdIcons.MdExpandMore/>,
//     status:"hide",
//     submenu: [
//       {
//         title:"All Landlords",
//         icon: <FaIcons.FaPersonBooth/>,
//         path:"landlords/all-landlords",
//         iconOpen: <MdIcons.MdExpandMore/>,
       
//       },
      
//       {
//         title:"Create New Landlord",
//         icon: <MdIcons.MdPersonAddAlt1/>,
//         path:"landlords/create-new-landlord",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       },

//       {
//         title:"Find Landlord",
//         icon: <FaIcons.FaHouseUser/>,
//         path:"landlords/find-landlord",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       }
//     ]
//     },
//     {
//     title:"Caretakers",
//     icon: <FaIcons.FaPersonBooth/>,
//     path:"agency/caretakers",
//     iconClosed:<AiIcons.AiOutlineRight/>,
//     iconOpen: <MdIcons.MdExpandMore/>,
//     status:"hide",
//     submenu: [
//       {
//         title:"All Caretakers",
//         icon: <MdIcons.MdRealEstateAgent/>,
//         path:"caretakers/all-caretakers",
//         iconOpen: <MdIcons.MdExpandMore/>,
       
//       },
      
//       {
//         title:"Add New Caretaker",
//         icon: <VscIcons.VscPersonAdd/>,
//         path:"caretakers/create-new-caretaker",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       },
//       {
//         title:"Find Caretaker",
//         icon: <VscIcons.VscPersonAdd/>,
//         path:"caretakers/find-caretaker",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       }
//     ]
//     },
    
//     {
//     title:"Service Providers",
//     icon: <MdIcons.MdOutlineHandyman/>,
//     path:"agency/service-providers",
//     iconClosed:<AiIcons.AiOutlineRight/>,
//     iconOpen: <MdIcons.MdExpandMore/>,
//     status:"hide",
//     submenu: [
//       {
//         title:"All Technicians",
//         icon: <GiIcons.GiSpanner/>,
//         path:"maintenance/all-technicians",
//         iconOpen: <MdIcons.MdExpandMore/>,
       
//       },
      
//       {
//         title:"Add New Technician",
//         icon: <MdIcons.MdHomeRepairService/>,
//         path:"maintenance/add-new-technician",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       }
//     ]
//     },  
   
//     {
//     title:"Maintenance",
//     icon: <MdIcons.MdOutlineHandyman/>,
//     path:"agency/maintenance",
//     iconClosed:<AiIcons.AiOutlineRight/>,
//     iconOpen: <MdIcons.MdExpandMore/>,
//     status:"hide",
//     submenu: [
//       {
//         title:"All Technicians",
//         icon: <GiIcons.GiSpanner/>,
//         path:"maintenance/all-technicians",
//         iconOpen: <MdIcons.MdExpandMore/>,
       
//       },
      
//       {
//         title:"Add New Technician",
//         icon: <MdIcons.MdHomeRepairService/>,
//         path:"maintenance/add-new-technician",
//         iconOpen: <MdIcons.MdExpandMore/>,
//       }
//     ]
//     },  

                
//     {
//       title:"Attachments",
//       icon: <VscIcons.VscFileSubmodule/>,
//       path:"agency/attachments",
//       iconClosed:<AiIcons.AiOutlineRight/>,
//       iconOpen: <MdIcons.MdExpandMore/>,
//       status:"hide",
//       submenu: [
//         {
//           title:"Work Orders",
//           icon: <BiIcons.BiMessageAdd/>,
//           path:"attachments/work-orders",
         
//         },
        
//         {
//           title:"Evacuation Notices",
//           icon: <FaIcons.FaTruckMoving/>,
//           path:"attachments/evacuation-notice"
//         },

//         {
//           title:"Monthly Rent Invoice",
//           icon: <HiIcons.HiDocumentReport/>,
//           path:" attachments/invoices",
         
//         },
        
//         {
//           title:"Monthly Rental Payment Receipt",
//           icon: <RiIcons.RiFilePaper2Line/>,
//           path:"attachments/payment-receipt"
//         },

//         {
//           title:"Rental Agreement",
//           icon: <IoIcons.IoMdCreate/>,
//           path:"attachments/rental-Agreement"
//         }
//       ]
//     }, 

//     {
//       title:"Reports",
//       icon: <VscIcons.VscFileSubmodule/>,
//       path:"agency/Reports",
//       iconClosed:<AiIcons.AiOutlineRight/>,
//       iconOpen: <MdIcons.MdExpandMore/>,
//       status:"hide",
//       submenu: [
//         {
//           title:"Monthly Expenditure",
//           icon: <BiIcons.BiMessageAdd/>,
//           path:"reports/monthy-expenses",
         
//         },
        
//         {
//           title:"Monthly Income Statement",
//           icon: <FaIcons.FaTruckMoving/>,
//           path:"reports/monthly-income"
//         },

        
//       ]
//     },
//     {
//       title:"Support",
//       icon: <VscIcons.VscFileSubmodule/>,
//       path:"agency/support",
//       iconClosed:<AiIcons.AiOutlineRight/>,
//       iconOpen: <MdIcons.MdExpandMore/>,
//       status:"hide",
//     }, 
// ]


// );

// export default Sidebardata();










































































































import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";

const Sidebardata = () => [
  {
    title: "Dashboard",
    icon: <AiIcons.AiFillDashboard />,
    path: "/agency/dashboard",
    iconOpen: <MdIcons.MdExpandMore />,
    iconClosed: <AiIcons.AiOutlineRight />,
    status: "hide",
  },
  {
    title: "Properties",
    icon: <BiIcons.BiBuildingHouse />,
    path: "/agency/properties",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "View All Properties",
        icon: <BiIcons.BiBuildingHouse />,
        path: "/agency/properties/view-all-properties",
        iconOpen: <MdIcons.MdExpandMore />,
      },
      {
        title: "List New Property",
        icon: <AiIcons.AiOutlineApartment />,
        path: "/agency/properties/list-property/step1",
        iconOpen: <MdIcons.MdExpandMore />,
      }
    ]
  },
  { 
    title: "Units",
    icon: <IoIcons.IoIosBed />,
    path: "/agency/units",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "All Units",
        icon: <RiIcons.RiHotelFill />,
        path: "/agency/units/all-units",
        iconOpen: <MdIcons.MdExpandMore />,
      },
      {
        title: "Create New Unit",
        icon: <VscIcons.VscSaveAs />,
        path: "/agency/units/create-new-unit",
        iconOpen: <MdIcons.MdExpandMore />,
      }
    ]
  },
  {
    title: "Landlords",
    icon: <GiIcons.GiReceiveMoney />,
    path: "/agency/landlords",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "All Landlords",
        icon: <FaIcons.FaPersonBooth />,
        path: "/agency/landlords/all-landlords",
        iconOpen: <MdIcons.MdExpandMore />,
      },
      {
        title: "Create New Landlord",
        icon: <MdIcons.MdPersonAddAlt1 />,
        path: "/agency/landlords/create-new-landlord",
        iconOpen: <MdIcons.MdExpandMore />,
      }
    ]
  },
  {
    title: "Caretakers",
    icon: <FaIcons.FaPersonBooth />,
    path: "/agency/caretakers",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "All Caretakers",
        icon: <MdIcons.MdRealEstateAgent />,
        path: "/agency/caretakers/all-caretakers",
        iconOpen: <MdIcons.MdExpandMore />,
      },
      {
        title: "Add New Caretaker",
        icon: <VscIcons.VscPersonAdd />,
        path: "/agency/caretakers/create-new-caretaker",
        iconOpen: <MdIcons.MdExpandMore />,
      }
    ]
  },

  , 
  {
    title: "Service Providers",
    icon: <MdIcons.MdHomeRepairService />,
    path: "/agency/service-providers",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "All Vendors Service Providers",
        icon: <GiIcons.GiSpanner />,
        path: "/agency/service-providers/all",
        iconOpen: <MdIcons.MdExpandMore />,
      },
      {
        title: "Add New Vendor Service Provider",
        icon: <VscIcons.VscPersonAdd />,
        path: "/agency/service-providers/add",
        iconOpen: <MdIcons.MdExpandMore />,
      }
    ]
  }, 
  {
    title: "Maintenance",
    icon: <MdIcons.MdOutlineHandyman />,
    path: "/agency/maintenance",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "Create Work Order",
        icon: <IoIcons.IoMdCreate />,
        path: "/agency/maintenance/create-order",
        iconOpen: <MdIcons.MdExpandMore />,
      },
      {
        title: "Work Orders Hub",
        icon: <BiIcons.BiMessageAdd />,
        path: "/agency/maintenance/work-orders",
        iconOpen: <MdIcons.MdExpandMore />,
      },
      {
        title: "Scheduled Maintenance",
        icon: <HiIcons.HiDocumentReport />,
        path: "/agency/maintenance/scheduled",
        iconOpen: <MdIcons.MdExpandMore />,
      }
    ]
  },
  {
    title: "Documents & Attachments",
    icon: <VscIcons.VscFileSubmodule />,
    path: "/agency/docs-and-attachments",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "Evacuation Notices",
        icon: <FaIcons.FaTruckMoving />,
        path: "/agency/docs-and-attachments/evacuation-notices"
      },
      {
        title: "Monthly Rent Invoice",
        icon: <HiIcons.HiDocumentReport />,
        path: "/agency/docs-and-attachments/rental-invoices"
      },
      {
        title: "Monthly Rent Payment Receipts",
        icon: <RiIcons.RiFilePaper2Line />,
        path: "/agency/docs-and-attachments/rent-payment-receipts"
      },
      {
        title: "Rental Agreements",
        icon: <IoIcons.IoMdCreate />,
        path: "/agency/docs-and-attachments/rental-agreements"
      }
    ]
  }, 
  {
    title: "Monthly Reports",
    icon: <VscIcons.VscFileSubmodule />,
    path: "/agency/reports",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide",
    submenu: [
      {
        title: "Monthly Expenditure",
        icon: <BiIcons.BiMessageAdd />,
        path: "/agency/reports/monthly-expenses"
      },
      {
        title: "Monthly Income Statement",
        icon: <FaIcons.FaTruckMoving />,
        path: "/agency/reports/monthly-income"
      }
    ]
  },
  {
    title: "Support",
    icon: <VscIcons.VscFileSubmodule />,
    path: "/agency/support",
    iconClosed: <AiIcons.AiOutlineRight />,
    iconOpen: <MdIcons.MdExpandMore />,
    status: "hide"
  }
];

export default Sidebardata();