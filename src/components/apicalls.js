
import api from "./axiosconfig";

const propapis = "/properties/list-property";

// const createProperty = async (propertyname, totalunits, availableunits) => {
//     console.log(`propertyname: ${propertyname}, totalunits: ${totalunits}, availableunits: ${availableunits}`);
//     try {
//         const response = await api.post(propapis + "/createproperty", {
//             propertyname,
//             totalunits,
//             availableunits
//         });
        
//         console.log("Property ID:", response.data.propertyid);
//         localStorage.setItem("propertyId", JSON.stringify(response.data.propertyid));
//         return response;
//     } catch (err) {
//         console.error("Error in createProperty:", err);
//         throw err;
//     }
// };

const createProperty = async (propertyname, totalunits, availableunits) => {
    try{

    // }
        // Reuse existing property instead of creating another one
        const existingId = JSON.parse(localStorage.getItem("propertyId"));
        if (existingId) {
            return { data: { propertyid: existingId } };
        }

        const response = await api.post(
            propapis + "/createproperty",
            {
                propertyname,
                totalunits,
                availableunits
            }
        );

        localStorage.setItem(
            "propertyId",
            JSON.stringify(response.data.propertyid)
        );

        return response;
     } catch (err) {
        console.error("Error in createProperty:", err);
        throw err;
    }
};

const createLandlord = async (landlordname, landlordemail, landlordphonenumber) => {
    const propertyId = JSON.parse(localStorage.getItem("propertyId"));
    try {
        const response = await api.post(propapis + `/landlordstep/${propertyId}`, {
            landlordname,
            landlordemail,
            landlordphonenumber
        });
        console.log("Response from createLandlord:", response.data);
        return response;
    } catch (err) {
        console.error("Error in createLandlord:", err);
        throw err;
    }
};

const createCaretaker = async (caretakername, caretakeremail, caretakerphonenumber) => {
    const propertyId = JSON.parse(localStorage.getItem("propertyId"));
    try {
        const response = await api.post(propapis + `/caretakerstep/${propertyId}`, {
            caretakername,
            caretakeremail,
            caretakerphonenumber
        });
        console.log("Response from createCaretaker:", response.data);
        return response;
    } catch (err) {
        console.error("Error in createCaretaker:", err);
        throw err;
    }
};

const sendpropertyDetails = async (
    propertytype,
    propertylistingpurpose,
    propertyinternalfeatures,
    propertyexternalfeatures,
    propertynearbyfeatures,
    propertyroomsperunit,
    propertypriceperunit,
    propertylocation
) => {
    const propertyId = JSON.parse(localStorage.getItem("propertyId"));

    try {
        const response = await api.post(
            propapis + `/propertyfeatures/${propertyId}`,
            {
                propertytype,
                propertylistingpurpose,
                propertyinternalfeatures,
                propertyexternalfeatures,
                propertynearbyfeatures,
                propertyroomsperunit,
                propertypriceperunit,
                propertylocation
            }
        );
        console.log("Response from sendpropertyDetails:", response.data);
        return response;
    } catch (err) {
        console.error("Error in sendpropertyDetails:", err);
        throw err;
    }
};




const uploadImages = async (images, category) => {
    if (!images || images.length === 0) return null;
    if (!category) throw new Error("Image category is required");

    // 👇 Get the property created in Step 7
    const propertyId = JSON.parse(localStorage.getItem("propertyId"));

    const formData = new FormData();

    // 👇 NEW
    formData.append("propertyId", propertyId);
    formData.append("category", category);

    images.forEach((file) => {
        formData.append("images", file, file.name);
    });

    const response = await api.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return {
        category,
        urls: response.data.urls || [],
    };
};















// --- GET ALL PROPERTIES ---
// Updated to use the configured Axios instance (`api`) instead of raw `fetch`
export const getProperties = async () => {
    try {
        console.log("trying to pull All properties");
        const response = await api.get("/properties"); 
        // Adjust endpoint path if your backend route differs (e.g., "/properties/all" or "/api/properties")
        console.log(response.data);
        return response.data.data;
    } 
    catch (error) {
        console.error("Error fetching properties:", error);
        console.log("Error getting properties ",error)
        throw error;
    }
};


export const getPropertyImages = async () => {
    const propertyId = JSON.parse(localStorage.getItem("propertyId"));

    const response = await api.get(
        `/properties/list-property/images/${propertyId}`
    );

    return response.data.data;
};


export {
    createLandlord,
    createProperty,
    createCaretaker,
    sendpropertyDetails,
    uploadImages
};



























