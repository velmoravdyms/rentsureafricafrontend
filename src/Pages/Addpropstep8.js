// import React, {useState, useContext,useRef, useEffect} from 'react'
// // import multer from "multer"
// // import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
// import { Link} from "react-router-dom"


// import styled from "@emotion/styled";
// import {Sharesidebar} from "../components/Sidebar";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// //import { urlValidate } from 'express-validators';
// import * as MdIcons from "react-icons/md"
// import * as BiIcons from "react-icons/bi"
// import { uploadImages } from '../components/apicalls';
// // import e from 'express';


// const Breadcrumbs=styled.div`
// position:fixed;
// top:67px;
// text-align:center;
// display:flex;
// align-items:center;
// // vertical-align:middle;
// height:45px;
// box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
// left:${({sidebar})=> sidebar ? "5.5%": "23.5%"};
// width:${({sidebar})=> sidebar ? "92.5%": "74.5%"};
// `
// const Crumbsicons=styled.div`
// margin-left:2rem;
// `
// const Listpropdiv=styled.div`
// position:fixed;
// top:116px;
// height:78vh;
// overflow-y:scroll;
// overflow-x:hidden;
// left:${({sidebar})=> sidebar ? "6%": "24%"};
// width:${({sidebar})=> sidebar ? "93%": "75%"};


// ::-webkit-scrollbar {
//   width: 10px;               /* width of the entire scrollbar */
//   height:7.5px;
// }

// ::-webkit-scrollbar-track {
//   background-color: #F5F5F5;        /* color of the tracking area */
// }

// ::-webkit-scrollbar-thumb {
//   background-color: gray;    /* color of the scroll thumb */
//   // border-radius: 20px;       /* roundness of the scroll thumb */
//   // border: 1px solid orange;  /* creates padding around scroll thumb */
// }
// ::-webkit-scrollbar-corner {
//   background-color: #F8F8F8;    /* color of the scroll thumb */
//   // border-radius: 20px;       /* roundness of the scroll thumb */
//   // border: 1px solid orange;  /* creates padding around scroll thumb */

// `
// const ListHeader=styled.div`
// box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
// width:100%;
// padding:0.5rem;
// margin:0 auto;
// `

// const Headertitle=styled.div`
// width:90%;
// margin:0 auto;
// font-size:${({sidebar})=> sidebar ? "1.7rem": "1.7rem" };
// font-weight:${({sidebar})=> sidebar ? "600": "600" };
// `
// const Labelpara=styled.div`

// `
// const Progressbar =styled.div`
// background-color:#F5F5F5;
// height:10px;
// border-radius:3px;
// width:${({sidebar})=> sidebar ? "50%": "60%" };
// margin:1rem auto;
// `

// const Listbody=styled.div `
// margin:auto;
// width:100%;
// `

// const Backbutton=styled(Link)`
// background-color:#F5F5F5;
// text-decoration:none;
// font-weight:${({sidebar})=> sidebar ? "600": "600" };
// font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
// margin:1rem 30% 1rem 2rem;  
// border-radius:6.79px;
// border:none;
// padding:${({sidebar})=> sidebar ? "0.5rem": "0.5rem" };
// color:blue;
// &:hover{
//   cursor:pointer;
//   padding:0.5rem;
//   color:white;
//   background-color:blue;
// }

// `
// const Nextbutton=styled(Link)`
// text-decoration:none;
// padding:0.5rem;
// background-color:${({disabled})=> disabled ? "#F5F5F5": "blue" };
// font-weight:${({sidebar})=> sidebar ? "600": "600" };
// font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
// color:${({disabled})=> disabled ? "blue": "white" };
// margin:1rem;
// border-radius:6px;
// border:none;
// &:hover{
//     cursor:pointer;
// }

// `
// const Button=styled.button`
// text-decoration:none;
// padding:0.5rem;
// background-color:${({disableed})=> disableed ? "#F5F5F5": "blue" };
// font-weight:${({sidebar})=> sidebar ? "600": "600" };
// font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
// color:${({disableed})=> disableed ? "blue": "white" };
// margin:1rem;
// border-radius:6px;
// border:none;
// &:hover{
//     cursor:pointer;
// }

// `

// const Propertycontainer=styled.div`
// width:90%;
// margin:0 auto;

// `
// const Listingpurposediv=styled.div`

// `


// const Nameofproperty =styled.div`
// margin:2rem 0 2rem 1.5rem ;
// // padding:0.5rem;
// `
// const Totalnoofunitsdiv= styled.div`
// margin:2rem 0 2rem 1.5rem ;
// // padding:0.5rem;


// `               
// const Numberofunitsavailable=styled.div`
// margin:2rem 0 2rem 1.5rem ;
// // padding:0.5rem;

// `
        

// const Label=styled.div`
// font-weight:800;
// margin:0.3em 0;


// `
// const Imagesdiv=styled.div` 
// display:flex;
// justify-content:space-evenly;
// align-items:center;
// wrap-direction:row;
// flex-wrap:wrap;

// `
// // const Imagesdiv2=styled.div`
// // background-image:url(${({src})=>{return src}});
// // margin:0.05rem 0.1rem 0.6rem 0rem;
// // background-position:center;
// // height:170px;
// // width:250px;
// // background-repeat:no-repeat;
// // background-size:250px 170px;
// // background-color:blue;
// // border-radius:10px;
// // `
// const Imagediv=styled.div`
// background-image:url(${({src})=>{return src}});
// margin:0.05rem 0.1rem 0.6rem 0rem;
// width:13.5rem;
// height:11.5rem;
// background-size:13.5rem 11.5rem;
// background-position:center;
// position:relative;
// background-repeat:no-repeat;
// background-color:#F8F8F8;
// border-radius:10px;
// `
// const Removebutton=styled.button`
// background-color:#F8F8F8;
// color:black;
// border:none;
// position:absolute;
// margin:0.2rem;
// right:0;
// top:0;

// &:hover{
//   background-color:red;
//   cursor:pointer;
// }

// `
// const Check=styled.div`

// input[type=file]::-webkit-file-upload-button {
//   // visibility: hidden;
//   margin-left:50% ;
  
// }

// `
// const Inputlabel=styled.label`

// &:hover{
//   background-color:#F8F8F8;
//   cursor:pointer;
// }
// `

// // const Invalidimage=()=>{
// //   return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Invalid document upload Image</div> 
// // }
// // const Required=(value)=>{
// //     if(!value)
// //     return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Required</div>
    
