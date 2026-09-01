
// require ("dotenv").config() 
// import React, {useState, useEffect, createContext, useContext} from "react"
import React, {useState, useEffect, createContext} from "react"


import styled from "@emotion/styled"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
//import Empty from "../Pages/Empty"
import Tenantsidebardata from "./Tenantsidebardata"
import { Link, Outlet} from "react-router-dom"
import * as RiIcons from "react-icons/ri"
// import Submenu from "./Submenu"
import {FaUserCircle} from "react-icons/fa"
// import xDownloadOptions from "helmet/dist/types/middlewares/x-download-options"
// console.log(logo)
import {decodeToken} from "react-jwt";
// import env from "react-dotenv"
// const logo= require ("./easyclickslogo.png")
// const logo= require ("../easyclicksimages/easy4.png")

const King= styled.div`
position:fixed;
width:100%;
height:100%;
top:0;
left:0; 
background-color:#F8F8F8;

// background-color:yellow;


`
const Nav = styled.div`
  // display:grid;
  // grid-template-columns: ${({sidebar})=> sidebar ? `4% 96% ` : `22.5% 77.5%`} ;
  // grid-template-rows:50px  auto ;
  background-color:blue;
  // display:none;

`
const Navigation=styled.div  `
position:fixed;
overflow:hidden;
display:flex;
top:0;
z-index:20;
left:0;
width:100%;
height:57px;
justify-content:space-between;
align-items:center;
// background-color:#F8F8F8;
background-color:black;
// box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;



`

const Navdiv= styled.div`
position:fixed;
top:10px;
left:0;
color:black;

`

const Naviconburger= styled(Link)` 
  list-style:none;
  padding:0.5rem;
  // color:rgb(85, 74, 74);
  color:violet;
  font-size:2.6rem;
  text-decoration:none;
 
`

const Logodiv=styled.div`
font-size:1.8rem;
font-weight:400;
Margin-left:4rem;
justify-item:center;
text-align:center;
color:violet;
// position:fixed;
// overflow:hidden;
// display:flex;
// justify-content:center;

`

const Logo= styled.div`
text-align:center;

`


const Registerdiv=styled.div`
margin-right:5rem;
display:flex;
height:25%;
justify-content:space-around;
align-items:center;

`
// const Tenantlogo= styled.div`
// text-transform:uppercase;
// color:white;
// margin-left:1rem;
// font-weight:bold;

// `
const SignIn=styled.button`
fontSize:4rem;
color:white;
border:none;
font-weight:bold;
padding:0.5rem;
background-color:green;
border-radius:7px;
border:none;
margin-right:1rem;
cursor:pointer;

`
const SignUp=styled.button`
fontSize:4rem;
padding:0.5rem;
color:white;
background-color:blue;
border:none;
cursor:pointer;
border-radius:7px;
font-weight:bold;
`


   
  const Wholeprofile=styled.div`
    right:3%;
    position:fixed; 
    top:0;
    color:white;

  
  `
  const Profile  = styled.div`
  
  `
  const Profileshow = styled(Link)`
    display:flex;
    // color:rgb(59, 57, 57);
    color:violet;
    // background-color:green;
    justify-content:space-evenly;
    outline:none;
    border:none;
    align-items:center;
    text-align:center;
    height:56px;
    text-decoration:none;
    display:flex;;

    &:hover{
      // background-color:#EFEBF3;
      background-color:white;
    } 
  `
  const Profilehide = styled.div`
  background-color:blue;
  top:70px;
  
  `
  const Showusername = styled.div`
  // margin-left:-2.5rem;
  
  `
  const Username = styled.div`

  
  `
  const Iconimage = styled.div`
    font-size:1.3rem;
    // margin-left:-1rem;
  

  `
  const Dropicon = styled.div`

  `
 
 const Settingrow = styled(Link)`
 padding:0.5rem 1rem;
 display:flex;
 color:white;
 text-decoration:none;
 &:hover{
  background-color: grey;
 };
 justify-content:space-evenly;
 text-align:center;
   
 `
 const Icons = styled.div`

   margin-right:0.5rem;
 `
