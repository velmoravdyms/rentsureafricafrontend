import React, {useRef, useState} from "react"
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import {isEmail} from "validator"
import {FaUserCircle} from "react-icons/fa"
import LoadingIcons from "react-loading-icons"
import {passwordreset} from "./Auth.services"
import styled from "@emotion/styled"
import * as BsIcons from "react-icons/bs"


const Registrationcontainer=styled `
    background-color:#EFEBF3;
    padding:0rem;
    height:${({showpassword})=>showpassword ? `79vh`: `50vh`};
    text-align:center;
    max-width:400px;
    margin:6rem auto;
     `
  

const Logincontainer=styled `
   width:90%;
   height:100%;
   margin:0rem auto;


`
const Iconimage=styled `
    padding-top:1rem;
    font-size:${({showpassword})=>showpassword ? `5rem`: `6.5rem`};
    color:lightgrey;
`

const Emaildiv=styled `
    padding-top:0.5rem;
    
`
const Emailabel=styled `
    text-align:start;
    margin:0 0 0.5rem 2.5rem;
    font-size:1.2rem;
`
const Passwordlabel=styled `
    text-align:start;
    margin:0.2rem 0rem 0.2rem 2.5rem;
    font-size:1.2rem;
`

const Passwordiv=styled `
    padding-top:1.5rem;
    font-size:1rem;

`
const Showpassdiv=styled `
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

const FormButtondiv=styled `
    padding-top:1.2rem;
`

const SpanIcon=styled `
    color:black;
    font-size:1rem;
`

const Spanbutton=styled `
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
const Messagediv=styled `
    width:50%;
    
`
const Compareerror=styled `
`

const Required=(value)=>{
    if(!value.trim())
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", display:"block", margin: "0.25rem auto", width:"80%",}}>Required</div>
    
}

const IsEmail= (value)=>{
    if(!isEmail(value.trim()))
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", margin: "0.25rem auto", width:"80%", }}>Enter a valid Email</div>
}


