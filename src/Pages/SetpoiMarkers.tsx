    // import React,{useState,useContext,useRef,useCallback, useEffect} from "react";


    // import {Link} from "react-router-dom";

    // import styled from '@emotion/styled';

    // import { APIProvider,Map,MapCameraChangedEvent,useMap,Pin,AdvancedMarker, MapMouseEvent } from "@vis.gl/react-google-maps";
    // import { MarkerClusterer } from "@googlemaps/markerclusterer";
    // import type { Marker } from "@googlemaps/markerclusterer";


    // import {Circle} from "./circle";


    // // const Rendermap=styled.div`

    // // background-color:purple;

    // // width:80%;
    // // height:500px;
    // // // padding:2rem;
    // // margin: 2rem  auto ;
    // // color:white;
    // // text-align:center;
    // // font-size:1rem;

    // // `


    // const Rendermap = styled.div`
    // width: 90vw;
    // height: 90vh;
    // margin: 2rem auto;

    // `;

    // type Poi ={ key: string, location: google.maps.LatLngLiteral }


    // const locations: Poi[] = [

    // {"key": "location_1", "location": {"lat": -1.215449, "lng": 36.713322}},
    // {"key": "location_2", "location": {"lat": -1.186124, "lng": 36.787967}},
    // {"key": "location_3", "location": {"lat": -1.182669, "lng": 36.709271}},
    // {"key": "location_4", "location": {"lat": -1.255317, "lng": 36.765456}},
    // {"key": "location_5", "location": {"lat": -1.214571, "lng": 36.726125}},
    // {"key": "location_6", "location": {"lat": -1.197829, "lng": 36.77232}},
    // {"key": "location_7", "location": {"lat": -1.176802, "lng": 36.743083}},
    // {"key": "location_8", "location": {"lat": -1.184327, "lng": 36.734378}},
    // {"key": "location_9", "location": {"lat": -1.168402, "lng": 36.77757}},
    // {"key": "location_10", "location": {"lat": -1.208586, "lng": 36.714377}},
    // {"key": "location_11", "location": {"lat": -1.214216, "lng": 36.709459}},
    // {"key": "location_12", "location": {"lat": -1.239433, "lng": 36.764962}},
    // {"key": "location_13", "location": {"lat": -1.196724, "lng": 36.747509}},
    // {"key": "location_14", "location": {"lat": -1.21947, "lng": 36.749931}},
    // {"key": "location_15", "location": {"lat": -1.187235, "lng": 36.764809}},
    // {"key": "EasySmartLiving GMBH", "location":{"lat": -1.2130818115522617,"lng":36.755292174770545}}


    // ];


    // const PoiMarkers=(prop:{pois:Poi[]})=>{

    //     const map=useMap();
    //     const [markers,setMarkers]=useState<{[key:string]: Marker}>({})
    //     const clusterer=useRef<MarkerClusterer | null>(null)
    //     const [circleCenter,setCircleCenter]=useState<google.maps.LatLng|null>(null)


    //     // Initilize cluster if the map has changed
    //     useEffect(()=>{
    //         if(!map) return;
    //         if(!clusterer.current){
    //             clusterer.current=new MarkerClusterer({map});
    //         }
    //     },[map]);

    //     // Update markers, if the markers array has changed
    //     useEffect(()=>{
    //         clusterer.current?.clearMarkers();
    //         clusterer.current?.addMarkers(Object.values(markers))
    //     },[markers])


    //     //s
    //     const setMarkerRef=(marker:Marker | null,key:string)=>{
    //         if(!marker && !markers[key]) return;
    //         if(marker && markers[key]) return;

    //         setMarkers(prev=>{
    //             if(marker){
    //                 return {...prev,[key]:marker};
    //             }
    //             else{
    //                 const newMarkers={...prev};
    //                 delete newMarkers[key];
    //                 return newMarkers;
    //             }
    //         })
    //     }

    //     const handleMarkerClicked=useCallback((ev:google.maps.MapMouseEvent)=>{
    //         if(!map) return;
    //         if(!ev.latLng)return;  

    //         console.log("The Marker :", ev.latLng.toString() ," as String Was just Clicked")
    //         console.log("The Marker :", ev.latLng ," Just Plain Was just Clicked")
            
    //         map.panTo(ev.latLng);

    //         setCircleCenter(ev.latLng)
    //         // map.moveCamera({
    //         //     center: ev.latLng,
    //         //     duration: 3000, // 3 seconds
    //         // });
            

    //     },[])


    //     return (
    //         <>

    //             <Circle
    //                 radius={1000}
    //                 center={circleCenter}
    //                 strokeColor={'#0c4cb3'}
    //                 strokeOpacity={1}
    //                 strokeWeight={3}
    //                 fillColor={'#3b82f6'}
    //                 fillOpacity={0.3}
    //             />

    //             {prop.pois.map( (poi:Poi) =>(
    //                 <AdvancedMarker
    //                     key={poi.key}
    //                     position={poi.location}
    //                     ref={marker=>{setMarkerRef(marker,poi.key)}}
    //                     onClick={handleMarkerClicked}
    //                     clickable={true}
                        
    //                     >
                    
    //                     <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'}/>
                    
    //                 </AdvancedMarker>
    //             ))
    //             }
                
    //         </>
    //     )

    // }






    // const setPoiMarkers:React.FC<{}> =({}) => { 

    //     const handleWholemapClick=useCallback((event:MapMouseEvent)=>{
    //         if(!Map) return;
    //         // if(!event.detaklil.latLng)return;  


    //         console.log("The Marker :", event.domEvent ," as String Was just Clicked")
            

    //         // console.log("The Marker :", event.detail.latLng.toString() ," as String Was just Clicked")
    //         // console.log("The Marker :", event.latLng ," Just Plain Was just Clicked")
            
    //         // Map.panTo(ev.latLng);

    //         // setCircleCenter(ev.latLng)
    //         // // map.moveCamera({
    //         //     center: ev.latLng,
    //         //     duration: 3000, // 3 seconds
    //         // });
            

    //     },[])


    //     return(
    //         <APIProvider apiKey="AIzaSyDh24myqfCyNOFptpEBjwBOt0BNDoNipv8" onLoad={()=> console.log("GOOGLE MAPS JUST GOT LOADED")} >
    //             <Rendermap>
    //                 <Map 
    //                     style={{ height:"100%", width:"100%"}}
    //                     defaultCenter={{lng:36.7523,lat:-1.2124525}}
    //                     defaultZoom={13}
    //                     disableDefaultUI={true}
    //                     mapId="a99c0ae2ccbc0904"                    
    //                     zoomControl={true}
    //                     fullscreenControl={true}
    //                     // gestureHandling="greedy"
    //                     mapTypeId="hybrid"
    //                     onCameraChanged={(evt:MapCameraChangedEvent)=>{
    //                         console.log("Camera Changed : ", evt.detail.center, "Zoom Changed a Zoom Event :", evt.detail.zoom )
    //                     }}
    //                     onClick={handleWholemapClick}
    //                 >
                    
    //                     <PoiMarkers pois={locations} />

    //                 </Map>
    //             </Rendermap>

    //         </APIProvider>

    //     )

    // };


    // export default setPoiMarkers; 



























































































    import React, { useState, useContext, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import { APIProvider, Map, MapCameraChangedEvent, useMap, Pin, AdvancedMarker, MapMouseEvent } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";

import { Circle } from "./circle";

// Top Header Bar
const TopNavbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  width: 100%;
  box-sizing: border-box;
`;

// Navigation Buttons Container
const AuthNavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Base Styled Link Buttons
const NavAuthLink = styled(Link)`
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: white;
  transition: opacity 0.2s ease-in-out, transform 0.1s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SignInButton = styled(NavAuthLink)`
  background-color: #28a745; /* Green */
`;

const SignUpButton = styled(NavAuthLink)`
  background-color: #0056b3; /* Blue */
`;

const Rendermap = styled.div`
  width: 90vw;
  height: 80vh;
  margin: 1rem auto;
`;

type Poi = { key: string, location: google.maps.LatLngLiteral }

const locations: Poi[] = [
  { "key": "location_1", "location": { "lat": -1.215449, "lng": 36.713322 } },
  { "key": "location_2", "location": { "lat": -1.186124, "lng": 36.787967 } },
  { "key": "location_3", "location": { "lat": -1.182669, "lng": 36.709271 } },
  { "key": "location_4", "location": { "lat": -1.255317, "lng": 36.765456 } },
  { "key": "location_5", "location": { "lat": -1.214571, "lng": 36.726125 } },
  { "key": "location_6", "location": { "lat": -1.197829, "lng": 36.77232 } },
  { "key": "location_7", "location": { "lat": -1.176802, "lng": 36.743083 } },
  { "key": "location_8", "location": { "lat": -1.184327, "lng": 36.734378 } },
  { "key": "location_9", "location": { "lat": -1.168402, "lng": 36.77757 } },
  { "key": "location_10", "location": { "lat": -1.208586, "lng": 36.714377 } },
  { "key": "location_11", "location": { "lat": -1.214216, "lng": 36.709459 } },
  { "key": "location_12", "location": { "lat": -1.239433, "lng": 36.764962 } },
  { "key": "location_13", "location": { "lat": -1.196724, "lng": 36.747509 } },
  { "key": "location_14", "location": { "lat": -1.21947, "lng": 36.749931 } },
  { "key": "location_15", "location": { "lat": -1.187235, "lng": 36.764809 } },
  { "key": "EasySmartLiving GMBH", "location": { "lat": -1.2130818115522617, "lng": 36.755292174770545 } }
];

const PoiMarkers = (prop: { pois: Poi[] }) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({})
  const clusterer = useRef<MarkerClusterer | null>(null)
  const [circleCenter, setCircleCenter] = useState<google.maps.LatLng | null>(null)

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers))
  }, [markers])

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (!marker && !markers[key]) return;
    if (marker && markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    })
  }

  const handleMarkerClicked = useCallback((ev: google.maps.MapMouseEvent) => {
    if (!map) return;
    if (!ev.latLng) return;

    map.panTo(ev.latLng);
    setCircleCenter(ev.latLng)
  }, [map])

  return (
    <>
      <Circle
        radius={1000}
        center={circleCenter}
        strokeColor={'#0c4cb3'}
        strokeOpacity={1}
        strokeWeight={3}
        fillColor={'#3b82f6'}
        fillOpacity={0.3}
      />

      {prop.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={marker => { setMarkerRef(marker, poi.key) }}
          onClick={handleMarkerClicked}
          clickable={true}
        >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  )
}

