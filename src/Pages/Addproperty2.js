// import React, {useState, useContext,useRef} from 'react'
// import {BrowserRouter as Router, Routes,Route, Link, Outlet} from "react-router-dom"
// import styled from "styled-components"
// import {Sharesidebar} from "../components/Sidebar"
// import Form from "react-validation/build/form"
// import CheckButton from "react-validation/build/button"

// import {Fake} from "./Fake"
// import step1addapartment, {step1addproperty} from "../components/addproperty";
// // import  {Groupselect}  from "react-multi-select-component";


// const Listpropdiv=styled.div`
// background-color:smokewhite;
// height:${({sidebar})=> sidebar ? "90%": "89.5%" };
// position:fixed;

// left:${({sidebar})=> sidebar ? "4.5%": "22.5%" };
// top:52px;
// overflow:scroll;
// overflow-x:hidden;
// width:${({sidebar})=> sidebar ? "95.5%": "77.5%" };


// // margin:2rem auto;
// // width:100%;
// // left:50%;
// `

// const Div= styled.div`
// width:90%;
// background-color:white;
// // margin:2rem auto;



// // left:${({sidebar})=> sidebar ? "4.5%": "22.5%" };
// // width:${({sidebar})=> sidebar ? "50%": "40%" };
// // margin:2rem auto;
// // background-color:green;
// // left:50%;
// // top:52px;
// // position:fixed;    
// // overflow-y:scroll;
// // overflow-x:none;
// // overflow:scroll;
// // margin:2rem auto;
// // left:${({sidebar})=> sidebar ? "4.5%": "22.5%" };
// // width:${({sidebar})=> sidebar ? "50%": "40%" };
// // height:90vh;

    
// ` 
// const ListHeader=styled.div`
// display:flex;
// justify-content:space-between;
// align-items:center;
// top:50px;
// padding:0.45rem;
// background:white;
// box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
// width:100%;
// // left:${({sidebar})=> sidebar ? "5.5%": "23.5%" };
// // width:${({sidebar})=> sidebar ? "45%": "88.7%" };


// // position:fixed;
// // border-bottom:1px solid gray;

// `
// const Headertitle=styled.div`
// font-size:${({sidebar})=> sidebar ? "2rem": "1.2rem" };
// font-weight:${({sidebar})=> sidebar ? "700": "600" };

// `
// const Draftsavebutton=styled.button`
//   color:blue;
//   font-size:1.2rem;
//   border:none;
//   padding:0;
//   padding:${({sidebar})=> sidebar ? "0.5rem": "0.2rem" };
//   background-color:transparent;
//   &:hover{
//     font-size:1.2rem;
//     color:blue;
//     cursor:pointer;
//     border-radius:5px;
//     background-color:#F8F8F8;
//   }


// `

// const Progressbar =styled.div`
// display:flex;
// width:${({sidebar})=> sidebar ? "45%": "27.5%" };
// justify-content:space-between;
// align-items:center;
// // position:fixed;
// top:${({sidebar})=> sidebar ? "115.5px": "106.5px" };
// left:${({sidebar})=> sidebar ? "5.5%": "23.5%" };
// z-index:100;
// width:100%;
// `

// const Prog =styled.span`
// height:${({sidebar})=> sidebar ? "10px": "8px"};
// width:${({sidebar})=> sidebar ? "80px": "50px" };
// border-radius:5px;
// background-color:blue;
// `


// const list =styled.div`

// `
// const Listbody=styled.div `
// // // position:fixed;
// // top:${({sidebar})=> sidebar ? "140px": "127px" };
// // height:${({sidebar})=> sidebar ? "76.5vh": "78.5vh" };
// // box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
// // overflow-y:auto;
// // overflow-x:hidden;
// // overflow-wrap:break-word;
// // background-color:#F8F8F8;
// // left:${({sidebar})=> sidebar ? "5.5%": "23.5%" };
// // width:${({sidebar})=> sidebar ? "45%": "27.5%" };

// // ::-webkit-scrollbar {
// //   width: 7.5px;               /* width of the entire scrollbar */
// // }

// // ::-webkit-scrollbar-track {
// //   background: #F8F8F8;        /* color of the tracking area */
// // }

// // ::-webkit-scrollbar-thumb {
// //   background-color: grey;    /* color of the scroll thumb */
// //   border-radius: 20px;       /* roundness of the scroll thumb */
// //   // border: 1px solid orange;  /* creates padding around scroll thumb */
// // }
// // ::-webkit-scrollbar-corner {
// //   background-color: white;    /* color of the scroll thumb */
// //   // border-radius: 20px;       /* roundness of the scroll thumb */
// //   // border: 1px solid orange;  /* creates padding around scroll thumb */
// // }

