import React, {useState, useContext,useRef, useEffect} from 'react'
// import multer from "multer"
// import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import { Link} from "react-router-dom"


import styled from "@emotion/styled";
import {Sharesidebar} from "../components/Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import { urlValidate } from 'express-validators';
import * as MdIcons from "react-icons/md"
import * as BiIcons from "react-icons/bi"
import { uploadImages } from '../components/apicalls';
// import e from 'express';


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
margin:1rem;
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
width:90%;
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
margin:0.3em 0;


`
const Imagesdiv=styled.div` 
display:flex;
justify-content:space-evenly;
align-items:center;
wrap-direction:row;
flex-wrap:wrap;

`
// const Imagesdiv2=styled.div`
// background-image:url(${({src})=>{return src}});
// margin:0.05rem 0.1rem 0.6rem 0rem;
// background-position:center;
// height:170px;
// width:250px;
// background-repeat:no-repeat;
// background-size:250px 170px;
// background-color:blue;
// border-radius:10px;
// `
const Imagediv=styled.div`
background-image:url(${({src})=>{return src}});
margin:0.05rem 0.1rem 0.6rem 0rem;
width:13.5rem;
height:11.5rem;
background-size:13.5rem 11.5rem;
background-position:center;
position:relative;
background-repeat:no-repeat;
background-color:#F8F8F8;
border-radius:10px;
`
const Removebutton=styled.button`
background-color:#F8F8F8;
color:black;
border:none;
position:absolute;
margin:0.2rem;
right:0;
top:0;

&:hover{
  background-color:red;
  cursor:pointer;
}

`
const Check=styled.div`

input[type=file]::-webkit-file-upload-button {
  // visibility: hidden;
  margin-left:50% ;
  
}

`
const Inputlabel=styled.label`

&:hover{
  background-color:#F8F8F8;
  cursor:pointer;
}
`

// const Invalidimage=()=>{
//   return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Invalid document upload Image</div> 
// }
// const Required=(value)=>{
//     if(!value)
//     return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Required</div>
    
// }

// const Max=(value)=>{
//     if(value >1000)
//     return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Enter Reasonable Number</div>
    
// }

// const Nuumber=(value)=>{
//   if(isNaN(value)){
//     return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Please Enter a Number</div>
//   }else{
//   }
// }



// const Color=()=>{

// }   


// let clicked=[];
// let include;
// let colorarray=[];
// let includedincolorarray;

