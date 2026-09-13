
// // require ("dotenv").config() 
// // import React, {useState, useEffect, createContext, useContext} from "react"
// import React, {useState, useEffect, createContext} from "react"


// import styled from "@emotion/styled"
// import {VscMenu} from "react-icons/vsc"
// import * as MdIcons from "react-icons/md"
// //import Empty from "../Pages/Empty"
// import Sidebardata from "./Sidebardata"
// import { Link, Outlet} from "react-router-dom"
// import * as RiIcons from "react-icons/ri"
// // import Submenu from "./Submenu"
// import {FaUserCircle} from "react-icons/fa"
// // import xDownloadOptions from "helmet/dist/types/middlewares/x-download-options"
// // console.log(logo)
// import {decodeToken} from "react-jwt";
// // import env from "react-dotenv"
// // const logo= require ("./easyclickslogo.png")
// // const logo= require ("../easyclicksimages/easy4.png")

// const King= styled.div`
// position:fixed;
// width:100%;
// height:100%;
// top:0;
// left:0; 
// background-color:#F8F8F8;
// `
// const Nav = styled.div`
//   // display:grid;
//   // grid-template-columns: ${({sidebar})=> sidebar ? `4% 96% ` : `22.5% 77.5%`} ;
//   // grid-template-rows:600px  auto ;
//   background-color:blue;


// `
// const Navigation=styled.div  `
// position:fixed;
// overflow:hidden;
// display:flex;
// top:0;
// z-index:20;
// left:0;
// width:100%;
// height:57px;
// justify-content:space-between;
// align-items:center;
// // background-color:#F8F8F8;
// background-color:black;
// // box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;



// `

// const Navdiv= styled.div`
// position:fixed;
// top:10px;
// left:0;
// color:black;

// `

// const Naviconburger= styled(Link)` 
//   list-style:none;
//   padding:0.5rem;
//   // color:rgb(85, 74, 74);
//   color:violet;
//   font-size:2.6rem;
//   text-decoration:none;
 
// `

// const Logodiv=styled.div`
// font-size:1.8rem;
// font-weight:400;
// Margin-left:4rem;
// justify-item:center;
// text-align:center;
// color:violet;
// // position:fixed;
// // overflow:hidden;
// // display:flex;
// // justify-content:center;

// `

// const Logo= styled.div`
// text-align:center;

// `


// const Registerdiv=styled.div`
// margin-right:5rem;
// display:flex;
// height:25%;
// justify-content:space-around;
// align-items:center;

// `
// // const Tenantlogo= styled.div`
// // text-transform:uppercase;
// // color:white;
// // margin-left:1rem;
// // font-weight:bold;

// // `
// const SignIn=styled.button`
// fontSize:4rem;
// color:white;
// border:none;
// font-weight:bold;
// padding:0.5rem;
// background-color:green;
// border-radius:7px;
// border:none;
// margin-right:1rem;
// cursor:pointer;

// `
// const SignUp=styled.button`
// fontSize:4rem;
// padding:0.5rem;
// color:white;
// background-color:blue;
// border:none;
// cursor:pointer;
// border-radius:7px;
// font-weight:bold;
// `


   
//   const Wholeprofile=styled.div`
//     right:3%;
//     position:fixed; 
//     top:0;
//     color:white;

  
//   `
//   const Profile  = styled.div`
  
//   `
//   const Profileshow = styled(Link)`
//     display:flex;
//     // color:rgb(59, 57, 57);
//     color:violet;
//     // background-color:green;
//     justify-content:space-evenly;
//     outline:none;
//     border:none;
//     align-items:center;
//     text-align:center;
//     height:56px;
//     text-decoration:none;
//     display:flex;;

//     &:hover{
//       // background-color:#EFEBF3;
//       background-color:white;
//     } 
//   `
//   const Profilehide = styled.div`
//   background-color:blue;
//   top:70px;
  
//   `
//   const Showusername = styled.div`
//   // margin-left:-2.5rem;
  
//   `
//   const Username = styled.div`

  
//   `
//   const Iconimage = styled.div`
//     font-size:1.3rem;
//     // margin-left:-1rem;
  

//   `
//   const Dropicon = styled.div`

//   `
 
//  const Settingrow = styled(Link)`
//  padding:0.5rem 1rem;
//  display:flex;
//  color:white;
//  text-decoration:none;
//  &:hover{
//   background-color: grey;
//  };
//  justify-content:space-evenly;
//  text-align:center;
   
//  `
//  const Icons = styled.div`

//    margin-right:0.5rem;
//  `
// // Here is some content from the drop xDownloadOptions, 
// //  const Dropdownmenu= styled.div` 
// //  padding:0rem;

// // `




// const SidebarNav=styled.div  `
// position:fixed;
// overflow:${({sidebar})=>sidebar?"hidden": "scroll"};
// top:${({sidebar})=>sidebar? "56px":"58px"};
// width:${({sidebar})=> sidebar ? "3.5%": "21.5%"};
// display:grid;
// height:88vh;
// color:violet;
// left:${({sidebar})=> sidebar ? "0": "0"};
// background-color:black;
// box-sizing:border-box;
// // border-radius:20px;
// // overflow-x:hidden;

// ::-webkit-scrollbar {
//   width: 7.5px;               /* width of the entire scrollbar */
//   height:7.5px;
// }

// ::-webkit-scrollbar-track {
//   background-color: #F5F5F5;        /* color of the tracking area */
// }

// ::-webkit-scrollbar-thumb {
//   background-color: gray;    /* color of the scroll thumb */
//   border-radius: 20px;       /* roundness of the scroll thumb */
//   // border: 1px solid orange;  /* creates padding around scroll thumb */
// }
// ::-webkit-scrollbar-corner {
//   background-color: #F8F8F8;    /* color of the scroll thumb */
//   // border-radius: 20px;       /* roundness of the scroll thumb */
//   // border: 1px solid orange;  /* creates padding around scroll thumb */
// }
// `
// // const Scroll=styled.div`
// // background-color:violet;
// // display:flex;
// // text-align:center;
// // position:fixed;
// // left:${({sidebar})=> sidebar ? "3.6%": "21.5%" };
// // top:0;
// // z-index:10;
// // width:10px;
// // height:97.6vh;
// // justify-content:space-between;

// // `
// const Openscroll=styled.div`
// left:${({sidebar})=> sidebar ? "3.5%": "21.5%" };
// z-index:10;
// position:fixed;
// text-decoration:none;
// width:20px;
// height:90px;
// display:flex;
// align-items:center;
// color:white;
// text-align:center;
// background-color:purple;
// border-top-right-radius:16%;
// top:40%;
// border-bottom-right-radius:16%;
// &hover:{
//   cursor:pointer;

// }
// `

// const Switchdiv= styled.div`
//  position:fixed;
//  top:65px;
//  border-radius:20px;
//  left:${({sidebar})=> sidebar ? "5.2%": "23.2%"};
//  width:${({sidebar})=> sidebar ? "93.8%": "75.8%"};
//  height:86vh;
//  background-color:white;
 
//  //  border:3px solid black;
// //  overflow-x:hidden;
// //  overflow-y:scroll;
// `

// const Submenuwrap= styled(Link)`
//     display:flex;
//     padding:0.5rem 0;
//     text-decoration:none;
//     align-items:center;
//     box-sizing:border-box;
//     margin-right:0rem;
//     justify-content:space-between;
//     width:${({sidebar})=>sidebar? "100%" : "100%"};
//     &:hover {${({sidebar})=>sidebar? `background-color:blue` :`background-color:blue; margin-left:0.2rem`}}
//     // &:hover {${({sidebar})=>sidebar? `background-color:blue; transition:0.2s;` :`background-color:blue; margin-left:0.2rem;  transition:0.5s;`}}
// `
// const Span=styled.span`
// font-size:1.5rem;
// color:white;
// margin-left:${({sidebar})=> sidebar ? "1rem": "1.5rem"};

// `
// const Sidebarlebel= styled.span`
// margin-left:1rem;
// font-size:1.2rem;
// color:white;
// `