// max-width:500px;
// margin:auto;
// `

// const Listfooter=styled(Link)`
// text-decoration:none;
// padding:0.5rem;
// background-color:green;
// font-weight:${({sidebar})=> sidebar ? "600": "600" };
// font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
// color:white;
// width:48%;  
// border-radius:6.79px;
// border:none;
// &:hover{
//   cursor:pointer;
// }

// `


// const Backbutton=styled(Link)`
// background-color:blue;
// text-decoration:none;
// padding:0.5rem;
// font-weight:${({sidebar})=> sidebar ? "600": "600" };
// font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
// color:white;
// width:48%;
// padding:
// margin:0 0.5rem;  
// border-radius:6.79px;
// border:none;
// padding:${({sidebar})=> sidebar ? "0.5rem": "0.5rem" };
// &:hover{
//   cursor:pointer;
// }

// `


// const Divtwo= styled.div`
//     width:47%;
//     position:fixed;
//     top:53px;
//     overflow-y:scroll;
//     overflow-x:hidden;
//     left:${({sidebar})=>sidebar? "52%": "52%"};
//     height:42vh;
//     background-color:yellow;
//     color:black;
//     font-size:2rem;
  
// `

// const Divthree= styled.div`
//     width:47%;
//     position:fixed;
//     top:53vh;
//     overflow-y:scroll;
//     overflow-x:hidden;
//     left:${({sidebar})=>sidebar? "52%": "52%"};
//     height:42vh;
//     color:black;
//     font-size:2rem;
  
// `
//  const Addpropertycontainer= styled.div`
// //  margin:0 auto;
// //  width:95%;
// //  padding:1rem 0.5rem;

 
//  `
//  const Propertycontainer=styled.div`
 
//  `
//  const Listingtype=styled.div`
//  margin:1rem 0;

//  `
//  const Propertytypediv=styled.div`
//  margin:1rem 0;
//  `
//  const Roomslabel=styled.span`
//   font-weight:800;

//  `
//  const Numberofroomsdiv=styled.div`
//  margin:1rem 0;
//  width:100%;
//  `
  
//  const Availableinsidefeaturesdiv=styled.div`
//  width:150%;
//  overflow:hidden;
//  margin:1rem 0;
//  `
//  const Availableoutsidefeaturesdiv=styled.div`
//  margin:1rem 0;
//  `
//   const Availablenearbyfeaturesdiv=styled.div`
//  margin:1rem 0;
//  `

//  const Nameofproperty=styled.div`
// //  margin:1rem 0;
//  margin:2rem;
//  `
//  const Totalnoofunitsdiv=styled.div`
//  margin:1rem 0;
//  `

// const Numberofunitsavailable=styled.div`
// margin:1rem 0;
// `


// const Propertydescriptiondiv=styled.div`
// margin:1rem 0;
// `
// const Propertydescriptionheaderdiv=styled.div`

// `
   

// const Propertydescriptionareadiv=styled.div`

// `

// const Insidefeaturesdiv=styled.div`
// // display:flex;
// // flex-direction:row;
// // justify-content:space-between;
// // overflow:scroll;


// `
// const Featurelink=styled(Link)`
// box-sizing:border-box;
// text-decoration:none;
// flex-wrap:wrap;
// color:black;
// margin:1rem;
// display:block;
// font-weight:600;
// width:100%;
// background-color:#F5F5F5;
// border:2px solid white;
// padding:1rem 1rem;

// // display:flex;
// // flex-direction:column;
// // justify-content:space-between;

// :hover{
// border:2px solid blue;
// }

// `

// const Allslidedivs=styled.div`
// display:flex;
// flex-direction:row;
// justify-content:space-between;
// overflow:scroll;

// `

// function Addproperty2 (){

//   const insideoptions=[
//       { value: 'alarm', label:"Alarm"},        
//       { value: 'backupgenerator', label:"Backup Generator Available"},             
//       { value: 'ensuite', label:"En Suite"},
//       { value: 'fibreinternet', label:"Internet Available"},
//       { value: 'furnished', label:"Furnished"},
//       { value: 'serviced', label:"Serviced"},
//       { value: 'servicechargeincluded', label: "Service Charge Include"},                
//       { value: 'walkincloset', label:"Walk In Closet"},
//       { value: 'openkitchen', label:"Open Kitchen Plan"},
//       { value: 'aircondition', label:"Air Conditioning"}
//     ]

