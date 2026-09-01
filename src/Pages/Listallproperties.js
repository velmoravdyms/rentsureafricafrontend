import React, {useState, useContext,useRef, useEffect} from 'react'
import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import styled from "@emotion/styled"
import {Sharesidebar} from "../components/Sidebar"
import Form from "react-validation/build/form"
import CheckButton from "react-validation/build/button"
import {Fake} from "./Fake"

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
const ListHeader=styled.div`
   






// position:fixed;
// top:117px;
// text-align:center;
// display:grid;
// grid-template-columns:3rem 3rem 8rem 5rem 5rem 5rem 5rem 6rem 6rem 6rem 6rem 6rem;
// font-weight:800;  
// margin:0 auto;
// width:${({sidebar})=> sidebar ? "92.5%": "74.5%"};
// left:${({sidebar})=> sidebar ? "5.5%": "23.5%"};






// padding:${({sidebar})=> sidebar ? "0.5rem": "0"};
// border:1px solid black;
// column-gap:0.5rem;
// box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
// border-bottom:1px solid whitesmoke;
// border-right:1px solid whitesmoke;
// border-left:1px solid whitesmoke;
// margin-left:2rem;
// grid-template-row:auto;
// width:100%;
// box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const Headertitle=styled.div`
padding:${({sidebar})=> sidebar ? "0.5rem 0.1rem": "0"};
border:1px solid black;
// padding:2rem 0.1rem;


// border-right:1px solid whitesmoke;
// width:90%;
// margin:0 auto;
// font-size:${({sidebar})=> sidebar ? "1.7rem": "1.7rem" };
// font-weight:${({sidebar})=> sidebar ? "600": "600" };
`

const Listpropdiv=styled.div`
position:fixed;
top:160px;
height:71vh;
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


const Listbody=styled.div `
position:fixed;
text-align:center;
display:grid;
grid-template-columns:3rem 3rem 8rem 5rem 5rem 5rem 5rem 6rem 6rem 6rem 6rem 6rem;
width:${({sidebar})=> sidebar ? "92.5%": "74.5%"};
left:${({sidebar})=> sidebar ? "5.5%": "23.5%"};



:hover{
  // border:3px solid blue;
  cursor:pointer;  
  }
`

const Proptyp =styled.div `

text-decoration:none;
background-color:${({color, number})=>(color===number) ? "orange": "#F8F8F8" };



`

function Listallproperties (){

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
      setPath("/properties/list-property/step2");

    }
    else{
      console.log("oh fuck the shit is empty")
    }
  },[])


  useEffect(()=>{
    console.log(proptype);
    console.log(color)
  }, [proptype, color])


  const bgColorChange =(value)=>{
    setColor(value);
    setDisabled(false)
    setPath("/properties/list-property/step2");
  }


  const alllinks=[
    {
      value:"bedsitter",
      label:"mark ",
      
    },
    
    
    {
      value: "house/bangalow",
      label:"tick"

    },

    {
      value:"apartment/flat",
      label:"Huisinfo Apartment/Flat"

    },

    {
      value:"townhouse",
      label:"36",

    },

    {
      value:"warehouse",
      label:"7",

    },

    {
      value:"offices",
      label:"bedsitter & 1 bedroom",

    },
    {
      value:"commericialproperty",
      label:" 1 & 2",

    },{
      value:"villa",
      label:"13,000/=  && 16,000/=",

    },{
      value:"shop",
      label:"Mombasa",

    }
    ,{
      value:"shop",
      label:"Freseur",

    },{
      value:"shop",
      label:"Nimrod makonde",

    },{
      value:"shop",
      label:"Delete, Save and Remove ",

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
        
        <ListHeader sidebar={side?1:0}>
            <Headertitle sidebar={side?1:0}></Headertitle>
            <Headertitle sidebar={side?1:0}></Headertitle>
            <Headertitle sidebar={side?1:0}>Property Name</Headertitle>
            <Headertitle sidebar={side?1:0}>Total Units</Headertitle>
            <Headertitle sidebar={side?1:0}>Available Units</Headertitle>
            <Headertitle sidebar={side?1:0}>No.of Bedrooms/unit</Headertitle>
            <Headertitle sidebar={side?1:0}>No.of Bathrooms/unit</Headertitle>
            <Headertitle sidebar={side?1:0}>Price Per Units</Headertitle>
            <Headertitle sidebar={side?1:0}>Location</Headertitle>
            <Headertitle sidebar={side?1:0}>Landlord </Headertitle>
            <Headertitle sidebar={side?1:0}>Caretaker</Headertitle>
            <Headertitle sidebar={side?1:0}>Actions</Headertitle>
        </ListHeader>
        
        <Listpropdiv  sidebar={side? 1:0} >

            <Listbody  sidebar={side? 1:0}>
                {alllinks.map((link, index)=>{
                
                return(
                  <Proptyp  color={color} number={index} onClick={()=>{setProptype(link.value); bgColorChange(index)} } to="#"  key={index}>{link.label}</Proptyp>    
                )})}   
            </Listbody>
        </Listpropdiv>    
      </div>
    )
}

export default Listallproperties
