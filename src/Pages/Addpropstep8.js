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













































import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Sharesidebar } from "../components/Sidebar";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import { uploadImages } from "../components/apicalls";

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

const Backbutton = styled(Link)`
  background-color: #f5f5f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 1rem 30% 1rem 2rem;
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

const Nextbutton = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  background-color: ${({ disabled }) =>
    disabled ? "#F5F5F5" : "blue"};
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ disabled }) => (disabled ? "blue" : "white")};
  margin: 1rem;
  border-radius: 6px;
  border: none;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    cursor: pointer;
  }
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
  font-size: 1.1rem;
`;

const Description = styled.div`
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.5;
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
  background-image: url(${({ src }) => src});
  width: 13.5rem;
  height: 11.5rem;
  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px;
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

const Inputlabel = styled.label`
  width: 100%;
  height: 6.6rem;
  border: 2px dashed grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f8f8;
    border-color: blue;
    cursor: pointer;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadText = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`;

const UploadHint = styled.div`
  font-size: 0.85rem;
  color: #777;
`;

const ValidationMessage = styled.div`
  width: 90%;
  margin: 0.5rem auto;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  background-color: #ffecec;
  color: #d00000;
  border: 1px solid #ffb3b3;
`;

const CameraSection = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 2px dashed #007bff;
  border-radius: 8px;
  background-color: #f9fbfd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CameraStreamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 280px;
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CanvasElement = styled.canvas`
  display: none;
`;

const CameraCapturedPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#007bff"};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding-bottom: 2rem;
`;