// const Eachdropdowndiv= styled(Link)` 
// text-decoration:none;
// color:violet;
// display:flex;
// box-sizing:border-box;
// margin-left:1.5rem;
// justify-content:space-between;
// align-items:center;
// font-size:1.015rem;
// padding: 0.5rem 1.5rem 0.5rem 1.5rem;  
// &:hover {background-color:blue; padding-left:1.7rem;}

// // &:hover {background-color:blue; padding-left:1.7rem;  transition:0.5s;}
// `
// const Eachdropdownsmalldiv= styled(Link)` 
// text-decoration:none;
// color:violet;
// background-color:black;
// display:flex;
// box-sizing:border-box;
// margin-left:1.5rem;
// justify-content:space-between;
// align-items:center;
// font-size:1.15rem;
// padding: 0.7rem 2rem 0.7rem 2rem;  
// &:hover {background-color:green;  padding-left:2.1rem; }

// // &:hover {background-color:green;  padding-left:2.1rem;  transition:0.2s;}
// `
// const Lebel=styled.div`
// font-size:1rem;
// align-self:center;
// color:white;
// font-weight:bold;
// height:34px;
// background-color:blue;
// box-sizing:border-box;
// `

// const Lebele=styled.div`
// color:white;
// &:hover{background-color:green}
// padding:0.5rem 0 0.5rem 0 ;
// background-color:black;

// `
// const Fixed=styled.div`
// position:fixed;
// z-index:1;
// margin-top:-2.72rem;
// left:${({height})=> (height===4)? "5.07%" : "3.56%"};
// box-sizing:border-box;
// opacity:2;
// color:grey;

// `
// // top:50px;
// // if(height===0){"0px"} if(height===1){"0px"} if(height===2){"0"}   if(height===3){"100px"}  if(height===4){"200px"}  if(height===5){"300px"}  if(height===6){"400px"}  if(height===7){"500px"} if(height===8){"600px"}

// const Dropdownmenu= styled.div` 
// box-sizing:border-box;
// box-sizing:border-box;

// `


// const Dropdownspan= styled.span` 

// ` 
// const Dropdownsidebarlebel= styled.span` 

// ` 
// export const  Sharesidebar=  createContext();
  
// const Sidebar = () => {
//   const [sidebar, setSidebar ]= useState(false);
//   const [height, setHeight]=useState()
//   const [sub, setSub]= useState(false)
//   const [submenu, setSubmenu]= useState()
//   const [username, setuserName]=useState()

//   const [name, setName]=useState();

//   const [email,setEmail]=useState();


//   // const [accesstoken, setaccessToken]=useState();
//   // const [refreshToken, setRefreshToken]=useState();

//   // const [hidesubmenu, sethidesubmenu ]= useState(true);

//   const [isloggedin, setloggedIn]= useState(false);
//   const [showProfile, setshowProfile]= useState(false)

  
//   const showSidebar= ()=> {
//     setSidebar(!sidebar) 
//     // console.log(sidebar)
//   } 
    
//     const handleshowProfile = ()=> {
//       setshowProfile(!showProfile)  
//     } 
    
//     const hideProfile=()=>{
//       setshowProfile(!showProfile)  
//     }


//     const handleLogout= ()=>{
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");

//       window.location.href="/signin"
//       setloggedIn(false)
//     }

//     // const handlesubmenu=()=>{
//     //  sethidesubmenu(!hidesubmenu)
//     //   console.log( hidesubmenu);
//     // }
  
//     const handleSub= (id)=>{

//       if(id===submenu){
//         setSub(!sub)
        
//       } 
//       else{
//         setSub(true);
     
//       }
//       // handlehideSubmenu(number)
//       // console.log(sub);
//     }

//     const showSubmenu= (number)=>{
//       handleSub(number)


//       setSubmenu(number)

//       if(number===4 || number===3 || number===2){
//         setHeight(4)
//       }else{
//         setHeight()
//       }
//   }
        
  
//     const logedin=(localStorage.getItem("accessToken"))
//     // const accesstokenfromverify=(localStorage.getItem("accessToken"))
//     const refreshtoken=(localStorage.getItem("refreshToken"))

//     const decodeduser=decodeToken(logedin)
//     // const decodedaccesstoken=decodeToken(accesstokenfromverify)
//     const decodedrefreshtoken=decodeToken(refreshtoken)
    
    
    
    
//     // jwt.verify(logedin, env.SECRET);
    
//     console.log(logedin);
//     console.log(decodeduser)
//     // console.log(decodedaccesstoken);
//     console.log(decodedrefreshtoken);

//     // let name;
//     // let email;

//     //  if(logedin===null){
//     //      setaccessToken();
//     //      setloggedIn(false)
//     //        window.location.href="/signin"
//     //        console.log("No Cashed cookies")
//     //  } 
//     //  else{
//     //    setaccessToken(logedin);
//     //   //  setloggedIn(true)

//     //  }



//   // ********I commented out this in order to acess the dashboard, should be uncommentd for the programming progerss later

//   useEffect(()=>{


//     let name;
//     let email;

//     if(logedin===null){
//       setloggedIn(false)
//        window.location.href="/signin"
//         // window.location.href="/"

//       console.log("No Cashed cookies")
//     } 
//     else{
//       console.log("here is the decoded email ")
//       console.log(decodeduser.user.email);
//       console.log(decodeduser)

//       if(decodeduser.user.email){
//         console.log(decodeduser.user.email);
        
//         setloggedIn(true);

//         setEmail( decodeduser.user.email);

//         email=decodeduser.user.email;
        
//         name= email.substring(0, email.lastIndexOf("@"))

//         setName(email.substring(0,email.lastIndexOf("@")))

//         setuserName(name)
    
//          console.log("show isLogged In" + isloggedin)
        
//       }
//       else{
//     //    setloggedIn(false)
//          console.log("not logged In")
//       }
//     }
    

//   }, [isloggedin])
  
  
//   console.log("show isLogged In?" + isloggedin)

//   return(
//   <King style={{}}>
//     <Nav sidebar={sidebar? 1: 0}>
     
//       <Navigation>
//         <Logodiv>
//           <Logo>
//           {/* <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" />  */}
//             {/* Easy Clicks PMS  */}
//             RentSure PMSAfrica
//           </Logo>
//         </Logodiv>
     
//          <Navdiv>
//           <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
//               {sidebar?   <VscMenu /> :<MdIcons.MdOutlineClose />}
//           </Naviconburger>
//         </Navdiv>

              
//         {isloggedin ?  
//           <Wholeprofile >
            
//             <Profile onMouseEnter={handleshowProfile} onMouseLeave={hideProfile}>

                  

//                 <Profileshow to="#" >

//                   <Iconimage >< FaUserCircle /></Iconimage>
//                   <Showusername>{username}</Showusername>
//                   <Dropicon><MdIcons.MdExpandMore/></Dropicon>
//                 </Profileshow>

//                 {showProfile &&
//                 <Profilehide>
//                   <Settingrow to="#">
//                     <Icons ><RiIcons.RiUserSettingsLine/></Icons>
//                     <Username>My Account Settings</Username>
//                   </Settingrow>

//                   <Settingrow to="#">
//                     <Icons><RiIcons.RiTeamLine/></Icons>
//                     <Username>My Team Members</Username>
//                   </Settingrow>

//                   <Settingrow to="#">
//                     <Icons><MdIcons.MdSupportAgent/></Icons>
//                     <Username>Help and Support</Username>
//                   </Settingrow>

//                   <Settingrow to="#" onClick={handleLogout}>
//                     <Icons style={{marginLeft:"-4.5rem"}} ><MdIcons.MdPowerSettingsNew/></Icons>
//                     <Username style={{marginLeft:"-4.5rem"}} >Log Out</Username>
//                   </Settingrow>
                  
//                 </Profilehide> 
//             }

