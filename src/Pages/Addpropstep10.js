import React, {useState, useContext,useRef, useEffect} from 'react'
// import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import {  Link} from "react-router-dom"


import styled from "@emotion/styled";
import {Sharesidebar} from "../components/Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator"
import {isMobilePhone} from 'validator';

import { createCaretaker } from '../components/apicalls';
// import {Fake} from "./Fake"


const Breadcrumbs=styled.div`
position:fixed;
top:67px;
text-align:center;
display:flex;
align-items:center;
// vertical-align:middle;
height:45px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
left:${({sidebar})=> sidebar ? "5.5%": "23.5%"};
width:${({sidebar})=> sidebar ? "92.5%": "74.5%"};
`
const Crumbsicons=styled.div`
margin-left:2rem;
`
const Listpropdiv=styled.div`
position:fixed;
top:116px;
height:78vh;
overflow-y:scroll;
overflow-x:hidden;
left:${({sidebar})=> sidebar ? "6%": "24%"};
width:${({sidebar})=> sidebar ? "93%": "75%"};


::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
  height:7.5px;
}

::-webkit-scrollbar-track {
  background-color: #F5F5F5;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}
::-webkit-scrollbar-corner {
  background-color: #F8F8F8;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */

`
const ListHeader=styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
width:100%;
padding:0.5rem;
margin:0 auto;
`

const Headertitle=styled.div`
width:90%;
margin:0 auto;
font-size:${({sidebar})=> sidebar ? "1.7rem": "1.7rem" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
`
const Labelpara=styled.div`

`
const Progressbar =styled.div`
background-color:#F5F5F5;
height:10px;
border-radius:3px;
width:${({sidebar})=> sidebar ? "50%": "60%" };
margin:1rem auto;
`

const Listbody=styled.div `
margin:auto;
width:100%;
`

const Backbutton=styled(Link)`
background-color:#F5F5F5;
text-decoration:none;
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
margin:1rem 30% 1rem 2rem;  
border-radius:6.79px;
border:none;
padding:${({sidebar})=> sidebar ? "0.5rem": "0.5rem" };
color:blue;
&:hover{
  cursor:pointer;
  padding:0.5rem;
  color:white;
  background-color:blue;
}

`
const Nextbutton=styled(Link)`
text-decoration:none;
padding:0.5rem;
background-color:${({disabled})=> disabled ? "#F5F5F5": "blue" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
color:${({disabled})=> disabled ? "blue": "white" };
margin:1rem 0.3rem 1rem 0.3rem;
border-radius:6px;
border:none;
&:hover{
    cursor:pointer;
}

`
const Button=styled.button`
text-decoration:none;
padding:0.5rem;
background-color:${({disableed})=> disableed ? "#F5F5F5": "blue" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
color:${({disableed})=> disableed ? "blue": "white" };
margin:1rem;
border-radius:6px;
border:none;
&:hover{
    cursor:pointer;
}

`

const Propertycontainer=styled.div`
max-width:350px;
margin:0 auto;

`
const Propertycaretakerdiv=styled.div`

`


const Caretakername =styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;
`
const Caretakeremail= styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;


`               
const Caretakerphonenumber=styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;

`
        

const Label=styled.div`
font-weight:800;


`

const Required=(value)=>{
    if(!value)
    return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Required</div>
    
}

const Max=(value)=>{
    if(value >1000)
    return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Enter Reasonable Number</div>
    
}

const Nuumber=(value)=>{
  if(isNaN(value)){
    return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Please Enter Numbers</div>
  }else{
  }
}


const IsEmail= (value)=>{
    if(!isEmail(value))
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", margin: "0.25rem auto", width:"95%", }}>Enter a valid Email</div>
}


const IsMobilePhone= (value)=>{
    if(!isMobilePhone(value))
    return <div style={{backgroundColor:"red", color:"white", padding:"0.25rem 0", margin: "0.25rem auto", width:"95%", }}>Enter a valid Phone Number</div>
}

const Color=()=>{

}   

function Addpropstep10 (){
    
  let caretakernamee;
  let caretakermobilenumber;
  let caretakergmail;


//   localStorage.removeItem("caretakername");
//   localStorage.removeItem("caretakerphonenumber");
//   localStorage.removeItem("caretakeremail");




    let storedcaretakername=JSON.parse(localStorage.getItem("caretakername"));
    let storedcaretakerphonenumber=JSON.parse(localStorage.getItem("caretakerphonenumber"));
    let storedcaretakeremail=JSON.parse(localStorage.getItem("caretakeremail"));

    console.log(storedcaretakername);
    console.log(storedcaretakerphonenumber)
    console.log(storedcaretakeremail)
    // storedcaretakername
    // console.log(storedpropname.savedpropname.prop);

    if(storedcaretakername===null && storedcaretakerphonenumber===null && storedcaretakeremail===null){
        caretakernamee=""
        caretakermobilenumber=""
        caretakergmail=""
      
    }
    else{
      
    caretakernamee=storedcaretakername.prop;
    caretakermobilenumber=storedcaretakerphonenumber.prop;
    caretakergmail=storedcaretakeremail.prop;

      
      console.log(caretakernamee);
      console.log(caretakermobilenumber);
      console.log(caretakergmail );
    } 
  
      const side=useContext(Sharesidebar);
      const form=useRef();
      const checkbtn=useRef();
      // const [color, setColor]=useState(selectedindex);
    
      // const [propertydetails, setPropertydetails]=useState(selectedfeatures);
      const [disabled, setDisabled]=useState(true)
      const [path, setPath]=useState("#");

      // const [loading,setLoading]=useState(true)
      const [caretakername,setCaretakername]=useState(caretakernamee);
      const [caretakeremail, setCaretakeremail]=useState(caretakergmail);          
      const  [caretakerphonenumber, setCaretakerphonenumber]=useState(caretakermobilenumber);  


        
    const caretakerPhonenumberChange =(event)=>{
      const a=event.target.value;
      setCaretakerphonenumber(a);
    }
    const caretakerNameChange=(e)=>{
      const propname=e.target.value;
      setCaretakername(propname);


    }  
    const caretakerEmailChange =(e)=>{
      const totunits=e.target.value;
      setCaretakeremail(totunits);
    }


    useEffect(()=>{
    if(caretakername && caretakeremail && caretakerphonenumber && isNaN(caretakeremail) && isNaN(caretakername) && !isNaN(caretakerphonenumber)){
        setDisabled(false);
        console.log(caretakername);
        console.log(caretakeremail);
        console.log(caretakerphonenumber);
        setPath("/agency/properties/list-property/step11");
        
    }else{
        setDisabled(true);
        setPath("#");
        
    }

    }, [caretakername, caretakeremail, caretakerphonenumber]);



    const handleClick=(e)=>{
        e.preventDefault();
        console.log("here is the submit button")

        form.current.validateAll();
        
        if(checkbtn.current.context._errors.length===0){
            console.log("no errors in the form");
            setDisabled(false);
            saveDraft();
            // setLoading(false)
            // console.log(caretakername);
            // console.log(caretakeremail);
            // console.log(caretakerphonenumber);
                
        }
        else{
            console.log("show all errors")
            setDisabled(true);
        }
    }
    
    const saveDraft=()=>{
      console.log("here is the draft shit, its's working")
      // e.preventDefault();
      if(disabled===false){
        const savedcaretakername={
          "prop":caretakername
        }
        const savedcaretakerphonenumber={
          "prop":caretakerphonenumber
        }
        const savedcaretakeremail={
          "prop":caretakeremail
        }
        localStorage.setItem("caretakername", JSON.stringify(savedcaretakername))
        localStorage.setItem("caretakeremail", JSON.stringify(savedcaretakeremail))
        localStorage.setItem("caretakerphonenumber", JSON.stringify(savedcaretakerphonenumber))
        // localStorage.setItem("propertydetails", JSON.stringify({saved}))
      
    
        console.log("Die Inhanten liefern Knopfen is functionieren. Schrift 9 ")
        console.log(JSON.parse(localStorage.getItem("caretakername")))       
        console.log(JSON.parse(localStorage.getItem("caretakerphonenumber")))       
        console.log(JSON.parse(localStorage.getItem("caretakeremail")))       

        createCaretaker(caretakername, caretakeremail,caretakerphonenumber);

      }
  } 


  const saveBack=(e)=>{
    console.log("here is the draft shit, its's working")
    // e.preventDefault();

    const savedcaretakername={
        "prop":caretakername
      }
      const savedcaretakerphonenumber={
        "prop":caretakerphonenumber
      }
      const savedcaretakeremail={
        "prop":caretakeremail
      }

    localStorage.setItem("caretakername", JSON.stringify(savedcaretakername))
    localStorage.setItem("caretakeremail", JSON.stringify(savedcaretakeremail))
    localStorage.setItem("caretakerphonenumber", JSON.stringify(savedcaretakerphonenumber))
    
    
      console.log("Die Inhanten liefern Knopfen is functionieren. Schrift 6 Back ")
      console.log(JSON.parse(localStorage.getItem("caretakername")))       
      console.log(JSON.parse(localStorage.getItem("caretakerphonenumber")))       
      console.log(JSON.parse(localStorage.getItem("caretakeremail")))       


} 


      return (
        <div>    
        <Breadcrumbs sidebar={side?1:0}>
          <Crumbsicons sidebar={side?1:0}>Icons will go here</Crumbsicons>
        </Breadcrumbs>
        
        <Listpropdiv  sidebar={side? 1:0} >

            <ListHeader sidebar={side?1:0}>
                <Headertitle sidebar={side?1:0}>List new property</Headertitle>
            </ListHeader>
          
            <Listbody  sidebar={side? 1:0}>
                  <Progressbar sidebar={side?1:0}></Progressbar>
                
                  <Propertycontainer>
                  {/* onSubmit={handleClick} */}
                      <Form method="" ref={form} onSubmit={handleClick} >           
                            
                          <Propertycaretakerdiv>
                            <Label>Property/ Apartment's Caretaker Details  :</ Label>
                            <Labelpara>Enter Details of Property's Caretaker below..</Labelpara>
                          </Propertycaretakerdiv> 

                          <Caretakername>
                              <Label>Name of the Property's Caretaker :</ Label >
                              <Input type="text" name="propertycaretaker" placeholder="Enter Property's caretaker" value={caretakername} onChange={caretakerNameChange} validations={[Required, Color]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px solid blue`, fontSize:"1rem", color:"black"}}></Input>            
                          </Caretakername>                              

                            <Caretakeremail>
                              <Label>Please Enter Email of Caretaker:</ Label >
                              <Input type="text" name="propertycaretakeremail" placeholder="Enter Property's caretaker Email" value={caretakeremail} onChange={caretakerEmailChange} validations={[Required, IsEmail]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px solid blue`, fontSize:"1rem", color:"black"}}></Input>
                            </Caretakeremail>

                            <Caretakerphonenumber>
                                <Label>Please Enter caretaker's Phone Number  :</ Label >
                                  <Input type="text"  placeholder="Enter Property's caretaker Phone Number " value={caretakerphonenumber} onChange={caretakerPhonenumberChange} validations={[Required, Nuumber, IsMobilePhone]} style={{width:"100%", height:"3rem", backgroundColor:"#5", borderRadius:"5px", border:"2px solid blue", fontSize:"1rem", color:"black"}}></Input>
                            </Caretakerphonenumber>
                              
                          <div style={{ width:"100%", margin:"1rem 0rem 1rem 1rem"}}>
                            <Backbutton to="/properties/list-property/step6" onClick={saveBack} sidebar={side? 1:0} >Back</Backbutton>    

                            {disabled?
                            <Button disableed={disabled?1:0} style={{padding:"0.5rem 1rem", margin:"0.5rem"}}>Next Step</Button>
                            : 
                            <Nextbutton to={path} onClick={saveDraft} disabled={disabled?1:0}>Next Step</Nextbutton>
                            }
                            

                          <CheckButton style={{display:"none"}} ref={checkbtn}/> 
                          </div>

                      </Form>  
                  </Propertycontainer>                      
            </Listbody>
        </Listpropdiv>    
        </div>
      )
  }

export default Addpropstep10