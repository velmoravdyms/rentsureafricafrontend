

// import React, { useState, useContext, useRef, useCallback, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled from '@emotion/styled';
// import { APIProvider, Map, MapCameraChangedEvent, useMap, Pin, AdvancedMarker, MapMouseEvent } from "@vis.gl/react-google-maps";
// import { MarkerClusterer } from "@googlemaps/markerclusterer";
// import type { Marker } from "@googlemaps/markerclusterer";

// import { Circle } from "./circle";

// // Top Header Bar
// const TopNavbar = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem 2.5rem;
//   width: 100%;
//   box-sizing: border-box;
// `;

// // Navigation Buttons Container
// const AuthNavGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// // Base Styled Link Buttons
// const NavAuthLink = styled(Link)`
//   padding: 0.6rem 1.4rem;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 0.95rem;
//   text-decoration: none;
//   color: white;
//   transition: opacity 0.2s ease-in-out, transform 0.1s ease-in-out;

//   &:hover {
//     opacity: 0.9;
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `;

// const SignInButton = styled(NavAuthLink)`
//   background-color: #28a745; /* Green */
// `;

// const SignUpButton = styled(NavAuthLink)`
//   background-color: #0056b3; /* Blue */
// `;

// const Rendermap = styled.div`
//   width: 90vw;
//   height: 80vh;
//   margin: 1rem auto;
// `;

// type Poi = { key: string, location: google.maps.LatLngLiteral }

// const locations: Poi[] = [
//   { "key": "location_1", "location": { "lat": -1.215449, "lng": 36.713322 } },
//   { "key": "location_2", "location": { "lat": -1.186124, "lng": 36.787967 } },
//   { "key": "location_3", "location": { "lat": -1.182669, "lng": 36.709271 } },
//   { "key": "location_4", "location": { "lat": -1.255317, "lng": 36.765456 } },
//   { "key": "location_5", "location": { "lat": -1.214571, "lng": 36.726125 } },
//   { "key": "location_6", "location": { "lat": -1.197829, "lng": 36.77232 } },
//   { "key": "location_7", "location": { "lat": -1.176802, "lng": 36.743083 } },
//   { "key": "location_8", "location": { "lat": -1.184327, "lng": 36.734378 } },
//   { "key": "location_9", "location": { "lat": -1.168402, "lng": 36.77757 } },
//   { "key": "location_10", "location": { "lat": -1.208586, "lng": 36.714377 } },
//   { "key": "location_11", "location": { "lat": -1.214216, "lng": 36.709459 } },
//   { "key": "location_12", "location": { "lat": -1.239433, "lng": 36.764962 } },
//   { "key": "location_13", "location": { "lat": -1.196724, "lng": 36.747509 } },
//   { "key": "location_14", "location": { "lat": -1.21947, "lng": 36.749931 } },
//   { "key": "location_15", "location": { "lat": -1.187235, "lng": 36.764809 } },
//   { "key": "EasySmartLiving GMBH", "location": { "lat": -1.2130818115522617, "lng": 36.755292174770545 } }
// ];

// const PoiMarkers = (prop: { pois: Poi[] }) => {
//   const map = useMap();
//   const [markers, setMarkers] = useState<{ [key: string]: Marker }>({})
//   const clusterer = useRef<MarkerClusterer | null>(null)
//   const [circleCenter, setCircleCenter] = useState<google.maps.LatLng | null>(null)

//   useEffect(() => {
//     if (!map) return;
//     if (!clusterer.current) {
//       clusterer.current = new MarkerClusterer({ map });
//     }
//   }, [map]);

//   useEffect(() => {
//     clusterer.current?.clearMarkers();
//     clusterer.current?.addMarkers(Object.values(markers))
//   }, [markers])

//   const setMarkerRef = (marker: Marker | null, key: string) => {
//     if (!marker && !markers[key]) return;
//     if (marker && markers[key]) return;

//     setMarkers(prev => {
//       if (marker) {
//         return { ...prev, [key]: marker };
//       } else {
//         const newMarkers = { ...prev };
//         delete newMarkers[key];
//         return newMarkers;
//       }
//     })
//   }

