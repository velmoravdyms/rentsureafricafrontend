/*
// import * as GiIcons from "react-icons/gi"
// import  getCurrentUser  from "./Auth.services"
// import * as RiIcons from "react-icons/ri"
// import { BsWindowSidebar } from "react-icons/bs"






const Logodiv=styled.div`

`
 <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" /> 
const logo= require ("./easyclickslogo.png")

`
*/
import React, {useState, useEffect} from "react"
import styled from "@emotion/styled"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import Sidebardata from "./Sidebardata"
import { Link, Outlet} from "react-router-dom"
import * as RiIcons from "react-icons/ri"
import Submenu from "./Submenu"
import {FaUserCircle} from "react-icons/fa"
// console.log(logo)

const logo= require ("./easy4.png")


const Nav = styled.div`
// position:fixed;
// overflow:scroll;
// top:0;
// height:100vh;
  display:grid;
  grid-template-columns: ${({sidebar})=> sidebar ? `1fr 3fr ` : ` 10.5% 89.5% `} ;
  grid-template-rows:51px  auto ;


`



const Logodiv=styled.div`
// color:white;
grid-column: 1/2;
grid-row:  1/2;
position:fixed;
overflow:hidden;olor:indigo;
display:flex;
justify-content:center;
  ` 
const Switchdiv= styled.div`
grid-column:2/3;
grid-row:2/3;
background-color:indigo;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ;


`

const Navdiv= styled.div`
position:fixed;
top:0;
left:20%;

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
const Tenantlogo= styled.div`
text-transform:uppercase;
color:white;
margin-left:1rem;
font-weight:bold;

`
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

const Naviconburger= styled(Link)` 
  list-style:none;
  padding:0.5rem;
  color:violet;
  font-size:3rem;
  text-decoration:none;
 
` 
// const Scroll=styled.div`
// background-color:yellow;
// display:flex;

// justify-content:space-between;
// align-items:center;
// `
// const Openscroll=styled.div`
// color:blue;
// width:20px;
// display:flex;

// overflow:hidden;
// height:100vh;
// z-index:11;
// `

   
  const Wholeprofile=styled.div`
    left:85%;
    position:fixed; 
    top:0;
    color:white;

  
  `
  const Profile  = styled.div`



  `
  const Profileshow = styled(Link)`
    display:flex;
    justify-content:space-evenly;
    color:green;
    background-color:black;
    outline:none;
    border:none;
    align-items:center;
    text-align:center;
    height:50px;
    text-decoration:none;
    display:flex;;

    &:hover{
      background-color:#EFEBF3;
      padding:0 0.7rem;
    } 
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
  const Profilehide = styled.div`
  background-color:blue;


  // padding-top:2rem;
  // margin-top:2rem;
  top:70px;
  
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





  
const Sidebar = () => {
  const [sidebar, setSidebar ]= useState(false);
  const [isloggedin, setloggedIn]= useState(false);
  const [showProfile, setshowProfile]= useState(false)
        
  const showSidebar= ()=> {
      setSidebar(!sidebar) 
    } 
    
    const handleshowProfile = ()=> {
      setshowProfile(!showProfile)  
    } 

    const handleLogout= ()=>{
      localStorage.removeItem("user")
      window.location.href="/"

    }

  
  console.log("here is the accutal boolean value" + showProfile)
  // console.log(getCurrentUser)
    const logedin=JSON.parse(localStorage.getItem("user"))
    // console.log(logedin);
  

    var name;
    if(logedin===null){
      console.log("No Cashed cookies")
    } 
    else{
      var email = logedin.data.email;
      console.log("this is the email" + email)
      name= email.substring(0, email.lastIndexOf("@"))
    }

  useEffect(()=>{
    if(logedin===null){
      console.log("No Cashed cookies")
    } 
    else{
      if(logedin.data.accesstoken){
        setloggedIn(true)
       
        // console.log("show isLogged In" + isloggedin)
        
      }
      else{
        setloggedIn(false)
        // console.log("not logged In")
      }
    }
    

  }, [isloggedin])

  // console.log("show isLogged In?" + isloggedin)

  return(
  <div>
    <Nav sidebar={sidebar? 1: 0}>
      <Logodiv >
          <Logo >
            <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" /> 
          </Logo>
      </Logodiv>
      <Navigation>
        <Tenantlogo>

          Tenant Logo
        </Tenantlogo>
        <Navdiv>
          <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
              {sidebar?  <MdIcons.MdOutlineClose /> : <VscMenu />}
          </Naviconburger>
        </Navdiv>
        {isloggedin ?  
          <Wholeprofile >
            
            <Profile>

                  

                <Profileshow to="#" onClick={handleshowProfile}>
                  <Iconimage >< FaUserCircle /></Iconimage>
                  <Showusername>{name}</Showusername>
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
      <SidebarNav sidebar={sidebar? 1 :0}>
              {Sidebardata.map((menu,index) => { 
                return <Submenu menu={menu} key={index}/>
              })}    
      </SidebarNav>
        {/* <Openscroll>pw
          HERE IS THE CLOSE AND OPEN ICON
        </Openscroll> */}
        {/* <Scroll>
      </Scroll> */}
    
      <Switchdiv>
          <Outlet />
      </Switchdiv>                               
    </Nav>
</div>

  
  


    )
};

export default Sidebar;