// // }

// // const Max=(value)=>{
// //     if(value >1000)
// //     return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Enter Reasonable Number</div>
    
// // }

// // const Nuumber=(value)=>{
// //   if(isNaN(value)){
// //     return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Please Enter a Number</div>
// //   }else{
// //   }
// // }



// // const Color=()=>{

// // }   


// // let clicked=[];
// // let include;
// // let colorarray=[];
// // let includedincolorarray;

// function Addpropstep8 (){

//   let pics;
//   // let totunits;
//   // let avaiunits;


//   let storedpics=JSON.parse(localStorage.getItem("outsidepics"));
//   // let storedavaiunits=JSON.parse(localStorage.getItem("availableunits"));
//   // let storedtotunits=JSON.parse(localStorage.getItem("totalunits"));
  
//   if(storedpics===null){
//       pics=[];
//      console.log("NO STOREDpICS ARE THE FOLLOWING " + storedpics)
//   }
//   else{
//     console.log("STOREDPICS ARE THE FOLLOWING " + storedpics);
//     pics=storedpics.saved.prop;


    
//     // const makeblobs=async(urls)=>{
          
//     //       const imagesurls=urls;
          
//     //       // Convert blob URLs to Blob objects
//     //       const blobPromises = imagesurls.map(async (imageUrl, index) => {
//     //         const response = await fetch(imageUrl); // Fetch the actual blob data
//     //         const blob = await response.blob(); // Convert response to blob
//     //         pics.push(blob)
//     //         console.log(blob);
//     //         // formData.append("images", blob, `image_${index}.jpg`);
//     //     });
    
//     //       // Wait for all blobs to be processed
//     //       await Promise.all(blobPromises);

//     // }

//     // makeblobs(urls);
  
//     console.log(pics);

//   }

//       const side=useContext(Sharesidebar);
//       const form=useRef();
//       const checkbtn=useRef();

//       const [disabled, setDisabled]=useState(true)
//       const [valid, setValid]=useState(true);
//       const [validsize, setValidsize]=useState(true);
//       const [path, setPath]=useState("#");

//       const [src1, setSrc1]=useState(); 
//       const  [outsidephoto, setoutsidePhoto]=useState(pics);  
//       const  [insidephoto, setinsidePhoto]=useState([]);  
//       const  [anyotherphoto, setanyotherPhoto]=useState([]);  
//       const [displaypreview, setDisplaypreview]=useState(false);
        
//     // const photoChange =(event)=>{
//     //   const a=event.target.value;
//     //   setAvailableunits(a);
//     // }

//     console.log(storedpics);
//     console.log(outsidephoto);
    
//     useEffect(()=>{
//       if(outsidephoto.length>0){
//         setDisabled(false);
//         setDisplaypreview(true);
//         console.log(outsidephoto);
//         setPath("/agency/properties/list-property/step9");
        
//       }else{
//         setDisabled(true);
//         setPath("#");
//         setDisplaypreview(false);
//       }

//     }, [outsidephoto]);

//   const outsidePhotoChange=(e)=>{
//     const file=e.target.files[0];
//     const image=URL.createObjectURL(e.target.files[0]);
//     setSrc1(image);
//     console.log(file.type);
//     console.log(file);
//     console.log(image);

//     console.log(file.size);

//       var reader = new FileReader();

//       reader.onload = function (e) {
//         // console.log(e.target.result);
//           imageExists(e.target.result, function(exists){
//               if (exists) {
//                   // Do something with the image file..
//                   if(file.size<=10000000){
//                     setoutsidePhoto([...outsidephoto, image]);
//                     console.log("Valid Image");
//                     setValid(true);
//                     setValidsize(true);
//                   }else{
//                     setValidsize(false);

//                   } 
                
//               } else {
//                   // different file format
//                   console.log("INVALID Image")
//                   setValid(false);
//               }
//           });
//         };

//         reader.readAsDataURL(file);

//         // console.log(reader.readAsDataURL(file));

//         function imageExists(url, callback) {
//             var img = new Image();
//             img.onload = function() { callback(true); };
//             img.onerror = function() { callback(false); };
//             img.src = url;
//         }
//     }


  
//   const extractImageLink=(e)=>{
//     e.preventDefault();
//     const file=e.dataTransfer.files;
//     const image=URL.createObjectURL(e.dataTransfer.files[0]);
//     setSrc1(image);
//     console.log(image);
//     console.log(file);
//     console.log(file[0].type);
//     console.log(typeof(file));
//     console.log(file[0].size);
    
//     // console.log(String(file[0].type) === ("image/jpeg" || "image/jpg" || "image/png" || "image/svg"))
//     // if(String(file[0].type)!==("image/jpg" || "image/png" || "image/svg" || "image/jpeg" || "image/jfif" || "image/pjpeg" || "image/pjp")){
//     //   // different file format
//     //     console.log("INVALID file Format accepts Images only e.g .png, .jpeg, .jpeg, .svg etc.")
//     //     setValid(false);  
//     //   } 
//     // else {
//     //   // Do something with the image file..
//     //   if(file[0].size<=10000000){
//     //     setoutsidePhoto([...outsidephoto, image]);
//     //     console.log("Valid Image");
//     //     setValid(true);
//     //     setValidsize(true);
//     //   }
//     //   else{
//     //     setValidsize(false);
//     //     console.log("valide shit")
//     //   } 
//     // }





//     var reader = new FileReader();

//     reader.onload = function (e) {
//       // console.log(e.target.result);
//         imageExists(e.target.result, function(exists){
//             if (exists) {
//                 // Do something with the image file..
//                 if(file[0].size<=10000000){
//                   setoutsidePhoto([...outsidephoto, image]);
//                   console.log("Valid Image");
//                   setValid(true);
//                   setValidsize(true);
//                 }else{
//                   setValidsize(false);

//                 } 
              
//             } else {
//                 // different file format
//                 console.log("INVALID Image")
//                 setValid(false);
//             }
//         });
//       };

//       reader.readAsDataURL(file[0]);

//       // console.log(reader.readAsDataURL(file));

//       function imageExists(url, callback) {
//           var img = new Image();
//           img.onload = function() { callback(true); };
//           img.onerror = function() { callback(false); };
//           img.src = url;
//       }
//   }
  

//   const removeImage=(imageurl)=>{
//     const remainingimages=outsidephoto.filter((remain)=> remain!==imageurl)
  