//   const handleMarkerClicked = useCallback((ev: google.maps.MapMouseEvent) => {
//     if (!map) return;
//     if (!ev.latLng) return;

//     map.panTo(ev.latLng);
//     setCircleCenter(ev.latLng)
//   }, [map])

//   return (
//     <>
//       <Circle
//         radius={1000}
//         center={circleCenter}
//         strokeColor={'#0c4cb3'}
//         strokeOpacity={1}
//         strokeWeight={3}
//         fillColor={'#3b82f6'}
//         fillOpacity={0.3}
//       />

//       {prop.pois.map((poi: Poi) => (
//         <AdvancedMarker
//           key={poi.key}
//           position={poi.location}
//           ref={marker => { setMarkerRef(marker, poi.key) }}
//           onClick={handleMarkerClicked}
//           clickable={true}
//         >
//           <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
//         </AdvancedMarker>
//       ))}
//     </>
//   )
// }

// const SetPoiMarkers: React.FC<{}> = () => {

//   const handleWholemapClick = useCallback((event: MapMouseEvent) => {
//     if (!Map) return;
//     console.log("The Marker :", event.domEvent, " as String Was just Clicked")
//   }, [])

//   return (
//     <>
//       <TopNavbar>
//         <AuthNavGroup>
//           <SignInButton to="/signin">SIGN IN</SignInButton>
//           <SignUpButton to="/signup">SIGN UP</SignUpButton>
//         </AuthNavGroup>
//       </TopNavbar>

//       <APIProvider apiKey="AIzaSyDh24myqfCyNOFptpEBjwBOt0BNDoNipv8" onLoad={() => console.log("GOOGLE MAPS JUST GOT LOADED")}>
//         <Rendermap>
//           <Map
//             style={{ height: "100%", width: "100%" }}
//             defaultCenter={{ lng: 36.7523, lat: -1.2124525 }}
//             defaultZoom={13}
//             disableDefaultUI={true}
//             mapId="a99c0ae2ccbc0904"
//             zoomControl={true}
//             fullscreenControl={true}
//             mapTypeId="hybrid"
//             onCameraChanged={(evt: MapCameraChangedEvent) => {
//               console.log("Camera Changed : ", evt.detail.center, "Zoom Changed a Zoom Event :", evt.detail.zoom)
//             }}
//             onClick={handleWholemapClick}
//           >
//             <PoiMarkers pois={locations} />
//           </Map>
//         </Rendermap>
//       </APIProvider>
//     </>
//   )
// };

// export default SetPoiMarkers;






























































// //@ts-nocheck
// import React, { useState, useRef, useCallback, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled from "@emotion/styled";
// import {
//   APIProvider,
//   Map,
//   useMap,
//   Pin,
//   AdvancedMarker,
//   MapMouseEvent,
//   MapCameraChangedEvent,
// } from "@vis.gl/react-google-maps";
// import {
//   APILoader,
//   PlacePicker,
// } from "@googlemaps/extended-component-library/react";

// import { MarkerClusterer } from "@googlemaps/markerclusterer";
// import type { Marker } from "@googlemaps/markerclusterer";

// import { Circle } from "./circle";

// // ============================================================
// // TYPES & INTERFACES
// // ============================================================

// export interface PropertyListing {
//   id: string;
//   title: string;
//   price?: string | number;
//   latitude: number;
//   longitude: number;
//   formattedAddress?: string;
//   availableUnits?: number;
//   totalUnits?: number;
//   images?: string[];
// }

// // ============================================================
// // STYLED COMPONENTS
// // ============================================================

// const PageContainer = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background-color: #f8f9fa;
// `;

// const TopNavbar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem 2.5rem;
//   width: 100%;
//   box-sizing: border-box;
//   background: #ffffff;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

//   @media (max-width: 768px) {
//     padding: 1rem;
//     flex-direction: column;
//     gap: 0.8rem;
//   }
// `;

// const BrandLogo = styled(Link)`
//   font-size: 1.35rem;
//   font-weight: 800;
//   color: #1a1a1a;
//   text-decoration: none;
//   letter-spacing: -0.5px;