// Here is some content from the drop xDownloadOptions, 
//  const Dropdownmenu= styled.div` 
//  padding:0rem;

// `



const SidebarNav=styled.div  `
position:absolute;
overflow:${({sidebar})=>sidebar?"hidden": "scroll"};
top:${({sidebar})=>sidebar? "56px":"58px"};
width:${({sidebar})=> sidebar ? "3.5%": "21.5%"};
// display:grid;
height:88vh;
color:violet;
left:${({sidebar})=> sidebar ? "0": "0"};
background-color:black;
box-sizing:border-box;

z-index:100;
// border-radius:20px;
// overflow-x:hidden;

::-webkit-scrollbar {
  width: 7.5px;               /* width of the entire scrollbar */
  height:7.5px;
}

::-webkit-scrollbar-track {
  background-color: #F5F5F5;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}
::-webkit-scrollbar-corner {
  background-color: #F8F8F8;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}


  @media (max-width: 768px) {
    width:${({sidebar})=> sidebar ? "10.5%": "70.5%"};

  }


`


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
// const Scroll=styled.div`
// background-color:violet;
// display:flex;
// text-align:center;
// position:fixed;
// left:${({sidebar})=> sidebar ? "3.6%": "21.5%" };
// top:0;
// z-index:10;
// width:10px;
// height:97.6vh;
// justify-content:space-between;

// `
const Openscroll=styled.div`
left:${({sidebar})=> sidebar ? "3.5%": "21.5%" };
z-index:10;
position:fixed;
text-decoration:none;
width:20px;
height:90px;
display:flex;
align-items:center;
color:white;
font-size:2px;
text-align:center;
background-color:purple;
border-top-right-radius:16%;
top:40%;
border-bottom-right-radius:16%;
&hover:{
  cursor:pointer;

}



@media (max-width: 768px) {
  width:${({sidebar})=> sidebar ? "17px": "18px"};
  left:${({sidebar})=>sidebar ? "10.5%": "70%"}  ;
  height:${({sidebar})=> sidebar ? "40px": "40px"};
  // background-color:yellow; 
  font-size:2px;
}


`

const Switchdiv= styled.div`
 position:fixed;
 top:65px;
 border-radius:20px;
 left:${({sidebar})=> sidebar ? "5.2%": "23.2%"};
 width:${({sidebar})=> sidebar ? "93.8%": "75.8%"};


//  left:${({sidebar})=> sidebar ? "5.2%": "5.2%"};
//  width:${({sidebar})=> sidebar ? "93.8%": "93.8%"};


 height:86vh;
 background-color:green;
 
 //  border:3px solid black;
//  overflow-x:hidden;
//  overflow-y:scroll;
// display:none;



@media (max-width: 768px) {
  width:${({sidebar})=> sidebar ? "97%": "97%"};
  left:${({sidebar})=>sidebar ? "15%": "15%"}
}

`

const Submenuwrap= styled(Link)`
    display:flex;
    padding:0.5rem 0;
    text-decoration:none;
    align-items:center;
    box-sizing:border-box;
    margin-right:0rem;
    justify-content:space-between;
    width:${({sidebar})=>sidebar? "100%" : "100%"};
    &:hover {${({sidebar})=>sidebar? `background-color:blue` :`background-color:blue; margin-left:0.2rem`}}
    // &:hover {${({sidebar})=>sidebar? `background-color:blue; transition:0.2s;` :`background-color:blue; margin-left:0.2rem;  transition:0.5s;`}}
`
const Span=styled.span`
font-size:1.5rem;
color:white;
margin-left:${({sidebar})=> sidebar ? "1rem": "1.5rem"};

`
const Sidebarlebel= styled.span`
margin-left:1rem;
font-size:1.2rem;
color:white;
`

