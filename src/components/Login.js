import React, {useRef, useState} from "react"
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import {isEmail} from "validator"
import {FaUserCircle} from "react-icons/fa"
import LoadingIcons from "react-loading-icons"
import {login} from "./Auth.services"
import styled from "@emotion/styled"
import * as BsIcons from "react-icons/bs"
import {Link} from "react-router-dom"
// import { createGlobalStyle } from "@emotion/styled"




// const GlobalStyle= createGlobalStyle`
//     html:{
//         background-color:#F0ECF5;
//     }

// `
// background-color:#F0ECF5;
const Registrationcontainer=styled.div`
     background-color:#EFEBF3;
    padding:0rem;
    height:75vh;
    text-align:center;
    max-width:400px;
    margin:6rem auto;
`

const Logincontainer=styled.div`
   width:90%;

   height:100%;
   margin:0rem auto;


`
const Iconimage=styled.div`
    padding-top:1rem;
    font-size:6.5rem;
    color:lightgrey;
`

const Emaildiv=styled.div`
    padding-top:0.5rem;
    
`
const Emailabel=styled.div`
    text-align:start;
    margin:0.2rem 0rem 0.2rem 2.5rem;
    font-size:1.2rem;
`
const Passwordlabel=styled.div`
    text-align:start;
    margin:0.2rem 0rem 0.2rem 2.5rem;
    font-size:1.2rem;
`

const Passwordiv=styled.div`
    padding-top:1.5rem;
    font-size:1rem;

`
const Showpassdiv=styled.div`
    display:flex;
    margin-left:2rem;
    width:82%;
    justify-content:space-between;
    
`

const IconButton=styled.span`
    justify-content: flex-end;
    font-size:1.5rem;
    margin-top:0.2rem;

`

const FormButtondiv=styled.div`
    padding-top:1rem;
`

const SpanIcon=styled.div`
    color:black;
    font-size:1rem;
`

const Spanbutton=styled.div`
     font-size:1rem;
`
const Button=styled.button`
    width:50%;
    margin: 0 auto;
    background-color:green;
    color: white;
    text-align:center;
    padding:0.5rem;
    border-radius:10px;
    border:none;
    font-size:1rem;
`
const Messagediv=styled.div`
    width:50%;
    
`
const Forgotpassdiv=styled.div`

padding:0rem;
margin:3rem 0 0 3rem;

`
// margin:2rem 0rem 0rem 6rem;
const Forgotpasslink=styled(Link)`
margin-left:10rem;
color:blue;
`


const Required=(value)=>{
    if(!value)
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", display:"block", margin: "0.25rem auto", width:"80%",}}>Required</div>
    
}

const IsEmail= (value)=>{
    if(!isEmail(value))
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", margin: "0.25rem auto", width:"80%", }}>Enter a valid Email</div>
}