//   span {
//     color: #0056b3;
//   }
// `;

// const AuthNavGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const NavAuthLink = styled(Link)`
//   padding: 0.6rem 1.4rem;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 0.95rem;
//   text-decoration: none;
//   color: white;
//   transition: opacity 0.2s ease-in-out, transform 0.1s ease-in-out;

//   &:hover {
//     opacity: 0.9;
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `;

// const SignInButton = styled(NavAuthLink)`
//   background-color: #28a745;
// `;

// const SignUpButton = styled(NavAuthLink)`
//   background-color: #0056b3;
// `;

// const MainContent = styled.div`
//   position: relative;
//   width: 92vw;
//   height: 82vh;
//   margin: 1rem auto;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
// `;

// const SearchOverlay = styled.div`
//   position: absolute;
//   top: 16px;
//   left: 16px;
//   z-index: 10;
//   width: 360px;
//   max-width: calc(100% - 32px);
//   background: #ffffff;
//   padding: 10px;
//   border-radius: 10px;
//   box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);

//   gmpx-place-picker {
//     width: 100%;
//     display: block;
//   }
// `;

// const Rendermap = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const LoadingOverlay = styled.div`
//   position: absolute;
//   bottom: 20px;
//   right: 20px;
//   z-index: 10;
//   background: rgba(255, 255, 255, 0.92);
//   padding: 8px 16px;
//   border-radius: 20px;
//   font-size: 0.85rem;
//   font-weight: 600;
//   color: #333;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
// `;

// // ============================================================
// // MAP PAN HELPER COMPONENT
// // ============================================================

// const PanMapToSelectedLocation: React.FC<{
//   location: google.maps.LatLngLiteral | null;
// }> = ({ location }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map || !location) return;
//     map.panTo(location);
//     map.setZoom(14);
//   }, [map, location]);

//   return null;
// };


// const PropertyMarkers: React.FC<{ properties: PropertyListing[] }> = ({
//   properties,
// }) => {
//   const map = useMap();
//   const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
//   const clusterer = useRef(null);
//   const [circleCenter, setCircleCenter] =
//     useState(null);

//   useEffect(() => {
//     if (!map) return;
//     if (!clusterer.current) {
//       clusterer.current = new MarkerClusterer({ map });
//     }
//   }, [map]);

//   useEffect(() => {
//     clusterer.current?.clearMarkers();
//     clusterer.current?.addMarkers(Object.values(markers));
//   }, [markers]);

//   const setMarkerRef = (marker: Marker | null, key: string) => {
//     if (!marker && !markers[key]) return;
//     if (marker && markers[key]) return;

//     setMarkers((prev) => {
//       if (marker) {
//         return { ...prev, [key]: marker };
//       } else {
//         const newMarkers = { ...prev };
//         delete newMarkers[key];
//         return newMarkers;
//       }
//     });
//   };

//   const handleMarkerClicked = useCallback(
//     (ev: google.maps.MapMouseEvent) => {
//       if (!map || !ev.latLng) return;
//       const latLng = { lat: ev.latLng.lat(), lng: ev.latLng.lng() };
//       map.panTo(latLng);
//       setCircleCenter(latLng);
//     },
//     [map]
//   );

    
//   return (
//       <>
//         {properties.map((prop) => (
//           setMarkerRef(marker, prop.id)}
//             onClick={handleMarkerClicked}
//             clickable={true}
//           >
            
          
//         ))}
      
//     );



// };

// // ============================================================
// // MAIN PUBLIC MAP MARKETPLACE COMPONENT
// // ============================================================

// const SetPoiMarkers: React.FC = () => {
//   const GOOGLE_MAPS_API_KEY =
//     process.env.GOOGLE_MAPS_API_KEY ||
//     "AIzaSyDh24myqfCyNOFptpEBjwBOt0BNDoNipv8";

