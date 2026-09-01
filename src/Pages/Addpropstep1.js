import React, {useState, useContext,useRef, useEffect} from 'react'
// import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import {Link} from "react-router-dom"


import styled from "@emotion/styled"
import {Sharesidebar} from "../components/Sidebar"
import Form from "react-validation/build/form"
import CheckButton from "react-validation/build/button"
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

const Listfooter=styled(Link)`
text-decoration:none;
padding:0.5rem;
background-color:${({disabled})=> disabled ? "#F5F5F5": "blue" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
color:${({disabled})=> disabled ? "blue": "white" };
width:68%;
margin:0.5rem 30%;  
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
const Propertytypediv=styled.div`

 
`
const Roomslabel=styled.div`
 font-weight:800;

`
const Proptyp =styled(Link)`
box-sizing:border-box;
text-decoration:none;
flex-wrap:wrap;
color:black;
margin:1rem;
display:block;
font-weight:600;
width:100%;
background-color:${({color, number})=>(color===number) ? "orange": "#F8F8F8" };
border:3px solid white;
// background-color:yellow;
padding:1rem 1rem;

:hover{
border:3px solid blue;  
}

`

function Addpropstep1 (){

  const chosen=JSON.parse(localStorage.getItem("proptyp"))
  // console.log(chosen)
  let selected="";

  if(chosen===null){

     selected="";
  }
  else{
     selected=chosen.saved.number;
  }

 

    const side=useContext(Sharesidebar);
    const form=useRef();
    const checkbtn=useRef();
    const [color, setColor]=useState(selected);
    const [proptype, setProptype]=useState(false);
    const [disabled, setDisabled]=useState(true)
    const [path, setPath]=useState("#");



  useEffect(()=>{

    if (selected!==""){
      console.log("here is the first load and the disableds is  "+ disabled)
      setDisabled(false);
      setPath("/agency/properties/list-property/step2");

    }
    else{
      console.log("oh fuck the shit is empty")
    }
  })


  useEffect(()=>{
    console.log(proptype);
    console.log(color)
  }, [proptype, color])


  const bgColorChange =(value)=>{
    setColor(value);
    setDisabled(false)
    setPath("/agency/properties/list-property/step2");
  }


  const alllinks=[
    {
      value:"bedsitter",
      label:"Bedsitter",
      
    },
    
    
    {
      value: "house/bangalow",
      label:"House/Bangalow"

    },

    {
      value:"apartment/flat",
      label:"Apartment/Flat"

    },

    {
      value:"townhouse",
      label:"Townhouse",

    },

    {
      value:"warehouse",
      label:"Warehouse",

    },

    {
      value:"offices",
      label:"Offices",

    },
    {
      value:"commericial Property",
      label:"Commercial Property",

    },{
      value:"villa",
      label:"Villa",

    },{
      value:"shop",
      label:"Shop",

    }
  ];

  const saveDraft=()=>{
    if(!disabled){
      const saved={
        "prop":proptype,
        "number":color,
      }
        
      localStorage.setItem("proptyp", JSON.stringify({saved}))
    
      console.log("I think itäs working")
      console.log(JSON.parse(localStorage.getItem("proptyp")))       
    }
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

                      <Form method="" ref={form} >           
                          <Propertytypediv >

                            <Roomslabel>Select Your Property Type:</ Roomslabel >
                            <Labelpara>Which option best describes your property type?</Labelpara>

                              {alllinks.map((link, index)=>{
                              
                              return(
                                <Proptyp  color={color} number={index} onClick={()=>{setProptype(link.value); bgColorChange(index)} } to="#"  key={index}>{link.label}</Proptyp>    
                              )})} 
                          </Propertytypediv>
                          
                          <div style={{width:"100%", margin:"2rem 0rem 2rem 1rem"}}>
                            <Listfooter to={path}  onClick={saveDraft} disabled={disabled? 1:0}>Next Step</Listfooter> 
                            <CheckButton style={{display:"none"}} ref={checkbtn}/>
                          </div>
                      </Form>  
                  </Propertycontainer>                      
            </Listbody>
        </Listpropdiv>    
      </div>
    )
}

export default Addpropstep1