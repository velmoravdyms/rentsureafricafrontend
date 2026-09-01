// import React, {useState, useContext,useRef} from 'react'
// import styled from "styled-components"
// import {Sharesidebar} from "../components/Sidebar"
// import Form from "react-validation/build/form"
// import Input from "react-validation/build/input"
// import CheckButton from "react-validation/build/button"
// import Select from "react-validation/build/select"
// import Textarea from "react-validation/build/textarea"
// import Groupselect from "react-select"
// import {Fake} from "./Fake"
// import step1addapartment, {step1addproperty} from "../components/addproperty";
// // import  {Groupselect}  from "react-multi-select-component";


// const Listpropdiv=styled.div`
// background-color:green;
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
// background-color:grey;
// margin:2rem auto;



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


// // const list =styled.div`

// // `
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

// `

// const Listfooter=styled.button`
// background-color:blue;
// font-weight:${({sidebar})=> sidebar ? "600": "800" };
// font-size:${({sidebar})=> sidebar ? "1.2rem": "0.9rem" };
// color:white;
// width:48%;
// margin:0 0.5rem;  
// border-radius:6.79px;
// border:none;
// padding:${({sidebar})=> sidebar ? "0.5rem": "0.2rem" };
// &:hover{
//   cursor:pointer;
// }

// `


// const Backbutton=styled.button`
// background-color:blue;
// font-weight:${({sidebar})=> sidebar ? "600": "800" };
// font-size:${({sidebar})=> sidebar ? "1.2rem": "0.9rem" };
// color:white;
// width:48%;
// padding:
// margin:0 0.5rem;  
// border-radius:6.79px;
// border:none;
// padding:${({sidebar})=> sidebar ? "0.5rem": "0.2rem" };
// &:hover{
//   cursor:pointer;
// }

// `


// // const Divtwo= styled.div`
// //     width:47%;
// //     position:fixed;
// //     top:53px;
// //     overflow-y:scroll;
// //     overflow-x:hidden;
// //     left:${({sidebar})=>sidebar? "52%": "52%"};
// //     height:42vh;
// //     background-color:yellow;
// //     color:black;
// //     font-size:2rem;
  
// // `

// // const Divthree= styled.div`
// //     width:47%;
// //     position:fixed;
// //     top:53vh;
// //     overflow-y:scroll;
// //     overflow-x:hidden;
// //     left:${({sidebar})=>sidebar? "52%": "52%"};
// //     height:42vh;
// //     color:black;
// //     font-size:2rem;
  
// // `
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
//  const Numberofroomsdiv=styled.div`
//  margin:1rem 0;
//  width:100%;
//  `
  
//  const Roomslabel=styled.span`
//   font-weight:800;

//  `
//  const Availableinsidefeaturesdiv=styled.div`
//  margin:1rem 0;
//  `
//  const Availableoutsidefeaturesdiv=styled.div`
//  margin:1rem 0;
//  `
//   const Availablenearbyfeaturesdiv=styled.div`
//  margin:1rem 0;
//  `

//  const Nameofproperty=styled.div`
//  margin:1rem 0;
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

// function Addproperty (){

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
//                   <Headertitle sidebar={side?1:0}>List new property</Headertitle>
//                   <Draftsavebutton sidebar={side?1:0}>Save Draft</Draftsavebutton>  
//                   {/* <Listfooter sidebar={side? 1:0}>Next Step</Listfooter> */}
//                 </ListHeader>
//                 <Progressbar sidebar={side?1:0}>
//                   <Prog sidebar={side?1:0} ></Prog>
//                   <Prog sidebar={side?1:0}></Prog>
//                   <Prog sidebar={side?1:0}></Prog>
//                   <Prog sidebar={side?1:0} style={{backgroundColor:"#F8F8F8"}}></Prog>
//                   <Prog sidebar={side?1:0}style={{backgroundColor:"#F8F8F8"}}></Prog>
//                   <Prog sidebar={side?1:0}style={{backgroundColor:"#F8F8F8"}}></Prog>
//                   <Prog sidebar={side?1:0}></Prog>
//                 </Progressbar>

//                 <Listbody  sidebar={side? 1:0}>
//                     <Addpropertycontainer>
//                       <Propertycontainer>

//                           <Form method="" ref={form} onSubmit={handleSubmitProperty} >  
//                               <Listingtype>
//                                       <Roomslabel>Select Listing Purpose:</ Roomslabel >
//                                       <Select name="listingpurpose" type="select" value={listingtype} onChange={listingTypeChange} validations={[Required]} style={{width:"100%", height:"3rem", borderRadius:"5px", border:"none", fontSize:"1rem", backgroundColor:"white", color:"black"}}>
//                                           <option value="">Listing Purpose</option>
//                                           <option value="rent">For Rent</option>
//                                           <option value="sale">For Sale</option>
//                                           <option value="lease">For Lease</option>
//                                       </Select>
//                               </Listingtype>
//                               <Propertytypediv>
//                                       <Roomslabel>Select Your Property Type:</ Roomslabel >
//                                       <Select name="typeofproperty" type="select" value={propertytype} onChange={propertyTypeChange} validations={[Required]} style={{width:"100%", height:"3rem", borderRadius:"5px", border:"none", fontSize:"1rem", backgroundColor:"white", color:"black"}}>
//                                           <option value="">Select Type of Property</option>
//                                           <option value="bedsitter">Room/Bedsitter</option>
//                                           <option value="house">House/Bungalow</option>                      
//                                           <option  value="apartment">Apartment/Flat</option>
//                                           <option value="townhouse">Town House</option>
//                                           <option value="warehouse">Ware Houses</option>
//                                           <option value="offices">Offices</option>                      
//                                           <option  value="commercialproperty">Commercial Property</option>
//                                           <option value="villa">Villa</option>
//                                           <option value="shops">Shops</option>
//                                       </Select>
//                               </Propertytypediv>
                              