//     setoutsidePhoto(remainingimages);

//   }
//   const imageSize=({target:img})=>{
//     const {offsetHeight, offsetWidth}=img;

//     console.log(offsetHeight, offsetWidth);

//   }
//     const insidePhotoChange=()=>{


//     }
//     const anyotherPhotoChange=()=>{


//     }
  


//     const handleClick=(e)=>{

//             console.log("\n\n JUST CLICKED ON THE SUBMIT IMAGESS BUTTON \n\n")
//             e.preventDefault();
//             // console.log("here is the submit button")

//             // form.current.validateAll();
            
//             if(outsidephoto){
//                 console.log("no errors FOUND in the OUTSIDE PHOTOS form");
//                 setDisabled(false);
//                 saveDraft();

//                 uploadImages(outsidephoto);   
                

//             }
//             else{
//                 console.log("show all errors ARISING FROM no Photos SELECTED")
//                 setDisabled(true);
//             }
//     }


    
//     const saveDraft=()=>{
//       console.log("here is the OUTSIDEPHOTS draft shit, its's working")
//       // e.preventDefault();
//       // if(disabled===false){
//       // }
//       const saved={
//         "prop":outsidephoto,
//       }
//       localStorage.setItem("outsidepics", JSON.stringify({saved}));
//       console.log("Die BILD Inhanten liefern Knopfen is functionieren. Schrift 8 FÜR BILDEN ")
      

//       uploadImages(outsidephoto);   
                
//     } 


//   const saveBack=(e)=>{
//     console.log("here is the OUTSIDEPHOTS BACK BUTTONS shit, its's working")
//         // e.preventDefault();
//         const saved={
//           "prop":outsidephoto,
//         }
//         localStorage.setItem("outsidepics", JSON.stringify({saved}));

    
//       console.log("Die BILDEN Inhanten liefern FÜR ZURUCKWARTS Knopfen is functionieren. Schrift 6 BACK ")
     



// } 


//       return (
//       <div>
//         <Breadcrumbs sidebar={side?1:0}>
//             <Crumbsicons sidebar={side?1:0}>Icons will go here</Crumbsicons>
//         </Breadcrumbs>

//         <Listpropdiv  sidebar={side? 1:0} >
//               <ListHeader sidebar={side?1:0}>
//                   <Headertitle sidebar={side?1:0}>List new property</Headertitle>
//               </ListHeader>
              
//               <Listbody  sidebar={side? 1:0}>
//                     <Progressbar sidebar={side?1:0}></Progressbar>
                  
//                     <Propertycontainer>
//                     {/* onSubmit={handleClick} */}
//                         <Form method="" encType="multipart/form-data" ref={form} onSubmit={handleClick} >           
                             
//                             <Listingpurposediv >
//                               <Label>Property/ Apartment Photos  :</ Label>
//                               <Labelpara>Upload some of the best photos of your apartment/property..</Labelpara>
                          
//                                 {displaypreview ?
//                                   <Imagesdiv src={src1}>
                                    
//                                     {outsidephoto.map((photo,index)=>{
//                                       return(
//                                         <Imagediv src={photo} key={index} onLoad={imageSize}> <Removebutton onClick={()=>removeImage(photo)}><MdIcons.MdOutlineClose /> </Removebutton></Imagediv>
//                                       )
//                                     })}
//                                  </Imagesdiv>
                                    
//                                     :
//                                       null
//                                 }
                                
//                             </Listingpurposediv> 

//                             <Nameofproperty>
//                               {!valid &&
//                                   <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"0.82rem", margin: "0.25rem auto", width:"100%",}}>Invalid file format! Images only e.g .png, .jpeg, ...</div>
//                               }
//                               {!validsize &&
//                                   <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"0.82rem", margin: "0.25rem auto", width:"100%",}}>Image too big, Only Accepts upto 10Mbs Image </div>
//                               }
//                                 <Label>Outside of the Apartement Photos :</ Label >
//                                 {/*                                 
//                                   </Nameofproperty>/* {outsidephoto && 
//                                   <Imagesdiv2 src={src1}></Imagesdiv2> 
//                                 */}

//                                 <Inputlabel className="uploaddiv" onDragOver={(e)=>{e.preventDefault()}} onDrop={extractImageLink} style={{width:"100%", height:"6.6rem", border:"2px dashed grey",  display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
//                                     <div className="uploadicon" style={{ color:"grey"}}>< BiIcons.BiImageAdd /></div>
//                                     <div className="uploadhere" style={{ }}>Drag and Drop or Click <span style={{color:"blue"}}>Here</span> to upload Photos</div>
//                                     <div className="pictype" style={{paddingLeft:"0.2rem"}}>(Accepts .jpg, .jpeg, .svg, .png upto 10Mbs)</div>
//                                   <Input style={{position:"absolute", width:"100%", top:"0", botton:"0", display:"flex", alignItems:"center", backgroundColor:"red", justifyContent:"space-between", opacity:"0", }} type="file" name="outsideviews" accept=".png , .jpeg, .jpg, .svg, .jfif, .pjpeg, .pjp" title="upload photos of your Apartment"  onChange={outsidePhotoChange} ></Input>            
//                                 </Inputlabel>
//                             </Nameofproperty>                              

//                               <Totalnoofunitsdiv>
//                                 <Label Htmlfor="outide">Photos of Inside the Apartment:</ Label >
                                
//                                   <div className="outside" >
//                                     <Check style={{width:"90%", margin:"2rem auto"}}>
//                                       <Input type="file" name="insideviews" accept=".png , .jpeg, .jpg" title=" " value={insidephoto} onChange={insidePhotoChange}  style={{ width:"90%", padding:"4rem 0.5rem", backgroundColor:"#F8F8F8", borderRadius:"5px", border:`2px dashed black`, fontSize:"1rem", color:"black"}}></Input>            

//                                     </Check> 
//                                   </div>
//                               </Totalnoofunitsdiv>

//                               <Numberofunitsavailable>
//                                   <Label>Photos of anyotherplace of the Apartment :</ Label >
//                                   <Input type="file" name="anyotherviews" accept=".png , .jpeg, .jpg" title="upload photos of Around your apartment" value={anyotherphoto} onChange={anyotherPhotoChange}  style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px dashed grey`, fontSize:"1rem", color:"black"}}></Input>            
//                               </Numberofunitsavailable>
                               