const Eachdropdowndiv= styled(Link)` 
text-decoration:none;
color:violet;
display:flex;
box-sizing:border-box;
margin-left:1.5rem;
justify-content:space-between;
align-items:center;
font-size:1.015rem;
padding: 0.5rem 1.5rem 0.5rem 1.5rem;  
&:hover {background-color:blue; padding-left:1.7rem;}

// &:hover {background-color:blue; padding-left:1.7rem;  transition:0.5s;}
`
const Eachdropdownsmalldiv= styled(Link)` 
text-decoration:none;
color:violet;
background-color:black;
display:flex;
box-sizing:border-box;
margin-left:1.5rem;
justify-content:space-between;
align-items:center;
font-size:1.15rem;
padding: 0.7rem 2rem 0.7rem 2rem;  
&:hover {background-color:green;  padding-left:2.1rem; }

// &:hover {background-color:green;  padding-left:2.1rem;  transition:0.2s;}
`
const Lebel=styled.div`
font-size:1rem;
align-self:center;
color:white;
font-weight:bold;
height:34px;
background-color:blue;
box-sizing:border-box;
`

const Lebele=styled.div`
color:white;
&:hover{background-color:green}
padding:0.5rem 0 0.5rem 0 ;
background-color:black;

`
const Fixed=styled.div`
position:fixed;
z-index:1;
margin-top:-2.72rem;
left:${({height})=> (height===4)? "5.07%" : "3.56%"};
box-sizing:border-box;
opacity:2;
color:grey;

`
// top:50px;
// if(height===0){"0px"} if(height===1){"0px"} if(height===2){"0"}   if(height===3){"100px"}  if(height===4){"200px"}  if(height===5){"300px"}  if(height===6){"400px"}  if(height===7){"500px"} if(height===8){"600px"}

const Dropdownmenu= styled.div` 
box-sizing:border-box;
box-sizing:border-box;

`


const Dropdownspan= styled.span` 

` 
const Dropdownsidebarlebel= styled.span` 

` 
export const  Sharesidebar=  createContext();
  