function Addpropstep8() {
  let pics = [];

  try {
    const storedpics = JSON.parse(
      localStorage.getItem("outsidepics")
    );

    if (storedpics && storedpics.saved) {
      pics = storedpics.saved.prop || [];
    }
  } catch (error) {
    console.error("Unable to read saved photos:", error);
    pics = [];
  }

  const side = useContext(Sharesidebar);

  const [disabled, setDisabled] = useState(true);
  const [valid, setValid] = useState(true);
  const [validsize, setValidsize] = useState(true);
  const [path, setPath] = useState("#");

  // Photo arrays
  const [outsidephoto, setoutsidePhoto] = useState(pics);
  const [insidephoto, setinsidePhoto] = useState([]);
  const [anyotherphoto, setanyotherPhoto] = useState([]);
  const [cameraphoto, setCameraphoto] = useState([]);

  // Camera state
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedCameraPhoto, setCapturedCameraPhoto] =
    useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaStreamRef = useRef(null);

  /*
   * Validate whether at least one photo exists.
   */
  useEffect(() => {
    const totalPhotos =
      outsidephoto.length +
      insidephoto.length +
      anyotherphoto.length +
      cameraphoto.length;

    if (totalPhotos > 0) {
      setDisabled(false);
      setPath("/agency/properties/list-property/step9");
    } else {
      setDisabled(true);
      setPath("#");
    }
  }, [
    outsidephoto,
    insidephoto,
    anyotherphoto,
    cameraphoto,
  ]);

  /*
   * Clean up camera when component unmounts.
   */
  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  /*
   * Universal image file processor.
   */
  const processImageFile = (
    file,
    targetSetter,
    currentList
  ) => {
    if (!file) return;

    // Only accept image files
    if (!file.type || !file.type.startsWith("image/")) {
      setValid(false);
      return;
    }

    // 10MB maximum
    if (file.size > 10000000) {
      setValidsize(false);
      return;
    }

    const image = URL.createObjectURL(file);
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();

      img.onload = function () {
        targetSetter([...currentList, image]);
        setValid(true);
        setValidsize(true);
      };

      img.onerror = function () {
        URL.revokeObjectURL(image);
        setValid(false);
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  };

  /*
   * Outside Photos
   */
  const outsidePhotoChange = (e) => {
    processImageFile(
      e.target.files[0],
      setoutsidePhoto,
      outsidephoto
    );

    e.target.value = "";
  };

  const extractOutsideImageLink = (e) => {
    e.preventDefault();

    processImageFile(
      e.dataTransfer.files[0],
      setoutsidePhoto,
      outsidephoto
    );
  };

  const removeOutsideImage = (imageurl) => {
    setoutsidePhoto(
      outsidephoto.filter(
        (remain) => remain !== imageurl
      )
    );
  };

  /*
   * Inside Photos
   */
  const insidePhotoChange = (e) => {
    processImageFile(
      e.target.files[0],
      setinsidePhoto,
      insidephoto
    );

    e.target.value = "";
  };

  const extractInsideImageLink = (e) => {
    e.preventDefault();

    processImageFile(
      e.dataTransfer.files[0],
      setinsidePhoto,
      insidephoto
    );
  };

  const removeInsideImage = (imageurl) => {
    setinsidePhoto(
      insidephoto.filter(
        (remain) => remain !== imageurl
      )
    );
  };

  /*
   * Any Other Photos
   */
  const anyotherPhotoChange = (e) => {
    processImageFile(
      e.target.files[0],
      setanyotherPhoto,
      anyotherphoto
    );

    e.target.value = "";
  };

  const extractAnyotherImageLink = (e) => {
    e.preventDefault();

    processImageFile(
      e.dataTransfer.files[0],
      setanyotherPhoto,
      anyotherphoto
    );
  };

  const removeAnyotherImage = (imageurl) => {
    setanyotherPhoto(
      anyotherphoto.filter(
        (remain) => remain !== imageurl
      )
    );
  };

  /*
   * Camera Photos
   */
  const removeCameraImage = (imageurl) => {
    setCameraphoto(
      cameraphoto.filter(
        (remain) => remain !== imageurl
      )
    );
  };

  /*
   * Start camera.
   */
  const startCamera = async () => {
    try {
      setCapturedCameraPhoto(null);

      if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
      ) {
        alert(
          "Camera access is not supported by this browser."
        );
        return;
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            width: {
              ideal: 1280,
            },
            height: {
              ideal: 720,
            },
          },
        });

      mediaStreamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        try {
          await videoRef.current.play();
        } catch (error) {
          console.error(
            "Unable to start video playback:",
            error
          );
        }
      }

      setIsCameraActive(true);
    } catch (err) {
      console.error("Camera access error:", err);

      alert(
        "Unable to access camera. Please check your browser permissions and make sure this page is using HTTPS."
      );
    }
  };

  /*
   * Stop camera stream.
   */
  const stopCameraStream = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      mediaStreamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsCameraActive(false);
  };

  /*
   * Take photo from live camera.
   */
  const takePhotoFromCamera = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    canvas.toBlob(
      (blob) => {
        if (blob) {
          const photoUrl =
            URL.createObjectURL(blob);

          setCapturedCameraPhoto(photoUrl);
          stopCameraStream();
        }
      },
      "image/jpeg",
      0.95
    );
  };

  /*
   * Add captured camera photo to gallery.
   */
  const addCapturedPhotoToGallery = () => {
    if (capturedCameraPhoto) {
      setCameraphoto((prev) => [
        ...prev,
        capturedCameraPhoto,
      ]);

      setCapturedCameraPhoto(null);
      setValid(true);
      setValidsize(true);
    }
  };

  /*
   * Retake camera photo.
   */
  const retakeCameraPhoto = () => {
    setCapturedCameraPhoto(null);
    startCamera();
  };

  /*
   * Save all photos locally.
   */
  const saveDraft = () => {
    const allPhotos = [
      ...outsidephoto,
      ...insidephoto,
      ...anyotherphoto,
      ...cameraphoto,
    ];

    const saved = {
      prop: allPhotos,
    };

    localStorage.setItem(
      "outsidepics",
      JSON.stringify({ saved })
    );
  };

  /*
   * Save when going back.
   */
  const saveBack = () => {
    saveDraft();
  };

  /*
   * Continue to next step.
   */
  const handleClick = (e) => {
    e.preventDefault();

    const allPhotos = [
      ...outsidephoto,
      ...insidephoto,
      ...anyotherphoto,
      ...cameraphoto,
    ];

    if (allPhotos.length > 0) {
      setDisabled(false);

      saveDraft();

      try {
        uploadImages(allPhotos);
      } catch (error) {
        console.error(
          "Image upload error:",
          error
        );
      }
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumbs sidebar={side}>
        <Crumbsicons>
          <MdIcons.MdHome size={22} />
        </Crumbsicons>

        <span style={{ marginLeft: "0.5rem" }}>
          List new property
        </span>
      </Breadcrumbs>

      {/* Main scrollable content */}
      <Listpropdiv sidebar={side}>
        <ListHeader>
          <Headertitle sidebar={side}>
            Add Property Photos
          </Headertitle>

          <Progressbar sidebar={side} />
        </ListHeader>

        <Listbody>
          {/* Validation messages */}
          {!valid && (
            <ValidationMessage>
              Invalid file format! Images only e.g.
              .png, .jpeg, .jpg, .svg
            </ValidationMessage>
          )}

          {!validsize && (
            <ValidationMessage>
              Image too big. Only images up to 10MB
              are accepted.
            </ValidationMessage>
          )}

          <Propertycontainer>
            {/* =====================================================
                1. OUTSIDE PHOTOS
            ====================================================== */}
            <SectionBlock>
              <Label>
                Outside of the Apartment Photos:
              </Label>

              <Description>
                Upload photos showing the external
                exterior view of your apartment.
              </Description>

              {/* Image Display Area */}
              {outsidephoto.length > 0 && (
                <Imagesdiv>
                  {outsidephoto.map(
                    (photo, index) => (
                      <Imagediv
                        key={`${photo}-${index}`}
                        src={photo}
                      >
                        <Removebutton
                          type="button"
                          onClick={() =>
                            removeOutsideImage(
                              photo
                            )
                          }
                          aria-label="Remove outside photo"
                        >
                          <MdIcons.MdClose
                            size={20}
                          />
                        </Removebutton>
                      </Imagediv>
                    )
                  )}
                </Imagesdiv>
              )}

              {/* Drag and Drop / Click Upload Box */}
              <Inputlabel
                htmlFor="outside-photo-input"
                onDragOver={(e) =>
                  e.preventDefault()
                }
                onDrop={extractOutsideImageLink}
              >
                <BiIcons.BiImageAdd
                  size={30}
                  color="blue"
                />

                <UploadText>
                  Drag and Drop or Click Here to
                  upload Outside Photos
                </UploadText>

                <UploadHint>
                  (Accepts .jpg, .jpeg, .svg,
                  .png upto 10Mbs)
                </UploadHint>

                <HiddenInput
                  id="outside-photo-input"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/svg+xml"
                  onChange={
                    outsidePhotoChange
                  }
                />
              </Inputlabel>
            </SectionBlock>

            {/* =====================================================
                2. INSIDE PHOTOS
            ====================================================== */}
            <SectionBlock>
              <Label>
                Photos of Inside the Apartment:
              </Label>

              <Description>
                Upload photos of interior rooms,
                kitchen, bedrooms, or bathrooms.
              </Description>

              {/* Image Display Area */}
              {insidephoto.length > 0 && (
                <Imagesdiv>
                  {insidephoto.map(
                    (photo, index) => (
                      <Imagediv
                        key={`${photo}-${index}`}
                        src={photo}
                      >
                        <Removebutton
                          type="button"
                          onClick={() =>
                            removeInsideImage(
                              photo
                            )
                          }
                          aria-label="Remove inside photo"
                        >
                          <MdIcons.MdClose
                            size={20}
                          />
                        </Removebutton>
                      </Imagediv>
                    )
                  )}
                </Imagesdiv>
              )}

              {/* Drag and Drop / Click Upload Box */}
              <Inputlabel
                htmlFor="inside-photo-input"
                onDragOver={(e) =>
                  e.preventDefault()
                }
                onDrop={extractInsideImageLink}
              >
                <BiIcons.BiImageAdd
                  size={30}
                  color="blue"
                />

                <UploadText>
                  Drag and Drop or Click Here to
                  upload Inside Photos
                </UploadText>

                <UploadHint>
                  (Accepts .jpg, .jpeg, .svg,
                  .png upto 10Mbs)
                </UploadHint>

                <HiddenInput
                  id="inside-photo-input"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/svg+xml"
                  onChange={
                    insidePhotoChange
                  }
                />
              </Inputlabel>
            </SectionBlock>

            {/* =====================================================
                3. ANY OTHER PHOTOS
            ====================================================== */}
            <SectionBlock>
              <Label>
                Photos of any other place of the
                Apartment:
              </Label>

              <Description>
                Upload photos of common areas,
                parking, compound, or amenities.
              </Description>

              {/* Image Display Area */}
              {anyotherphoto.length > 0 && (
                <Imagesdiv>
                  {anyotherphoto.map(
                    (photo, index) => (
                      <Imagediv
                        key={`${photo}-${index}`}
                        src={photo}
                      >
                        <Removebutton
                          type="button"
                          onClick={() =>
                            removeAnyotherImage(
                              photo
                            )
                          }
                          aria-label="Remove other photo"
                        >
                          <MdIcons.MdClose
                            size={20}
                          />
                        </Removebutton>
                      </Imagediv>
                    )
                  )}
                </Imagesdiv>
              )}

              {/* Drag and Drop / Click Upload Box */}
              <Inputlabel
                htmlFor="any-other-photo-input"
                onDragOver={(e) =>
                  e.preventDefault()
                }
                onDrop={
                  extractAnyotherImageLink
                }
              >
                <BiIcons.BiImageAdd
                  size={30}
                  color="blue"
                />

                <UploadText>
                  Drag and Drop or Click Here to
                  upload Other Photos
                </UploadText>

                <UploadHint>
                  (Accepts .jpg, .jpeg, .svg,
                  .png upto 10Mbs)
                </UploadHint>

                <HiddenInput
                  id="any-other-photo-input"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/svg+xml"
                  onChange={
                    anyotherPhotoChange
                  }
                />
              </Inputlabel>
            </SectionBlock>

            {/* =====================================================
                4. LIVE CAMERA PHOTOS
            ====================================================== */}
            <SectionBlock>
              <Label>
                Camera Captured Photos:
              </Label>

              <Description>
                Take photos directly using your
                phone or desktop camera.
              </Description>

              {/* Image Display Area */}
              {cameraphoto.length > 0 && (
                <Imagesdiv>
                  {cameraphoto.map(
                    (photo, index) => (
                      <Imagediv
                        key={`${photo}-${index}`}
                        src={photo}
                      >
                        <Removebutton
                          type="button"
                          onClick={() =>
                            removeCameraImage(
                              photo
                            )
                          }
                          aria-label="Remove camera photo"
                        >
                          <MdIcons.MdClose
                            size={20}
                          />
                        </Removebutton>
                      </Imagediv>
                    )
                  )}
                </Imagesdiv>
              )}

              {/* Camera Box */}
              <CameraSection>
                <BiIcons.BiCamera
                  size={40}
                  color="#007bff"
                />

                <UploadText>
                  Take Photo with Camera
                </UploadText>

                <UploadHint>
                  Take a live photo using your
                  phone or desktop camera
                </UploadHint>

                {/* Open Camera */}
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
                        <BiIcons.BiCamera
                          size={22}
                        />
                        Open Camera
                      </CameraButton>
                    </CameraControls>
                  )}

                {/* Live Camera */}
                {isCameraActive && (
                  <>
                    <CameraStreamContainer>
                      <VideoElement
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
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
                        <MdIcons.MdCameraAlt
                          size={22}
                        />
                        Take Photo
                      </CameraButton>

                      <CameraButton
                        type="button"
                        bg="#dc3545"
                        onClick={
                          stopCameraStream
                        }
                      >
                        <MdIcons.MdClose
                          size={22}
                        />
                        Close Camera
                      </CameraButton>
                    </CameraControls>
                  </>
                )}

                {/* Captured Preview */}
                {capturedCameraPhoto && (
                  <>
                    <CameraStreamContainer>
                      <CameraCapturedPreview
                        src={
                          capturedCameraPhoto
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
                        <MdIcons.MdAdd
                          size={22}
                        />
                        Add to Property Photos
                      </CameraButton>

                      <CameraButton
                        type="button"
                        bg="#ff9800"
                        onClick={
                          retakeCameraPhoto
                        }
                      >
                        <MdIcons.MdRefresh
                          size={22}
                        />
                        Retake Photo
                      </CameraButton>
                    </CameraControls>
                  </>
                )}

                {/* Hidden canvas used for camera capture */}
                <CanvasElement
                  ref={canvasRef}
                />
              </CameraSection>
            </SectionBlock>

            {/* =====================================================
                ACTION BUTTONS
            ====================================================== */}
            <ActionButtons>
              <Backbutton
                to="/agency/properties/list-property/step7"
                sidebar={side}
                onClick={saveBack}
              >
                <MdIcons.MdArrowBack
                  size={20}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "0.3rem",
                  }}
                />
                Back
              </Backbutton>

              <Nextbutton
                to={path}
                disabled={disabled}
                sidebar={side}
                onClick={handleClick}
              >
                Next Step
                <MdIcons.MdArrowForward
                  size={20}
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "0.3rem",
                  }}
                />
              </Nextbutton>
            </ActionButtons>
          </Propertycontainer>
        </Listbody>
      </Listpropdiv>
    </>
  );
}

export default Addpropstep8;