//   const [properties, setProperties] = useState([]);
//   const [searchLocation, setSearchLocation] =
//     useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // ==========================================================
//   // FETCH DATABASE PROPERTIES
//   // ==========================================================
//   useEffect(() => {
//     const fetchPropertiesFromDB = async () => {
//       setIsLoading(true);
//       try {
//         // REPLACE THIS URL WITH YOUR ACTUAL API ENDPOINT:
//         // const response = await fetch('/api/properties/public');
//         // const data = await response.json();

//         // SIMULATED DATABASE FETCH:
//         const dbRecords: PropertyListing[] = [
//           {
//             id: "prop_1",
//             title: "Kilimani Heights Apartment",
//             latitude: -1.2884,
//             longitude: 36.7822,
//             price: "KES 45,000",
//             formattedAddress: "Kilimani, Nairobi",
//           },
//           {
//             id: "prop_2",
//             title: "Westlands Luxury Suites",
//             latitude: -1.2676,
//             longitude: 36.8121,
//             price: "KES 60,000",
//             formattedAddress: "Westlands, Nairobi",
//           },
//           {
//             id: "prop_3",
//             title: "Kericho Town Center Plaza",
//             latitude: -0.3689,
//             longitude: 35.2863,
//             price: "KES 25,000",
//             formattedAddress: "Kericho, Kenya",
//           },
//         ];

//         // Also merge local step 11 property if present for live testing
//         const savedDraft = localStorage.getItem("propertylocation");
//         if (savedDraft) {
//           try {
//             const parsedDraft = JSON.parse(savedDraft);
//             if (parsedDraft.latitude && parsedDraft.longitude) {
//               dbRecords.push({
//                 id: "draft_pinned_property",
//                 title: "Newly Pinned Property (Draft)",
//                 latitude: parsedDraft.latitude,
//                 longitude: parsedDraft.longitude,
//                 formattedAddress: parsedDraft.formattedAddress || "Pinned Location",
//                 price: "KES --",
//               });
//             }
//           } catch (e) {
//             console.error("Draft location parse error:", e);
//           }
//         }

//         setProperties(dbRecords);
//       } catch (error) {
//         console.error("Failed to fetch property records:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPropertiesFromDB();
//   }, []);

//   // ==========================================================
//   // PLACE AUTOCOMPLETE HANDLER
//   // ==========================================================
//   const handlePlaceChange = (e: any) => {
//     if (!e?.target?.value) return;

//     const place = e.target.value;
//     if (!place.location) return;

//     const newLocation = {
//       lat: place.location.lat(),
//       lng: place.location.lng(),
//     };

//     console.log("Navigating public map to:", newLocation);
//     setSearchLocation(newLocation);
//   };

//   const handleWholemapClick = useCallback((event: MapMouseEvent) => {
//     console.log("Map background clicked:", event.detail.latLng);
//   }, []);

//   return (
    

//       {/* TOP BAR NAVIGATION */}
      
        
//           RentSureMarketplace
        

        
//           SIGN IN
//           SIGN UP
        
      

//       {/* MAP & SEARCH CONTAINER */}
      
//          console.log("Google Maps loaded successfully")}
//         >
//           {/* SEARCH AUTOCOMPLETE OVERLAY */}
          
            
            
          

          
//              {
//                 console.log("Public Camera Center:", evt.detail.center);
//               }}
//               onClick={handleWholemapClick}
//             >
//               {/* PAN HELPER FOR AUTOCOMPLETE SEARCH */}
              

//               {/* DYNAMIC DATABASE MARKERS */}
              
            
          

//           {isLoading && Loading properties...}
        
      
    
//   );
// };

// export default SetPoiMarkers;



















