//             </Profile>
//           </Wholeprofile>
//             :
//               <Registerdiv>
//                 <Link to="/signin"><SignIn>SIGN IN</SignIn></Link> 
//                 <Link to="/signup"><SignUp>SIGN UP</SignUp></Link>    
//               </Registerdiv>
//         }
//     </Navigation>
//     {sidebar?
//               <SidebarNav style={{zIndex:"10", backgroundColor:""}} sidebar={sidebar? 1: 0}>        
//                           {Sidebardata.map((menu,index) => {
               
//                             return (
//                                 <div  sub={sub?1:0} style={{padding:"0", }} key={index}  >
//                                   <Submenuwrap  onMouseEnter={()=>{showSubmenu(index)}} key={index}  style={{ }} sidebar={sidebar? 1:0} sub={sub?1:0} to={!menu.submenu && menu.path}>

//                                     <Span sidebar={sidebar? 1: 0 } style={{fontSize:"", }}>{menu.icon} </Span>

//                                   </Submenuwrap> 

//                                   <Fixed onMouseLeave={()=>{setSub(false); setHeight()} } height={height}>

//                                   {menu.submenu? 

//                                   <Lebel style={{}}>                                                                                                                                                                                                           
//                                   {(menu.submenu )? (submenu===index && sub) ? 
//                                     <div style={{height:"2.3rem",     display:"flex", justifyContent:"space-between", alignItems:"center"}}>
//                                       <div style={{marginLeft:"0.5rem"}}> {menu.title}</div> 
                                      
//                                       <div style={{ marginRight:"1rem", color:"violet"}}>{submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }</div> 
//                                     </div>
//                                     : null : (submenu===index && sub) &&
//                                           <div style={{color:"violet"}}><Link to={menu.path} style={{textDecoration:'none', color:"yellow"}}> {menu.title}</Link> </div>}
//                                   </Lebel>  
//                                   : 
                                  
//                                   <Lebele style={{padding:"0.75rem 0"}}>                                                                                                                                                                                                           
//                                   {(menu.submenu )? (submenu===index && sub) ? <div style={{}}><span> {menu.title}</span> <span>{submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }</span> </div> : null : (submenu===index && sub) && <div style={{}}><Link to={menu.path} style={{textDecoration:'none', color:"violet", padding:"0 0.5rem"}}> {menu.title}</Link> </div>}
//                                   </Lebele>  
                                  
//                                   }

                        
//                                     {(submenu===index && menu.submenu && sub) && menu.submenu.map((dropdownmenu, index) =>  { 
                                                
//                                             return(
//                                                   <Dropdownmenu dropdownmenu={dropdownmenu} style={{   }} key={index} >
//                                                         <Eachdropdownsmalldiv to={dropdownmenu.path} style={{ fontSize:"rem", padding:"0.3rem 0.5rem", margin:"0"}}>      
//                                                             <Dropdownsidebarlebel style={{ fontSize:"rem" }}>{dropdownmenu.title}</Dropdownsidebarlebel>  
//                                                         </Eachdropdownsmalldiv>
                                                        
//                                                   </Dropdownmenu> 
//                                             )   
//                                       })

//                                     }
                            
//                                   </Fixed>
//                                 </div>
//                             )    
//                             })}  
              
//               </SidebarNav>


//       :
//       <SidebarNav sidebar={sidebar? 1: 0}>        

          
//       {Sidebardata.map((menu,index) => {
//           // return <Submenu key={index} menu={menu} number={index} to="#"/       
//         return (
//             <div key={index} style={{margin:"0", padding:"0"}}>
//               <Submenuwrap sidebar={sidebar? 1:0} onClick={()=>{showSubmenu(index)}} sub={sub?1:0} to={!menu.submenu && menu.path}>
//               {/* showSubmenu */}
//                 <div style={{padding:"0", margin:"0"}}>
//                   <Span >{menu.icon} </Span> 
//                   <Sidebarlebel >{menu.title}</Sidebarlebel>
//                 </div>
//                 <Dropicon style={{color:"violet", marginRight:"0.7rem"}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
//                   {(submenu===index && menu.submenu && sub) ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }
//                 </Dropicon>
//              </Submenuwrap> 
//               {(submenu===index && menu.submenu && sub) && menu.submenu.map((dropdownmenu, index) =>  {
//                     return(                      
//                       <Dropdownmenu sidebar={sidebar? 1:0} dropdownmenu={dropdownmenu} key={index+ 5} >
//                         <Eachdropdowndiv to={dropdownmenu.path} >
//                           <div>                          
//                           <Dropdownspan >{dropdownmenu.icon} </Dropdownspan>
//                           <Dropdownsidebarlebel>{dropdownmenu.title}</Dropdownsidebarlebel>
//                           </div>
//                         </Eachdropdowndiv>
//                       </Dropdownmenu> 
//                     )             
//                 })    
//             }         
//           </div>
//           )
//         })}  

// </SidebarNav>
 
//       }
//     {/* <Scroll sidebar={sidebar? 1: 0} onClick={showSidebar}>
//     </Scroll> */}
//       <Openscroll to="#" sidebar={sidebar? 1: 0} onClick={showSidebar}>     
//         <Link style={{fontSize:"1.35rem", color:"white"}} to="#"> {sidebar ? <MdIcons.MdOutlineArrowForwardIos/> : <MdIcons.MdOutlineArrowBackIosNew/>  }</Link>
//       </Openscroll> 
//     <Switchdiv sidebar={sidebar}> 
//       <Sharesidebar.Provider value={sidebar}>
//         <Outlet />
//       </Sharesidebar.Provider>    
//     </Switchdiv>                                
//   </Nav>
// </King>

  
  


//     )
// };

// export default Sidebar;





























































// import React, { useEffect, useState } from "react";
// import styled from "@emotion/styled";
// import { VscMenu } from "react-icons/vsc";
// import * as MdIcons from "react-icons/md";
// import * as RiIcons from "react-icons/ri";
// import { FaUserCircle } from "react-icons/fa";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import { decodeToken } from "react-jwt";
// import Sidebardata from "./Sidebardata";

// /* =========================================================
//    CONSTANTS
// ========================================================= */

// const HEADER_HEIGHT = 58;
// const SIDEBAR_EXPANDED = 260;
// const SIDEBAR_COLLAPSED = 68;
// const MOBILE_BREAKPOINT = 768;

// /* =========================================================
//    LAYOUT
// ========================================================= */

// const King = styled.div`
//   min-height: 100vh;
//   width: 100%;
//   background: #f8f8f8;
//   overflow-x: hidden;
// `;

// const Navigation = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: ${HEADER_HEIGHT}px;
//   z-index: 1000;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   background: black;
//   color: violet;
//   box-sizing: border-box;
// `;

// const NavLeft = styled.div`
//   display: flex;
//   align-items: center;
//   height: 100%;
// `;

// const Naviconburger = styled.button`
//   width: ${HEADER_HEIGHT}px;
//   height: ${HEADER_HEIGHT}px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   border: none;
//   background: transparent;
//   color: violet;
//   font-size: 2rem;
//   cursor: pointer;
//   flex-shrink: 0;

//   &:hover {
//     background: #222;
//   }
// `;

// const Logodiv = styled.div`
//   font-size: 1.5rem;
//   font-weight: 500;
//   color: violet;
//   white-space: nowrap;

//   @media (max-width: 767px) {
//     font-size: 1.05rem;
//   }
// `;

// const Registerdiv = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-right: 20px;

//   @media (max-width: 767px) {
//     margin-right: 8px;

//     a:first-child {
//       display: none;
//     }
//   }
// `;

// const SignIn = styled.button`
//   font-size: 0.85rem;
//   color: white;
//   border: none;
//   font-weight: bold;
//   padding: 8px 12px;
//   background: green;
//   border-radius: 7px;
//   cursor: pointer;
// `;

// const SignUp = styled.button`
//   font-size: 0.85rem;
//   padding: 8px 12px;
//   color: white;
//   background: blue;
//   border: none;
//   cursor: pointer;
//   border-radius: 7px;
//   font-weight: bold;
// `;