const SetPoiMarkers: React.FC<{}> = () => {

  const handleWholemapClick = useCallback((event: MapMouseEvent) => {
    if (!Map) return;
    console.log("The Marker :", event.domEvent, " as String Was just Clicked")
  }, [])

  return (
    <>
      <TopNavbar>
        <AuthNavGroup>
          <SignInButton to="/signin">SIGN IN</SignInButton>
          <SignUpButton to="/signup">SIGN UP</SignUpButton>
        </AuthNavGroup>
      </TopNavbar>

      <APIProvider apiKey="AIzaSyDh24myqfCyNOFptpEBjwBOt0BNDoNipv8" onLoad={() => console.log("GOOGLE MAPS JUST GOT LOADED")}>
        <Rendermap>
          <Map
            style={{ height: "100%", width: "100%" }}
            defaultCenter={{ lng: 36.7523, lat: -1.2124525 }}
            defaultZoom={13}
            disableDefaultUI={true}
            mapId="a99c0ae2ccbc0904"
            zoomControl={true}
            fullscreenControl={true}
            mapTypeId="hybrid"
            onCameraChanged={(evt: MapCameraChangedEvent) => {
              console.log("Camera Changed : ", evt.detail.center, "Zoom Changed a Zoom Event :", evt.detail.zoom)
            }}
            onClick={handleWholemapClick}
          >
            <PoiMarkers pois={locations} />
          </Map>
        </Rendermap>
      </APIProvider>
    </>
  )
};

export default SetPoiMarkers;