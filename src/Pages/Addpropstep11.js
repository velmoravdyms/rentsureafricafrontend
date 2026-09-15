// @ts-nocheck

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import {
  APIProvider,
  Map,
  useMap,
} from "@vis.gl/react-google-maps";

import {
  APILoader,
  PlacePicker,
} from "@googlemaps/extended-component-library/react";


// ============================================================
// DEFAULT MAP LOCATION
// ============================================================

const DEFAULT_LOCATION = {
  lat: -1.2124522310998684,
  lng: 36.75581696637829,
};


// ============================================================
// STYLES
// ============================================================

const Maprender = styled.div`
  width: 100%;
  min-height: 650px;

  padding: 0.5rem;

  margin: 0.1rem auto;

  box-sizing: border-box;

  overflow-y: auto;

  border: 2px solid purple;

  @media (max-width: 768px) {
    padding: 0.35rem;
  }
`;


const Geolocationdiv = styled.div`
  width: 100%;

  margin: 0.5rem;

  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 0.25rem;
    width: calc(100% - 0.5rem);
  }
`;


const Selectlocationheader = styled.div`
  width: 100%;

  margin: 0.5rem auto 1rem;

  padding: 0;

  h4 {
    margin: 0 0 0.4rem;

    font-size: 1.05rem;

    line-height: 1.4;
  }

  p {
    margin: 0;

    color: #666;

    font-size: 0.88rem;

    line-height: 1.5;
  }
`;


const SearchTitle = styled.div`
  margin: 1rem 0 0.5rem;

  font-size: 0.95rem;

  font-weight: 700;

  text-align: left;
`;


const SearchContainer = styled.div`
  width: 100%;

  margin-bottom: 1rem;

  gmpx-place-picker {
    width: 100%;
    display: block;
  }
`;


const SearchResult = styled.div`
  width: 100%;

  margin-top: 0.5rem;

  padding: 0.65rem 0.75rem;

  box-sizing: border-box;

  background: #f5f5f5;

  border: 1px solid #ddd;

  border-radius: 6px;

  font-size: 0.85rem;

  text-align: left;

  color: #444;
`;


// ============================================================
// MAP
// ============================================================

const MapContainer = styled.div`
  position: relative;

  width: 100%;

  height: 450px;

  overflow: hidden;

  border-radius: 10px;

  border: 1px solid #ddd;

  background: #eee;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 500px) {
    height: 350px;
  }
`;


// ============================================================
// FIXED PIN
// ============================================================

const CenterPinContainer = styled.div`
  position: absolute;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -100%);

  z-index: 1000;

  pointer-events: none;

  display: flex;

  flex-direction: column;

  align-items: center;
`;


const CenterPin = styled.div`
  font-size: 42px;

  line-height: 1;

  filter: drop-shadow(
    0 3px 3px rgba(0, 0, 0, 0.35)
  );

  @media (max-width: 500px) {
    font-size: 38px;
  }
`;


const PinShadow = styled.div`
  width: 12px;

  height: 5px;

  border-radius: 50%;

  background: rgba(0, 0, 0, 0.35);

  margin-top: -3px;
`;


const PinInstruction = styled.div`
  position: absolute;

  top: 12px;

  left: 50%;

  transform: translateX(-50%);

  z-index: 999;

  pointer-events: none;

  background: rgba(255, 255, 255, 0.94);

  padding: 7px 12px;

  border-radius: 20px;

  font-size: 0.78rem;

  color: #333;

  white-space: nowrap;

  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 500px) {
    font-size: 0.68rem;

    padding: 6px 9px;
  }
`;


// ============================================================
// MAP LOCK STATUS
// ============================================================

const MapLockStatus = styled.div`
  width: 100%;

  margin-top: 0.75rem;

  padding: 0.7rem 0.85rem;

  box-sizing: border-box;

  border-radius: 7px;

  display: flex;

  align-items: center;

  gap: 0.5rem;

  font-size: 0.82rem;

  font-weight: 600;

  background: ${({ locked }) =>
    locked ? "#e8f5e9" : "#fff8e1"};

  border: 1px solid
    ${({ locked }) =>
      locked ? "#81c784" : "#ffcc80"};

  color: ${({ locked }) =>
    locked ? "#2e7d32" : "#8a5a00"};
`;


// ============================================================
// CURRENT COORDINATES
// ============================================================

const MapInfo = styled.div`
  width: 100%;

  margin-top: 0.8rem;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 0.7rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


const CoordinateBox = styled.div`
  padding: 0.7rem;

  background: #f8f8f8;

  border: 1px solid #ddd;

  border-radius: 6px;

  text-align: left;

  .label {
    font-size: 0.72rem;

    color: #777;

    margin-bottom: 0.2rem;
  }

  .value {
    font-size: 0.85rem;

    font-weight: 600;

    word-break: break-all;
  }
`;


// ============================================================
// PIN BUTTON
// ============================================================

const PinButton = styled.button`
  width: 100%;

  margin-top: 1rem;

  padding: 0.85rem 1rem;

  border: none;

  border-radius: 7px;

  background: ${({ disabled }) =>
    disabled ? "#aaa" : "#6a1b9a"};

  color: white;

  font-size: 0.95rem;

  font-weight: 700;

  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"};

  transition: all 0.2s ease;

  &:hover {
    background: ${({ disabled }) =>
      disabled ? "#aaa" : "#4a126d"};
  }
`;


// ============================================================
// UNLOCK / CHANGE LOCATION BUTTON
// ============================================================

const UnlockButton = styled.button`
  width: 100%;

  margin-top: 0.7rem;

  padding: 0.75rem 1rem;

  border: 1px solid #777;

  border-radius: 7px;

  background: white;

  color: #444;

  font-size: 0.9rem;

  font-weight: 700;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: #f2f2f2;
  }
`;


// ============================================================
// PINNED LOCATION DISPLAY
// ============================================================

const PinnedLocation = styled.div`
  width: 100%;

  margin-top: 1rem;

  padding: 0.9rem;

  box-sizing: border-box;

  border-radius: 8px;

  background: #e8f5e9;

  border: 1px solid #81c784;

  text-align: left;

  .title {
    margin-bottom: 0.5rem;

    font-weight: 700;

    color: #2e7d32;
  }

  .address {
    margin-bottom: 0.6rem;

    font-size: 0.9rem;

    color: #333;
  }

  .coordinates {
    font-size: 0.8rem;

    line-height: 1.6;

    color: #555;
  }