const Login= ()=>{
    const checkbtn=useRef()
    const form= useRef()

    const [message, setMessage]=useState("")
    const [password, setPassword]= useState("")
    const [email, setEmail]= useState("")
    const [loading, setLoading]= useState(false)
    const [show, setshow]= useState(false)
    const [messagecolor, setMessageColor]=useState("")


    const passwordChange=(e)=>{
        const password=e.target.value
        setPassword(password);
        setMessage("")
    }
    

    const emailChange=(e)=>{
        const email=e.target.value
        setEmail(email);
        setMessage("")
    }

    const handleClickShowPassword=(e)=>{
        setshow(!show)
    }
    const handleLogin=(e)=>{
        e.preventDefault();

        setMessage("");
        setLoading(true)

    
        form.current.validateAll()
        
        if(checkbtn.current.context._errors.length===0){
            // console.log(email,password)
            login( email, password)
                .then(
                    (response)=>{
                        if(response.data.type==="successlogin"){

                            setMessage(response.data.message);
                            setMessageColor(response.data.color)
                            console.log("Valid email")
                            setLoading(false)

                            console.log(response.data.message)
                            console.log("Here is the role of the user", response.data.user.role.roles)
                            const roles=response.data.user.role.roles;
                            
                            if(roles.includes('LANDLORD')){
                                setTimeout( ()=>{window.location.href=("/landlord")} ,10000)
                            }
                            else if(roles.includes('TENANT')){
                                setTimeout( ()=>{window.location.href=("/tenant")} ,10000)

                            }
                            else if(roles.includes('REAL ESTATE AGENCY')){
                                setTimeout( ()=>{window.location.href=("/agency")} ,10000)

                            }
                            else if(roles.includes('SERVICE PROVIDER')){
                                setTimeout( ()=>{window.location.href=("/serviceprovider")} ,10000)

                            }
                            else if(roles.includes('CARETAKER')){
                                setTimeout( ()=>{window.location.href=("/caretaker")} ,10000)

                            }
    
                        }
                        else if(response.data.type==="invaliduser"){
                            console.log(response.data.message)
                            setTimeout( ()=>{window.location.href=("/signup")} ,400)
                            // window.location.href=("/dashboard");
                             setMessage(response.data.message);
                             setMessageColor(response.data.color)
                             console.log(`inValid email, ${response.data.message} `)
                            setLoading(false)
                        }
                        else if(response.data.type==="unverified"){
                            console.log(response.data.message)
                            setTimeout( ()=>{window.location.href=("/signin")} ,4000)
                            //  window.location.href=("/dashboard");
                             setMessage(response.data.message);
                             setMessageColor(response.data.color)
                             console.log("Unverified Email, but forgiven for now Enjoy")
                            setLoading(false)
                        }
                        else{
                            console.log(response.data.message)
                             setMessage(response.data.message)
                             setMessageColor(response.data.color)
                            setLoading(false)
                            console.log("Show this invalid email ")
                            setTimeout( ()=>{window.location.href=("/signup")} ,4000)

                        }
                   
                }).catch(err=>console.error(err))
        }
        else{
            setLoading(false)
        }
    }




    return(

            <Registrationcontainer>
            <Logincontainer>
                <Iconimage >< FaUserCircle /></Iconimage>
                
                {message && (
                        <Messagediv style={{margin:"0.5rem auto", width:"90%", backgroundColor:`${messagecolor}`, color :"white", padding:"0.5rem" }}>
                            <div >{message}</div>
                        </Messagediv>

                )}
                <Form method="" ref={form} onSubmit={handleLogin} >
                    <Emaildiv>
                        <Emailabel>Email:</ Emailabel >
                        <Input type="text" name="email" placeholder="Johndoe23@gmail.com" value={email} onChange={emailChange} validations={[Required, IsEmail]} style={{width:"80%", height:"2rem", borderRadius:"10px", border:"none", fontSize:"1.2rem", color:"black"}}></Input>
                    </Emaildiv>


                    <Passwordiv>
                        <Passwordlabel>Password:</Passwordlabel>
                        <Showpassdiv>

                            <Input type={show ? "text" : "password" } name="password"  value={password} onChange={passwordChange} validations={[Required]} 
                                style={{ borderRadius:"10px", width:"125%" , height:"2rem", fontSize:"1rem",
                                border:"none", color: "black"}}>
                              {/* onMouseDown={handleMouseDownPassword} */}
                            </Input>
                            <IconButton onClick={handleClickShowPassword} >
                                  {show ? <BsIcons.BsEye /> :  <BsIcons.BsEyeSlash/>}
                            </IconButton>

                        </Showpassdiv>


                     
                    </Passwordiv>


                    <FormButtondiv>
                        <Button disabled={loading} > 
                        {loading ? (
                            <SpanIcon ><LoadingIcons.SpinningCircles style={{height:"1.5rem"}} /></SpanIcon>

                            
                        ):
                        (
                            <Spanbutton>SIGN IN</Spanbutton>
                        )}
                        
                        </Button>

                    </FormButtondiv>
                 
                    <CheckButton style={{display:"none"}} ref={checkbtn}/>
                </Form>

            <Forgotpassdiv><Forgotpasslink  to="/passwordreset">Forgot Password?</Forgotpasslink></Forgotpassdiv>
            </Logincontainer>



        </Registrationcontainer>
        



        
    )
}


export default Login