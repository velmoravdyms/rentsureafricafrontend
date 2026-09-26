
// @ts-nocheck
import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom"; // Added useNavigate
import styled from "@emotion/styled";
import { Sharesidebar } from "../components/Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isMobilePhone } from 'validator';
import { sendpropertyDetails } from '../components/apicalls';

// --- STYLED COMPONENTS ---
const Breadcrumbs = styled.div`
  position: fixed;
  top: 67px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 45px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  left: ${({ sidebar }) => sidebar ? "5.5%" : "23.5%"};
  width: ${({ sidebar }) => sidebar ? "92.5%" : "74.5%"};
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
  left: ${({ sidebar }) => sidebar ? "6%" : "24%"};
  width: ${({ sidebar }) => sidebar ? "93%" : "75%"};
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
  font-size: ${({ sidebar }) => sidebar ? "1.7rem" : "1.7rem"};
  font-weight: ${({ sidebar }) => sidebar ? "600" : "600"};
`;

const Labelpara = styled.div``;

const Progressbar = styled.div`
  background-color: #F5F5F5;
  height: 10px;
  border-radius: 3px;
  width: ${({ sidebar }) => sidebar ? "50%" : "60%"};
  margin: 1rem auto;
`;

const Listbody = styled.div`
  margin: auto;
  width: 100%;
`;

const Backbutton = styled(Link)`
  background-color: #F5F5F5;
  text-decoration: none;
  font-weight: ${({ sidebar }) => sidebar ? "600" : "600"};
  font-size: ${({ sidebar }) => sidebar ? "1.2rem" : "1.2rem"};
  margin: 1rem 30% 1rem 2rem;  
  border-radius: 6.79px;
  border: none;
  padding: ${({ sidebar }) => sidebar ? "0.5rem" : "0.5rem"};
  color: blue;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: blue;
  }
`;

const SubmitButton = styled.button`
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: ${({ disabled }) => disabled ? "#93c5fd" : "blue"};
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  margin: 1rem 0.3rem;
  border-radius: 6px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
`;

const Propertycontainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
`;

const Propertycaretakerdiv = styled.div``;

const Priceperunit = styled.div`
  margin: 2rem 0 2rem 1.5rem;
`;

const Label = styled.div`
  font-weight: 800;