`;


// ============================================================
// SAVED MESSAGE
// ============================================================

const SavedMessage = styled.div`
  margin-top: 0.8rem;

  padding: 0.65rem 0.8rem;

  border-radius: 6px;

  background: #eef4ff;

  border: 1px solid #b8cdf5;

  color: #315b9b;

  font-size: 0.8rem;

  text-align: left;
`;


// ============================================================
// BOTTOM NAVIGATION
// ============================================================

const Navigation = styled.div`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 1rem;

  margin-top: 2rem;

  padding-top: 1rem;

  border-top: 1px solid #ddd;

  @media (max-width: 600px) {
    flex-direction: column;

    align-items: stretch;
  }
`;


const BackButton = styled(Link)`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 130px;

  padding: 0.75rem 1.2rem;

  box-sizing: border-box;

  background: #f5f5f5;

  color: blue;

  text-decoration: none;

  font-weight: 600;

  font-size: 1rem;

  border-radius: 6px;

  border: 1px solid #ddd;

  &:hover {
    color: white;

    background: blue;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;


const NextButton = styled(Link)`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 150px;

  padding: 0.75rem 1.2rem;

  box-sizing: border-box;

  background: ${({ disabled }) =>
    disabled ? "#f5f5f5" : "blue"};

  color: ${({ disabled }) =>
    disabled ? "#888" : "white"};

  text-decoration: none;

  font-weight: 700;

  font-size: 1rem;

  border-radius: 6px;

  border: none;

  pointer-events: ${({ disabled }) =>
    disabled ? "none" : "auto"};

  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? "#f5f5f5" : "#0000cc"};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;


// ============================================================
// MOVE MAP AFTER SEARCH
// ============================================================

const PanMapToSelectedLocation = ({
  location,
}) => {

  const map = useMap();

  useEffect(() => {

    if (!map || !location) {
      return;
    }

    map.panTo(location);

    map.setZoom(17);

  }, [map, location]);

  return null;
};


// ============================================================
// GET INITIAL LOCATION DATA
//
// IMPORTANT:
//
// This runs BEFORE the Google Map is created.
//
// Therefore, if a property location already exists
// in localStorage, the map starts directly at that
// saved location instead of first starting at the
// default location.
// ============================================================

const getInitialLocationData = () => {

  try {

    const savedLocation =
      localStorage.getItem(
        "propertylocation"
      );


    if (!savedLocation) {

      return {

        mapCenter:
          DEFAULT_LOCATION,

        pinnedLocation:
          null,

        formattedAddress:
          "",

        isMapLocked:
          false,

      };

    }


    const parsedLocation =
      JSON.parse(
        savedLocation
      );


    if (
      parsedLocation &&
      typeof parsedLocation.latitude ===
        "number" &&
      typeof parsedLocation.longitude ===
        "number"
    ) {

      return {

        mapCenter: {

          lat:
            parsedLocation.latitude,

          lng:
            parsedLocation.longitude,

        },

        pinnedLocation:
          parsedLocation,

        formattedAddress:
          parsedLocation.formattedAddress ||
          "",

        isMapLocked:
          true,

      };

    }

  } catch (error) {

    console.error(
      "Error reading saved property location:",
      error
    );

  }


  return {

    mapCenter:
      DEFAULT_LOCATION,

    pinnedLocation:
      null,

    formattedAddress:
      "",

    isMapLocked:
      false,

  };

};


// ============================================================
// MAIN COMPONENT
// ============================================================

const RenderGoogleMap = () => {

  // ==========================================================
  // INITIAL LOCATION DATA
  //
  // Read localStorage immediately.
  //
  // This is important because the Map component uses
  // defaultCenter only when it is initially created.
  // ==========================================================

  const initialLocationData =
    getInitialLocationData();


  // ==========================================================
  // SEARCH ADDRESS
  // ==========================================================

  const [
    formattedAddress,
    setFormattedAddress,
  ] = useState(
    initialLocationData.formattedAddress
  );


  // ==========================================================
  // SELECTED SEARCH PLACE
  // ==========================================================

  const [
    selectedPlace,
    setSelectedPlace,
  ] = useState(null);


  // ==========================================================
  // SEARCH LOCATION
  // ==========================================================

  const [
    searchLocation,
    setSearchLocation,
  ] = useState(null);


  // ==========================================================
  // LIVE MAP CENTER
  // ==========================================================

  const [
    mapCenter,
    setMapCenter,
  ] = useState(
    initialLocationData.mapCenter
  );


  // ==========================================================
  // FINAL PINNED LOCATION
  // ==========================================================

  const [
    pinnedLocation,
    setPinnedLocation,
  ] = useState(
    initialLocationData.pinnedLocation
  );


  // ==========================================================
  // MAP LOCKED STATE
  // ==========================================================

  const [
    isMapLocked,
    setIsMapLocked,
  ] = useState(
    initialLocationData.isMapLocked
  );


  // ==========================================================
  // PINNING
  // ==========================================================

  const [
    isPinning,
    setIsPinning,
  ] = useState(false);


  // ==========================================================
  // GOOGLE API KEY
  // ==========================================================

  const GOOGLE_MAPS_API_KEY =
    process.env.GOOGLE_MAPS_API_KEY || "AIzaSyC61R7BevXG7uOoAAWEaxSoDYs0ldNwrT4"


  // ==========================================================
  // SEARCH LOCATION
  // ==========================================================

  const handlePlaceChange = (e) => {

    /*
      Search is only allowed to reposition the map
      while the map is unlocked.

      If the map is currently locked, we unlock it
      first because the user has deliberately chosen
      a new search area.
    */

    if (isMapLocked) {

      setIsMapLocked(
        false
      );

      setPinnedLocation(
        null
      );

    }


    if (!e?.target?.value) {
      return;
    }


    const place =
      e.target.value;


    if (!place.location) {
      return;
    }


    const newLocation = {

      lat:
        place.location.lat(),

      lng:
        place.location.lng(),

    };


    console.log(
      "Selected search location:",
      newLocation
    );


    setSelectedPlace(
      place
    );


    setFormattedAddress(
      place.formattedAddress ||
      ""
    );


    /*
      Search location is approximate.

      It simply moves the map to the
      selected area.

      It is NOT the final property location.
    */

    setSearchLocation(
      newLocation
    );


    setMapCenter(
      newLocation
    );


    /*
      Searching for a new area means that
      the previous exact pin is no longer
      considered the current selection.
    */

    setPinnedLocation(
      null
    );

  };


  // ==========================================================
  // MAP MOVED
  // ==========================================================

  const handleCameraChanged = (event) => {

    if (
      !event?.detail?.center
    ) {

      return;

    }


    const center =
      event.detail.center;


    const newCenter = {

      lat:
        center.lat,

      lng:
        center.lng,

    };


    /*
      Keep track of whatever point is currently
      underneath the fixed center pin.
    */

    setMapCenter(
      newCenter
    );


    /*
      VERY IMPORTANT:

      DO NOT do this:

        setPinnedLocation(null)

      here.

      Camera changes can happen for many reasons,
      including map initialization and zoom changes.

      A saved pin should only be replaced when the
      user deliberately chooses to change the location.
    */

    console.log(
      "Current map center:",
      newCenter
    );

  };


  // ==========================================================
  // PIN EXACT LOCATION
  // ==========================================================

  const handlePinLocation = async () => {

    /*
      Do nothing if:

      - already pinning
      - map is already locked
    */

    if (
      isPinning ||
      isMapLocked
    ) {

      return;

    }


    try {

      if (
        !window.google ||
        !window.google.maps
      ) {

        console.error(
          "Google Maps is not loaded yet."
        );

        return;

      }


      setIsPinning(
        true
      );


      // ======================================================
      // EXACT LOCATION
      //
      // This is the authoritative property location.
      //
      // It is the center of the map, directly underneath
      // the fixed pin.
      // ======================================================

      const position = {

        lat:
          mapCenter.lat,

        lng:
          mapCenter.lng,

      };


      console.log(
        "Exact property location:",
        position
      );


      // ======================================================
      // REVERSE GEOCODING
      // ======================================================

      const geocoder =
        new window.google.maps.Geocoder();


      const response =
        await geocoder.geocode({

          location:
            position,

        });


      let actualAddress =
        "";

      let actualPlaceId =
        null;


      if (
        response?.results?.length > 0
      ) {

        actualAddress =
          response.results[0]
            .formatted_address ||
          "";


        actualPlaceId =
          response.results[0]
            .place_id ||
          null;

      }


      // ======================================================
      // FINAL LOCATION OBJECT
      // ======================================================

      const finalLocation = {

        latitude:
          position.lat,

        longitude:
          position.lng,

        formattedAddress:
          actualAddress,

        placeId:
          actualPlaceId,

      };


      console.log(
        "FINAL PINNED LOCATION:",
        finalLocation
      );


      // ======================================================
      // SAVE TO REACT
      // ======================================================

      setPinnedLocation(
        finalLocation
      );


      // ======================================================
      // SAVE TO LOCAL STORAGE
      // ======================================================

      // localStorage.setItem(

      //   "propertylocation",

      //   JSON.stringify(
      //     finalLocation
      //   )

      // );

      localStorage.setItem("propertylocation",
        JSON.stringify({
          latitude: position.lat,
          longitude: position.lng,
          formattedAddress: actualAddress,
          placeId: actualPlaceId
        })  
      );



      // ======================================================
      // LOCK MAP
      // ======================================================

      setIsMapLocked(
        true
      );


      /*
        Clear search movement.

        This prevents the search-pan helper from
        trying to move the map after we have locked
        the final location.
      */

      setSearchLocation(
        null
      );


      /*
        Keep the displayed address synchronized
        with the actual reverse-geocoded address.
      */

      setFormattedAddress(
        actualAddress
      );


      console.log(
        "Property location saved and map locked."
      );

    } catch (error) {

      console.error(
        "Error pinning property location:",
        error
      );

    } finally {

      setIsPinning(
        false
      );

    }

  };


  // ==========================================================
  // UNLOCK / CHANGE LOCATION
  // ==========================================================

  const handleChangeLocation = () => {

    /*
      Unlock the map.

      The user can now search or manually
      move the map again.
    */

    setIsMapLocked(
      false
    );


    /*
      Remove the React pinned state.

      IMPORTANT:

      We intentionally DO NOT remove the
      localStorage value yet.

      The old saved location remains safe until
      the user actually pins a replacement.
    */

    setPinnedLocation(
      null
    );


    /*
      Clear search movement so the map does not
      immediately jump somewhere else.
    */

    setSearchLocation(
      null
    );


    console.log(
      "Map unlocked. User can adjust the location."
    );

  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <APIProvider
      apiKey={
        GOOGLE_MAPS_API_KEY
      }
    >

      <Maprender>

        <Geolocationdiv>


          {/* ==================================================
              HEADER
          ================================================== */}

          <Selectlocationheader>

            <h4>
              Select Your Property Location
            </h4>

            <p>
              Search for the general area first,
              then move the map underneath the pin
              until the pin is exactly over your
              property.
            </p>

          </Selectlocationheader>


          {/* ==================================================
              SEARCH
          ================================================== */}

          <SearchTitle>

            1. Search for your property area

          </SearchTitle>


          <SearchContainer>

            <APILoader
              apiKey={
                GOOGLE_MAPS_API_KEY
              }

              solutionChannel={
                "GMP_GCC_placepicker_v1"
              }
            />


            <PlacePicker

              country={[]}

              placeholder={
                isMapLocked
                  ? "Location locked — unlock to change"
                  : "Enter a place to see its address"
              }

              onPlaceChange={
                handlePlaceChange
              }

            />


            {formattedAddress && (

              <SearchResult>

                <strong>
                  {pinnedLocation
                    ? "Pinned location:"
                    : "Search result:"
                  }
                </strong>

                <br />

                {formattedAddress}

              </SearchResult>

            )}

          </SearchContainer>


          {/* ==================================================
              MAP TITLE
          ================================================== */}

          <SearchTitle>

            2. Position the exact property location

          </SearchTitle>


          {/* ==================================================
              MAP
          ================================================== */}

          <MapContainer>


            <Map

              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}


              /*
                If we already have a saved location,
                start there at a closer zoom.

                Otherwise start at the default location.
              */

              defaultZoom={
                initialLocationData.pinnedLocation
                  ? 17
                  : 13
              }


              /*
                THIS is the important fix.

                Previously this was:

                  defaultCenter={DEFAULT_LOCATION}

                Now it uses the saved location when
                one exists.
              */

              defaultCenter={
                initialLocationData.mapCenter
              }


              /*
                UNLOCKED:

                  User can drag/pan normally.

                LOCKED:

                  No dragging or map gestures.
              */

              gestureHandling={
                isMapLocked
                  ? "none"
                  : "greedy"
              }


              /*
                Disable mouse-wheel zoom while locked.
              */

              scrollwheel={
                !isMapLocked
              }


              /*
                Disable double-click zoom while locked.
              */

              disableDoubleClickZoom={
                isMapLocked
              }


              /*
                Disable keyboard movement while locked.
              */

              keyboardShortcuts={
                !isMapLocked
              }


              mapTypeId="hybrid"

              mapId="a99c0ae2ccbc0904"


              /*
                Hide zoom controls while locked.
              */

              zoomControl={
                !isMapLocked
              }


              fullscreenControl={
                true
              }


              disableDefaultUI={
                false
              }


              onCameraChanged={
                handleCameraChanged
              }

            >


              {/* =================================================
                  ONLY SEARCH MOVES THE MAP AUTOMATICALLY
              ================================================= */}

              <PanMapToSelectedLocation
                location={
                  searchLocation
                }
              />


            </Map>


            {/* =================================================
                FIXED CENTER PIN
            ================================================= */}

            <CenterPinContainer>

              <CenterPin>
                📍
              </CenterPin>

              <PinShadow />

            </CenterPinContainer>


            {/* =================================================
                MAP INSTRUCTION
            ================================================= */}

            <PinInstruction>

              {isMapLocked

                ? "🔒 Location locked"

                : "Move the map to position the pin"

              }

            </PinInstruction>


          </MapContainer>


          {/* ==================================================
              LOCK STATUS
          ================================================== */}

          <MapLockStatus
            locked={
              isMapLocked
            }
          >

            {isMapLocked ? (

              <>

                <span>
                  🔒
                </span>

                <span>
                  Property location is locked and saved.
                </span>

              </>

            ) : (

              <>

                <span>
                  🔓
                </span>

                <span>
                  Map unlocked — position the pin over the
                  exact property location.
                </span>

              </>

            )}

          </MapLockStatus>


          {/* ==================================================
              LIVE COORDINATES
          ================================================== */}

          <MapInfo>

            <CoordinateBox>

              <div className="label">

                Current Latitude

              </div>

              <div className="value">

                {mapCenter.lat.toFixed(8)}

              </div>

            </CoordinateBox>


            <CoordinateBox>

              <div className="label">

                Current Longitude

              </div>

              <div className="value">

                {mapCenter.lng.toFixed(8)}

              </div>

            </CoordinateBox>

          </MapInfo>


          {/* ==================================================
              PIN BUTTON
          ================================================== */}

          <PinButton

            type="button"

            onClick={
              handlePinLocation
            }

            disabled={
              isPinning ||
              isMapLocked
            }

          >

            {isMapLocked

              ? "✅ Property location pinned"

              : isPinning

                ? "📍 Finding location..."

                : "📍 Pin this property location"

            }

          </PinButton>


          {/* ==================================================
              CHANGE / ADJUST LOCATION
          ================================================== */}

          {isMapLocked && (

            <UnlockButton

              type="button"

              onClick={
                handleChangeLocation
              }

            >

              🔓 Change / Adjust Location

            </UnlockButton>

          )}


          {/* ==================================================
              PINNED LOCATION
          ================================================== */}

          {pinnedLocation && (

            <PinnedLocation>

              <div className="title">

                ✅ Property Location Saved

              </div>


              <div className="address">

                <strong>
                  Address:
                </strong>

                <br />

                {pinnedLocation
                  .formattedAddress ||
                  "Address unavailable"}

              </div>


              <div className="coordinates">

                <strong>
                  Latitude:
                </strong>{" "}

                {pinnedLocation.latitude}

                <br />

                <strong>
                  Longitude:
                </strong>{" "}

                {pinnedLocation.longitude}

                <br />

                <strong>
                  Place ID:
                </strong>{" "}

                {pinnedLocation.placeId ||
                  "N/A"}

              </div>

            </PinnedLocation>

          )}


          {/* ==================================================
              SAVED DRAFT MESSAGE
          ================================================== */}

          {pinnedLocation && (

            <SavedMessage>

              💾 Location saved. You can go back
              to the previous step and return here
              later without losing the pinned
              location.

            </SavedMessage>

          )}


          {/* ==================================================
              BACK + NEXT
          ================================================== */}

          <Navigation>


            {/* ------------------------------------------------
                BACK
            ------------------------------------------------ */}

            <BackButton
              to="/agency/properties/list-property/step10"
            >

              ← Back

            </BackButton>


            {/* ------------------------------------------------
                NEXT
            ------------------------------------------------ */}

            <NextButton

              to="/agency/properties/list-property/step12"

              disabled={
                !pinnedLocation
              }

            >

              Next Step →

            </NextButton>


          </Navigation>


        </Geolocationdiv>

      </Maprender>

    </APIProvider>

  );

};


export default RenderGoogleMap;

















































































































// // @ts-nocheck

// import React, { useEffect, useState } from "react";
// import styled from "@emotion/styled";
// import { Link } from "react-router-dom";

// import {
//   APIProvider,
//   Map,
//   useMap,
// } from "@vis.gl/react-google-maps";

// import {
//   APILoader,
//   PlacePicker,
// } from "@googlemaps/extended-component-library/react";


// // ============================================================
// // DEFAULT MAP LOCATION
// // ============================================================

// const DEFAULT_LOCATION = {
//   lat: -1.2124522310998684,
//   lng: 36.75581696637829,
// };


// // ============================================================
// // STYLES
// // ============================================================

// const Maprender = styled.div`
//   width: 100%;
//   min-height: 650px;

//   padding: 0.5rem;

//   margin: 0.1rem auto;

//   box-sizing: border-box;

//   overflow-y: auto;

//   border: 2px solid purple;

//   @media (max-width: 768px) {
//     padding: 0.35rem;
//   }
// `;


// const Geolocationdiv = styled.div`
//   width: 100%;

//   margin: 0.5rem;

//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     margin: 0.25rem;
//     width: calc(100% - 0.5rem);
//   }
// `;


// const Selectlocationheader = styled.div`
//   width: 100%;

//   margin: 0.5rem auto 1rem;

//   padding: 0;

//   h4 {
//     margin: 0 0 0.4rem;

//     font-size: 1.05rem;

//     line-height: 1.4;
//   }

//   p {
//     margin: 0;

//     color: #666;

//     font-size: 0.88rem;

//     line-height: 1.5;
//   }
// `;


// const SearchTitle = styled.div`
//   margin: 1rem 0 0.5rem;

//   font-size: 0.95rem;

//   font-weight: 700;

//   text-align: left;
// `;


// const SearchContainer = styled.div`
//   width: 100%;

//   margin-bottom: 1rem;

//   gmpx-place-picker {
//     width: 100%;
//     display: block;
//   }
// `;


// const SearchResult = styled.div`
//   width: 100%;

//   margin-top: 0.5rem;

//   padding: 0.65rem 0.75rem;

//   box-sizing: border-box;

//   background: #f5f5f5;

//   border: 1px solid #ddd;

//   border-radius: 6px;

//   font-size: 0.85rem;

//   text-align: left;

//   color: #444;
// `;


// // ============================================================
// // MAP
// // ============================================================

// const MapContainer = styled.div`
//   position: relative;

//   width: 100%;

//   height: 450px;

//   overflow: hidden;

//   border-radius: 10px;

//   border: 1px solid #ddd;

//   background: #eee;

//   @media (max-width: 768px) {
//     height: 400px;
//   }

//   @media (max-width: 500px) {
//     height: 350px;
//   }
// `;


// // ============================================================
// // FIXED PIN
// // ============================================================

// const CenterPinContainer = styled.div`
//   position: absolute;

//   left: 50%;

//   top: 50%;

//   transform: translate(-50%, -100%);

//   z-index: 1000;

//   pointer-events: none;

//   display: flex;

//   flex-direction: column;

//   align-items: center;
// `;


// const CenterPin = styled.div`
//   font-size: 42px;

//   line-height: 1;

//   filter: drop-shadow(
//     0 3px 3px rgba(0, 0, 0, 0.35)
//   );

//   @media (max-width: 500px) {
//     font-size: 38px;
//   }
// `;


// const PinShadow = styled.div`
//   width: 12px;

//   height: 5px;

//   border-radius: 50%;

//   background: rgba(0, 0, 0, 0.35);

//   margin-top: -3px;
// `;


// const PinInstruction = styled.div`
//   position: absolute;

//   top: 12px;

//   left: 50%;

//   transform: translateX(-50%);

//   z-index: 999;

//   pointer-events: none;

//   background: rgba(255, 255, 255, 0.94);

//   padding: 7px 12px;

//   border-radius: 20px;

//   font-size: 0.78rem;

//   color: #333;

//   white-space: nowrap;

//   box-shadow:
//     0 2px 8px rgba(0, 0, 0, 0.15);

//   @media (max-width: 500px) {
//     font-size: 0.68rem;

//     padding: 6px 9px;
//   }
// `;


// // ============================================================
// // LOCK STATUS
// // ============================================================

// const MapLockStatus = styled.div`
//   width: 100%;

//   margin-top: 0.75rem;

//   padding: 0.7rem 0.85rem;

//   box-sizing: border-box;

//   border-radius: 7px;

//   display: flex;

//   align-items: center;

//   gap: 0.5rem;

//   font-size: 0.82rem;

//   font-weight: 600;

//   background: ${({ locked }) =>
//     locked ? "#e8f5e9" : "#fff8e1"};

//   border: 1px solid
//     ${({ locked }) =>
//       locked ? "#81c784" : "#ffcc80"};

//   color: ${({ locked }) =>
//     locked ? "#2e7d32" : "#8a5a00"};
// `;


// // ============================================================
// // CURRENT COORDINATES
// // ============================================================

// const MapInfo = styled.div`
//   width: 100%;

//   margin-top: 0.8rem;

//   display: grid;

//   grid-template-columns: 1fr 1fr;

//   gap: 0.7rem;

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;


// const CoordinateBox = styled.div`
//   padding: 0.7rem;

//   background: #f8f8f8;

//   border: 1px solid #ddd;

//   border-radius: 6px;

//   text-align: left;

//   .label {
//     font-size: 0.72rem;

//     color: #777;

//     margin-bottom: 0.2rem;
//   }

//   .value {
//     font-size: 0.85rem;

//     font-weight: 600;

//     word-break: break-all;
//   }
// `;


// // ============================================================
// // PIN BUTTON
// // ============================================================

// const PinButton = styled.button`
//   width: 100%;

//   margin-top: 1rem;

//   padding: 0.85rem 1rem;

//   border: none;

//   border-radius: 7px;

//   background: ${({ disabled }) =>
//     disabled ? "#aaa" : "#6a1b9a"};

//   color: white;

//   font-size: 0.95rem;

//   font-weight: 700;

//   cursor: ${({ disabled }) =>
//     disabled ? "not-allowed" : "pointer"};

//   transition: all 0.2s ease;

//   &:hover {
//     background: ${({ disabled }) =>
//       disabled ? "#aaa" : "#4a126d"};
//   }
// `;


// // ============================================================
// // UNLOCK / CHANGE LOCATION BUTTON
// // ============================================================

// const UnlockButton = styled.button`
//   width: 100%;

//   margin-top: 0.7rem;

//   padding: 0.75rem 1rem;

//   border: 1px solid #777;

//   border-radius: 7px;

//   background: white;

//   color: #444;

//   font-size: 0.9rem;

//   font-weight: 700;

//   cursor: pointer;

//   transition: all 0.2s ease;

//   &:hover {
//     background: #f2f2f2;
//   }
// `;


// // ============================================================
// // PINNED LOCATION DISPLAY
// // ============================================================

// const PinnedLocation = styled.div`
//   width: 100%;

//   margin-top: 1rem;

//   padding: 0.9rem;

//   box-sizing: border-box;

//   border-radius: 8px;

//   background: #e8f5e9;

//   border: 1px solid #81c784;

//   text-align: left;

//   .title {
//     margin-bottom: 0.5rem;

//     font-weight: 700;

//     color: #2e7d32;
//   }

//   .address {
//     margin-bottom: 0.6rem;

//     font-size: 0.9rem;

//     color: #333;
//   }

//   .coordinates {
//     font-size: 0.8rem;

//     line-height: 1.6;

//     color: #555;
//   }
// `;


// // ============================================================
// // SAVED MESSAGE
// // ============================================================

// const SavedMessage = styled.div`
//   margin-top: 0.8rem;

//   padding: 0.65rem 0.8rem;

//   border-radius: 6px;

//   background: #eef4ff;

//   border: 1px solid #b8cdf5;

//   color: #315b9b;

//   font-size: 0.8rem;

//   text-align: left;
// `;


// // ============================================================
// // BOTTOM NAVIGATION
// // ============================================================

// const Navigation = styled.div`
//   width: 100%;

//   display: flex;

//   align-items: center;

//   justify-content: space-between;

//   gap: 1rem;

//   margin-top: 2rem;

//   padding-top: 1rem;

//   border-top: 1px solid #ddd;

//   @media (max-width: 600px) {
//     flex-direction: column;

//     align-items: stretch;
//   }
// `;


// const BackButton = styled(Link)`
//   display: inline-flex;

//   align-items: center;

//   justify-content: center;

//   min-width: 130px;

//   padding: 0.75rem 1.2rem;

//   box-sizing: border-box;

//   background: #f5f5f5;

//   color: blue;

//   text-decoration: none;

//   font-weight: 600;

//   font-size: 1rem;

//   border-radius: 6px;

//   border: 1px solid #ddd;

//   &:hover {
//     color: white;

//     background: blue;
//   }

//   @media (max-width: 600px) {
//     width: 100%;
//   }
// `;


// const NextButton = styled(Link)`
//   display: inline-flex;

//   align-items: center;

//   justify-content: center;

//   min-width: 150px;

//   padding: 0.75rem 1.2rem;

//   box-sizing: border-box;

//   background: ${({ disabled }) =>
//     disabled ? "#f5f5f5" : "blue"};

//   color: ${({ disabled }) =>
//     disabled ? "#888" : "white"};

//   text-decoration: none;

//   font-weight: 700;

//   font-size: 1rem;

//   border-radius: 6px;

//   border: none;

//   pointer-events: ${({ disabled }) =>
//     disabled ? "none" : "auto"};

//   cursor: ${({ disabled }) =>
//     disabled ? "not-allowed" : "pointer"};

//   &:hover {
//     background: ${({ disabled }) =>
//       disabled ? "#f5f5f5" : "#0000cc"};
//   }

//   @media (max-width: 600px) {
//     width: 100%;
//   }
// `;


// // ============================================================
// // MOVE MAP AFTER SEARCH
// // ============================================================

// const PanMapToSelectedLocation = ({
//   location,
// }) => {

//   const map = useMap();

//   useEffect(() => {

//     if (!map || !location) {
//       return;
//     }

//     map.panTo(location);

//     map.setZoom(17);

//   }, [map, location]);

//   return null;
// };


// // ============================================================
// // MAIN COMPONENT
// // ============================================================

// const RenderGoogleMap = () => {

//   // ----------------------------------------------------------
//   // SEARCH ADDRESS
//   // ----------------------------------------------------------

//   const [
//     formattedAddress,
//     setFormattedAddress,
//   ] = useState("");


//   // ----------------------------------------------------------
//   // SELECTED SEARCH PLACE
//   // ----------------------------------------------------------

//   const [
//     selectedPlace,
//     setSelectedPlace,
//   ] = useState(null);


//   // ----------------------------------------------------------
//   // SEARCH LOCATION
//   // ----------------------------------------------------------

//   const [
//     searchLocation,
//     setSearchLocation,
//   ] = useState(null);


//   // ----------------------------------------------------------
//   // LIVE MAP CENTER
//   // ----------------------------------------------------------

//   const [
//     mapCenter,
//     setMapCenter,
//   ] = useState(DEFAULT_LOCATION);


//   // ----------------------------------------------------------
//   // FINAL PINNED LOCATION
//   // ----------------------------------------------------------

//   const [
//     pinnedLocation,
//     setPinnedLocation,
//   ] = useState(null);


//   // ----------------------------------------------------------
//   // MAP LOCKED STATE
//   // ----------------------------------------------------------

//   const [
//     isMapLocked,
//     setIsMapLocked,
//   ] = useState(false);


//   // ----------------------------------------------------------
//   // PINNING
//   // ----------------------------------------------------------

//   const [
//     isPinning,
//     setIsPinning,
//   ] = useState(false);


//   // ==========================================================
//   // GOOGLE API KEY
//   // ==========================================================

//   const GOOGLE_MAPS_API_KEY =
//     process.env.GOOGLE_MAPS_API_KEY || "AIzaSyC61R7BevXG7uOoAAWEaxSoDYs0ldNwrT4"


//   // ==========================================================
//   // RESTORE SAVED LOCATION
//   // ==========================================================

//   useEffect(() => {

//     try {

//       const savedLocation =
//         localStorage.getItem(
//           "propertylocation"
//         );


//       if (!savedLocation) {
//         return;
//       }


//       const parsedLocation =
//         JSON.parse(savedLocation);


//       if (
//         parsedLocation &&
//         typeof parsedLocation.latitude ===
//           "number" &&
//         typeof parsedLocation.longitude ===
//           "number"
//       ) {

//         const restoredLocation = {

//           lat: parsedLocation.latitude,

//           lng: parsedLocation.longitude,

//         };


//         setMapCenter(
//           restoredLocation
//         );


//         setPinnedLocation(
//           parsedLocation
//         );


//         setFormattedAddress(
//           parsedLocation.formattedAddress ||
//           ""
//         );


//         /*
//           Since this location was already saved,
//           restore the map in LOCKED mode.
//         */

//         setIsMapLocked(true);


//         console.log(
//           "Restored saved property location:",
//           parsedLocation
//         );

//       }

//     } catch (error) {

//       console.error(
//         "Error restoring property location:",
//         error
//       );

//     }

//   }, []);


//   // ==========================================================
//   // SEARCH LOCATION
//   // ==========================================================

//   const handlePlaceChange = (e) => {

//     /*
//       If the map is locked, searching for a
//       new place should first unlock the location.
//     */

//     if (isMapLocked) {

//       setIsMapLocked(false);

//       setPinnedLocation(null);

//     }


//     if (!e?.target?.value) {
//       return;
//     }


//     const place = e.target.value;


//     if (!place.location) {
//       return;
//     }


//     const newLocation = {

//       lat: place.location.lat(),

//       lng: place.location.lng(),

//     };


//     console.log(
//       "Selected search location:",
//       newLocation
//     );


//     setSelectedPlace(
//       place
//     );


//     setFormattedAddress(
//       place.formattedAddress || ""
//     );


//     /*
//       Search is approximate.

//       This only moves the map.
//     */

//     setSearchLocation(
//       newLocation
//     );


//     setMapCenter(
//       newLocation
//     );


//     /*
//       A new search means the old exact
//       property pin is no longer current.
//     */

//     setPinnedLocation(null);

//   };


//   // ==========================================================
//   // MAP MOVED
//   // ==========================================================

//   const handleCameraChanged = (event) => {

//     if (!event?.detail?.center) {
//       return;
//     }


//     const center =
//       event.detail.center;


//     const newCenter = {

//       lat: center.lat,

//       lng: center.lng,

//     };


//     /*
//       Always keep track of the map center.

//       IMPORTANT:

//       We DO NOT clear pinnedLocation here.

//       A saved pin remains valid until the user
//       explicitly chooses "Change Location".
//     */

//     setMapCenter(
//       newCenter
//     );


//     console.log(
//       "Current map center:",
//       newCenter
//     );

//   };


//   // ==========================================================
//   // PIN EXACT LOCATION
//   // ==========================================================

//   const handlePinLocation = async () => {

//     if (
//       isPinning ||
//       isMapLocked
//     ) {
//       return;
//     }


//     try {

//       if (
//         !window.google ||
//         !window.google.maps
//       ) {

//         console.error(
//           "Google Maps is not loaded yet."
//         );

//         return;
//       }


//       setIsPinning(
//         true
//       );


//       /*
//         THIS is the authoritative location.

//         It comes from the center of the map,
//         directly underneath the fixed pin.
//       */

//       const position = {

//         lat: mapCenter.lat,

//         lng: mapCenter.lng,

//       };


//       console.log(
//         "Exact property location:",
//         position
//       );


//       // ------------------------------------------------------
//       // REVERSE GEOCODE
//       // ------------------------------------------------------

//       const geocoder =
//         new window.google.maps.Geocoder();


//       const response =
//         await geocoder.geocode({

//           location: position,

//         });


//       let actualAddress = "";

//       let actualPlaceId = null;


//       if (
//         response?.results?.length > 0
//       ) {

//         actualAddress =
//           response.results[0]
//             .formatted_address || "";


//         actualPlaceId =
//           response.results[0]
//             .place_id || null;

//       }


//       // ------------------------------------------------------
//       // FINAL LOCATION OBJECT
//       // ------------------------------------------------------

//       const finalLocation = {

//         latitude:
//           position.lat,

//         longitude:
//           position.lng,

//         formattedAddress:
//           actualAddress,

//         placeId:
//           actualPlaceId,

//       };


//       console.log(
//         "FINAL PINNED LOCATION:",
//         finalLocation
//       );


//       // ------------------------------------------------------
//       // SAVE TO REACT
//       // ------------------------------------------------------

//       setPinnedLocation(
//         finalLocation
//       );


//       // ------------------------------------------------------
//       // SAVE TO LOCAL STORAGE
//       // ------------------------------------------------------

//       localStorage.setItem(

//         "propertylocation",

//         JSON.stringify(
//           finalLocation
//         )

//       );


//       // ------------------------------------------------------
//       // LOCK MAP
//       // ------------------------------------------------------

//       setIsMapLocked(
//         true
//       );


//       console.log(
//         "Property location saved and map locked."
//       );

//     } catch (error) {

//       console.error(
//         "Error pinning property location:",
//         error
//       );

//     } finally {

//       setIsPinning(
//         false
//       );

//     }

//   };


//   // ==========================================================
//   // UNLOCK / CHANGE LOCATION
//   // ==========================================================

//   const handleChangeLocation = () => {

//     /*
//       Unlock the map so the user can move it again.
//     */

//     setIsMapLocked(
//       false
//     );


//     /*
//       Remove the current pinned React state.

//       The localStorage value is intentionally
//       NOT deleted yet.

//       It will be replaced when the user pins
//       the new location.
//     */

//     setPinnedLocation(
//       null
//     );


//     /*
//       Clear the old search location so the
//       PanMapToSelectedLocation component does
//       not immediately move the map back.
//     */

//     setSearchLocation(
//       null
//     );


//     console.log(
//       "Map unlocked. User can choose a new location."
//     );

//   };


//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (

//     <APIProvider
//       apiKey={
//         GOOGLE_MAPS_API_KEY
//       }
//     >

//       <Maprender>

//         <Geolocationdiv>


//           {/* ==================================================
//               HEADER
//           ================================================== */}

//           <Selectlocationheader>

//             <h4>
//               Select Your Property Location
//             </h4>

//             <p>
//               Search for the general area first,
//               then move the map underneath the pin
//               until the pin is exactly over your
//               property.
//             </p>

//           </Selectlocationheader>


//           {/* ==================================================
//               SEARCH
//           ================================================== */}

//           <SearchTitle>

//             1. Search for your property area

//           </SearchTitle>


//           <SearchContainer>

//             <APILoader
//               apiKey={
//                 GOOGLE_MAPS_API_KEY
//               }

//               solutionChannel={
//                 "GMP_GCC_placepicker_v1"
//               }
//             />


//             <PlacePicker

//               country={[]}

//               placeholder={
//                 "Enter a place to see its address"
//               }

//               onPlaceChange={
//                 handlePlaceChange
//               }

//             />


//             {formattedAddress && (

//               <SearchResult>

//                 <strong>
//                   Search result:
//                 </strong>

//                 <br />

//                 {formattedAddress}

//               </SearchResult>

//             )}

//           </SearchContainer>


//           {/* ==================================================
//               MAP
//           ================================================== */}

//           <SearchTitle>

//             2. Position the exact property location

//           </SearchTitle>


//           <MapContainer>


//             <Map

//               style={{
//                 width: "100%",
//                 height: "100%",
//                 display: "block",
//               }}

//               defaultZoom={13}

//               defaultCenter={
//                 DEFAULT_LOCATION
//               }

//               /*
//                 LOCKED:
//                   No dragging.
//                   No zooming.
//                   No map interaction.

//                 UNLOCKED:
//                   Normal map interaction.
//               */

//               gestureHandling={
//                 isMapLocked
//                   ? "none"
//                   : "greedy"
//               }

//               /*
//                 Disable mouse wheel zoom when locked.
//               */

//               scrollwheel={
//                 !isMapLocked
//               }

//               /*
//                 Disable double-click zoom when locked.
//               */

//               disableDoubleClickZoom={
//                 isMapLocked
//               }

//               /*
//                 Disable keyboard map movement when locked.
//               */

//               keyboardShortcuts={
//                 !isMapLocked
//               }

//               mapTypeId="hybrid"

//               mapId="a99c0ae2ccbc0904"

//               zoomControl={
//                 !isMapLocked
//               }

//               fullscreenControl={
//                 true
//               }

//               disableDefaultUI={
//                 false
//               }

//               onCameraChanged={
//                 handleCameraChanged
//               }

//             >

//               <PanMapToSelectedLocation
//                 location={
//                   searchLocation
//                 }
//               />

//             </Map>


//             {/* =================================================
//                 FIXED PIN
//             ================================================= */}

//             <CenterPinContainer>

//               <CenterPin>
//                 📍
//               </CenterPin>

//               <PinShadow />

//             </CenterPinContainer>


//             {/* =================================================
//                 INSTRUCTION
//             ================================================= */}

//             <PinInstruction>

//               {isMapLocked

//                 ? "🔒 Location locked"

//                 : "Move the map to position the pin"

//               }

//             </PinInstruction>


//           </MapContainer>


//           {/* ==================================================
//               LOCK STATUS
//           ================================================== */}

//           <MapLockStatus
//             locked={
//               isMapLocked
//             }
//           >

//             {isMapLocked ? (

//               <>
//                 🔒
//                 <span>
//                   Property location is locked and saved.
//                 </span>
//               </>

//             ) : (

//               <>
//                 🔓
//                 <span>
//                   Map unlocked — position the pin over the
//                   exact property location.
//                 </span>
//               </>

//             )}

//           </MapLockStatus>


//           {/* ==================================================
//               LIVE COORDINATES
//           ================================================== */}

//           <MapInfo>

//             <CoordinateBox>

//               <div className="label">

//                 Current Latitude

//               </div>

//               <div className="value">

//                 {mapCenter.lat.toFixed(8)}

//               </div>

//             </CoordinateBox>


//             <CoordinateBox>

//               <div className="label">

//                 Current Longitude

//               </div>

//               <div className="value">

//                 {mapCenter.lng.toFixed(8)}

//               </div>

//             </CoordinateBox>

//           </MapInfo>


//           {/* ==================================================
//               PIN BUTTON
//           ================================================== */}

//           <PinButton

//             type="button"

//             onClick={
//               handlePinLocation
//             }

//             disabled={
//               isPinning ||
//               isMapLocked
//             }

//           >

//             {isMapLocked

//               ? "✅ Property location pinned"

//               : isPinning

//                 ? "📍 Finding location..."

//                 : "📍 Pin this property location"

//             }

//           </PinButton>


//           {/* ==================================================
//               CHANGE LOCATION BUTTON
//           ================================================== */}

//           {isMapLocked && (

//             <UnlockButton
//               type="button"
//               onClick={
//                 handleChangeLocation
//               }
//             >

//               🔓 Change / Adjust Location

//             </UnlockButton>

//           )}


//           {/* ==================================================
//               PINNED LOCATION
//           ================================================== */}

//           {pinnedLocation && (

//             <PinnedLocation>

//               <div className="title">

//                 ✅ Property Location Saved

//               </div>


//               <div className="address">

//                 <strong>
//                   Address:
//                 </strong>

//                 <br />

//                 {pinnedLocation
//                   .formattedAddress ||
//                   "Address unavailable"}

//               </div>


//               <div className="coordinates">

//                 <strong>
//                   Latitude:
//                 </strong>{" "}

//                 {pinnedLocation.latitude}

//                 <br />

//                 <strong>
//                   Longitude:
//                 </strong>{" "}

//                 {pinnedLocation.longitude}

//                 <br />

//                 <strong>
//                   Place ID:
//                 </strong>{" "}

//                 {pinnedLocation.placeId ||
//                   "N/A"}

//               </div>

//             </PinnedLocation>

//           )}


//           {/* ==================================================
//               SAVED DRAFT MESSAGE
//           ================================================== */}

//           {pinnedLocation && (

//             <SavedMessage>

//               💾 Location saved. You can go back
//               to the previous step and return here
//               later without losing the pinned
//               location.

//             </SavedMessage>

//           )}


//           {/* ==================================================
//               BACK + NEXT
//           ================================================== */}

//           <Navigation>


//             {/* ------------------------------------------------
//                 BACK
//             ------------------------------------------------ */}

//             <BackButton
//               to="/agency/properties/list-property/step10"
//             >

//               ← Back

//             </BackButton>


//             {/* ------------------------------------------------
//                 NEXT
//             ------------------------------------------------ */}

//             <NextButton
//               to="/agency/properties/list-property/step12"
//               disabled={
//                 !pinnedLocation
//               }
//             >

//               Next Step →

//             </NextButton>


//           </Navigation>


//         </Geolocationdiv>

//       </Maprender>

//     </APIProvider>

//   );

// };


// export default RenderGoogleMap;