// /* =========================================================
//    PROFILE
// ========================================================= */

// const Wholeprofile = styled.div`
//   position: relative;
//   margin-right: 18px;
//   height: 100%;

//   @media (max-width: 767px) {
//     margin-right: 6px;
//   }
// `;

// const Profileshow = styled.button`
//   height: ${HEADER_HEIGHT}px;

//   display: flex;
//   align-items: center;
//   gap: 7px;

//   color: violet;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0 8px;

//   &:hover {
//     background: #222;
//   }
// `;

// const Showusername = styled.span`
//   @media (max-width: 767px) {
//     display: none;
//   }
// `;

// const Iconimage = styled.span`
//   font-size: 1.35rem;
//   display: flex;
// `;

// const Profilehide = styled.div`
//   position: absolute;
//   right: 0;
//   top: ${HEADER_HEIGHT}px;
//   min-width: 210px;

//   background: #111;
//   border: 1px solid #333;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
//   z-index: 2000;
// `;

// const Settingrow = styled(Link)`
//   padding: 12px 14px;
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   color: white;
//   text-decoration: none;

//   &:hover {
//     background: #333;
//   }
// `;

// const Icons = styled.span`
//   display: flex;
//   font-size: 1.1rem;
// `;

// /* =========================================================
//    MOBILE OVERLAY
// ========================================================= */

// const Overlay = styled.div`
//   display: none;

//   @media (max-width: 767px) {
//     display: ${({ open }) => (open ? "block" : "none")};

//     position: fixed;
//     inset: ${HEADER_HEIGHT}px 0 0 0;
//     z-index: 900;

//     background: rgba(0, 0, 0, 0.5);
//   }
// `;

// /* =========================================================
//    SIDEBAR
// ========================================================= */

// const SidebarNav = styled.aside`
//   position: fixed;
//   top: ${HEADER_HEIGHT}px;
//   left: 0;
//   bottom: 0;

//   width: ${({ collapsed }) =>
//     collapsed ? `${SIDEBAR_COLLAPSED}px` : `${SIDEBAR_EXPANDED}px`};

//   z-index: 950;

//   background: black;
//   color: white;

//   overflow-x: hidden;
//   overflow-y: auto;

//   transition: width 0.2s ease;

//   box-sizing: border-box;

//   &::-webkit-scrollbar {
//     width: 7px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #111;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #555;
//     border-radius: 20px;
//   }

//   @media (max-width: 767px) {
//     width: min(290px, 82vw);

//     transform: ${({ mobileOpen }) =>
//       mobileOpen ? "translateX(0)" : "translateX(-105%)"};

//     transition: transform 0.25s ease;

//     box-shadow: ${({ mobileOpen }) =>
//       mobileOpen ? "8px 0 30px rgba(0,0,0,0.4)" : "none"};
//   }
// `;

// /* =========================================================
//    NAV ITEMS
// ========================================================= */

// const MenuItem = styled.div`
//   width: 100%;
// `;

// const MainMenu = styled.div`
//   min-height: 52px;
//   width: 100%;

//   display: flex;
//   align-items: center;

//   color: white;
//   text-decoration: none;

//   cursor: pointer;
//   box-sizing: border-box;

//   &:hover {
//     background: #222;
//   }
// `;

// const MainMenuLink = styled(Link)`
//   min-height: 52px;
//   width: 100%;

//   display: flex;
//   align-items: center;

//   color: white;
//   text-decoration: none;

//   box-sizing: border-box;

//   &:hover {
//     background: #222;
//   }
// `;

// const IconBox = styled.span`
//   width: ${SIDEBAR_COLLAPSED}px;
//   min-width: ${SIDEBAR_COLLAPSED}px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   font-size: 1.4rem;
//   color: violet;

//   @media (max-width: 767px) {
//     width: 55px;
//     min-width: 55px;
//   }
// `;

// const MenuTitle = styled.span`
//   flex: 1;

//   font-size: 1rem;
//   color: white;
//   white-space: nowrap;

//   opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};

//   transition: opacity 0.15s ease;
// `;

// const ArrowBox = styled.span`
//   padding-right: 15px;
//   color: violet;

//   opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};
// `;

// /* =========================================================
//    SUBMENU
// ========================================================= */

// const Submenu = styled.div`
//   background: #111;
// `;

// const SubmenuLink = styled(Link)`
//   min-height: 44px;

//   display: flex;
//   align-items: center;

//   padding: 8px 14px 8px 70px;

//   color: violet;
//   text-decoration: none;
//   font-size: 0.95rem;

//   white-space: nowrap;

//   &:hover {
//     background: blue;
//     color: white;
//   }

//   @media (max-width: 767px) {
//     padding-left: 55px;
//     min-height: 48px;
//   }
// `;

// /* =========================================================
//    DESKTOP COLLAPSED HOVER POPUP
// ========================================================= */

// const HoverPopup = styled.div`
//   position: fixed;

//   top: ${({ top }) => `${top}px`};
//   left: ${SIDEBAR_COLLAPSED + 4}px;

//   min-width: 220px;

//   background: #111;
//   border: 1px solid #333;

//   z-index: 2000;

//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);

//   @media (max-width: 767px) {
//     display: none;
//   }
// `;

// const PopupTitle = styled.div`
//   padding: 11px 14px;

//   color: white;
//   background: blue;

//   font-weight: bold;
// `;

// const PopupLink = styled(Link)`
//   display: block;

//   padding: 11px 14px;

//   color: violet;
//   text-decoration: none;

//   &:hover {
//     background: blue;
//     color: white;
//   }
// `;

// /* =========================================================
//    MAIN CONTENT
// ========================================================= */

// const MainContent = styled.main`
//   min-height: calc(100vh - ${HEADER_HEIGHT}px);

//   margin-left: ${({ collapsed }) =>
//     collapsed
//       ? `${SIDEBAR_COLLAPSED}px`
//       : `${SIDEBAR_EXPANDED}px`};

//   padding-top: ${HEADER_HEIGHT}px;

//   box-sizing: border-box;

//   transition: margin-left 0.2s ease;

//   @media (max-width: 767px) {
//     margin-left: 0;
//     padding-top: ${HEADER_HEIGHT}px;
//     width: 100%;
//   }
// `;

// const ContentInner = styled.div`
//   min-height: calc(100vh - ${HEADER_HEIGHT}px);

//   margin: 8px;
//   padding: 20px;

//   background: white;
//   border-radius: 20px;

//   box-sizing: border-box;

//   overflow-x: auto;

//   @media (max-width: 767px) {
//     margin: 0;
//     padding: 14px;
//     border-radius: 0;
//   }
// `;

// /* =========================================================
//    SIDEBAR TOGGLE TAB
// ========================================================= */

// const DesktopCollapseButton = styled.button`
//   position: fixed;

//   left: ${({ collapsed }) =>
//     collapsed
//       ? `${SIDEBAR_COLLAPSED}px`
//       : `${SIDEBAR_EXPANDED}px`};

//   top: 42%;

//   width: 20px;
//   height: 90px;

//   z-index: 980;

//   border: none;
//   border-radius: 0 8px 8px 0;

//   background: purple;
//   color: white;

//   cursor: pointer;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   transition: left 0.2s ease;

//   @media (max-width: 767px) {
//     display: none;
//   }
// `;

// /* =========================================================
//    CONTEXT
// ========================================================= */

// export const Sharesidebar = React.createContext();

// /* =========================================================
//    COMPONENT
// ========================================================= */

// const Sidebar = () => {
//   /*
//     IMPORTANT:
//     We preserve the meaning of your old `sidebar` context:

//     false = expanded desktop sidebar
//     true  = collapsed desktop sidebar

//     This reduces the chance of breaking existing pages
//     that already consume Sharesidebar.
//   */

//   const [sidebar, setSidebar] = useState(false);

//   const [mobileOpen, setMobileOpen] = useState(false);

//   const [submenu, setSubmenu] = useState(null);

//   const [showProfile, setShowProfile] = useState(false);