//                             <div style={{ width:"40%", margin:"3rem auto", backgroundColor:""}}>
//                                 <Backbutton to="/properties/list-property/step7" onClick={saveBack} sidebar={side? 1:0} >Back</Backbutton>    

//                                 {disabled?
//                                 <Button disableed={disabled?1:0} style={{padding:"0.5rem 1rem", margin:"0.5rem"}}>Next Step</Button>
//                                 : 
//                                 <Nextbutton to={path} onClick={saveDraft} disabled={disabled?1:0}>Next Step</Nextbutton>
//                                 }
                                

//                               <CheckButton style={{display:"none"}} ref={checkbtn}/> 
//                             </div>

//                         </Form>  
//                     </Propertycontainer>                           
//               </Listbody>
//           </Listpropdiv>  
//           </div>
   
//       )
//   }

// export default Addpropstep8











































import React, {
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Sharesidebar } from "../components/Sidebar";
import Form from "react-validation/build/form";

import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

import { uploadImages } from "../components/apicalls";
import { getPropertyImages } from "../components/apicalls";

/* =========================================================
   STYLED COMPONENTS
========================================================= */

const Breadcrumbs = styled.div`
  position: fixed;
  top: 67px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 45px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

  left: ${({ sidebar }) => (sidebar ? "5.5%" : "23.5%")};
  width: ${({ sidebar }) => (sidebar ? "92.5%" : "74.5%")};
`;

const Crumbsicons = styled.div`
  margin-left: 2rem;
`;

const Listpropdiv = styled.div`
  position: fixed;
  top: 116px;
  height: 78vh;

  overflow-y: scroll;
  overflow-x: hidden;

  left: ${({ sidebar }) => (sidebar ? "6%" : "24%")};
  width: ${({ sidebar }) => (sidebar ? "93%" : "75%")};

  ::-webkit-scrollbar {
    width: 10px;
    height: 7.5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
  }

  ::-webkit-scrollbar-corner {
    background-color: #f8f8f8;
  }
`;

const ListHeader = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 100%;
  padding: 0.5rem;
  margin: 0 auto;
`;

const Headertitle = styled.div`
  width: 90%;
  margin: 0 auto;
  font-size: 1.7rem;
  font-weight: 600;
`;

const Progressbar = styled.div`
  background-color: #f5f5f5;
  height: 10px;
  border-radius: 3px;

  width: ${({ sidebar }) => (sidebar ? "50%" : "60%")};

  margin: 1rem auto;
`;

const Listbody = styled.div`
  margin: auto;
  width: 100%;
`;

const Propertycontainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const SectionBlock = styled.div`
  margin: 2rem 0;
`;

const Label = styled.div`
  font-weight: 800;
  margin: 0.5rem 0;
`;

const Description = styled.div`
  color: #555;
  margin-bottom: 1rem;
`;

const Imagesdiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 0.8rem;

  margin-bottom: 1rem;
`;

const Imagediv = styled.div`
  width: 13.5rem;
  height: 11.5rem;

  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  background-color: #f8f8f8;

  border-radius: 10px;

  overflow: hidden;
`;

const Removebutton = styled.button`
  background-color: #f8f8f8;
  color: black;

  border: none;

  position: absolute;

  margin: 0.2rem;

  right: 0;
  top: 0;

  width: 30px;
  height: 30px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

const UploadBox = styled.label`
  width: 100%;
  min-height: 7rem;

  border: 2px dashed grey;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  color: #555;

  transition: 0.2s;

  &:hover {
    background-color: #f8f8f8;
    border-color: #007bff;
    cursor: pointer;
  }
`;

const UploadIcon = styled.div`
  color: grey;
  font-size: 2rem;
`;

const UploadText = styled.div`
  margin-top: 0.3rem;
`;

const UploadTypes = styled.div`
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: #777;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ErrorMessage = styled.div`
  background-color: white;
  color: red;

  padding: 0.5rem 0;

  font-size: 0.9rem;

  margin: 0.5rem auto;

  width: 100%;
`;

const ButtonsContainer = styled.div`
  width: 40%;

  margin: 3rem auto;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
`;

const Backbutton = styled(Link)`
  background-color: #f5f5f5;

  text-decoration: none;

  font-weight: 600;
  font-size: 1.2rem;

  margin: 1rem;

  border-radius: 6.79px;

  border: none;

  padding: 0.5rem;

  color: blue;

  &:hover {
    cursor: pointer;

    color: white;

    background-color: blue;
  }
`;

const Nextbutton = styled.button`
  text-decoration: none;

  padding: 0.5rem 1rem;

  background-color: ${({ disabled }) =>
    disabled ? "#f5f5f5" : "blue"};

  font-weight: 600;

  font-size: 1.2rem;

  color: ${({ disabled }) =>
    disabled ? "blue" : "white"};

  margin: 1rem;

  border-radius: 6px;

  border: none;

  &:hover {
    cursor: ${({ disabled }) =>
      disabled ? "not-allowed" : "pointer"};
  }
`;

/* =========================================================
   CAMERA STYLES
========================================================= */

const CameraSection = styled.div`
  margin-top: 1rem;

  padding: 1rem;

  border: 2px dashed #007bff;

  border-radius: 8px;

  background-color: #f9fbfd;
`;

const CameraStreamContainer = styled.div`
  position: relative;

  width: 100%;

  max-width: 600px;

  height: 350px;

  margin: 1rem auto;

  background-color: #111;

  border-radius: 8px;

  overflow: hidden;

  display: flex;

  align-items: center;

  justify-content: center;
`;

const VideoElement = styled.video`
  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;

  background-color: #000;
`;

const CameraCapturedPreview = styled.img`
  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;
`;

const CameraControls = styled.div`
  display: flex;

  gap: 1rem;

  margin-top: 1rem;

  flex-wrap: wrap;

  justify-content: center;
`;

const CameraButton = styled.button`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 0.5rem;

  padding: 0.6rem 1.2rem;

  border-radius: 6px;

  border: none;

  font-weight: 600;

  cursor: pointer;

  background-color: ${({ bg }) =>
    bg || "#007bff"};

  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

const CanvasElement = styled.canvas`
  display: none;
`;

/* =========================================================
   COMPONENT
========================================================= */

