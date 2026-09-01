import React, {useState, useContext,useRef, useEffect} from 'react'
// import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import { Link} from "react-router-dom"


import styled from "@emotion/styled";
import {Sharesidebar} from "../components/Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
// import {Fake} from "./Fake"

import { createProperty } from '../components/apicalls';


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
const Listingpurposediv=styled.div`

`


const Nameofproperty =styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;
`
const Totalnoofunitsdiv= styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;


`               
const Numberofunitsavailable=styled.div`
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
    return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Please Enter a Number</div>
  }else{
  }
}



const Color=()=>{

}   

function Addpropstep7 (){
    
  let propname;
  let totunits;
  let avaiunits;


    let storedpropname=JSON.parse(localStorage.getItem("propertyname"));
    let storedavaiunits=JSON.parse(localStorage.getItem("availableunits"));
    let storedtotunits=JSON.parse(localStorage.getItem("totalunits"));

    console.log(storedpropname);
    // console.log(storedpropname.savedpropname.prop);
    // if(storedpropname.savedpropname.prop===null && storedpropname.savedavaiunits.prop===null && storedtotunits.savedtotunits.prop===null){
    if(storedpropname===null && storedavaiunits===null && storedtotunits===null){
      propname="";
      totunits="";
      avaiunits="";
      
    }
    else{
      
      console.log("stored propname=" + storedpropname.savedpropname.prop, "storedavaiunits=" + storedavaiunits.savedavaiunits.prop, "storedtotunits=" +storedtotunits.savedtotunits.prop)
      propname=storedpropname.savedpropname.prop;
      totunits=storedtotunits.savedtotunits.prop;
      avaiunits=storedavaiunits.savedavaiunits.prop;
      console.log(propname);
      console.log(totunits);
      console.log(avaiunits);
    } 
  
      const side=useContext(Sharesidebar);
      const form=useRef();
      const checkbtn=useRef();
      // const [color, setColor]=useState(selectedindex);
    
      // const [propertydetails, setPropertydetails]=useState(selectedfeatures);
      const [disabled, setDisabled]=useState(true)
      const [path, setPath]=useState("#");

      // const [loading,setLoading]=useState(true)
      const [propertyname,setPropertyname]=useState(propname);
      const [totalunits, setTotalunits]=useState(totunits);          
      const  [availableunits, setAvailableunits]=useState(avaiunits);  


        
    const availableUnitsChange =(event)=>{
      const a=event.target.value;
      setAvailableunits(a);
    }
    const propertyNameChange=(e)=>{
      const propname=e.target.value;
      setPropertyname(propname);


    }  
    const totalUnitsChange =(e)=>{
      const totunits=e.target.value;
      setTotalunits(totunits);
    }


      useEffect(()=>{
        if(propertyname && totalunits && availableunits && !isNaN(totalunits) && !isNaN(availableunits) && availableunits<1000 && totalunits<1000){
          setDisabled(false);
          console.log(propertyname);
          console.log(totalunits);
          console.log(availableunits);
          setPath("/agency/properties/list-property/step8");
          
        }else{
          setDisabled(true);
          setPath("#");
          
        }

      }, [propertyname, totalunits, availableunits]);



    const handleClick=(e)=>{
            e.preventDefault();
            console.log("here is the submit button")

            form.current.validateAll();
            
            if(checkbtn.current.context._errors.length===0){
                console.log("no errors in the form");
                setDisabled(false);
                saveDraft();
                // setLoading(false)
                // console.log(propertyname);
                // console.log(totalunits);
                // console.log(availableunits);
                    
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
        const savedpropname={
          "prop":propertyname
        }
        const savedavaiunits={
          "prop":availableunits
        }
        const savedtotunits={
          "prop":totalunits
        }
        localStorage.setItem("propertyname", JSON.stringify({savedpropname}))
        localStorage.setItem("totalunits", JSON.stringify({savedtotunits}))
        localStorage.setItem("availableunits", JSON.stringify({savedavaiunits}))
        // localStorage.setItem("propertydetails", JSON.stringify({saved}))
    
      console.log("Die Inhanten liefern Knopfen is functionieren. Schrift 7 ")
      console.log(JSON.parse(localStorage.getItem("propertyname")))       
      console.log(JSON.parse(localStorage.getItem("availableunits")))       
      console.log(JSON.parse(localStorage.getItem("totalunits")))       

      console.log(propertyname);
      console.log(totalunits);
      console.log(availableunits);

      function getResponse(){
        const response=createProperty(propertyname,totalunits,availableunits).then((results)=>{
          console.log(results);
        });

          return response;
      }
      
      getResponse();

      }
  } 


  const saveBack=(e)=>{
    console.log("here is the draft shit, its's working")
    // e.preventDefault();
    const savedpropname={
      "prop":propertyname
    }
    const savedavaiunits={
      "prop":availableunits
    }
    const savedtotunits={
      "prop":totalunits
    }
    localStorage.setItem("propertyname", JSON.stringify({savedpropname}))
    localStorage.setItem("totalunits", JSON.stringify({savedtotunits}))
    localStorage.setItem("availableunits", JSON.stringify({savedavaiunits}))
    
    
      console.log("Die Inhanten liefern Knopfen is functionieren. Schrift 6 Back ")
      console.log(JSON.parse(localStorage.getItem("propertyname")))       
      console.log(JSON.parse(localStorage.getItem("availableunits")))       
      console.log(JSON.parse(localStorage.getItem("totalunits")))       



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
                            
                          <Listingpurposediv >
                            <Label>Property/ Apartment Details  :</ Label>
                            <Labelpara>Please Enter the Details of your Property below..</Labelpara>
                          </Listingpurposediv> 

                          <Nameofproperty>
                              <Label>Name of your Property :</ Label >
                              <Input type="text" name="nameofproperty" placeholder="Enter The Name of Your Property" value={propertyname} onChange={propertyNameChange} validations={[Required, Color]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px solid blue`, fontSize:"1rem", color:"black"}}></Input>            
                          </Nameofproperty>                              

                            <Totalnoofunitsdiv>
                              <Label>Total Number of Units In Apartment:</ Label >
                              <Input type="text" name="totalunits" placeholder="Enter The Name of Your Property" value={totalunits} onChange={totalUnitsChange} validations={[Required, Nuumber, Max]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px solid blue`, fontSize:"1rem", color:"black"}}></Input>
                            </Totalnoofunitsdiv>

                            <Numberofunitsavailable>
                                <Label>Number of Currently Letting Units /Available :</ Label >
                                  <Input type="text"  placeholder="Available Units Currently Now" value={availableunits} onChange={availableUnitsChange} validations={[Required, Nuumber, Max]} style={{width:"100%", height:"3rem", backgroundColor:"#5", borderRadius:"5px", border:"2px solid blue", fontSize:"1rem", color:"black"}}></Input>
                            </Numberofunitsavailable>
                              
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

export default Addpropstep7