//@ts-nocheck
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import {
  APIProvider,
  Map,
  useMap,
  Pin,
  AdvancedMarker,
  MapMouseEvent,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import {
  APILoader,
  PlacePicker,
} from "@googlemaps/extended-component-library/react";

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";

import { Circle } from "./circle";

/* ============================================================
   TYPES
============================================================ */

export interface PropertyListing {
  id: string;
  title: string;
  price?: string | number;
  latitude: number;
  longitude: number;
  formattedAddress?: string;
  availableUnits?: number;
  totalUnits?: number;
  images?: string[];
}

/* ============================================================
   STYLES
============================================================ */

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

const TopNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const BrandLogo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
  color: #111;

  span {
    color: #0056b3;
  }
`;

const AuthNavGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  padding: 0.65rem 1.4rem;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-weight: 600;
`;

const SignInButton = styled(NavButton)`
  background: #28a745;
`;

const SignUpButton = styled(NavButton)`
  background: #0056b3;
`;

const MainContent = styled.div`
  width: 92vw;
  height: 82vh;
  margin: 1rem auto;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const SearchOverlay = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 360px;
  max-width: calc(100% - 32px);
  background: white;
  padding: 10px;
  border-radius: 10px;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  gmpx-place-picker {
    width: 100%;
    display: block;
  }
`;

const Rendermap = styled.div`
  width: 100%;
  height: 100%;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  bottom: 18px;
  right: 18px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 16px;
  border-radius: 20px;
  z-index: 20;
  font-weight: 600;
`;

/* ============================================================
   PAN TO SEARCH RESULT
============================================================ */

const PanMapToSelectedLocation = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !location) return;

    map.panTo(location);
    map.setZoom(14);
  }, [map, location]);

  return null;
};

/* ============================================================
   PROPERTY MARKERS
============================================================ */


const PropertyMarkers = ({ properties }) => {
  const map = useMap();

  const clusterer = useRef<MarkerClusterer | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});

  const [circleCenter, setCircleCenter] = useState(null);

  // Create clusterer once
  useEffect(() => {
    if (!map || clusterer.current) return;

    clusterer.current = new MarkerClusterer({ map });
  }, [map]);

  // Update clusters whenever markers change
  const refreshClusters = () => {
    if (!clusterer.current) return;

    clusterer.current.clearMarkers();
    clusterer.current.addMarkers(Object.values(markersRef.current));
  };

  const setMarkerRef = useCallback((marker: Marker | null, key: string) => {
    if (marker) {
      // Don't update if it's the same marker
      if (markersRef.current[key] === marker) return;

      markersRef.current[key] = marker;
    } else {
      delete markersRef.current[key];
    }

    refreshClusters();
  }, []);

  const handleMarkerClicked = useCallback(
    (ev: google.maps.MapMouseEvent) => {
      if (!map || !ev.latLng) return;

      const center = {
        lat: ev.latLng.lat(),
        lng: ev.latLng.lng(),
      };

      map.panTo(center);
      setCircleCenter(center);
    },
    [map]
  );

  return (
    <>
      {properties.map((property) => (
        <AdvancedMarker
          key={property.id}
          position={{
            lat: property.latitude,
            lng: property.longitude,
          }}
          ref={(marker) => setMarkerRef(marker, property.id)}
          onClick={handleMarkerClicked}
          clickable
        >
          <Pin
            // background="#0056b3"
            background="yellow"
            borderColor="#003f8a"
            // glyphColor="#fff"
            glyphColor="black"
            scale={1.4}
            />
        </AdvancedMarker>
      ))}

      {circleCenter && (
        <Circle
          center={circleCenter}
          radius={250}
          strokeColor="#0056b3"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0056b3"
          fillOpacity={0.2}
        />
      )}
    </>
  );
};





/* ============================================================
   MAIN COMPONENT
============================================================ */