const Passwordreset= ()=>{
    const checkbtn=useRef()
    const form= useRef()

    const [message, setMessage]=useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [confirmpassword, setconfirmPassword]= useState("")
    const [loading, setLoading]= useState(false)
    const [showconfirmpassword, setshowconfirmPassword]=useState(false)
    const [showpassword, setshowPassword]= useState(false)
    const [show, setshow]= useState(false)
    const [messagecolor, setMessageColor]=useState("")
    const [passworderror, setpasswordError]= useState(false)
    const [finalpass, setfinalPass]= useState(true);

    const emailChange=(e)=>{
        const email=e.target.value
        setEmail(email);
        setMessage("")
    }

    const handleClickShowPassword=(e)=>{
        setshow(!show)
    }

    const handleClickShowconfirmPassword=(e)=>{
        setshowconfirmPassword(!showconfirmpassword)
    }

    const passwordChange=(e)=>{
        const password=e.target.value
        setPassword(password);
        setMessage("")
        setpasswordError(false)
    }

    const confirmpasswordChange=(e)=>{
        const confirmpassword=e.target.value;
        setconfirmPassword(confirmpassword)
        setpasswordError(false)
    }

    function CompareEmail(password,comparepassword){
        if( password.trim()==="" || comparepassword.trim()===""){         
                setpasswordError(false)
                 setLoading(false)
    
        }
        else{
             if(password.trim()===comparepassword.trim() ){     
                setpasswordError(false)
 
          
                passwordreset(email, password)
                .then(
                        (response)=>{
                        if(response.status===201){
                            console.log(response.data.message)
                            setTimeout( ()=>{window.location.href=("/signin")} ,2000)// 
                            setMessage(response.data.message)
                            setshowPassword(true)
                            setMessageColor(response.data.color)
                            setLoading(false)
    
                        }else{
                            console.log(response.data.message)
                             setMessage(response.data.message)
                             setMessageColor(response.data.color)
                            setLoading(false)

                        }
                   
                }).catch(err=>console.error(err))
            }
            else{
              
                setpasswordError(true)
                setLoading(false)
       
               
            }

        }
        
     }

    function handleLogin (e){
        e.preventDefault();

        setMessage("");
        setLoading(true)

        form.current.validateAll()

        if(showpassword && (checkbtn.current.context._errors.length===0)){
         
           return  CompareEmail(password,confirmpassword);     
           }
        
       if((checkbtn.current.context._errors.length===0) && (finalpass) ){
            passwordreset(email, password)
                .then(
                    (response)=>{
                        if(response.status===201){
                            console.log(response.data.message)
                             setMessage(response.data.message)
                             setshowPassword(true)
                            setfinalPass(false)
                             setMessageColor(response.data.color)
                            setLoading(false)
    
                        }else{
                            console.log(response.data.message)
                             setMessage(response.data.message)
                             setMessageColor(response.data.color)
                            setLoading(false)

                        }
                   
                }).catch(err=>console.error(err))
        }
        else{
            setLoading(false)
        }
    }




    return(
        // 
            <Registrationcontainer showpassword={showpassword? 1:0}>
            <Logincontainer>
                <Iconimage showpassword={showpassword? 1: 0}>< FaUserCircle /></Iconimage>
                
                {message && (
                        <Messagediv style={{margin:"0.3rem auto", width:"90%", backgroundColor:`${messagecolor}`, color :"white", padding:"0.5rem" }}>
                            <div >{message}</div>
                        </Messagediv>

                    )}
                <Form method="" ref={form} onSubmit={handleLogin} >
                    <Emaildiv>
                        <Emailabel>Enter Your Email:</ Emailabel >
                        <Input type="text" name="email" placeholder="Johndoe23@gmail.com" value={email} onChange={emailChange} validations={[Required, IsEmail]} style={{width:"80%", height:"2rem", borderRadius:"10px", border:"none", fontSize:"1.2rem", color:"black"}}></Input>
                    </Emaildiv>




                   { showpassword &&

                    <Passwordiv>
                    <Passwordlabel>Password:</Passwordlabel>
                    <Showpassdiv>

                        <Input type={show ? "text" : "password" } name="password"  value={password} onChange={passwordChange} validations={[Required]} 
                            style={{ borderRadius:"10px", width:"125%" , height:"2rem", fontSize:"1rem",
                            border:"none", color: "black"}}>
                        {/* onMouseDown={handleMouseDownPassword} */}
                        </Input>
                        <IconButton onClick={handleClickShowPassword}  >
                            {show ? <BsIcons.BsEye /> :  <BsIcons.BsEyeSlash/>}
                        </IconButton>

                    </Showpassdiv>


                    </Passwordiv>



                   } 



                    { showpassword &&
                    

                    <Passwordiv>
                    <Passwordlabel>Confirm Password:</Passwordlabel>
                    <Showpassdiv>

                        <Input type={showconfirmpassword ? "text" : "password" }  name="confirmpassword"  value={confirmpassword} onChange={confirmpasswordChange} validations={[Required]} 
                            style={{borderRadius:"10px", width:"125%" , height:"2rem", fontSize:"1rem",
                            border:"none", color: "black"}}>
                        {/* onMouseDown={handleMouseDownPassword} */}
                        </Input>
                        <IconButton onClick={handleClickShowconfirmPassword} >
                            {showconfirmpassword ? <BsIcons.BsEye /> :  <BsIcons.BsEyeSlash/>}
                        </IconButton>

                    </Showpassdiv>
                  


                    {passworderror &&
                        <Compareerror passworderror={passworderror? true : false} style={{ backgroundColor:"red", padding:"0.25rem 0", color: "white" , margin: "0.25rem auto", width:"80%", }}>The two Passwords doesn't match</Compareerror>

                   }
                    </Passwordiv>



                   
                    }  


                    <FormButtondiv>
                        <Button disabled={loading} > 
                        {loading ? (
                            <SpanIcon ><LoadingIcons.SpinningCircles style={{height:"1.5rem"}} /></SpanIcon>

                            
                        ):
                        (
                            <Spanbutton >RESET PASSWORD</Spanbutton>
                        )}
                        
                        </Button>

                    </FormButtondiv>
                 
                    <CheckButton style={{display:"none"}} ref={checkbtn}/>
                </Form>

            </Logincontainer>



        </Registrationcontainer>
        



        
    )
}


export default Passwordreset