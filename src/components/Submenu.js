// import React, {useState} from "react"
// import {Link} from "react-router-dom"
// import styled from "styled-components"
// import Sidebardata from "./Sidebardata"




// const Submenuwrap= styled(Link)`
//     display:flex;
//     color:white;
//     text-decoration:none;
//     padding:0.5rem 0; 
//     justify-content:space-between;
//     align-items:center;
//     &:hover{
//       background-color:blue;
//       margin-left:0.5rem;
//       transition:0.5s;
//     }
//     margin-right:2rem;
// `
// const Span=styled.span`
// margin-left: 1rem;
// font-size:1.5rem;

// `
// const Sidebarlebel= styled.span`
// margin-left:1rem;
// font-size:1.2rem;

// `

// const Dropicon= styled.div`
// margin-left:2rem;
// `

// const Eachdropdowndiv= styled(Link)` 
//   text-decoration:none;
//   color:Violet;
//   display:flex;
//   margin-left:1.5rem;
//   justify-content:space-between;
//   align-items:center;
//   font-size:1.15rem;
//   padding:0.5rem 3rem 0.5rem 2rem; 
//   ` 

// const Dropdownmenu= styled.div` 
//   padding:0rem;



// `

// const Dropdownspan= styled.span` 

// ` 
// const Dropdownsidebarlebel= styled.span` 

// ` 

// // const handlehideSubmenu=(id)=>{
// //   console.log("is this shit working")
// //   {Sidebardata.map((menu,index) => {
// //       if(id===index){
// //         menu.status=false;
// //       }
      
// //   })}  
 
// // }

// const Submenu = ({menu, number}) => {
  

//   const [submenu, setSubmenu]= useState(false)
//   const [hideSubmenu, sethideSubmenu]= useState(true)
  

//   const handlehideSubmenu=(id)=>{
//     console.log("is this shit working")
//     {Sidebardata.map((menu,index) => {
//         if(id===index){
//           menu.status=true;
//         }else{
//           menu.status=false
//           setSubmenu(!submenu);
//         }
        
//     })}  
   
//   }

//   // console.log(menu)
//   const showSubmenu= (id)=>{
//     if(id===number){
//         // menu.status=true;
//         setSubmenu(!submenu);
//       }else{
//         // menu.status=false
//         // setSubmenu(!submenu);
//       }
      
//     // handlehideSubmenu(number)
//     console.log(submenu)
//   }
  
 
    
  
//     // console.log(hideSubmenu)


//   return (
//     <div >
//       <Submenuwrap onClick={()=>showSubmenu(number)} to={!menu.submenu && menu.path}>
//       {/* showSubmenu */}
//         <div>
//           <Span >{menu.icon} </Span>
//           <Sidebarlebel>{menu.title}</Sidebarlebel>
//         </div>
//         <Dropicon>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
//           {submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }
//         </Dropicon>
//      </Submenuwrap> 
//       {(submenu && menu.submenu) && menu.submenu.map((dropdownmenu, index) =>  { 

//       return(
//           <Dropdownmenu dropdownmenu={dropdownmenu} key={index} >
//             <Eachdropdowndiv to={dropdownmenu.path} >
//               <div>                          
//               <Dropdownspan >{dropdownmenu.icon} </Dropdownspan>
//               <Dropdownsidebarlebel>{dropdownmenu.title}</Dropdownsidebarlebel>
//               </div>
//             </Eachdropdowndiv>
//           </Dropdownmenu> 
//         )
//       })}
//   </div>
//   )

// }

// export default Submenu
