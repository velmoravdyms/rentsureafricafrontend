import React from 'react'

import {Link} from "react-router-dom"
 import styled from "@emotion/styled"



const Nav=styled `
width:100%;
padding-left:1rem;
height:100px;
display:flex;
jusfycontent:start;
align-items:center;
color:white;
background-color:green;
`

const Loginlink=styled(Link)`

`
const Body=styled `
margin-left:0.5rem;

`



function VerificationSuccess() {
  
    return(
        <div >
            <Nav>
                <h3>  Your Account has successfully Been Verified</h3>
            </Nav>
            <Body>
                <p>Thank you for taking the time to verify your account, you can now login using the link below Please Login</p>
                <p>
                    Use this link <Loginlink to="/signin">Login</Loginlink> to login to your account    

                </p>
        
            </Body>



        </div>
        
    )
  
}

export default VerificationSuccess