//     const outsideoptions=[
//       { value: 'balcony', label:"  Balcony"},        
//       { value: 'bbq', label:"BBQ"},             
//       { value: 'electricfence', label:"Electric Fence"},
//       { value: 'cctv', label:"CCTV"},
//       { value: 'borehole', label:"Borehole"},
//       { value: 'garden', label:"Garden"},
//       { value: 'parking', label: "Parking"},                
//       { value: 'staffquaters', label:"Staff Quarters"},
//       { value: 'swimmingpool', label:"Swimming Pool"},
//       { value: 'wheelchairaccess', label:"Wheelchair Access"},
//       { value: 'gym', label:"GYM"},
//       { value: 'garden', label:"Garden"}
//     ]

//     const nearbyoptions=[

//       { value: 'busstop', label:"Bus Stop"},
//       { value: 'hospital', label:"Hospital"},
//       { value: 'golfcourse', label: "Golf Course"},                
//       { value: 'scenicview', label:"Scenic View"},
//       { value: 'beach', label:"Beach"},
//       { value: 'seaview', label:"Sea View"},
//       { value: "shoppingcenter", label:"Shopping Center"},
//       { value: 'school', label:"School"}
//     ]

//     const numberofroomsoptions=[
//       { value: '0', label:"Bedsitters"},
//       { value: '1', label:"1 Bedrooms"},
//       { value: '2', label:"2 Bedrooms "},
//       { value: '3', label: "3 Bedrooms"},                
//       { value: '4', label:"4 Bedrooms"},
//       { value: '5', label:"5 Bedrooms"},
//       { value: '6', label:"6 Bedrooms"},
//       { value: "7", label:"7 Bedrooms"},
//       { value: '8', label:"8 Bedrooms"},
//       { value: "9", label:"9 Bedrooms"},
//       { value: '10', label:"10 Bedrooms"},
//       { value: '10+', label:"10+ Bedrooms"},


//     ]



//     const side=useContext(Sharesidebar);
//     const form=useRef();
//     const checkbtn=useRef()


//     const [roomsperunit, setRoomsperunit]= useState()
//     const [listingtype, setListingtype]= useState()
//     const [propertytype, setPropertype]=useState();
//     const [totalunits, setTotalunits]=useState();
//     const [propertyname, setPropertyname]=useState();
//     const [availableunits, setAvailableunits]=useState()
//     const [propertydetailsdescription, setPropertydetailsdescription]=useState(); 
//     const [descriptionheading, setDescriptionheading]=useState();
//     const [insidefeatures, setInsidefeatures]=useState();
//     const [outsidefeatures, setOutsidefeatures]=useState();
//     const [nearbyfacilities, setNearbyfacilities]=useState();


//     const [color, setColor]= useState()

    
     
//   const Required=(value)=>{
//     if(!value){
//       return <div style={{backgroundColor:"", color:"red", padding:"", margin: "", width:"100%"}}>Required</div>
    
//       // console.log(propertyname)
//     }
//     else{ 
  
//     }
//   }

//   const Color =(value)=>{
//     if(!value){
//       // console.log("here it is ")
//       // console.log(propertyname)
//       // return <div style={{backgroundColor:"", color:"red", padding:"", margin: "", width:"100%"}}>Required</div>

//     }

  
    
//   }
//   const listingTypeChange=(e)=>{
//     const listingtype=e.target.value;
//     setListingtype(listingtype);
//   }

//   const noOfRoomsPerUnitChange=(e)=>{
//     console.log(e[0])
//     console.log(e);
//     var loop=[]

//     for(let i=0; i<e.length; i++){
//       loop.push(i)

//     }
    
//     // const rooms=e.call.slice[]
//     // setRoomsperunit(rooms);
//     console.log(loop);
//   }
  
//   const propertyTypeChange=(e)=>{
//     const name=e.target.value;
//     setPropertype(name);
//   }

//   const propertyNameChange=(e)=>{
//     const name=e.target.value;
//     setPropertyname(name);
//   }

//   const availableUnitsChange=(e)=>{
//     const availableunits=e.target.value;
//     setAvailableunits(availableunits);

//   }

//   const totalUnitsChange=(e)=>{
//     const totalunits=e.target.value;
//     setTotalunits(totalunits);

//   }
//   const headingDescriptionChange=(e)=>{
//     const headingdescription=e.target.value;
//     setDescriptionheading(headingdescription);            
  
//   }
//   const descriptonAreaChange=(e)=>{
//     const detaildescription=e.target.value;
//     setPropertydetailsdescription(detaildescription);

//   }

