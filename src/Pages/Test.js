

import React,{useRef, useState, useEffect} from 'react'
import styled from '@emotion/styled'

import { useLocation,Outlet } from 'react-router-dom';

const Div= styled.div`
    overflow:scroll;
    width:95%;
    height:90%;
    font-size:2.5rem;
    background-color:blue;
    color:white;
    text-align:left;
    border-radius:20px;
    // margin:20px auto;
`
function Test() {
  const location = useLocation();
  console.log("Current Route:", location.pathname);

  

  return (
    <Div styled={{backgroundColor:"green"}}>
        <div style={{marginLeft:"1rem"} }>Work still in progress, therefore if you land on this page, just know that this is just for testing of the routing of the application purposes, when ready you will have all the time to test our products EasyClicks PMS software to your satisfaction, kindly bare with us as we work to complete this project, Thanks You.             Work still in progress, therefore if you land on this page, just know that this is just for testing of the routing of the application purposes, when ready you will have all the time to test our products EasyClicks PMS software to your satisfaction, kindly bare with us as we work to complete this project, Thanks You.   </div>
        {/* <Outlet/> */}
     </Div>
    );
}


export default Test