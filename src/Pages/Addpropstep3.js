import React, {useState, useContext,useRef, useEffect} from 'react'
// import {BrowserRouter as Link} from "react-router-dom"
// import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import { Link} from "react-router-dom"



import styled from "@emotion/styled"
import {Sharesidebar} from "../components/Sidebar"
import Form from "react-validation/build/form"
// import CheckButton from "react-validation/build/button"
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

const Propertycontainer=styled.div`
max-width:350px;
margin:0 auto;

`
const Listingpurposediv=styled.div`

 
`
const Label=styled.div`
 font-weight:800;

 `
 const Internalfeaturesdiv =styled(Link)`
 box-sizing:border-box;
 text-decoration:none;
 flex-wrap:wrap;
color:black;
margin:1rem;
display:block;
font-weight:600;
width:100%;
background-color:${({color, number})=>(color.includes(number)) ? "orange": "#F8F8F8" };
border:3px solid white;
// background-color:yellow;
padding:1rem 1rem;

:hover{
border:3px solid blue;  
}

`
let clicked=[];
let include;
let colorarray=[];
let includedincolorarray;

function Addpropstep3 (){
  
  let selectedfeatures;
  let selectedindex;
  
  let chosen=JSON.parse(localStorage.getItem("internalfeatures"));

  localStorage.removeItem("internalfeatures")

      if(chosen===null){
        selectedfeatures=[];
        selectedindex=[];
      }
      else{
        selectedfeatures=chosen.saved.prop;
        selectedindex=chosen.saved.number;
      }
      


      const side=useContext(Sharesidebar);
      const form=useRef();
      // const checkbtn=useRef();
      const [color, setColor]=useState(selectedindex);
      const [internalfeatures, setInternalfeatures]=useState(selectedfeatures);
      const [disabled, setDisabled]=useState(true)
      const [path, setPath]=useState("#");



    useEffect(()=>{
      if (colorarray.length!==0){
        console.log(colorarray);
        setDisabled(false);
        setPath("/agency/properties/list-property/step4");
        console.log("here is the supposedly FULL color array  "+ colorarray)

      }
      else{
        setDisabled(true);
        setPath("#")
        console.log("here is the supposedly EMPTY color array  "+ colorarray)
      }
    },[])

      useEffect(()=>{
        console.log(internalfeatures);
        console.log(color);

        if(colorarray.length===0){
          setDisabled(true);
          setPath("#")
          console.log("there is nothing in the box to show")
        }
        else{
          console.log("the box is FULL OF SHIT")
          setDisabled(false);
          setPath("/agency/properties/list-property/step4");

        }
        
      }, [internalfeatures, color])

    const bgColorChange =(index)=>{

      includedincolorarray=colorarray.includes(index);
      // || includedincolorarray.length===0
      if(include===false)  {
        colorarray.push(index);
        setColor([...color, index]);
        setDisabled(false);
        setPath("/agency/properties/list-property/step4");
        
      }else{
        let updatedcolorarray=colorarray.filter(remain => remain!==index);
        colorarray=updatedcolorarray;
        let updatedcolor=color.filter(remain => remain!==index);
        setColor(updatedcolor); 
     
        }


    }

    const alllinks=[
      {
        value:"balcony",
        label:"Balcony",

      },
      {
        value:"alarm",
        label:"Security Alarm",
        
      },    
      {
        value: "backupgenerator",
        label:"Backup Generator"

      },

      {
        value:"ensuite",
        label:"En Suite"

      },
      {
        value:"internet",
        label:"Internet Available"

      },
      {
        value:"furnished",
        label:"Furnished"

      },
      {
        value:"servicechargeincluded",
        label:"Services Charges Included"

      },
      {
        value:"aircondition",
        label:"Air Conditioner"

      },
      {
        value:"walkincloset",
        label:"Walk In Closet"

      },
      
    ];

    const handleClick=(index, value)=>{
      include=clicked.includes(index);
      // console.log(include);

      if(include===false){
        clicked.push(index);
        setInternalfeatures([...internalfeatures, value]);
        
      }else{
        let updatedclicked=clicked.filter(remain => remain!==index);
        clicked=updatedclicked;
        let newfeatures=internalfeatures.filter(remain=> remain!==value);
        setInternalfeatures(newfeatures);
        }
    }


    const saveBack=()=>{
      console.log("save the features on click back  HEY HEY DDID YOU DO WHAT WE  AGREED" )
      const saved={
        "prop":internalfeatures,
        "number":color,
      }
        
      localStorage.setItem("internalfeatures", JSON.stringify({saved}))
    }
    console.log("these are the clicked features's indexes for clicked " + clicked);
    console.log("these are the clicked color array indexes " + colorarray);

    const saveDraft=()=>{
      if(!disabled){
        const saved={
          "prop":internalfeatures,
          "number":color,
        }
          
        localStorage.setItem("internalfeatures", JSON.stringify({saved}))
      
        console.log("Die zweite Tretet ist funktioneiren, es ist fur Liste Zweck ")
        console.log(JSON.parse(localStorage.getItem("internalfeatures")))       
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
                            <Listingpurposediv >

                              <Label>Internal Features Per Unit :</ Label>
                              <Labelpara>Select all Features Contained in Each Unit of the Apartment</Labelpara>

                                {alllinks.map((link, index)=>{
                                
                                return(
                                  <Internalfeaturesdiv  color={color} number={index} onClick={()=>{handleClick(index, link.value); bgColorChange(index)} } to="#"  key={index}>{link.label}</Internalfeaturesdiv>    
                                )})} 
                            </Listingpurposediv>
                            
                            <div style={{ width:"100%", margin:"2rem 0rem 2rem 1rem"}}>
                              <Backbutton to="/properties/list-property/step2" onClick={saveBack} sidebar={side? 1:0}>Back</Backbutton>  
                              <Nextbutton to={path}  onClick={saveDraft} disabled={disabled? 1:0}>Next Step</Nextbutton> 
                              {/* <CheckButton style={{display:"none"}} ref={checkbtn}/> */}
                            </div>
                        </Form>  
                    </Propertycontainer>                      
              </Listbody>
          </Listpropdiv>    
        </div>
      )
  }

export default Addpropstep3