//   const insideFeaturesChange=(e)=>{
//     const insidefeatures=e.target.value;
//     // setInsidefeatures(insidefeatures);

//   }

//   const outsideFeaturesChage=(e)=>{
//     const insidefeatures=e.target.value;
//     // setOutsidefeatures(outsidefeatures);
//   }

//   const nearbyFacilitiesChange=(e)=>{
//     const nearbyfeatures=e.target.value;
//     // setNearbyfacilities(nearbyfeatures);
//   }


    
//   const handleSubmitProperty=(e)=>{
//     e.preventDefault();


//     form.current.validateAll();

//     if(checkbtn.current.context._errors.length===0){
//       step1addapartment(listingtype,propertytype,propertyname,totalunits,availableunits,roomsperunit,insidefeatures,outsidefeatures,nearbyfacilities,descriptionheading,propertydetailsdescription)
//       .then(response=>{
//         console.log(response);


//       }).catch(err=>console.error(err))
      
//     }else{
//       // console.log("don't you dare submit that form")
      
    
//     }




//   }

//     return (
//         <Listpropdiv  sidebar={side? 1:0} >
//             <Div sidebar={side? 1:0}>  
//                 <ListHeader sidebar={side?1:0}>
//                     <Headertitle sidebar={side?1:0}>List new property</Headertitle>
//                     <Draftsavebutton sidebar={side?1:0}>Save Draft</Draftsavebutton>  
//                     {/* <Listfooter sidebar={side? 1:0}>Next Step</Listfooter> */}
//                 </ListHeader>
//                 <Progressbar sidebar={side?1:0}>
//                     <Prog sidebar={side?1:0} ></Prog>
//                     <Prog sidebar={side?1:0}></Prog>
//                     <Prog sidebar={side?1:0}></Prog>
//                     <Prog sidebar={side?1:0} style={{backgroundColor:"#F8F8F8"}}></Prog>
//                     <Prog sidebar={side?1:0}style={{backgroundColor:"#F8F8F8"}}></Prog>
//                     <Prog sidebar={side?1:0}style={{backgroundColor:"#F8F8F8"}}></Prog>
//                     <Prog sidebar={side?1:0}></Prog>
//                 </Progressbar>

//                 <Listbody  sidebar={side? 1:0}>
//                 <Addpropertycontainer>
//                     <Propertycontainer>

//                         <Form method="" ref={form} onSubmit={handleSubmitProperty} >           


//                           <Allslidedivs>
//                             <Availableinsidefeaturesdiv>
//                                     <Roomslabel>Property Features:</ Roomslabel >
//                                     <p>Select All Features Inside your Property:</p>
//                                     {/* <Groupselect name="featuresinsideproperty"onChange={insideFeaturesChange} validations={[Required]} value={[insidefeatures]} options={insideoptions} isMulti/> */}
//                                     <Insidefeaturesdiv> 
                                          
//                                         <Featurelink className="alarm" to="#" >Alarm </Featurelink>
//                                         <Featurelink className="generator"to="#" >Backup Generator Available </Featurelink>
//                                         <Featurelink className="ensuite"to="#" >En Suite</Featurelink>
//                                         <Featurelink className="internet"to="#" >Internet Available</Featurelink >
//                                         <Featurelink className="furnished"to="#" >Furnished</Featurelink>
//                                         <Featurelink className="serviced"to="#" > Serviced</Featurelink>
//                                         <Featurelink className="servicechargedincluded"to="#" >Service Charge Included</Featurelink>
//                                         <Featurelink className="walkincloset"to="#" > Walk In Closet</Featurelink>
//                                         <Featurelink className="openplan"to="#" >Open Kitchen Plan</Featurelink>
//                                         <Featurelink className="airconditioner"to="#" >Air Conditioning</Featurelink>
//                                       </Insidefeaturesdiv>
//                                   <div style={{display:"flex", jusitfyContent:"space-between", alignItems:"center"}}>
//                                       <Backbutton to="/properties/list-property/step1" sidebar={side? 1:0}>Back</Backbutton>     
//                                       <Listfooter to="/properties/list-property/step3" sidebar={side? 1:0}>Next Step</Listfooter> 
//                                       <CheckButton style={{display:"none"}} ref={checkbtn}/>
//                                   </div>
//                                 </Availableinsidefeaturesdiv>

//                           </Allslidedivs>
                              
//                         </Form>  
//                     </Propertycontainer>
//                 </Addpropertycontainer>                          

//                 </Listbody>
//             </Div>


//         </Listpropdiv>

    
//     )
// }

// export default Addproperty2