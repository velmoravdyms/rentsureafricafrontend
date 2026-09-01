import axios from "axios"

const addpropertyurl="http://localhost:8000/properties/list-property/"

const step1addapartment=(listingpurpose,propertytype,propertyname,totalunits,availableunits,numberofroomsperunit,insidefeatures,outsidefeatures,nearbyfacilities,descriptionheading,propertydetailsdescription)=>{
    return axios.post(addpropertyurl + "step1", {listingpurpose,propertytype,propertyname,totalunits,availableunits,numberofroomsperunit,insidefeatures,outsidefeatures,nearbyfacilities,descriptionheading,propertydetailsdescription})
    .then(response=>{
        console.log(response);
        return response;
    }).catch(err=> console.error(err));
}


export default step1addapartment;