//   const [isMobile, setIsMobile] = useState(
//     window.innerWidth < MOBILE_BREAKPOINT
//   );

//   const [isloggedin, setLoggedIn] = useState(false);

//   const [username, setUsername] = useState("");

//   const location = useLocation();

//   /* =====================================================
//      RESPONSIVE DETECTION
//   ===================================================== */

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < MOBILE_BREAKPOINT;

//       setIsMobile(mobile);

//       if (!mobile) {
//         setMobileOpen(false);
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   /* =====================================================
//      CLOSE MOBILE MENU WHEN ROUTE CHANGES
//   ===================================================== */

//   useEffect(() => {
//     setMobileOpen(false);
//     setShowProfile(false);
//     setSubmenu(null);
//   }, [location.pathname]);

//   /* =====================================================
//      AUTHENTICATION
//   ===================================================== */

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");

//     if (!token) {
//       setLoggedIn(false);

//       /*
//         Keeping your existing behaviour.
//       */
//       window.location.href = "/signin";

//       return;
//     }

//     try {
//       const decoded = decodeToken(token);

//       const email = decoded?.user?.email;

//       if (email) {
//         setLoggedIn(true);

//         const name = email.substring(0, email.lastIndexOf("@"));

//         setUsername(name);
//       } else {
//         setLoggedIn(false);
//       }
//     } catch (error) {
//       console.error("Invalid access token:", error);

//       setLoggedIn(false);
//     }
//   }, []);

//   /* =====================================================
//      SIDEBAR
//   ===================================================== */

//   const toggleSidebar = () => {
//     if (isMobile) {
//       setMobileOpen((previous) => !previous);
//       return;
//     }

//     setSidebar((previous) => !previous);
//     setSubmenu(null);
//   };

//   /* =====================================================
//      SUBMENU
//   ===================================================== */

//   const toggleSubmenu = (index) => {
//     if (submenu === index) {
//       setSubmenu(null);
//     } else {
//       setSubmenu(index);
//     }
//   };

//   /* =====================================================
//      LOGOUT
//   ===================================================== */

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");

//     window.location.href = "/signin";
//   };

//   /* =====================================================
//      PROFILE
//   ===================================================== */

//   const toggleProfile = () => {
//     setShowProfile((previous) => !previous);
//   };

//   /* =====================================================
//      MENU
//   ===================================================== */

//   const renderMenu = () => {
//     return Sidebardata.map((menu, index) => {
//       const hasSubmenu =
//         Array.isArray(menu.submenu) &&
//         menu.submenu.length > 0;

//       const isOpen = submenu === index;

//       /*
//         COLLAPSED DESKTOP
//         --------------------------------
//         Icons only + hover popup
//       */

//       if (!isMobile && sidebar) {
//         return (
//           <MenuItem
//             key={index}
//             onMouseEnter={() => {
//               if (hasSubmenu) {
//                 setSubmenu(index);
//               }
//             }}
//             onMouseLeave={() => {
//               if (hasSubmenu) {
//                 setSubmenu(null);
//               }
//             }}
//           >
//             {hasSubmenu ? (
//               <>
//                 <MainMenu>
//                   <IconBox>{menu.icon}</IconBox>
//                 </MainMenu>

//                 {isOpen && (
//                   <HoverPopup
//                     top={HEADER_HEIGHT + index * 52}
//                     onMouseEnter={() => setSubmenu(index)}
//                     onMouseLeave={() => setSubmenu(null)}
//                   >
//                     <PopupTitle>
//                       {menu.title}
//                     </PopupTitle>

//                     {menu.submenu.map(
//                       (dropdownmenu, subIndex) => (
//                         <PopupLink
//                           key={subIndex}
//                           to={dropdownmenu.path}
//                         >
//                           {dropdownmenu.icon && (
//                             <span style={{ marginRight: 8 }}>
//                               {dropdownmenu.icon}
//                             </span>
//                           )}

//                           {dropdownmenu.title}
//                         </PopupLink>
//                       )
//                     )}
//                   </HoverPopup>
//                 )}
//               </>
//             ) : (
//               <MainMenuLink to={menu.path}>
//                 <IconBox>{menu.icon}</IconBox>
//               </MainMenuLink>
//             )}
//           </MenuItem>
//         );
//       }

//       /*
//         EXPANDED DESKTOP + MOBILE
//       */

//       return (
//         <MenuItem key={index}>
//           {hasSubmenu ? (
//             <MainMenu
//               onClick={() => toggleSubmenu(index)}
//             >
//               <IconBox>{menu.icon}</IconBox>

//               <MenuTitle collapsed={false}>
//                 {menu.title}
//               </MenuTitle>

//               <ArrowBox>
//                 {isOpen
//                   ? menu.iconOpen || (
//                       <MdIcons.MdExpandLess />
//                     )
//                   : menu.iconClosed || (
//                       <MdIcons.MdExpandMore />
//                     )}
//               </ArrowBox>
//             </MainMenu>
//           ) : (
//             <MainMenuLink
//               to={menu.path}
//               onClick={() => {
//                 if (isMobile) {
//                   setMobileOpen(false);
//                 }
//               }}
//             >
//               <IconBox>{menu.icon}</IconBox>

//               <MenuTitle collapsed={false}>
//                 {menu.title}
//               </MenuTitle>
//             </MainMenuLink>
//           )}

//           {hasSubmenu && isOpen && (
//             <Submenu>
//               {menu.submenu.map(
//                 (dropdownmenu, subIndex) => (
//                   <SubmenuLink
//                     key={subIndex}
//                     to={dropdownmenu.path}
//                     onClick={() => {
//                       if (isMobile) {
//                         setMobileOpen(false);
//                       }
//                     }}
//                   >
//                     {dropdownmenu.icon && (
//                       <span
//                         style={{
//                           marginRight: "8px",
//                           display: "flex",
//                         }}
//                       >
//                         {dropdownmenu.icon}
//                       </span>
//                     )}

//                     {dropdownmenu.title}
//                   </SubmenuLink>
//                 )
//               )}
//             </Submenu>
//           )}
//         </MenuItem>
//       );
//     });
//   };

//   /* =====================================================
//      RENDER
//   ===================================================== */

//   return (
//     <King>
//       {/* ================= HEADER ================= */}

//       <Navigation>
//         <NavLeft>
//           <Naviconburger
//             type="button"
//             onClick={toggleSidebar}
//             aria-label="Toggle navigation"
//           >
//             {isMobile ? (
//               mobileOpen ? (
//                 <MdIcons.MdClose />
//               ) : (
//                 <VscMenu />
//               )
//             ) : sidebar ? (
//               <VscMenu />
//             ) : (
//               <MdIcons.MdClose />
//             )}
//           </Naviconburger>

//           <Logodiv>
//             RentSure PMSAfrica
//           </Logodiv>
//         </NavLeft>

//         {/* ================= PROFILE ================= */}

//         {isloggedin ? (
//           <Wholeprofile>
//             <Profileshow
//               type="button"
//               onClick={toggleProfile}
//               onMouseEnter={() => {
//                 if (!isMobile) {
//                   setShowProfile(true);
//                 }
//               }}
//               aria-label="User menu"
//             >
//               <Iconimage>
//                 <FaUserCircle />
//               </Iconimage>

//               <Showusername>
//                 {username}
//               </Showusername>

//               <MdIcons.MdExpandMore />
//             </Profileshow>

//             {showProfile && (
//               <Profilehide>
//                 <Settingrow to="#">
//                   <Icons>
//                     <RiIcons.RiUserSettingsLine />
//                   </Icons>
//                   My Account Settings
//                 </Settingrow>

//                 <Settingrow to="#">
//                   <Icons>
//                     <RiIcons.RiTeamLine />
//                   </Icons>
//                   My Team Members
//                 </Settingrow>

//                 <Settingrow to="#">
//                   <Icons>
//                     <MdIcons.MdSupportAgent />
//                   </Icons>
//                   Help and Support
//                 </Settingrow>