function Addpropstep8() {
  const side = useContext(Sharesidebar);

  const form = useRef(null);

  /* =======================================================
     IMAGE STATES

     Each image is stored as:

     {
       file: File,
       preview: "blob:http://..."
     }
  ======================================================= */

  const [outsidePhotos, setOutsidePhotos] = useState([]);
  const [insidePhotos, setInsidePhotos] = useState([]);
  const [otherPhotos, setOtherPhotos] = useState([]);
  const [cameraPhotos, setCameraPhotos] = useState([]);



  useEffect(() => {
      async function loadImages() {
          const data = await getPropertyImages();

          setOutsidePhotos(
              data.outside.map(img => ({
                  imageId: img.imageId,
                  file: null,
                  preview: img.url
              }))
          );

          setInsidePhotos(
              data.inside.map(img => ({
                  imageId: img.imageId,
                  file: null,
                  preview: img.url
              }))
          );

          setOtherPhotos(
              data.other.map(img => ({
                  imageId: img.imageId,
                  file: null,
                  preview: img.url
              }))
          );

          setCameraPhotos(
              data.camera.map(img => ({
                  imageId: img.imageId,
                  file: null,
                  preview: img.url
              }))
          );
      }

      loadImages();
  }, []);



  /* =======================================================
     UI STATES
  ======================================================= */

  const [valid, setValid] = useState(true);
  const [validSize, setValidSize] = useState(true);

  const [uploading, setUploading] = useState(false);

  const [uploadError, setUploadError] = useState("");

  /* =======================================================
     CAMERA STATES
  ======================================================= */

  const [isCameraActive, setIsCameraActive] =
    useState(false);

  const [capturedCameraPhoto, setCapturedCameraPhoto] =
    useState(null);

  const videoRef = useRef(null);

  const canvasRef = useRef(null);

  const mediaStreamRef = useRef(null);

  /* =======================================================
     TOTAL PHOTO COUNT
  ======================================================= */

  const totalPhotos =
    outsidePhotos.length +
    insidePhotos.length +
    otherPhotos.length +
    cameraPhotos.length;

  const disabled =
    totalPhotos === 0 || uploading;

  /* =======================================================
     CLEAN UP PREVIEW URL
  ======================================================= */

  const revokePreview = (preview) => {
    if (
      preview &&
      preview.startsWith("blob:")
    ) {
      URL.revokeObjectURL(preview);
    }
  };

  /* =======================================================
     PROCESS MULTIPLE FILES

     OUTSIDE / INSIDE / OTHER

     CAMERA DOES NOT USE THIS FUNCTION.
  ======================================================= */

  const processFiles = (
    files,
    setter
  ) => {
    if (!files || files.length === 0) {
      return;
    }

    setValid(true);
    setValidSize(true);
    setUploadError("");

    const filesArray = Array.from(files);

    const validFiles = [];

    for (const file of filesArray) {
      /* Only images */

      if (!file.type.startsWith("image/")) {
        setValid(false);
        continue;
      }

      /* Maximum 10 MB per image */

      if (file.size > 10 * 1024 * 1024) {
        setValidSize(false);
        continue;
      }

      const preview =
        URL.createObjectURL(file);

      validFiles.push({
        file,
        preview,
      });
    }

    if (validFiles.length > 0) {
      setter((previous) => [
        ...previous,
        ...validFiles,
      ]);
    }
  };

  /* =======================================================
     INPUT HANDLERS
  ======================================================= */

  const handleOutsideChange = (e) => {
    processFiles(
      e.target.files,
      setOutsidePhotos
    );

    e.target.value = "";
  };

  const handleInsideChange = (e) => {
    processFiles(
      e.target.files,
      setInsidePhotos
    );

    e.target.value = "";
  };

  const handleOtherChange = (e) => {
    processFiles(
      e.target.files,
      setOtherPhotos
    );

    e.target.value = "";
  };

  /* =======================================================
     DRAG & DROP
  ======================================================= */

  const handleDrop = (
    e,
    setter
  ) => {
    e.preventDefault();

    processFiles(
      e.dataTransfer.files,
      setter
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /* =======================================================
     REMOVE IMAGE

     USED BY OUTSIDE / INSIDE / OTHER
  ======================================================= */

  const removeImage = (
    index,
    photos,
    setter
  ) => {
    const image = photos[index];

    if (image) {
      revokePreview(image.preview);
    }

    setter((previous) =>
      previous.filter(
        (_, i) => i !== index
      )
    );
  };

  /* =======================================================
     CAMERA
  ======================================================= */

  const startCamera = async () => {
    try {
      setUploadError("");
      setCapturedCameraPhoto(null);

      /*
       * Stop any previous camera stream first.
       */

      if (mediaStreamRef.current) {
        mediaStreamRef.current
          .getTracks()
          .forEach((track) => {
            track.stop();
          });

        mediaStreamRef.current = null;
      }

      /*
       * Request camera access.
       *
       * We deliberately use video: true.
       *
       * This works well on laptops/desktops and
       * also works on phones.
       */

      // const stream =
      //   await navigator.mediaDevices.getUserMedia({
      //     video: true,
      //     audio: false,
      //   });

      // console.log(
      //   "Camera stream:",
      //   stream
      // );

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" }
        },
        audio: false,
      });


      console.log(
        "Camera stream:",
        stream
      );

      // videoRef.current.srcObject = stream;






      const videoTrack =
        stream.getVideoTracks()[0];

      console.log(
        "Camera video track:",
        videoTrack
      );

      if (videoTrack) {
        console.log(
          "Camera settings:",
          videoTrack.getSettings()
        );
      }

      /*
       * Save the stream.
       */

      mediaStreamRef.current = stream;

      /*
       * React will now render the video element.
       *
       * The useEffect below attaches the stream.
       */

      setIsCameraActive(true);

    } catch (error) {
      console.error(
        "Camera access error:",
        error
      );

      setIsCameraActive(false);

      if (
        error.name ===
        "NotAllowedError"
      ) {
        setUploadError(
          "Camera permission was denied. Please allow camera access in your browser."
        );

      } else if (
        error.name ===
        "NotFoundError"
      ) {
        setUploadError(
          "No camera was found on this device."
        );

      } else if (
        error.name ===
        "NotReadableError"
      ) {
        setUploadError(
          "The camera is already being used by another application."
        );

      } else if (
        error.name ===
        "SecurityError"
      ) {
        setUploadError(
          "Camera access is blocked by the browser or page security settings."
        );

      } else {
        setUploadError(
          `Unable to access camera: ${error.message}`
        );
      }
    }
  };

  /* =======================================================
     ATTACH CAMERA STREAM TO VIDEO
  ======================================================= */

  useEffect(() => {
    if (!isCameraActive) {
      return;
    }

    const video = videoRef.current;

    const stream =
      mediaStreamRef.current;

    console.log(
      "Attaching camera stream..."
    );

    console.log(
      "Video element:",
      video
    );

    console.log(
      "Camera stream:",
      stream
    );

    if (!video) {
      console.error(
        "Camera video element is not available."
      );

      return;
    }

    if (!stream) {
      console.error(
        "Camera stream is not available."
      );

      return;
    }

    /*
     * Attach MediaStream.
     */

    video.srcObject = stream;

    /*
     * Camera video settings.
     */

    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;

    /*
     * Start playback.
     */

    const startVideoPlayback =
      async () => {
        try {
          await video.play();

          console.log(
            "Camera video playing:",
            video.videoWidth,
            video.videoHeight
          );

          setUploadError("");

        } catch (error) {
          console.error(
            "Camera video.play() failed:",
            error
          );

          setUploadError(
            "The camera opened, but the video preview could not start."
          );
        }
      };

    /*
     * Wait for camera metadata.
     */

    video.addEventListener(
      "loadedmetadata",
      startVideoPlayback
    );

    /*
     * Sometimes metadata is already available.
     */

    if (video.readyState >= 1) {
      startVideoPlayback();
    }

    /*
     * Extra safety attempt.
     */

    const playTimeout =
      setTimeout(() => {
        if (
          video.srcObject &&
          video.paused
        ) {
          video.play().catch(
            (error) => {
              console.error(
                "Delayed camera video.play() failed:",
                error
              );
            }
          );
        }
      }, 200);

    /*
     * Cleanup.
     */

    return () => {
      clearTimeout(playTimeout);

      video.removeEventListener(
        "loadedmetadata",
        startVideoPlayback
      );
    };

  }, [isCameraActive]);

  /* =======================================================
     STOP CAMERA
  ======================================================= */

  const stopCameraStream = () => {
    console.log(
      "Stopping camera..."
    );

    const video =
      videoRef.current;

    /*
     * Stop every camera track.
     */

    if (mediaStreamRef.current) {
      mediaStreamRef.current
        .getTracks()
        .forEach((track) => {
          track.stop();
        });

      mediaStreamRef.current = null;
    }

    /*
     * Disconnect stream from video.
     */

    if (video) {
      video.pause();

      video.srcObject = null;
    }

    setIsCameraActive(false);
  };

  /* =======================================================
     TAKE PHOTO FROM CAMERA
  ======================================================= */

  const takePhotoFromCamera = () => {
    const video =
      videoRef.current;

    const canvas =
      canvasRef.current;

    if (!video) {
      setUploadError(
        "Camera video is not available."
      );

      return;
    }

    if (!canvas) {
      setUploadError(
        "Camera canvas is not available."
      );

      return;
    }

    /*
     * Make sure the camera is producing
     * actual video frames.
     */

    if (
      video.readyState < 2 ||
      video.videoWidth === 0 ||
      video.videoHeight === 0
    ) {
      setUploadError(
        "Camera is not ready yet. Please wait a moment."
      );

      return;
    }

    console.log(
      "Taking camera photo:",
      video.videoWidth,
      video.videoHeight
    );

    /*
     * Match canvas dimensions to camera.
     */

    canvas.width =
      video.videoWidth;

    canvas.height =
      video.videoHeight;

    const context =
      canvas.getContext("2d");

    if (!context) {
      setUploadError(
        "Could not create camera canvas."
      );

      return;
    }

    /*
     * Draw current video frame.
     */

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    /*
     * Convert to JPEG.
     */

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setUploadError(
            "Could not capture the camera photo."
          );

          return;
        }

        /*
         * Create actual File.
         */

        const file =
          new File(
            [blob],
            `camera_${Date.now()}.jpg`,
            {
              type: "image/jpeg",
            }
          );

        /*
         * Create browser preview.
         */

        const preview =
          URL.createObjectURL(blob);

        console.log(
          "Camera photo captured:",
          file
        );

        /*
         * Store both File and preview.
         */

        setCapturedCameraPhoto({
          file,
          preview,
        });

        /*
         * Stop camera after capture.
         */

        stopCameraStream();
      },
      "image/jpeg",
      0.95
    );
  };

  /* =======================================================
     ADD CAPTURED CAMERA PHOTO
     TO PROPERTY GALLERY
  ======================================================= */

  const addCapturedPhotoToGallery =
    () => {
      if (!capturedCameraPhoto) {
        return;
      }

      setCameraPhotos(
        (previous) => [
          ...previous,
          capturedCameraPhoto,
        ]
      );

      setCapturedCameraPhoto(
        null
      );

      setValid(true);
      setValidSize(true);
    };

  /* =======================================================
     RETAKE CAMERA PHOTO
  ======================================================= */

  const retakeCameraPhoto = () => {
    if (capturedCameraPhoto) {
      revokePreview(
        capturedCameraPhoto.preview
      );
    }

    setCapturedCameraPhoto(
      null
    );

    startCamera();
  };

  /* =======================================================
     REMOVE CAMERA PHOTO
  ======================================================= */

  const removeCameraPhoto = (
    index
  ) => {
    const image =
      cameraPhotos[index];

    if (image) {
      revokePreview(
        image.preview
      );
    }

    setCameraPhotos(
      (previous) =>
        previous.filter(
          (_, i) => i !== index
        )
    );
  };

  /* =======================================================
     STOP CAMERA WHEN COMPONENT UNMOUNTS
  ======================================================= */

  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current
          .getTracks()
          .forEach((track) => {
            track.stop();
          });

        mediaStreamRef.current = null;
      }
    };
  }, []);

  /* =======================================================
     UPLOAD EVERYTHING

     Each category remains separate:

     outside
     inside
     other
     camera
  ======================================================= */

  // const uploadAllPhotos =
  //   async () => {
  //     const uploadJobs = [];

  //     if (
  //       outsidePhotos.length > 0
  //     ) {
  //       uploadJobs.push(
  //         uploadImages(
  //           outsidePhotos.map(
  //             (item) =>
  //               item.file
  //           ),
  //           "outside"
  //         )
  //       );
  //     }

  //     if (
  //       insidePhotos.length > 0
  //     ) {
  //       uploadJobs.push(
  //         uploadImages(
  //           insidePhotos.map(
  //             (item) =>
  //               item.file
  //           ),
  //           "inside"
  //         )
  //       );
  //     }

  //     if (
  //       otherPhotos.length > 0
  //     ) {
  //       uploadJobs.push(
  //         uploadImages(
  //           otherPhotos.map(
  //             (item) =>
  //               item.file
  //           ),
  //           "other"
  //         )
  //       );
  //     }

  //     if (
  //       cameraPhotos.length > 0
  //     ) {
  //       uploadJobs.push(
  //         uploadImages(
  //           cameraPhotos.map(
  //             (item) =>
  //               item.file
  //           ),
  //           "camera"
  //         )
  //       );
  //     }

  //     if (
  //       uploadJobs.length === 0
  //     ) {
  //       return [];
  //     }

  //     const results =
  //       await Promise.all(
  //         uploadJobs
  //       );

  //     return results;
  //   };