//                               <Nameofproperty>
//                                 <Roomslabel>Name of your Property :</ Roomslabel >
//                                 <Input type="text" name="nameofproperty" placeholder="Enter The Name of Your Property" value={propertyname} onChange={propertyNameChange} validations={[Required, Color]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px solid ${color}`, fontSize:"1rem", color:"black"}}></Input>            
//                               </Nameofproperty>                              

//                               <Totalnoofunitsdiv>
//                                 <Roomslabel>Total Number of Units In Apartment:</ Roomslabel >
//                                 <Input type="number" name="totalnoofunits" placeholder="Total Number of Units in This Apartment" value={totalunits}  onChange={availableUnitsChange} validations={[Required]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:"none", fontSize:"1rem", color:"black"}}></Input>            
//                               </Totalnoofunitsdiv>

//                               <Numberofunitsavailable>
//                                   <Roomslabel>Number of Currently Letting Units/Available :</ Roomslabel >
//                                   <Input type="number" name="noofunitsnowavailable" placeholder="Available Units Currently Now" value={availableunits} onChange={totalUnitsChange} validations={[Required]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:"none", fontSize:"1rem", color:"black"}}></Input>
//                               </Numberofunitsavailable>

//                               <Numberofroomsdiv>
//                                   <Roomslabel>Number of Rooms Per Unit:</ Roomslabel >
//                                   <Groupselect name="numberofroomsperunit"  onChange={noOfRoomsPerUnitChange} options={numberofroomsoptions} isOptionSelected  isMulti/>
//                               </Numberofroomsdiv>   
                              
//                               <Availableinsidefeaturesdiv>
//                                   <Roomslabel>Select All Features Inside your Property:</ Roomslabel >
//                                   <Groupselect name="featuresinsideproperty"onChange={insideFeaturesChange} validations={[Required]} value={[insidefeatures]} options={insideoptions} isMulti/>
//                               </Availableinsidefeaturesdiv>
                              
//                               <Availableoutsidefeaturesdiv>
//                                   <Roomslabel>Select All Features Around Your Property:</ Roomslabel >
//                                   <Groupselect name="featuresaroundproperty"  onChange={outsideFeaturesChage } validations={[Required]} value={outsidefeatures} options={outsideoptions} isMulti/>
//                               </Availableoutsidefeaturesdiv>
                              
//                               <Availablenearbyfeaturesdiv>
//                                   <Roomslabel>Select All Facilities Nearby:</ Roomslabel >
//                                   <Groupselect options={nearbyoptions} onChange={nearbyFacilitiesChange} validations={[Required]} value={[nearbyfacilities]} isMulti name="nearbyfacilities"/>
//                               </Availablenearbyfeaturesdiv>
                            
//                               <Propertydescriptiondiv>
//                                   <Propertydescriptionheaderdiv>
//                                     <Roomslabel>Property Description Heading:</ Roomslabel >
//                                     <Input type="text" name="descriptionheader" placeholder="Property Description Heading" value={descriptionheading} onChange={headingDescriptionChange} validations={[Required, Color]} style={{width:"100%", border:`2px solid ${color}`, height:"3rem", backgroundColor:"white", borderRadius:"5px", fontSize:"1rem", color:"black"}}></Input>
//                                   </Propertydescriptionheaderdiv>      


//                                   <Propertydescriptionareadiv>
//                                     <Roomslabel>Describe your Property:</ Roomslabel >
//                                     {/* <Input type="texarea" name="descriptionarea" placeholder="Description of your Property" value={propertydescriptionarea} onChange={handleDescriptonAreaChange} validations={[Required]} style={{width:"100%", height:"6rem", backgroundColor:"white", border:"none", fontSize:"1rem", color:"black "}}></Input> */}
//                                   <Textarea type="texarea" name="descriptionarea" placeholder="Description of your Property" value={propertydetailsdescription} onChange={descriptonAreaChange} validations={[Required]} style={{width:"100%", height:"6rem"}} /> </Propertydescriptionareadiv>  
//                               </Propertydescriptiondiv>
//                               <div style={{display:"flex", jusitfyContent:"space-between", alignItems:"center"}}>
//                                 <Listfooter sidebar={side? 1:0}>Next Step</Listfooter> 
//                                 <Backbutton sidebar={side? 1:0}>Back</Backbutton>     
//                                 <CheckButton style={{display:"none"}} ref={checkbtn}/>
//                               </div>
//                           </Form>  
//                       </Propertycontainer>
//                     </Addpropertycontainer>              
          
            
//                 </Listbody>
//             </Div>


//         </Listpropdiv>

    
//     )
// }

// export default Addproperty