//                 <Settingrow
//                   to="/signin"
//                   onClick={handleLogout}
//                 >
//                   <Icons>
//                     <MdIcons.MdPowerSettingsNew />
//                   </Icons>
//                   Log Out
//                 </Settingrow>
//               </Profilehide>
//             )}
//           </Wholeprofile>
//         ) : (
//           <Registerdiv>
//             <Link to="/signin">
//               <SignIn>SIGN IN</SignIn>
//             </Link>

//             <Link to="/signup">
//               <SignUp>SIGN UP</SignUp>
//             </Link>
//           </Registerdiv>
//         )}
//       </Navigation>

//       {/* ================= MOBILE OVERLAY ================= */}

//       <Overlay
//         open={mobileOpen}
//         onClick={() => setMobileOpen(false)}
//       />

//       {/* ================= SIDEBAR ================= */}

//       <SidebarNav
//         collapsed={sidebar}
//         mobileOpen={mobileOpen}
//         onMouseLeave={() => {
//           if (!isMobile && sidebar) {
//             setSubmenu(null);
//           }
//         }}
//       >
//         {renderMenu()}
//       </SidebarNav>

//       {/* ================= DESKTOP COLLAPSE TAB ================= */}

//       <DesktopCollapseButton
//         type="button"
//         collapsed={sidebar}
//         onClick={toggleSidebar}
//         aria-label="Collapse sidebar"
//       >
//         {sidebar ? (
//           <MdIcons.MdOutlineArrowForwardIos />
//         ) : (
//           <MdIcons.MdOutlineArrowBackIosNew />
//         )}
//       </DesktopCollapseButton>

//       {/* ================= PAGE CONTENT ================= */}

//       <MainContent collapsed={sidebar}>
//         <ContentInner>
//           <Sharesidebar.Provider value={sidebar}>
//             <Outlet />
//           </Sharesidebar.Provider>
//         </ContentInner>
//       </MainContent>
//     </King>
//   );
// };

// export default Sidebar;






































































































































import React, {
  useEffect,
  useState,
  useRef,
} from "react";

import styled from "@emotion/styled";

import { VscMenu } from "react-icons/vsc";

import * as MdIcons from "react-icons/md";

import * as RiIcons from "react-icons/ri";

import {
  FaUserCircle,
} from "react-icons/fa";

import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  decodeToken,
} from "react-jwt";

import Sidebardata from "./Sidebardata";


/* =========================================================
   CONSTANTS
========================================================= */

const HEADER_HEIGHT = 58;

const SIDEBAR_EXPANDED = 260;

const SIDEBAR_COLLAPSED = 68;

const MOBILE_BREAKPOINT = 768;


/* =========================================================
   LAYOUT
========================================================= */

const King = styled.div`
  min-height: 100vh;

  width: 100%;

  background: #f8f8f8;

  overflow-x: hidden;
`;


/* =========================================================
   NAVIGATION
========================================================= */

const Navigation = styled.header`
  position: fixed;

  top: 0;

  left: 0;

  right: 0;

  height: ${HEADER_HEIGHT}px;

  z-index: 1000;

  display: flex;

  align-items: center;

  justify-content: space-between;

  background: black;

  color: violet;

  box-sizing: border-box;
`;


/* =========================================================
   NAV LEFT
========================================================= */

const NavLeft = styled.div`
  display: flex;

  align-items: center;

  height: 100%;

  min-width: 0;
`;


/* =========================================================
   MENU BUTTON
========================================================= */

const Naviconburger = styled.button`
  width: ${HEADER_HEIGHT}px;

  height: ${HEADER_HEIGHT}px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: none;

  outline: none;

  background: transparent;

  color: violet;

  font-size: 2rem;

  cursor: pointer;

  flex-shrink: 0;

  &:hover {
    background: #222;
  }

  &:active {
    background: #333;
  }
`;


/* =========================================================
   LOGO
========================================================= */

const Logodiv = styled.div`
  font-size: 1.5rem;

  font-weight: 500;

  color: violet;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;

  @media (max-width: 767px) {
    font-size: 1.05rem;

    max-width: 180px;
  }

  @media (max-width: 400px) {
    font-size: 0.95rem;

    max-width: 145px;
  }
`;


/* =========================================================
   REGISTER
========================================================= */

const Registerdiv = styled.div`
  display: flex;

  align-items: center;

  gap: 8px;

  margin-right: 20px;

  @media (max-width: 767px) {
    margin-right: 8px;

    a:first-child {
      display: none;
    }
  }
`;


const SignIn = styled.button`
  font-size: 0.85rem;

  color: white;

  border: none;

  font-weight: bold;

  padding: 8px 12px;

  background-color: green;

  border-radius: 7px;

  cursor: pointer;
`;


const SignUp = styled.button`
  font-size: 0.85rem;

  padding: 8px 12px;

  color: white;

  background-color: blue;

  border: none;

  cursor: pointer;

  border-radius: 7px;

  font-weight: bold;
`;


/* =========================================================
   PROFILE
========================================================= */

const Wholeprofile = styled.div`
  position: relative;

  height: 100%;

  margin-right: 18px;

  @media (max-width: 767px) {
    margin-right: 6px;
  }
`;


const Profileshow = styled.button`
  height: ${HEADER_HEIGHT}px;

  display: flex;

  align-items: center;

  gap: 7px;

  padding: 0 8px;

  color: violet;

  background: transparent;

  border: none;

  outline: none;

  cursor: pointer;

  &:hover {
    background: #222;
  }

  &:active {
    background: #333;
  }
`;


const Showusername = styled.span`
  max-width: 180px;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  @media (max-width: 767px) {
    display: none;
  }
`;


const Iconimage = styled.span`
  display: flex;

  align-items: center;

  font-size: 1.35rem;
`;


/* =========================================================
   PROFILE DROPDOWN
========================================================= */

const Profilehide = styled.div`
  position: absolute;

  right: 0;

  top: ${HEADER_HEIGHT}px;

  min-width: 220px;

  background: #111;

  border: 1px solid #333;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.4);

  z-index: 2000;

  @media (max-width: 767px) {
    min-width: 205px;
  }
`;


const Settingrow = styled(Link)`
  display: flex;

  align-items: center;

  gap: 10px;

  padding: 12px 14px;

  color: white;

  text-decoration: none;

  &:hover {
    background: #333;
  }
`;


const Icons = styled.span`
  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 1.15rem;

  flex-shrink: 0;
`;


/* =========================================================
   MOBILE OVERLAY
========================================================= */

const Overlay = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: ${({ open }) =>
      open ? "block" : "none"};

    position: fixed;

    top: ${HEADER_HEIGHT}px;

    left: 0;

    right: 0;

    bottom: 0;

    z-index: 900;

    background:
      rgba(0, 0, 0, 0.55);
  }
`;


/* =========================================================
   SIDEBAR
========================================================= */

const SidebarNav = styled.aside`
  position: fixed;

  top: ${HEADER_HEIGHT}px;

  left: 0;

  bottom: 0;

  width: ${({ collapsed }) =>
    collapsed
      ? `${SIDEBAR_COLLAPSED}px`
      : `${SIDEBAR_EXPANDED}px`};

  z-index: 950;

  background: black;

  color: white;

  overflow-x: hidden;

  overflow-y: auto;

  box-sizing: border-box;

  transition:
    width 0.2s ease;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #111;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;

    border-radius: 20px;
  }

  @media (max-width: 767px) {
    width: min(290px, 82vw);

    transform:
      ${({ mobileOpen }) =>
        mobileOpen
          ? "translateX(0)"
          : "translateX(-105%)"};

    transition:
      transform 0.25s ease;

    box-shadow:
      ${({ mobileOpen }) =>
        mobileOpen
          ? "8px 0 30px rgba(0,0,0,0.45)"
          : "none"};
  }
`;


/* =========================================================
   MENU
========================================================= */

const MenuItem = styled.div`
  width: 100%;
