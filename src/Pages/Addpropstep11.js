// @ts-nocheck

// import React, {useEffect,useContext,useRef,useState} from "react"
// import {BrowserRouter as Router,Routes,Route,Link, Outlet, NavLink} from "react-router-dom"

// import side from "../components/Sidebar";



import React, {useState, useContext,useRef, useEffect} from 'react'
import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import styled from "@emotion/styled";
import {Sharesidebar} from "../components/Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator"
import {isMobilePhone} from 'validator';
import { IoMdPricetags } from 'react-icons/io';
import { sendpropertyDetails } from '../components/apicalls';

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


const Priceperunit =styled.div`
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

function Addpropstep11 (){

    let fetchednumberofunits=JSON.parse(localStorage.getItem("roomsperunit"));
    
    let instancesofnumberofunits=fetchednumberofunits.saved.number.length;
    let instancesofnumberofroomsperunit=fetchednumberofunits.saved.prop;
    
    
    console.log(fetchednumberofunits); 
    console.log(instancesofnumberofunits); 
    console.log(instancesofnumberofroomsperunit);
  
    


    // let caretakernamee;
    // let caretakermobilenumber;
    // let caretakergmail;



    // let storedcaretakername=JSON.parse(localStorage.getItem("caretakername"));
    // let storedcaretakerphonenumber=JSON.parse(localStorage.getItem("caretakerphonenumber"));
    // let storedcaretakeremail=JSON.parse(localStorage.getItem("caretakeremail"));

    // storedcaretakername
    // console.log(storedpropname.savedpropname.prop);
    // if(storedpropname.savedpropname.prop===null && storedpropname.savedavaiunits.prop===null && storedtotunits.savedtotunits.prop===null){

    // if(storedcaretakername===null && storedcaretakerphonenumber===null && storedcaretakeremail===null){
    //     caretakernamee=""
    //     caretakermobilenumber=""
    //     caretakergmail=""
      
    // }
    // else{
      
    // console.log("storedcaretakername.savedcaretakername.prop =  " + storedcaretakername.savedcaretakername.prop, "storedcaretakerphonenumber.savedcaretakerphonenumber.prop=  " + storedcaretakerphonenumber.savedcaretakerphonenumber.prop, "storedcaretakeremail.savedcaretakeremail.prop=  " + storedcaretakeremail.savedcaretakeremail.prop)
    // caretakernamee=storedcaretakername.savedcaretakername.prop;
    // caretakermobilenumber=storedcaretakerphonenumber.savedcaretakerphonenumber.prop;
    // caretakergmail=storedcaretakeremail.savedcaretakeremail.prop;

      
    //   console.log(caretakernamee);
    //   console.log(caretakermobilenumber);
    //   console.log(caretakergmail );
    // } 
  
      const side=useContext(Sharesidebar);
      const form=useRef();
      const checkbtn=useRef();
      const [disabled, setDisabled]=useState(true)
      const [path, setPath]=useState("#");
      const [priceperunit,setPriceperunit]=useState([]);

      // const [loading,setLoading]=useState(true)
      // const [color, setColor]=useState(selectedindex);
      // const [propertydetails, setPropertydetails]=useState(selectedfeatures);
     

        
    const unitPriceChange =(index)=>(valuee)=>{
      const a=valuee.target.value;
      console.log(a);
      // consoe.log(index)
      // prices .push()
      const newPriceperunit=[...priceperunit]
      newPriceperunit[index]=valuee.target.value;
     
      setPriceperunit(newPriceperunit);

    }
   

    // console.log(priceperunit);


    useEffect(()=>{
      console.log(priceperunit);

            
      // instancesofnumberofunits
      // instancesofnumberofroomsperunit

      priceperunit.map((index,eachpriceperunit)=>{
        console.log(index);
        console.log(eachpriceperunit);
        // console.log(eachpriceperunit.length)

        if(eachpriceperunit===""){
          setDisabled(true);
          setPath("#");
          console.log(disabled)
          
        }else{
          setDisabled(false);
          console.log(disabled)
          setPath("/agency/properties/list-property/step12");
          
        }


      })

    }, [priceperunit]);



    const handleClick=(e)=>{
        e.preventDefault();
        console.log("here is the submit button")

        form.current.validateAll();
        
        if(checkbtn.current.context._errors.length===0){
            console.log("no errors in the form");
            setDisabled(false);
            saveDraft();
            setLoading(false)

            console.log("just clicked on the Handle Click ")
                
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

        const savedpricesperunit={
          "prop":priceperunit,
        }
     
        localStorage.setItem("pricesperunit", JSON.stringify({savedpricesperunit}))
      
  
        console.log("Die Inhanten liefern Knopfen is functionieren. Schrift 11, here unten gibt prices per unit") 
  
        console.log(priceperunit);
      }
      else{
        console.log("Counldn't save the draft, Disabled is equal to Button Disabled")
      }

      // localStorage.setItem("proptyp", JSON.stringify({saved}))
      // localStorage.setItem("listingpurpose", JSON.stringify({saved}))
      // localStorage.setItem("internalfeatures", JSON.stringify({saved}))
      // localStorage.setItem("externalfeatures", JSON.stringify({saved}))
      // localStorage.setItem("nearbyfeatures", JSON.stringify({saved}))
      // localStorage.setItem("roomsperunit", JSON.stringify({saved}))


      // localStorage.setItem("propertyname", JSON.stringify({savedpropname}))
      // localStorage.setItem("totalunits", JSON.stringify({savedtotunits}))
      // localStorage.setItem("availableunits", JSON.stringify({savedavaiunits}))


      // localStorage.setItem("landlordname", JSON.stringify({savedlandlordname}))
      // localStorage.setItem("landlordemail", JSON.stringify({savedlandlordemail}))
      // localStorage.setItem("landlordphonenumber", JSON.stringify({savedlandlordphonenumber}))



      // localStorage.setItem("caretakername", JSON.stringify({savedcaretakername}))
      // localStorage.setItem("caretakeremail", JSON.stringify({savedcaretakeremail}))
      // localStorage.setItem("caretakerphonenumber", JSON.stringify({savedcaretakerphonenumber}))

      const proptype=JSON.parse(localStorage.getItem("proptyp"));
      const listingpurpose=JSON.parse(localStorage.getItem("listingpurpose"));
      const internalfeatures=JSON.parse(localStorage.getItem("internalfeatures"));
      const externalfeatures=JSON.parse(localStorage.getItem("externalfeatures"));
      const nearbyfeatures=JSON.parse(localStorage.getItem("nearbyfeatures"));
      const roomsperunit=JSON.parse(localStorage.getItem("roomsperunit"));
      
      const propertyname=JSON.parse(localStorage.getItem("propertyname"));
      const totalunits=JSON.parse(localStorage.getItem("totalunits"));
      const availableunits=JSON.parse(localStorage.getItem("availableunits"));

      const landlordname=JSON.parse(localStorage.getItem("landlordname"));
      const landlordemail=JSON.parse(localStorage.getItem("landlordemail"));
      const landlordphonenumber=JSON.parse(localStorage.getItem("landlordphonenumber"));

      const caretakername=JSON.parse(localStorage.getItem("caretakername"));
      const caretakeremail=JSON.parse(localStorage.getItem("caretakeremail"));
      const caretakerphonenumber=JSON.parse(localStorage.getItem("caretakerphonenumber"));

      const savedpricesperunit=JSON.parse(localStorage.getItem("pricesperunit"))

      console.log(proptype.saved.prop);
      console.log(listingpurpose.saved.prop)
      console.log(internalfeatures.saved.prop);
      console.log(externalfeatures.saved.prop);
      console.log(nearbyfeatures.saved.prop);
      console.log(roomsperunit.saved.prop);
      console.log(propertyname.savedpropname.prop);
      console.log(totalunits.savedtotunits.prop);
      console.log(availableunits.savedavaiunits.prop);
      console.log(landlordname.prop);
      console.log(landlordemail.prop);
      console.log(landlordphonenumber.prop);
      console.log(caretakername.prop);
      console.log(caretakeremail.prop);
      console.log(caretakerphonenumber.prop);
      console.log(savedpricesperunit.savedpricesperunit.prop);


      const propertytype=proptype.saved.prop;
      const propertylistingpurpose=listingpurpose.saved.prop;
      const propertyinternalfeatures=internalfeatures.saved.prop;
      const propertyexternalfeatures=externalfeatures.saved.prop;
      const propertynearbyfeatures=nearbyfeatures.saved.prop;
      const propertyroomsperunit=nearbyfeatures.saved.prop;
      const propertypriceperunit=savedpricesperunit.savedpricesperunit.prop;

      
      const propertynamed=propertyname.savedpropname.prop;
      const propertytotalunits=totalunits.savedtotunits.prop;
      const propertyavailableunits=availableunits.savedavaiunits.prop;
      const propertylandlordname=landlordname.prop;
      const propertylandlordemail=landlordemail.prop;
      const propertylandlordphonenumber=landlordphonenumber.prop;
      const propertycaretakername=caretakername.prop;
      const propertycaretakeremail=caretakeremail.prop;
      const propertycaretakerphonenumber=caretakerphonenumber.prop;

      setPath("/agency/properties/list-property/step12");

      sendpropertyDetails(propertytype,propertylistingpurpose,propertyinternalfeatures,propertyexternalfeatures,propertynearbyfeatures,propertyroomsperunit,propertypriceperunit);
      




  }
  


  const saveBack=(e)=>{
      console.log("here is the draft shit, its's working")
      e.preventDefault();


      const savedpricesperunit=JSON.parse(localStorage.getItem("pricesperunit"))

      localStorage.setItem("pricesperunit", JSON.stringify({savedpricesperunit}))
        

      console.log("Die Inhanten liefern Knopfen is functionieren. Schrift 11, here unten gibt prices per unit") 

      console.log(priceperunit);

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
                            <Label>Property/ Apartment's Price Details  :</ Label>
                            <Labelpara>Enter Property's Prices Details below..</Labelpara>
                          </Propertycaretakerdiv> 


                          {instancesofnumberofroomsperunit.map((numberofroomsperunit,index)=>{
                            return(

                              <Priceperunit>
                                <Label >Price of {numberofroomsperunit} :</ Label >
                                <Input type="price"  name="priceperunit" placeholder="Enter Price of Number of Bedrooms" key={index} value={priceperunit[index]} onChange={unitPriceChange(index)} validations={[Required, Color]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px solid blue`, fontSize:"1rem", color:"black"}}></Input>            
                              </Priceperunit>                              

                            )
                          })}
      
                            
                          <div style={{ width:"100%", margin:"1rem 0rem 1rem 1rem"}}>
                            <Backbutton to="/properties/list-property/step6"  sidebar={side? 1:0} >Back</Backbutton>    
                            {/* onClick={saveBack} */}
                            {disabled?
                            <Button disableed={disabled?1:0} type='submit' style={{padding:"0.5rem 1rem", margin:"0.5rem"}}>Next Step</Button>
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

export default Addpropstep11