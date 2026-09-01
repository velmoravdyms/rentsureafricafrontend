import React from "react"
// import { RiEyeCloseFill } from "react-icons/ri"
import { useParams } from "react-router-dom"
//  import styled from "@emotion/styled"
  import {verify} from "./Auth.services"
//   import {getAccessToken,getRefreshToken,setTokens,clearTokens} from "./tokenutils"
import {setTokens} from "./tokenutils"



// import { accessToken } from "mapbox-gl"

const VerifyEmail=()=>{
    var params = useParams()
    verify(params.verificationcode).then((response)=>{
        console.log(response)
        console.log(response.data)
        console.log(response.status)
        if(response.status===404){
            
            console.log("I can do the verification")
            // return console.log("if this works, I think we are don here")
            return window.location.href="/signin"
        }
        else if(response.status===200) {
            console.log("response 200")
            return window.location.href="/signin"
            
        }
        else{
            console.log("response otherwise and here below access and refreshtokens")
            console.log (response.data.accesstokens)
             console.log(response.data.refreshtokens);
            setTokens(response.data.accesstokens, response.data.refreshtokens);

            return window.location.href=(`/dashboard`)
        }
        
    }).catch(err=>{console.error(err); console.log("console.log error")})

    return(
        // <div>Wait as you are being redirected to the next page</div>   
        <></>
    )
 }
 
export default VerifyEmail