`;

// Validation Rules
const Required = (value) => {
  if (!value)
    return <div style={{ backgroundColor: "white", color: "red", padding: "0.25rem 0", fontSize: "1rem", margin: "0.25rem auto", width: "100%" }}>Required</div>;
};

function Addpropstep12() {
  const navigate = useNavigate(); // Hook for redirection
  const side = useContext(Sharesidebar);
  const form = useRef();
  const checkbtn = useRef();

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false); // Loading Spinner State
  const [priceperunit, setPriceperunit] = useState([]);

  let fetchednumberofunits = JSON.parse(localStorage.getItem("roomsperunit")) || { saved: { prop: [] } };
  let instancesofnumberofroomsperunit = fetchednumberofunits.saved.prop || [];

  const unitPriceChange = (index) => (valuee) => {
    const newPriceperunit = [...priceperunit];
    newPriceperunit[index] = valuee.target.value;
    setPriceperunit(newPriceperunit);
  };

  useEffect(() => {
    if (priceperunit.length === 0) {
      setDisabled(true);
      return;
    }
    const hasEmptyField = priceperunit.some(price => !price || price.trim() === "");
    setDisabled(hasEmptyField);
  }, [priceperunit]);

  const handleClick = (e) => {
    e.preventDefault();
    form.current.validateAll();

    if (checkbtn.current.context._errors.length === 0) {
      saveAndComplete();
    }
  };

  const saveAndComplete = async () => {
    setLoading(true);
    setDisabled(true);

    try {
      // 1. Save Prices step into LocalStorage
      const savedpricesperunit = { prop: priceperunit };
      localStorage.setItem("pricesperunit", JSON.stringify({ savedpricesperunit }));

      // 2. Extract stored form data across wizard steps
      const proptype = JSON.parse(localStorage.getItem("proptyp")) || {};
      const listingpurpose = JSON.parse(localStorage.getItem("listingpurpose")) || {};
      const internalfeatures = JSON.parse(localStorage.getItem("internalfeatures")) || {};
      const externalfeatures = JSON.parse(localStorage.getItem("externalfeatures")) || {};
      const nearbyfeatures = JSON.parse(localStorage.getItem("nearbyfeatures")) || {};
      const roomsperunit = JSON.parse(localStorage.getItem("roomsperunit")) || {};
      const propertylocation = JSON.parse(localStorage.getItem("propertylocation")) || {};

      const propertytype = proptype.saved?.prop;
      const propertylistingpurpose = listingpurpose.saved?.prop;
      const propertyinternalfeatures = internalfeatures.saved?.prop;
      const propertyexternalfeatures = externalfeatures.saved?.prop;
      const propertynearbyfeatures = nearbyfeatures.saved?.prop;
      const propertyroomsperunit = roomsperunit.saved?.prop;
      const propertypriceperunit = priceperunit;

      // 3. Post complete registration data to API
      await sendpropertyDetails(
        propertytype,
        propertylistingpurpose,
        propertyinternalfeatures,
        propertyexternalfeatures,
        propertynearbyfeatures,
        propertyroomsperunit,
        propertypriceperunit,
        propertylocation
      );

      // 4. Wipe wizard keys from LocalStorage
      const keysToClear = [
        "proptyp", "listingpurpose", "internalfeatures", 
        "externalfeatures", "nearbyfeatures", "roomsperunit", 
        "propertyname", "totalunits", "availableunits", 
        "landlordname", "landlordemail", "landlordphonenumber", 
        "caretakername", "caretakeremail", "caretakerphonenumber", 
        "pricesperunit", "propertylocation","propertyId",   




  


      ];
      keysToClear.forEach(key => localStorage.removeItem(key));

      // 5. Redirect user to properties table
      navigate("/agency/properties/view-all-properties");

    } catch (error) {
      console.error("Error submitting property details:", error);
      alert("Failed to register property. Please check network connection and try again.");
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  };

  return (
    <div>
      <Breadcrumbs sidebar={side ? 1 : 0}>
        <Crumbsicons sidebar={side ? 1 : 0}>Icons will go here</Crumbsicons>
      </Breadcrumbs>

      <Listpropdiv sidebar={side ? 1 : 0}>
        <ListHeader sidebar={side ? 1 : 0}>
          <Headertitle sidebar={side ? 1 : 0}>List new property</Headertitle>
        </ListHeader>

        <Listbody sidebar={side ? 1 : 0}>
          <Progressbar sidebar={side ? 1 : 0}></Progressbar>

          <Propertycontainer>
            <Form ref={form} onSubmit={handleClick}>
              <Propertycaretakerdiv>
                <Label>Property/ Apartment's Price Details :</Label>
                <Labelpara>Enter Property's Prices Details below..</Labelpara>
              </Propertycaretakerdiv>

              {instancesofnumberofroomsperunit.map((numberofroomsperunit, index) => (
                <Priceperunit key={index}>
                  <Label>Price of {numberofroomsperunit} :</Label>
                  <Input
                    type="price"
                    name="priceperunit"
                    placeholder="Enter Price of Number of Bedrooms"
                    value={priceperunit[index] || ""}
                    onChange={unitPriceChange(index)}
                    validations={[Required]}
                    style={{
                      width: "100%",
                      height: "3rem",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      border: "2px solid blue",
                      fontSize: "1rem",
                      color: "black"
                    }}
                  />
                </Priceperunit>
              ))}

              <div style={{ width: "100%", margin: "1rem 0rem 1rem 1rem" }}>
                <Backbutton to="/agency/properties/list-property/step11" sidebar={side ? 1 : 0}>
                  Back
                </Backbutton>

                <SubmitButton type="submit" disabled={disabled || loading}>
                  {loading ? "Registering Property..." : "Complete Property Registration"}
                </SubmitButton>

                <CheckButton style={{ display: "none" }} ref={checkbtn} />
              </div>
            </Form>
          </Propertycontainer>
        </Listbody>
      </Listpropdiv>
    </div>
  );
}

export default Addpropstep12;