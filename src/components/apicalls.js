// @ts-nocheck



// import axios from 'axios';
// import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenutils';


import api from "./axiosconfig"


const propapis="/properties/list-property"





const createProperty= async (propertyname,totalunits,availableunits)=>{
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${propertyname}`)
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${totalunits}`)
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${availableunits}`)

    console.log(api)
    try {
        const response=await api.post( propapis + "/createproperty", {propertyname,totalunits,availableunits});

        // .then(
        //     (response)=>{
        //         console.log("response from LandlordCreate from the Property Tables file")
        //         console.log(response.data);
    
        // })
        console.log(response.data.propertyid);


        localStorage.setItem("propertyId", JSON.stringify(response.data.propertyid))

        console.log(JSON.parse(localStorage.getItem("propertyId")))
        
        return response;
    }
    catch(err){
        console.log(err);
        console.log("error in the catch err" + err)
    }

    // return

}





const createLandlord= async (landlordname,landlordemail,landlordphonenumber)=>{
    console.log("here is the landlordname,landlordemail,landlordphonenumber from apicalls.js File ", landlordname,landlordemail,landlordphonenumber)
    
    const propertyId=JSON.parse(localStorage.getItem("propertyId"));
    console.log("Here is the property Id before I create a landlord " + propertyId)
    console.log(landlordphonenumber);

    return api.post(propapis + `/landlordstep/${propertyId}`, {landlordname,landlordemail,landlordphonenumber})
    .then(
        (response)=>{
            // if(error){
            //     console.log("Error creating Landlord ", error)
            // }
            // else{
                console.log("response from LandlordCreate from the Property Tables file")
                console.log(response.data);
            // }    
    })

}




const createCaretaker= async (caretakername,caretakeremail,caretakerphonenumber)=>{
    console.log("here is the caretakername,caretakeremail,caretakerphonenumber from apicalls.js File" , caretakername,caretakeremail,caretakerphonenumber)
    
    const propertyId=JSON.parse(localStorage.getItem("propertyId"));
    console.log("Here is the property Id before I create a caretaker " + propertyId)
    console.log(caretakerphonenumber);

    return api.post(propapis + `/caretakerstep/${propertyId}`, {caretakername,caretakeremail,caretakerphonenumber})
    .then(
        (response)=>{
            console.log("response from CaretakerCreate from the Property Tables file")
            console.log(response.data);

    })

}


const sendpropertyDetails= async (propertytype,propertylistingpurpose,propertyinternalfeatures,propertyexternalfeatures,propertynearbyfeatures,propertyroomsperunit,propertypriceperunit)=>{

    console.log("here are the property details propertytype, " , propertytype)
    console.log("here are the property details propertylistingpurpose, ",propertylistingpurpose)
    console.log("here are the property details propertyinternalfeatures, ",propertyinternalfeatures)
    console.log("here are the property details propertyexternalfeatures, ",propertyexternalfeatures)
    console.log("here are the property details propertynearbyfeatures, ",propertynearbyfeatures)
    console.log("here are the property details propertyroomsperunit, " ,propertyroomsperunit)
    console.log("here are the property details propertypriceperunit " ,propertypriceperunit)


  
    const propertyId=JSON.parse(localStorage.getItem("propertyId"));
    console.log("Here is the property Id before I create a landlord " + propertyId)

    console.log(api)


    try {
        const response=await api.post( propapis + `/propertyfeatures/${propertyId}`, {propertytype,propertylistingpurpose,propertyinternalfeatures,propertyexternalfeatures,propertynearbyfeatures,propertyroomsperunit,propertypriceperunit});

        console.log("Response From Create Property Features" , response.data);
        
        return response;
    }
    catch(err){
        console.log(err);
        console.log("error in the catch err" + err)
    }

    // return

}



const uploadImages = async (images) => {

    console.log("here are the images to be posted to multer and Bunny net  " , images );

    const formData = new FormData();

    // Convert blob URLs to Blob objects
    const blobPromises = images.map(async (imageUrl, index) => {
        const response = await fetch(imageUrl); // Fetch the actual blob data
        const blob = await response.blob(); // Convert response to blob
        formData.append("images", blob, `image_${index}.jpg`);
    });

    // Wait for all blobs to be processed
    await Promise.all(blobPromises);





    // images.forEach((image, index) => {
    //     formData.append("images", image, `image_${index}.jpg`); // Use backticks for correct string interpolation
    //     // formData.append(image); // Use backticks for correct string interpolation
        
    // });

    try {

        console.log("here is hte configaxios URL " , api);

        const response = await api.post("/upload", formData,{ 
            headers: {
                "Content-Type": "multipart/form-data", // Important for file uploads
            },
        });

        console.log("Uploaded Images:", response.data);

    } catch (error) {
        console.error("Upload Error:", error);
    }
};




export{
    createLandlord,
    createProperty,
    createCaretaker,
    sendpropertyDetails,
    uploadImages
}