const uploadAllPhotos = async () => {
  const uploadJobs = [];

  if (outsidePhotos.length > 0) {
    uploadJobs.push(
      uploadImages(
        outsidePhotos
          .filter(item => item.file !== null)
          .map(item => item.file),
        "outside"
      )
    );
  }

  if (insidePhotos.length > 0) {
    uploadJobs.push(
      uploadImages(
        insidePhotos
          .filter(item => item.file !== null)
          .map(item => item.file),
        "inside"
      )
    );
  }

  if (otherPhotos.length > 0) {
    uploadJobs.push(
      uploadImages(
        otherPhotos
          .filter(item => item.file !== null)
          .map(item => item.file),
        "other"
      )
    );
  }

  if (cameraPhotos.length > 0) {
    uploadJobs.push(
      uploadImages(
        cameraPhotos
          .filter(item => item.file !== null)
          .map(item => item.file),
        "camera"
      )
    );
  }

  if (uploadJobs.length === 0) return [];

  return await Promise.all(uploadJobs);
};








  /* =======================================================
     SAVE & NEXT
  ======================================================= */

  const handleNext = async (
    e
  ) => {
    e.preventDefault();

    if (totalPhotos === 0) {
      setUploadError(
        "Please add at least one property photo."
      );

      return;
    }

    if (uploading) {
      return;
    }

    try {
      setUploading(true);

      setUploadError("");

      const results =
        await uploadAllPhotos();

      /*
       * Save server URLs, NOT blob URLs.
       */

      const uploadedPhotos = {
        outside: [],
        inside: [],
        other: [],
        camera: [],
      };

      results.forEach(
        (result) => {
          if (
            result &&
            result.category &&
            result.urls
          ) {
            uploadedPhotos[
              result.category
            ] = result.urls;
          }
        }
      );

      localStorage.setItem(
        "propertyPhotos",
        JSON.stringify(
          uploadedPhotos
        )
      );

      /*
       * Keep old localStorage structure.
       */

      localStorage.setItem(
        "outsidepics",
        JSON.stringify({
          saved: {
            prop:
              uploadedPhotos.outside,
          },
        })
      );

      /*
       * Go to Step 9.
       */

      window.location.href =
        "/agency/properties/list-property/step9";

    } catch (error) {
      console.error(
        "Photo upload failed:",
        error
      );

      setUploadError(
        "Some photos could not be uploaded. Please try again."
      );

    } finally {
      setUploading(false);
    }
  };

  /* =======================================================
     SAVE WHEN GOING BACK
  ======================================================= */

  const saveBack = () => {
    /*
     * We intentionally don't upload here.
     */
  };

  /* =======================================================
     RENDER IMAGE GALLERY
  ======================================================= */

  const renderGallery = (
    photos,
    setter,
    removeFunction
  ) => {
    if (!photos.length) {
      return null;
    }

    return (
      <Imagesdiv>
        {photos.map(
          (photo, index) => (
            <Imagediv
              key={`${photo.preview}-${index}`}
              src={photo.preview}
            >
              <Removebutton
                type="button"
                onClick={() =>
                  removeFunction(
                    index,
                    photos,
                    setter
                  )
                }
              >
                <MdIcons.MdOutlineClose />
              </Removebutton>
            </Imagediv>
          )
        )}
      </Imagesdiv>
    );
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div>

      {/* =================================================
          BREADCRUMBS
      ================================================= */}

      <Breadcrumbs
        sidebar={side ? 1 : 0}
      >
        <Crumbsicons>
          Icons will go here
        </Crumbsicons>
      </Breadcrumbs>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <Listpropdiv
        sidebar={side ? 1 : 0}
      >

        <ListHeader>
          <Headertitle>
            List new property
          </Headertitle>
        </ListHeader>

        <Listbody>

          <Progressbar
            sidebar={side ? 1 : 0}
          />

          <Propertycontainer>

            <Form
              ref={form}
              encType="multipart/form-data"
              onSubmit={handleNext}
            >

              {/* =================================================
                  ERRORS
              ================================================= */}

              {!valid && (
                <ErrorMessage>
                  Invalid file format.
                  Please select image
                  files only.
                </ErrorMessage>
              )}

              {!validSize && (
                <ErrorMessage>
                  One or more images
                  were larger than
                  10 MB and were not
                  added.
                </ErrorMessage>
              )}

              {uploadError && (
                <ErrorMessage>
                  {uploadError}
                </ErrorMessage>
              )}













              
              {/* =================================================
                  CAMERA PHOTOS
              ================================================= */}

              <SectionBlock>

                <Label>
                  Camera Captured Photos:
                </Label>

                <Description>
                  Take photos directly
                  using your phone or
                  computer camera.
                </Description>

                {/* CAMERA PHOTO GALLERY */}

                {renderGallery(
                  cameraPhotos,
                  setCameraPhotos,
                  (index) =>
                    removeCameraPhoto(
                      index
                    )
                )}

                <CameraSection>

                  {/* =================================================
                      OPEN CAMERA BUTTON
                  ================================================= */}

                  {!isCameraActive &&
                    !capturedCameraPhoto && (
                      <CameraControls>

                        <CameraButton
                          type="button"
                          bg="#007bff"
                          onClick={
                            startCamera
                          }
                        >

                          <MdIcons.MdCameraAlt />

                          Open Camera

                        </CameraButton>

                      </CameraControls>
                    )}

                  {/* =================================================
                      LIVE CAMERA
                  ================================================= */}

                  {isCameraActive && (
                    <>

                      <CameraStreamContainer>

                        <VideoElement
                          ref={videoRef}
                          autoPlay
                          muted
                          playsInline
                        />

                      </CameraStreamContainer>

                      <CameraControls>

                        <CameraButton
                          type="button"
                          bg="#28a745"
                          onClick={
                            takePhotoFromCamera
                          }
                        >

                          <MdIcons.MdCameraAlt />

                          Take Photo

                        </CameraButton>

                        <CameraButton
                          type="button"
                          bg="#dc3545"
                          onClick={
                            stopCameraStream
                          }
                        >

                          Close Camera

                        </CameraButton>

                      </CameraControls>

                    </>
                  )}

                  {/* =================================================
                      CAPTURED PHOTO PREVIEW
                  ================================================= */}

                  {capturedCameraPhoto && (
                    <>

                      <CameraStreamContainer>

                        <CameraCapturedPreview
                          src={
                            capturedCameraPhoto.preview
                          }
                          alt="Captured camera preview"
                        />

                      </CameraStreamContainer>

                      <CameraControls>

                        <CameraButton
                          type="button"
                          bg="#28a745"
                          onClick={
                            addCapturedPhotoToGallery
                          }
                        >

                          <MdIcons.MdAddPhotoAlternate />

                          Add to Property
                          Photos

                        </CameraButton>

                        <CameraButton
                          type="button"
                          bg="#ff9800"
                          onClick={
                            retakeCameraPhoto
                          }
                        >

                          <MdIcons.MdRefresh />

                          Retake Photo

                        </CameraButton>

                      </CameraControls>

                    </>
                  )}

                </CameraSection>

              </SectionBlock>

              {/* =================================================
                  HIDDEN CAMERA CANVAS
              ================================================= */}

              <CanvasElement
                ref={canvasRef}
              />

              {/* =================================================
                  ACTION BUTTONS
              ================================================= */}

























              {/* =================================================
                  OUTSIDE PHOTOS
              ================================================= */}

              <SectionBlock>

                <Label>
                  Outside of the Apartment
                  Photos:
                </Label>

                <Description>
                  Upload photos showing
                  the external/exterior
                  view of your apartment.
                </Description>

                {renderGallery(
                  outsidePhotos,
                  setOutsidePhotos,
                  removeImage
                )}

                <UploadBox
                  onDragOver={
                    handleDragOver
                  }
                  onDrop={(e) =>
                    handleDrop(
                      e,
                      setOutsidePhotos
                    )
                  }
                >

                  <UploadIcon>
                    <BiIcons.BiImageAdd />
                  </UploadIcon>

                  <UploadText>
                    Drag and Drop or
                    Click{" "}
                    <span
                      style={{
                        color: "blue",
                      }}
                    >
                      Here
                    </span>{" "}
                    to upload Outside
                    Photos
                  </UploadText>

                  <UploadTypes>
                    Accepts .jpg, .jpeg,
                    .png, .svg up to
                    10 MB each
                  </UploadTypes>

                  <HiddenInput
                    type="file"
                    name="outsideviews"
                    accept="image/*"
                    multiple
                    onChange={
                      handleOutsideChange
                    }
                  />

                </UploadBox>

              </SectionBlock>

              {/* =================================================
                  INSIDE PHOTOS
              ================================================= */}

              <SectionBlock>

                <Label>
                  Photos of Inside the
                  Apartment:
                </Label>

                <Description>
                  Upload photos of
                  interior rooms, kitchen,
                  bedrooms, bathrooms,
                  and other indoor areas.
                </Description>

                {renderGallery(
                  insidePhotos,
                  setInsidePhotos,
                  removeImage
                )}

                <UploadBox
                  onDragOver={
                    handleDragOver
                  }
                  onDrop={(e) =>
                    handleDrop(
                      e,
                      setInsidePhotos
                    )
                  }
                >

                  <UploadIcon>
                    <BiIcons.BiImageAdd />
                  </UploadIcon>

                  <UploadText>
                    Drag and Drop or
                    Click{" "}
                    <span
                      style={{
                        color: "blue",
                      }}
                    >
                      Here
                    </span>{" "}
                    to upload Inside
                    Photos
                  </UploadText>

                  <UploadTypes>
                    Accepts .jpg, .jpeg,
                    .png, .svg up to
                    10 MB each
                  </UploadTypes>

                  <HiddenInput
                    type="file"
                    name="insideviews"
                    accept="image/*"
                    multiple
                    onChange={
                      handleInsideChange
                    }
                  />

                </UploadBox>

              </SectionBlock>

              {/* =================================================
                  OTHER PHOTOS
              ================================================= */}

              <SectionBlock>

                <Label>
                  Photos of Any Other
                  Place of the Apartment:
                </Label>

                <Description>
                  Upload photos of common
                  areas, parking, compound,
                  amenities, balconies, or
                  anything else relevant to
                  the property.
                </Description>

                {renderGallery(
                  otherPhotos,
                  setOtherPhotos,
                  removeImage
                )}

                <UploadBox
                  onDragOver={
                    handleDragOver
                  }
                  onDrop={(e) =>
                    handleDrop(
                      e,
                      setOtherPhotos
                    )
                  }
                >

                  <UploadIcon>
                    <BiIcons.BiImageAdd />
                  </UploadIcon>

                  <UploadText>
                    Drag and Drop or
                    Click{" "}
                    <span
                      style={{
                        color: "blue",
                      }}
                    >
                      Here
                    </span>{" "}
                    to upload Other
                    Photos
                  </UploadText>

                  <UploadTypes>
                    Accepts .jpg, .jpeg,
                    .png, .svg up to
                    10 MB each
                  </UploadTypes>

                  <HiddenInput
                    type="file"
                    name="anyotherviews"
                    accept="image/*"
                    multiple
                    onChange={
                      handleOtherChange
                    }
                  />

                </UploadBox>

              </SectionBlock>


              <ButtonsContainer>

                <Backbutton
                  to="/agency/properties/list-property/step7"
                  onClick={saveBack}
                >
                  Back
                </Backbutton>

                <Nextbutton
                  type="submit"
                  disabled={disabled}
                >

                  {uploading
                    ? "Uploading..."
                    : "Next Step"}

                </Nextbutton>

              </ButtonsContainer>

            </Form>

          </Propertycontainer>

        </Listbody>

      </Listpropdiv>

    </div>
  );
}

export default Addpropstep8;