function Addpropstep8 (){

  let pics;
  // let totunits;
  // let avaiunits;


  let storedpics=JSON.parse(localStorage.getItem("outsidepics"));
  // let storedavaiunits=JSON.parse(localStorage.getItem("availableunits"));
  // let storedtotunits=JSON.parse(localStorage.getItem("totalunits"));
  
  if(storedpics===null){
      pics=[];
     console.log("NO STOREDpICS ARE THE FOLLOWING " + storedpics)
  }
  else{
    console.log("STOREDPICS ARE THE FOLLOWING " + storedpics);
    pics=storedpics.saved.prop;


    
    // const makeblobs=async(urls)=>{
          
    //       const imagesurls=urls;
          
    //       // Convert blob URLs to Blob objects
    //       const blobPromises = imagesurls.map(async (imageUrl, index) => {
    //         const response = await fetch(imageUrl); // Fetch the actual blob data
    //         const blob = await response.blob(); // Convert response to blob
    //         pics.push(blob)
    //         console.log(blob);
    //         // formData.append("images", blob, `image_${index}.jpg`);
    //     });
    
    //       // Wait for all blobs to be processed
    //       await Promise.all(blobPromises);

    // }

    // makeblobs(urls);
  
    console.log(pics);

  }

      const side=useContext(Sharesidebar);
      const form=useRef();
      const checkbtn=useRef();

      const [disabled, setDisabled]=useState(true)
      const [valid, setValid]=useState(true);
      const [validsize, setValidsize]=useState(true);
      const [path, setPath]=useState("#");

      const [src1, setSrc1]=useState(); 
      const  [outsidephoto, setoutsidePhoto]=useState(pics);  
      const  [insidephoto, setinsidePhoto]=useState([]);  
      const  [anyotherphoto, setanyotherPhoto]=useState([]);  
      const [displaypreview, setDisplaypreview]=useState(false);
        
    // const photoChange =(event)=>{
    //   const a=event.target.value;
    //   setAvailableunits(a);
    // }

    console.log(storedpics);
    console.log(outsidephoto);
    
    useEffect(()=>{
      if(outsidephoto.length>0){
        setDisabled(false);
        setDisplaypreview(true);
        console.log(outsidephoto);
        setPath("/agency/properties/list-property/step9");
        
      }else{
        setDisabled(true);
        setPath("#");
        setDisplaypreview(false);
      }

    }, [outsidephoto]);

  const outsidePhotoChange=(e)=>{
    const file=e.target.files[0];
    const image=URL.createObjectURL(e.target.files[0]);
    setSrc1(image);
    console.log(file.type);
    console.log(file);
    console.log(image);

    console.log(file.size);

      var reader = new FileReader();

      reader.onload = function (e) {
        // console.log(e.target.result);
          imageExists(e.target.result, function(exists){
              if (exists) {
                  // Do something with the image file..
                  if(file.size<=10000000){
                    setoutsidePhoto([...outsidephoto, image]);
                    console.log("Valid Image");
                    setValid(true);
                    setValidsize(true);
                  }else{
                    setValidsize(false);

                  } 
                
              } else {
                  // different file format
                  console.log("INVALID Image")
                  setValid(false);
              }
          });
        };

        reader.readAsDataURL(file);

        // console.log(reader.readAsDataURL(file));

        function imageExists(url, callback) {
            var img = new Image();
            img.onload = function() { callback(true); };
            img.onerror = function() { callback(false); };
            img.src = url;
        }
    }


  
  const extractImageLink=(e)=>{
    e.preventDefault();
    const file=e.dataTransfer.files;
    const image=URL.createObjectURL(e.dataTransfer.files[0]);
    setSrc1(image);
    console.log(image);
    console.log(file);
    console.log(file[0].type);
    console.log(typeof(file));
    console.log(file[0].size);
    
    // console.log(String(file[0].type) === ("image/jpeg" || "image/jpg" || "image/png" || "image/svg"))
    // if(String(file[0].type)!==("image/jpg" || "image/png" || "image/svg" || "image/jpeg" || "image/jfif" || "image/pjpeg" || "image/pjp")){
    //   // different file format
    //     console.log("INVALID file Format accepts Images only e.g .png, .jpeg, .jpeg, .svg etc.")
    //     setValid(false);  
    //   } 
    // else {
    //   // Do something with the image file..
    //   if(file[0].size<=10000000){
    //     setoutsidePhoto([...outsidephoto, image]);
    //     console.log("Valid Image");
    //     setValid(true);
    //     setValidsize(true);
    //   }
    //   else{
    //     setValidsize(false);
    //     console.log("valide shit")
    //   } 
    // }





    var reader = new FileReader();

    reader.onload = function (e) {
      // console.log(e.target.result);
        imageExists(e.target.result, function(exists){
            if (exists) {
                // Do something with the image file..
                if(file[0].size<=10000000){
                  setoutsidePhoto([...outsidephoto, image]);
                  console.log("Valid Image");
                  setValid(true);
                  setValidsize(true);
                }else{
                  setValidsize(false);

                } 
              
            } else {
                // different file format
                console.log("INVALID Image")
                setValid(false);
            }
        });
      };

      reader.readAsDataURL(file[0]);

      // console.log(reader.readAsDataURL(file));

      function imageExists(url, callback) {
          var img = new Image();
          img.onload = function() { callback(true); };
          img.onerror = function() { callback(false); };
          img.src = url;
      }
  }
  

  const removeImage=(imageurl)=>{
    const remainingimages=outsidephoto.filter((remain)=> remain!==imageurl)
  
    setoutsidePhoto(remainingimages);

  }
  const imageSize=({target:img})=>{
    const {offsetHeight, offsetWidth}=img;

    console.log(offsetHeight, offsetWidth);

  }
    const insidePhotoChange=()=>{


    }
    const anyotherPhotoChange=()=>{


    }
  


    const handleClick=(e)=>{

            console.log("\n\n JUST CLICKED ON THE SUBMIT IMAGESS BUTTON \n\n")
            e.preventDefault();
            // console.log("here is the submit button")

            // form.current.validateAll();
            
            if(outsidephoto){
                console.log("no errors FOUND in the OUTSIDE PHOTOS form");
                setDisabled(false);
                saveDraft();

                uploadImages(outsidephoto);   
                

            }
            else{
                console.log("show all errors ARISING FROM no Photos SELECTED")
                setDisabled(true);
            }
    }


    
    const saveDraft=()=>{
      console.log("here is the OUTSIDEPHOTS draft shit, its's working")
      // e.preventDefault();
      // if(disabled===false){
      // }
      const saved={
        "prop":outsidephoto,
      }
      localStorage.setItem("outsidepics", JSON.stringify({saved}));
      console.log("Die BILD Inhanten liefern Knopfen is functionieren. Schrift 8 FÜR BILDEN ")
      

      uploadImages(outsidephoto);   
                
    } 


  const saveBack=(e)=>{
    console.log("here is the OUTSIDEPHOTS BACK BUTTONS shit, its's working")
        // e.preventDefault();
        const saved={
          "prop":outsidephoto,
        }
        localStorage.setItem("outsidepics", JSON.stringify({saved}));

    
      console.log("Die BILDEN Inhanten liefern FÜR ZURUCKWARTS Knopfen is functionieren. Schrift 6 BACK ")
     



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
                        <Form method="" encType="multipart/form-data" ref={form} onSubmit={handleClick} >           
                             
                            <Listingpurposediv >
                              <Label>Property/ Apartment Photos  :</ Label>
                              <Labelpara>Upload some of the best photos of your apartment/property..</Labelpara>
                          
                                {displaypreview ?
                                  <Imagesdiv src={src1}>
                                    
                                    {outsidephoto.map((photo,index)=>{
                                      return(
                                        <Imagediv src={photo} key={index} onLoad={imageSize}> <Removebutton onClick={()=>removeImage(photo)}><MdIcons.MdOutlineClose /> </Removebutton></Imagediv>
                                      )
                                    })}
                                 </Imagesdiv>
                                    
                                    :
                                      null
                                }
                                
                            </Listingpurposediv> 

                            <Nameofproperty>
                              {!valid &&
                                  <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"0.82rem", margin: "0.25rem auto", width:"100%",}}>Invalid file format! Images only e.g .png, .jpeg, ...</div>
                              }
                              {!validsize &&
                                  <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"0.82rem", margin: "0.25rem auto", width:"100%",}}>Image too big, Only Accepts upto 10Mbs Image </div>
                              }
                                <Label>Outside of the Apartement Photos :</ Label >
                                {/*                                 
                                  </Nameofproperty>/* {outsidephoto && 
                                  <Imagesdiv2 src={src1}></Imagesdiv2> 
                                */}

                                <Inputlabel className="uploaddiv" onDragOver={(e)=>{e.preventDefault()}} onDrop={extractImageLink} style={{width:"100%", height:"6.6rem", border:"2px dashed grey",  display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                                    <div className="uploadicon" style={{ color:"grey"}}>< BiIcons.BiImageAdd /></div>
                                    <div className="uploadhere" style={{ }}>Drag and Drop or Click <span style={{color:"blue"}}>Here</span> to upload Photos</div>
                                    <div className="pictype" style={{paddingLeft:"0.2rem"}}>(Accepts .jpg, .jpeg, .svg, .png upto 10Mbs)</div>
                                  <Input style={{position:"absolute", width:"100%", top:"0", botton:"0", display:"flex", alignItems:"center", backgroundColor:"red", justifyContent:"space-between", opacity:"0", }} type="file" name="outsideviews" accept=".png , .jpeg, .jpg, .svg, .jfif, .pjpeg, .pjp" title="upload photos of your Apartment"  onChange={outsidePhotoChange} ></Input>            
                                </Inputlabel>
                            </Nameofproperty>                              

                              <Totalnoofunitsdiv>
                                <Label Htmlfor="outide">Photos of Inside the Apartment:</ Label >
                                
                                  <div className="outside" >
                                    <Check style={{width:"90%", margin:"2rem auto"}}>
                                      <Input type="file" name="insideviews" accept=".png , .jpeg, .jpg" title=" " value={insidephoto} onChange={insidePhotoChange}  style={{ width:"90%", padding:"4rem 0.5rem", backgroundColor:"#F8F8F8", borderRadius:"5px", border:`2px dashed black`, fontSize:"1rem", color:"black"}}></Input>            

                                    </Check> 
                                  </div>
                              </Totalnoofunitsdiv>

                              <Numberofunitsavailable>
                                  <Label>Photos of anyotherplace of the Apartment :</ Label >
                                  <Input type="file" name="anyotherviews" accept=".png , .jpeg, .jpg" title="upload photos of Around your apartment" value={anyotherphoto} onChange={anyotherPhotoChange}  style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px dashed grey`, fontSize:"1rem", color:"black"}}></Input>            
                              </Numberofunitsavailable>
                               
                            <div style={{ width:"40%", margin:"3rem auto", backgroundColor:""}}>
                                <Backbutton to="/properties/list-property/step7" onClick={saveBack} sidebar={side? 1:0} >Back</Backbutton>    

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

export default Addpropstep8