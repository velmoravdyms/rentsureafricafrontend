import {Link} from "react-router-dom"
import React, {useRef, useState} from "react"
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import Select from "react-validation/build/select"
import {isEmail} from "validator"
import {FaUserCircle} from "react-icons/fa"
import LoadingIcons from "react-loading-icons"
import signupservice from "./Auth.services"
import styled from "@emotion/styled"
import * as BsIcons from "react-icons/bs"

// background-color:#F0ECF5;
const Registrationcontainer=styled.div`
    background-color:#EFEBF3;
    padding:0rem;
    height:80vh;
    text-align:center;
    max-width:400px;
    margin:4rem auto;
`

const Logincontainer=styled.div`
   width:90%;
   height:100%;
   margin:0rem auto;


`
const Iconimage=styled.div`
    padding-top:0.5rem;
    font-size:6rem;
    color:lightgrey;
`
const Emaildiv=styled.div`
    padding-top: 1rem;
    
`
const Emailabel=styled.div`
    text-align:start;
    margin:0.2rem 0rem 0.2rem 2.5rem;
    font-size:1.2rem;
`

const Rolediv=styled.div`
padding-top:1.5rem;

`
const Passwordlabel=styled.div`
    text-align:start;
    margin:0.2rem 0rem 0.2rem 2.5rem;
    font-size:1.2rem;
`


const Passwordiv=styled.div`
    padding-top:0.5rem;
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
     font-size:1re;
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
const Logindiv=styled.div`

    color:white;
    padding:0.3rem;
  
    border:none;
   
    font-size:0.9rem;
    margin: 1.5     rem 0 0 0rem;

`
const Loginbutton=styled.button`
    border:none;
    width:30%;
    padding:0.4rem;
    border-radius:9px;
    background-color: blue;
    `
    // margin-left:15rem;
    // color:white;
    // width:5.5rem;
    const Loginlink=styled(Link)`
 
    text-decoration:none;
    color:white;
 
`

const Required=(value)=>{
    if(!value)
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", margin: "0.25rem auto", width:"80%",}}>Required</div>
    
}

const IsEmail= (value)=>{
    if(!isEmail(value))
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", margin: "0.25rem auto", width:"80%", }}>Enter a valid Email</div>
}


export const Signup= ()=>{
    const checkbtn=useRef()
    const form= useRef()


    // const [confirmpassword, setConfirmpassword]= useState("")
    const [role, setRole]= useState("")
    const [greenmessage, setgreenMessage]=useState("")
    const [redmessage, setredMessage]=useState("")
    const [password, setPassword]= useState("")
    const [email, setEmail]= useState("")
    const [loading, setLoading]= useState(false)
    const [show, setshow]= useState(false)

    const roleChange=(e)=>{
        const role=e.target.value
        setRole(role)
    }

    const passwordChange=(e)=>{
        const password=e.target.value
        setPassword(password);
    }
    const handleClickShowPassword=(e)=>{
        setshow(!show)
    }



    const emailChange=(e)=>{
        const email=e.target.value
        setEmail(email);
        setredMessage("")
    }


    const handleSignup=(e)=>{
        e.preventDefault();

        setredMessage("");
        setgreenMessage("")
        setLoading(true)

        
        form.current.validateAll()
        
        if(checkbtn.current.context._errors.length===0){
            signupservice(email, role, password)
                .then(
                    (response)=>{
                        if(response.status===201){
                            // console.log(response.data.message)
                            // let redirect= setTimeout(()=>{return window.location.href=("/dashboard")},4000)
                            setgreenMessage(response.data.message)
                            setLoading(false)
                            // redirect();

                            setPassword("");
                            setEmail("");
                            setRole("")
    
                        }else{
                            console.log(response.data.message)
                            setredMessage(response.data.message)
                            setLoading(false)

                            setPassword(password);
                            setEmail(email);
                            setRole(role)

                        }
                   
                   
                    }).catch(err=>{
                        console.error(err)
                        //const showMessage= error.err
                        //setMessage(showMessage)                        
                            setLoading(false)
                    })
                
        }
        else{
            setLoading(false)
        }
    }




    return(
        <Registrationcontainer>
            <Logincontainer>
                <Iconimage >< FaUserCircle /></Iconimage>
                
                <Form method="" ref={form} onSubmit={handleSignup} >

                    {greenmessage && (
                        <Messagediv style={{backgroundColor:"green", color:"white", margin:"0.5rem auto", padding:"1rem", width:"95%"}}>
                            {greenmessage}
                        </Messagediv>

                    )}


                    {redmessage && (
                        <Messagediv style={{backgroundColor:"red", color:"white", margin:"0.5rem auto -0.7rem", padding:"0.5rem 0", width:"80%"  }}>
                                {redmessage}
                        </Messagediv>

                    )}
                    <Emaildiv>
                        <Emailabel>Email:</ Emailabel >
                        <Input type="text" name="email" placeholder="Johndoe23@gmail.com" value={email} onChange={emailChange} validations={[Required, IsEmail]} style={{width:"80%", height:"2rem", backgroundColor:"white", borderRadius:"10px", border:"none", fontSize:"1.2rem", color:"black"}}></Input>
                    </Emaildiv>
                  
                    <Rolediv>
                            <Select type="select" value={role} onChange={roleChange} validations={[Required]} style={{width:"80%", height:"2rem", borderRadius:"10px", border:"none", fontSize:"1.2rem", backgroundColor:"white", color:"black"}}>
                                <option value="">Select Your Role</option>
                                <option value="REAL ESTATE AGENCY">Real Estate Agency</option>                      
                                <option value="LANDLORD">Land Lord</option>
                                <option  value="CARETAKER">Caretaker</option>
                                <option value="SERVICE PROVIDER">Serice Provider </option>                      
                                <option  value="TENANT">Tenant</option>
                              

                            </Select>
                    </Rolediv>
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
                            <SpanIcon ><LoadingIcons.SpinningCircles  style={{height:"1.5rem"}} /></SpanIcon>

                            
                        ):
                        (
                            <Spanbutton>SIGN UP</Spanbutton>
                        )}
                        
                        </Button>

                    </FormButtondiv>
       
                    <CheckButton style={{display:"none"}} ref={checkbtn}/>
                </Form>
            
            <Logindiv> <Loginbutton><Loginlink  to="/signin " >SIGN IN </Loginlink></Loginbutton>    </Logindiv>   
            </Logincontainer>


        </Registrationcontainer>
        
    )
}


// export default signup