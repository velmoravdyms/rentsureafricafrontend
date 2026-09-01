//@ts-nocheck


import React,{useState,useRef,useContext} from 'react';

import { Link,useLocation } from 'react-router-dom';

import styled from "@emotion/styled";


import { APIProvider,Map } from '@vis.gl/react-google-maps';

// import {APILoader, PlacePicker} from '@googlemaps/extended-component-library/react';


const Maprender=styled.div`

// background-color:purple;

width:500px;
height:500px;
padding:2rem;
margin: 0.1rem  auto;
color:white;
text-align:center;
font-size:1rem;
`



const Geolocationdiv=styled.div`
background-color:pink;
width:100%;
margin:0.5rem;

`



const RenderGoogleMap=()=>{

    const handleCameraChanged=(/** @type {any} */ center,/** @type {any} */ zoom)=>{
        // if(ev && ev.detail){
        //     console.log('Camera Changed  : ', ev.detail.center, "Just Zooomed  : ", ev.detail.zoom);
        // }

            console.log('Camera Changed  : ', center, "Just Zooomed  : ", zoom);
        
    }


    const location = useLocation();
    console.log("Current Route:", location.pathname);
  




      const [formattedAddress, setFormattedAddress] = React.useState('');
      
      const handlePlaceChange = (e) => {
        if(e.target.value){
          console.log("here is the formattedAddress  " , e.target.value.formattedAddress)
          console.log("here is the location " , e.target.value.location)
          console.log("here is the place Id   " , e.target.value.placeId)
          console.log("here is the selected place details   " ,e.target.value.types)
          console.log("here is the selected place viewport   " ,e.target.value.viewport)
          setFormattedAddress(e.target.value?.formattedAddress ?? '');
    
        }
        else{
          console.log(" No place Details returned on Search")
        }
    
      };
      const countries = [];


    return (
        <APIProvider apiKey="AIzaSyARlxfTfWB8J9gCxyxgmw-bWaXyv4ILLGQ " onLoad={()=> console.log("GOOGLE MAPS JUST GOT LOADED")}>
           
            <Maprender>
                
                <Geolocationdiv>
                    <h1>Type to Select and Pin Your Property Location on Map</h1>
                    <p>Here is some Shit to cool your nerves </p>


                </Geolocationdiv>
            
       
                <Map 
                    style={{ width: "500px", height: "400px" }}
                    defaultZoom={13}
                    defaultCenter={{lat: -1.2124522310998684, lng: 36.75581696637829}}
                    onCameraChanged={handleCameraChanged}

                    disableDefaultUI={false} // Hides default buttons
                    gestureHandling="greedy" // Allows smooth zoom & pan
                    mapTypeId="hybrid" // Loads as Satellite view
                    mapId="a99c0ae2ccbc0904"                    
                    zoomControl={true}
                    fullscreenControl={true}     
                />                

            </Maprender>


        </APIProvider>

    )
    


}



export default RenderGoogleMap