`;


const MainMenu = styled.div`
  min-height: 52px;

  width: 100%;

  display: flex;

  align-items: center;

  color: white;

  cursor: pointer;

  box-sizing: border-box;

  &:hover {
    background: #222;
  }
`;


const MainMenuLink = styled(Link)`
  min-height: 52px;

  width: 100%;

  display: flex;

  align-items: center;

  color: white;

  text-decoration: none;

  box-sizing: border-box;

  &:hover {
    background: #222;
  }
`;


/* =========================================================
   MENU ICON
========================================================= */

const IconBox = styled.span`
  width: ${SIDEBAR_COLLAPSED}px;

  min-width: ${SIDEBAR_COLLAPSED}px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 1.4rem;

  color: violet;

  @media (max-width: 767px) {
    width: 55px;

    min-width: 55px;
  }
`;


/* =========================================================
   MENU TITLE
========================================================= */

const MenuTitle = styled.span`
  flex: 1;

  font-size: 1rem;

  color: white;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
`;


/* =========================================================
   ARROW
========================================================= */

const ArrowBox = styled.span`
  display: flex;

  align-items: center;

  justify-content: center;

  padding-right: 15px;

  color: violet;

  font-size: 1.1rem;
`;


/* =========================================================
   SUBMENU
========================================================= */

const Submenu = styled.div`
  background: #111;

  width: 100%;
`;


const SubmenuLink = styled(Link)`
  min-height: 44px;

  display: flex;

  align-items: center;

  padding:
    8px 14px 8px 70px;

  color: violet;

  text-decoration: none;

  font-size: 0.95rem;

  white-space: nowrap;

  box-sizing: border-box;

  &:hover {
    background: blue;

    color: white;
  }

  @media (max-width: 767px) {
    min-height: 48px;

    padding-left: 55px;

    font-size: 0.95rem;
  }
`;


/* =========================================================
   COLLAPSED DESKTOP POPUP
========================================================= */

const HoverPopup = styled.div`
  position: fixed;

  top: ${({ top }) =>
    `${top}px`};

  left:
    ${SIDEBAR_COLLAPSED + 4}px;

  min-width: 220px;

  background: #111;

  border: 1px solid #333;

  z-index: 2000;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.4);

  @media (max-width: 767px) {
    display: none;
  }
`;


const PopupTitle = styled.div`
  padding: 11px 14px;

  color: white;

  background: blue;

  font-weight: bold;
`;


const PopupLink = styled(Link)`
  display: flex;

  align-items: center;

  padding: 11px 14px;

  color: violet;

  text-decoration: none;

  &:hover {
    background: blue;

    color: white;
  }
`;


/* =========================================================
   MAIN CONTENT
========================================================= */

const MainContent = styled.main`
  min-height:
    calc(100vh - ${HEADER_HEIGHT}px);

  margin-left:
    ${({ collapsed }) =>
      collapsed
        ? `${SIDEBAR_COLLAPSED}px`
        : `${SIDEBAR_EXPANDED}px`};

  padding-top:
    ${HEADER_HEIGHT}px;

  box-sizing: border-box;

  transition:
    margin-left 0.2s ease;

  @media (max-width: 767px) {
    margin-left: 0;

    width: 100%;

    padding-top:
      ${HEADER_HEIGHT}px;
  }
`;


/* =========================================================
   CONTENT
========================================================= */

const ContentInner = styled.div`
  min-height:
    calc(100vh - ${HEADER_HEIGHT}px);

  margin: 8px;

  padding: 20px;

  background: white;

  border-radius: 20px;

  box-sizing: border-box;

  overflow-x: auto;

  @media (max-width: 767px) {
    margin: 0;

    padding: 14px;

    border-radius: 0;

    min-height:
      calc(100vh - ${HEADER_HEIGHT}px);
  }
`;


/* =========================================================
   DESKTOP COLLAPSE BUTTON
========================================================= */

const DesktopCollapseButton = styled.button`
  position: fixed;

  left:
    ${({ collapsed }) =>
      collapsed
        ? `${SIDEBAR_COLLAPSED}px`
        : `${SIDEBAR_EXPANDED}px`};

  top: 42%;

  width: 20px;

  height: 90px;

  z-index: 980;

  display: flex;

  align-items: center;

  justify-content: center;

  border: none;

  border-radius:
    0 8px 8px 0;

  background: purple;

  color: white;

  cursor: pointer;

  transition:
    left 0.2s ease;

  @media (max-width: 767px) {
    display: none;
  }