const SetPoiMarkers = () => {
  const GOOGLE_MAPS_API_KEY =
    process.env.GOOGLE_MAPS_API_KEY ||
    "AIzaSyC61R7BevXG7uOoAAWEaxSoDYs0ldNwrT4";

  const [properties, setProperties] = useState([]);
  const [searchLocation, setSearchLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // /* Fetch properties */
  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     setIsLoading(true);

  //     try {
  //       const dbRecords = [
  //         {
  //           id: "prop1",
  //           title: "Kilimani Heights",
  //           latitude: -1.2884,
  //           longitude: 36.7822,
  //           price: "KES 45,000",
  //           formattedAddress: "Kilimani",
  //         },
  //         {
  //           id: "prop2",
  //           title: "Westlands Suites",
  //           latitude: -1.2676,
  //           longitude: 36.8121,
  //           price: "KES 60,000",
  //           formattedAddress: "Westlands",
  //         },
  //         {
  //           id: "prop3",
  //           title: "Kericho Plaza",
  //           latitude: -0.3689,
  //           longitude: 35.2863,
  //           price: "KES 25,000",
  //           formattedAddress: "Kericho",
  //         },
  //       ];

  //       const saved = localStorage.getItem("propertylocation");

  //       if (saved) {
  //         const draft = JSON.parse(saved);

  //         if (draft.latitude && draft.longitude) {
  //           dbRecords.push({
  //             id: "draft",
  //             title: "Pinned Draft Property",
  //             latitude: draft.latitude,
  //             longitude: draft.longitude,
  //             formattedAddress: draft.formattedAddress,
  //             price: "KES --",
  //           });
  //         }
  //       }

  //       setProperties(dbRecords);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProperties();
  // }, []);




  /* Fetch properties from Backend DB + Local Drafts */
  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);

      try {
        // 1. Fetch properties from your API endpoint
        const response = await fetch("/api/properties"); // Replace with your actual endpoint or axios call
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // 2. Map database fields to ensure standard property structure and numeric coordinates
        const dbRecords = data.map((item) => ({
          id: item.id || item._id,
          title: item.title || item.propertyName || "Untitled Property",
          latitude: parseFloat(item.latitude || item.lat),
          longitude: parseFloat(item.longitude || item.lng),
          price: item.price ? `KES ${Number(item.price).toLocaleString()}` : "KES --",
          formattedAddress: item.formattedAddress || item.address || "",
        }));

        // 3. Preserve the localStorage draft overlay from the PMS pinning wizard
        const saved = localStorage.getItem("propertylocation");

        if (saved) {
          try {
            const draft = JSON.parse(saved);

            if (draft.latitude && draft.longitude) {
              dbRecords.push({
                id: "draft_pinned_property",
                title: "Newly Pinned Property (Draft)",
                latitude: parseFloat(draft.latitude),
                longitude: parseFloat(draft.longitude),
                formattedAddress: draft.formattedAddress || "Pinned Location",
                price: "KES --",
              });
            }
          } catch (e) {
            console.error("Error parsing local draft property location:", e);
          }
        }

        setProperties(dbRecords);
      } catch (err) {
        console.error("Failed to load properties from DB:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  /* Place Picker */
  const handlePlaceChange = (e) => {
    const place = e.target?.value;

    if (!place?.location) return;

    setSearchLocation({
      lat: place.location.lat(),
      lng: place.location.lng(),
    });
  };

  const handleWholeMapClick = useCallback((event) => {
    console.log("Map clicked:", event.detail.latLng);
  }, []);

  return (
    <PageContainer>
      <TopNavbar>
        <BrandLogo to="/">
          Rent<span>Sure</span> Marketplace
        </BrandLogo>

        <AuthNavGroup>
          <SignInButton to="/signin">SIGN IN</SignInButton>
          <SignUpButton to="/signup">SIGN UP</SignUpButton>
        </AuthNavGroup>
      </TopNavbar>

      <MainContent>
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
          <APILoader apiKey={GOOGLE_MAPS_API_KEY}>
            <SearchOverlay>
              <PlacePicker onPlaceChange={handlePlaceChange} />
            </SearchOverlay>
          </APILoader>

          <Rendermap>
            <Map
              defaultZoom={7}
              defaultCenter={{ lat: -1.286389, lng: 36.817223 }}
              mapId="RENTSURE_PUBLIC_MAP"
              gestureHandling="greedy"
              disableDefaultUI={false}
              onCameraChanged={(evt) =>
                console.log("Camera:", evt.detail.center)
              }
              onClick={handleWholeMapClick}
              mapTypeId={"hybrid"}
            >
              <PanMapToSelectedLocation location={searchLocation} />

              <PropertyMarkers properties={properties} />
            </Map>
          </Rendermap>

          {isLoading && (
            <LoadingOverlay>Loading properties...</LoadingOverlay>
          )}
        </APIProvider>
      </MainContent>
    </PageContainer>
  );
};

export default SetPoiMarkers;