const TenantsDashboard = () => {
  const [sidebar, setSidebar ]= useState(false);
  const [height, setHeight]=useState()
  const [sub, setSub]= useState(false)
  const [submenu, setSubmenu]= useState()
  const [username, setuserName]=useState()
  // const [accesstoken, setaccessToken]=useState();
  // const [refreshToken, setRefreshToken]=useState();

  // const [hidesubmenu, sethidesubmenu ]= useState(true);

  const [isloggedin, setloggedIn]= useState(false);
  const [showProfile, setshowProfile]= useState(false)

  
  const showSidebar= ()=> {
    setSidebar(!sidebar) 
    // console.log(sidebar)
  } 
    
    const handleshowProfile = ()=> {
      setshowProfile(!showProfile)  
    } 
    
    const hideProfile=()=>{
      setshowProfile(!showProfile)  
    }


    const handleLogout= ()=>{
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      window.location.href="/signin"
      setloggedIn(false)
    }

    // const handlesubmenu=()=>{
    //  sethidesubmenu(!hidesubmenu)
    //   console.log( hidesubmenu);
    // }
  
    const handleSub= (id)=>{

      if(id===submenu){
        setSub(!sub)
        
      } 
      else{
        setSub(true);
     
      }
      // handlehideSubmenu(number)
      // console.log(sub);
    }

    const showSubmenu= (number)=>{
      handleSub(number)


      setSubmenu(number)

      if(number===4 || number===3 || number===2){
        setHeight(4)
      }else{
        setHeight()
      }
  }
        
  
    const logedin=(localStorage.getItem("accessToken"))
    // const accesstokenfromverify=(localStorage.getItem("accessToken"))
    const refreshtoken=(localStorage.getItem("refreshToken"))

    const decodeduser=decodeToken(logedin)
    // const decodedaccesstoken=decodeToken(accesstokenfromverify)
    const decodedrefreshtoken=decodeToken(refreshtoken)
    
    
    
    
    // jwt.verify(logedin, env.SECRET);
    
    console.log(logedin);
    console.log(decodeduser)
    // console.log(decodedaccesstoken);
    console.log(decodedrefreshtoken);


    //  if(logedin===null){
    //      setaccessToken();
    //      setloggedIn(false)
    //        window.location.href="/signin"
    //        console.log("No Cashed cookies")
    //  } 
    //  else{
    //    setaccessToken(logedin);
    //   //  setloggedIn(true)

    //  }



  // ********I commented out this in order to acess the dashboard, should be uncommentd for the programming progerss later

  useEffect(()=>{

   
    let name;
    let email; 


    if(logedin===null){
      setloggedIn(false)
       window.location.href="/signin"
        // window.location.href="/"

      console.log("No Cashed cookies")
    } 
    else{
      console.log("here is the decoded email ")
      console.log(decodeduser.user.email);
      console.log(decodeduser)

      if(decodeduser.user.email){
        console.log(decodeduser.user.email);
        setloggedIn(true);
        email = decodeduser.user.email;

        name= email.substring(0, email.lastIndexOf("@"))
        setuserName(name)
    
         console.log("show isLogged In" + isloggedin)
        
      }
      else{
    //    setloggedIn(false)
         console.log("not logged In")
      }
    }
    

  }, [isloggedin])
  
  
  console.log("show isLogged In?" + isloggedin)



  return(
  <King style={{}}>
    <Nav sidebar={sidebar? 1: 0}>
     
      <Navigation>
        <Logodiv>
          <Logo>
          {/* <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" />  */}
            Easy Clicks PMS 
          </Logo>
        </Logodiv>
     
         <Navdiv>
          <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
              {sidebar?   <VscMenu /> :<MdIcons.MdOutlineClose />}
          </Naviconburger>
        </Navdiv>

              
        {isloggedin ?  
          <Wholeprofile >
            
            <Profile onMouseEnter={handleshowProfile} onMouseLeave={hideProfile}>

                  

                <Profileshow to="#" >

                  <Iconimage >< FaUserCircle /></Iconimage>
                  <Showusername>{username}</Showusername>
                  <Dropicon><MdIcons.MdExpandMore/></Dropicon>
                </Profileshow>

                {showProfile &&
                <Profilehide>
                  <Settingrow to="#">
                    <Icons ><RiIcons.RiUserSettingsLine/></Icons>
                    <Username>My Account Settings</Username>
                  </Settingrow>

                  <Settingrow to="#">
                    <Icons><RiIcons.RiTeamLine/></Icons>
                    <Username>My Team Members</Username>
                  </Settingrow>

                  <Settingrow to="#">
                    <Icons><MdIcons.MdSupportAgent/></Icons>
                    <Username>Help and Support</Username>
                  </Settingrow>

                  <Settingrow to="#" onClick={handleLogout}>
                    <Icons style={{marginLeft:"-4.5rem"}} ><MdIcons.MdPowerSettingsNew/></Icons>
                    <Username style={{marginLeft:"-4.5rem"}} >Log Out</Username>
                  </Settingrow>
                  
                </Profilehide> 
            }

            </Profile>
          </Wholeprofile>
            :
              <Registerdiv>
                <Link to="/signin"><SignIn>SIGN IN</SignIn></Link> 
                <Link to="/signup"><SignUp>SIGN UP</SignUp></Link>    
              </Registerdiv>
        }
    </Navigation>
    {sidebar?
              <SidebarNav style={{zIndex:"10", backgroundColor:""}} sidebar={sidebar? 1: 0}>        
                          {Tenantsidebardata.map((menu,index) => {
               
                            return (
                                <div  sub={sub?1:0} style={{padding:"0", }} key={index}  >
                                  <Submenuwrap  onMouseEnter={()=>{showSubmenu(index)}} key={index}  style={{ }} sidebar={sidebar? 1:0} sub={sub?1:0} to={!menu.submenu && menu.path}>

                                    <Span sidebar={sidebar? 1: 0 } style={{fontSize:"", }}>{menu.icon} </Span>

                                  </Submenuwrap> 

                                  <Fixed onMouseLeave={()=>{setSub(false); setHeight()} } height={height}>

                                  {menu.submenu? 

                                  <Lebel style={{}}>                                                                                                                                                                                                           
                                  {(menu.submenu )? (submenu===index && sub) ? 
                                    <div style={{height:"2.3rem",     display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                      <div style={{marginLeft:"0.5rem"}}> {menu.title}</div> 
                                      
                                      <div style={{ marginRight:"1rem", color:"violet"}}>{submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }</div> 
                                    </div>
                                    : null : (submenu===index && sub) &&
                                          <div style={{color:"violet"}}><Link to={menu.path} style={{textDecoration:'none', color:"yellow"}}> {menu.title}</Link> </div>}
                                  </Lebel>  
                                  : 
                                  
                                  <Lebele style={{padding:"0.75rem 0"}}>                                                                                                                                                                                                           
                                  {(menu.submenu )? (submenu===index && sub) ? <div style={{}}><span> {menu.title}</span> <span>{submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }</span> </div> : null : (submenu===index && sub) && <div style={{}}><Link to={menu.path} style={{textDecoration:'none', color:"violet", padding:"0 0.5rem"}}> {menu.title}</Link> </div>}
                                  </Lebele>  
                                  
                                  }

                        
                                    {(submenu===index && menu.submenu && sub) && menu.submenu.map((dropdownmenu, index) =>  { 
                                                
                                            return(
                                                  <Dropdownmenu dropdownmenu={dropdownmenu} style={{   }} key={index} >
                                                        <Eachdropdownsmalldiv to={dropdownmenu.path} style={{ fontSize:"rem", padding:"0.3rem 0.5rem", margin:"0"}}>      
                                                            <Dropdownsidebarlebel style={{ fontSize:"rem" }}>{dropdownmenu.title}</Dropdownsidebarlebel>  
                                                        </Eachdropdownsmalldiv>
                                                        
                                                  </Dropdownmenu> 
                                            )   
                                      })

                                    }
                            
                                  </Fixed>
                                </div>
                            )    
                            })}  
              
              </SidebarNav>


      :
      <SidebarNav sidebar={sidebar? 1: 0}>        

          
        {Tenantsidebardata.map((menu,index) => {
            // return <Submenu key={index} menu={menu} number={index} to="#"/       
          return (
              <div key={index} style={{margin:"0", padding:"0"}}>
                <Submenuwrap sidebar={sidebar? 1:0} onClick={()=>{showSubmenu(index)}} sub={sub?1:0} to={!menu.submenu && menu.path}>
                {/* showSubmenu */}
                  <div style={{padding:"0", margin:"0"}}>
                    <Span >{menu.icon} </Span> 
                    <Sidebarlebel >{menu.title}</Sidebarlebel>
                  </div>
                  <Dropicon style={{color:"violet", marginRight:"0.7rem"}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                    {(submenu===index && menu.submenu && sub) ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }
                  </Dropicon>
              </Submenuwrap> 
                {(submenu===index && menu.submenu && sub) && menu.submenu.map((dropdownmenu, index) =>  {
                      return(                      
                        <Dropdownmenu sidebar={sidebar? 1:0} dropdownmenu={dropdownmenu} key={index+ 5} >
                          <Eachdropdowndiv to={dropdownmenu.path} >
                            <div>                          
                            <Dropdownspan >{dropdownmenu.icon} </Dropdownspan>
                            <Dropdownsidebarlebel>{dropdownmenu.title}</Dropdownsidebarlebel>
                            </div>
                          </Eachdropdowndiv>
                        </Dropdownmenu> 
                      )             
                  })    
              }         
            </div>
            )
        })}  

      </SidebarNav>
 
      }
    {/* <Scroll sidebar={sidebar? 1: 0} onClick={showSidebar}>
    </Scroll> */}
      <Openscroll to="#" sidebar={sidebar? 1: 0} onClick={showSidebar}>     
        <Link style={{fontSize:"1.35rem", color:"white"}} to="#"> {sidebar ? <MdIcons.MdOutlineArrowForwardIos/> : <MdIcons.MdOutlineArrowBackIosNew/>  }</Link>
      </Openscroll> 
    <Switchdiv sidebar={sidebar}> 
      <Sharesidebar.Provider value={sidebar}>
        <Outlet />
      </Sharesidebar.Provider>    
    </Switchdiv>                                
  </Nav>
</King>

  
  


    )
};

export default TenantsDashboard;