`;


/* =========================================================
   CONTEXT
========================================================= */

export const Sharesidebar =
  React.createContext();


/* =========================================================
   SIDEBAR COMPONENT
========================================================= */

const Sidebar = () => {

  /*
    false = expanded desktop sidebar

    true = collapsed desktop sidebar
  */

  const [sidebar, setSidebar] =
    useState(false);


  const [mobileOpen, setMobileOpen] =
    useState(false);


  const [submenu, setSubmenu] =
    useState(null);


  const [showProfile, setShowProfile] =
    useState(false);


  /*
    ========================================================
    PROFILE REF

    This is the important part for the
    outside-click functionality.

    The ref covers BOTH:

      1. The profile button
      2. The account settings dropdown

    Therefore clicking anywhere inside either
    one will NOT close the dropdown.
  */

  const profileRef =
    useRef(null);


  const [isMobile, setIsMobile] =
    useState(
      typeof window !== "undefined"
        ? window.innerWidth <
          MOBILE_BREAKPOINT
        : false
    );


  const [isloggedin, setLoggedIn] =
    useState(false);


  const [username, setUsername] =
    useState("");


  const location =
    useLocation();


  /* =======================================================
     RESPONSIVE SCREEN DETECTION
  ======================================================= */

  useEffect(() => {

    const handleResize = () => {

      const mobile =
        window.innerWidth <
        MOBILE_BREAKPOINT;


      setIsMobile(mobile);


      if (!mobile) {

        setMobileOpen(false);

      }

    };


    handleResize();


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  /* =======================================================
     CLOSE MENUS AFTER ROUTE CHANGE
  ======================================================= */

  useEffect(() => {

    setMobileOpen(false);

    setShowProfile(false);

    setSubmenu(null);

  }, [location.pathname]);


  /* =======================================================
     OUTSIDE CLICK FOR ACCOUNT DROPDOWN
  ======================================================= */

  useEffect(() => {

    const handleClickOutside = (
      event
    ) => {

      /*
        If profileRef exists AND the
        clicked element is outside it,
        close the profile dropdown.
      */

      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target
        )
      ) {

        setShowProfile(false);

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);


  /* =======================================================
     AUTHENTICATION
  ======================================================= */

  useEffect(() => {

    const token =
      localStorage.getItem(
        "accessToken"
      );


    if (!token) {

      setLoggedIn(false);

      window.location.href =
        "/signin";

      return;

    }


    try {

      const decoded =
        decodeToken(token);


      const email =
        decoded?.user?.email;


      if (email) {

        setLoggedIn(true);


        const name =
          email.substring(
            0,
            email.lastIndexOf("@")
          );


        setUsername(name);

      } else {

        setLoggedIn(false);

      }

    } catch (error) {

      console.error(
        "Invalid access token:",
        error
      );


      setLoggedIn(false);

    }

  }, []);


  /* =======================================================
     TOGGLE SIDEBAR
  ======================================================= */

  const toggleSidebar = () => {

    if (isMobile) {

      setMobileOpen(
        previous =>
          !previous
      );

      return;

    }


    setSidebar(
      previous =>
        !previous
    );


    setSubmenu(null);

  };


  /* =======================================================
     TOGGLE SUBMENU
  ======================================================= */

  const toggleSubmenu = (
    index
  ) => {

    if (submenu === index) {

      setSubmenu(null);

    } else {

      setSubmenu(index);

    }

  };


  /* =======================================================
     TOGGLE PROFILE
  ======================================================= */

  const toggleProfile = () => {

    setShowProfile(
      previous =>
        !previous
    );

  };


  /* =======================================================
     LOGOUT
  ======================================================= */

  const handleLogout = () => {

    localStorage.removeItem(
      "accessToken"
    );


    localStorage.removeItem(
      "refreshToken"
    );


    window.location.href =
      "/signin";

  };


  /* =======================================================
     RENDER MENU
  ======================================================= */

  const renderMenu = () => {

    return Sidebardata.map(
      (menu, index) => {

        const hasSubmenu =
          Array.isArray(
            menu.submenu
          ) &&
          menu.submenu.length > 0;


        const isOpen =
          submenu === index;


        /*
          ==================================================
          COLLAPSED DESKTOP
          ==================================================
        */

        if (
          !isMobile &&
          sidebar
        ) {

          return (

            <MenuItem
              key={index}

              onMouseEnter={() => {

                if (hasSubmenu) {

                  setSubmenu(index);

                }

              }}

              onMouseLeave={() => {

                if (hasSubmenu) {

                  setSubmenu(null);

                }

              }}
            >

              {hasSubmenu ? (

                <>

                  <MainMenu>

                    <IconBox>
                      {menu.icon}
                    </IconBox>

                  </MainMenu>


                  {isOpen && (

                    <HoverPopup
                      top={
                        HEADER_HEIGHT +
                        index * 52
                      }

                      onMouseEnter={() =>
                        setSubmenu(
                          index
                        )
                      }

                      onMouseLeave={() =>
                        setSubmenu(
                          null
                        )
                      }
                    >

                      <PopupTitle>
                        {menu.title}
                      </PopupTitle>


                      {menu.submenu.map(
                        (
                          dropdownmenu,
                          subIndex
                        ) => (

                          <PopupLink
                            key={
                              subIndex
                            }

                            to={
                              dropdownmenu.path
                            }
                          >

                            {dropdownmenu.icon && (

                              <span
                                style={{
                                  marginRight:
                                    "8px",

                                  display:
                                    "flex",
                                }}
                              >

                                {
                                  dropdownmenu.icon
                                }

                              </span>

                            )}


                            {
                              dropdownmenu.title
                            }

                          </PopupLink>

                        )
                      )}

                    </HoverPopup>

                  )}

                </>

              ) : (

                <MainMenuLink
                  to={menu.path}
                >

                  <IconBox>
                    {menu.icon}
                  </IconBox>

                </MainMenuLink>

              )}

            </MenuItem>

          );

        }


        /*
          ==================================================
          EXPANDED DESKTOP + MOBILE
          ==================================================
        */

        return (

          <MenuItem
            key={index}
          >

            {hasSubmenu ? (

              <MainMenu
                onClick={() =>
                  toggleSubmenu(
                    index
                  )
                }
              >

                <IconBox>
                  {menu.icon}
                </IconBox>


                <MenuTitle>
                  {menu.title}
                </MenuTitle>


                <ArrowBox>

                  {isOpen

                    ? menu.iconOpen ||
                      (
                        <MdIcons.MdExpandLess />
                      )

                    : menu.iconClosed ||
                      (
                        <MdIcons.MdExpandMore />
                      )

                  }

                </ArrowBox>

              </MainMenu>

            ) : (

              <MainMenuLink
                to={menu.path}

                onClick={() => {

                  if (isMobile) {

                    setMobileOpen(
                      false
                    );

                  }

                }}
              >

                <IconBox>
                  {menu.icon}
                </IconBox>


                <MenuTitle>
                  {menu.title}
                </MenuTitle>

              </MainMenuLink>

            )}


            {hasSubmenu &&
              isOpen && (

                <Submenu>

                  {menu.submenu.map(
                    (
                      dropdownmenu,
                      subIndex
                    ) => (

                      <SubmenuLink
                        key={
                          subIndex
                        }

                        to={
                          dropdownmenu.path
                        }

                        onClick={() => {

                          if (
                            isMobile
                          ) {

                            setMobileOpen(
                              false
                            );

                          }

                        }}
                      >

                        {dropdownmenu.icon && (

                          <span
                            style={{
                              marginRight:
                                "8px",

                              display:
                                "flex",
                            }}
                          >

                            {
                              dropdownmenu.icon
                            }

                          </span>

                        )}


                        {
                          dropdownmenu.title
                        }

                      </SubmenuLink>

                    )
                  )}

                </Submenu>

              )}

          </MenuItem>

        );

      }
    );

  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <King>

      {/* =================================================
          HEADER
      ================================================= */}

      <Navigation>

        <NavLeft>

          <Naviconburger
            type="button"

            onClick={
              toggleSidebar
            }

            aria-label="Toggle navigation"
          >

            {isMobile

              ? (

                mobileOpen

                  ? (
                    <MdIcons.MdClose />
                  )

                  : (
                    <VscMenu />
                  )

              )

              : (

                sidebar

                  ? (
                    <VscMenu />
                  )

                  : (
                    <MdIcons.MdOutlineClose />
                  )

              )

            }

          </Naviconburger>


          <Logodiv>
            RentSure PMSAfrica
          </Logodiv>

        </NavLeft>


        {/* =================================================
            PROFILE
        ================================================= */}

        {isloggedin ? (

          /*
            ==================================================
            PROFILE CONTAINER

            IMPORTANT:

            The ref is attached to Wholeprofile.

            This means:

            Profile button = inside

            Dropdown = inside

            Anything outside = closes dropdown
            ==================================================
          */

          <Wholeprofile
            ref={profileRef}
          >

            <Profileshow
              type="button"

              onClick={
                toggleProfile
              }

              aria-label="User menu"
            >

              <Iconimage>

                <FaUserCircle />

              </Iconimage>


              <Showusername>
                {username}
              </Showusername>


              <MdIcons.MdExpandMore />

            </Profileshow>


            {showProfile && (

              <Profilehide>

                <Settingrow
                  to="#"
                >

                  <Icons>
                    <RiIcons.RiUserSettingsLine />
                  </Icons>

                  My Account Settings

                </Settingrow>


                <Settingrow
                  to="#"
                >

                  <Icons>
                    <RiIcons.RiTeamLine />
                  </Icons>

                  My Team Members

                </Settingrow>


                <Settingrow
                  to="#"
                >

                  <Icons>
                    <MdIcons.MdSupportAgent />
                  </Icons>

                  Help and Support

                </Settingrow>


                <Settingrow
                  to="/signin"

                  onClick={
                    handleLogout
                  }
                >

                  <Icons>
                    <MdIcons.MdPowerSettingsNew />
                  </Icons>

                  Log Out

                </Settingrow>

              </Profilehide>

            )}

          </Wholeprofile>

        ) : (

          <Registerdiv>

            <Link to="/signin">

              <SignIn>
                SIGN IN
              </SignIn>

            </Link>


            <Link to="/signup">

              <SignUp>
                SIGN UP
              </SignUp>

            </Link>

          </Registerdiv>

        )}

      </Navigation>


      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      <Overlay
        open={mobileOpen}

        onClick={() =>
          setMobileOpen(false)
        }
      />


      {/* =================================================
          SIDEBAR
      ================================================= */}

      <SidebarNav
        collapsed={sidebar}

        mobileOpen={mobileOpen}

        onMouseLeave={() => {

          if (
            !isMobile &&
            sidebar
          ) {

            setSubmenu(null);

          }

        }}
      >

        {renderMenu()}

      </SidebarNav>


      {/* =================================================
          DESKTOP COLLAPSE BUTTON
      ================================================= */}

      <DesktopCollapseButton
        type="button"

        collapsed={sidebar}

        onClick={
          toggleSidebar
        }

        aria-label="Collapse sidebar"
      >

        {sidebar

          ? (
            <MdIcons.MdOutlineArrowForwardIos />
          )

          : (
            <MdIcons.MdOutlineArrowBackIosNew />
          )

        }

      </DesktopCollapseButton>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <MainContent
        collapsed={sidebar}
      >

        <ContentInner>

          <Sharesidebar.Provider
            value={sidebar}
          >

            <Outlet />

          </Sharesidebar.Provider>

        </ContentInner>

      </MainContent>

    </King>

  );

};


export default Sidebar;
