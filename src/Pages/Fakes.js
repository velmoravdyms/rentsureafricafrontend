import React from 'react'
import styled from "@emotion/styled"


import { useLocation,Outlet } from 'react-router-dom'
// const logo= require ("./easy4.png")
//<div style={{width:"300px", height:"450px", margin:"2rem auto", backgroundColor:"yellow"}}>
//<iframe style={{frameborder:"0", scrolling:"yes" , marginheight:"0", marginwidth:"0"}} src="https://maps.google.com/maps?width=1400&amp;height=940&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Easy%20Clicks%20Map)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"></iframe>
//
//</div>

const image= require ("../easyclicksimages/PRESTASHOP12.png")

const Div= styled.div`
    margin:3rem;
    color:white;
    font-size:3rem; 
    text-align:center;
    background-image:url(${image});
    height:76.40vh;
    width:700px;
    background-color:green;
    background-postion:center;
    background-repeat:no-repeat;
    bacground-size:cover;
`

 const Fake=()=>{


    const location = useLocation();
    console.log("Current Route:", location.pathname);
  
    return (
        <Div>
    
            <p>What the fuck is going on with these styledd components shit</p>            
            {/* <Outlet /> */}
        </Div>

     
    )
}


export default Fake;
