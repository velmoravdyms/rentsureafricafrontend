import React from 'react'

import {Link} from "react-router-dom"
 import styled from "@emotion/styled"

 const Nav=styled `
 width:100%;
 padding-left:1rem;
 height:70px;
 display:flex;
 jusfycontent:start;
 align-items:center;
 color:white;
 background-color:red;
 `
 
 const Loginlink=styled(Link)`
 
 
 
 `
 const Body=styled `
 margin-left:0.5rem;
 
 `



function Verifyfail() {
  
    return(
        <div >
            <Nav>
                <h3>  Your Account is not yet Verified, Please check your email and verify You email</h3>
            </Nav>
            <Body>
                <p>Thank you for taking the time to verify your account, Please Check your Email to Verify Your Email</p>
                <p>
                    Use this link <Loginlink to="/signup">Sign Up</Loginlink> to Sign up to your account    

                </p>
        
            </Body>



        </div>
        
    ) 

}

export default Verifyfail