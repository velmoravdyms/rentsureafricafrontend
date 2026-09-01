// @ts-nocheck


import React,{useState,useRef,useContext} from 'react';



import { Link,useLocation } from 'react-router-dom';

import styled from "@emotion/styled";


import { APIProvider,Map, useMap } from '@vis.gl/react-google-maps';

import {APILoader, PlacePicker} from '@googlemaps/extended-component-library/react';




const Maprender=styled.div`

// background-color:purple;

width:100%;
height:80%;
padding:0.5rem;
margin: 0.1rem  auto;
// color:white;
text-align:center;
font-size:1rem;
overflow-y:scroll;
border:2px solid purple;
`



const Geolocationdiv=styled.div`
// background-color:pink;
width:100%;
margin:0.5rem;
overflow-y:scroll;
height:100%;
`

const Selectlocationheader=styled.div`
margin:0.2rem auto;
padding:0;
width:100%;

`


const RenderGoogleMap=()=>{



    const [formattedAddress, setFormattedAddress] = React.useState('');

    const [mapPosition, setMapPosition] = React.useState({lat:-1.2424,lng:36.7225});


    // // Initilize cluster if the map has changed
    // useEffect(()=>{
    //     if(!map) return;
    //     if(!clusterer.current){
    //         clusterer.current=new MarkerClusterer({map});
    //     }
    // },[map]);

    
    // const mapRef=useRef(null);

    const handleCameraChanged=(/** @type {any} */ center,/** @type {any} */ zoom)=>{
        // if(ev && ev.detail){
        //     console.log('Camera Changed  : ', ev.detail.center, "Just Zooomed  : ", ev.detail.zoom);
        // }

            console.log('Camera Changed  : ', center, "Just Zooomed  : ", zoom);
        
    }


    const location = useLocation();
    console.log("Current Route:", location.pathname);
  




      
      const handlePlaceChange = (e) => {

    
        if(e.target.value){
            console.log("here is the formattedAddress  " , e.target.value.formattedAddress)
            console.log("here is the location " , e.target.value.location)
            console.log("here is the place Id   " , e.target.value.placeId)
            console.log("here is the selected place Typess of place  " ,e.target.value.types)
            console.log("here is the selected place viewport   " ,e.target.value.viewport)
            
            // setFormattedAddress(e.target.value?.formattedAddress ?? '');
        
            const location={
                lat:e.target.value.location.lat(),
                lng:e.target.value.location.lng()
            }


            // setFormattedAddress(`${location.lat}, ${location.lng}`);


            // if(!map){
            //     console.log("Map Reference  Instance NULL MAPref.current ", map );
            //     return;
            
            // }else{

                console.log("Map Reference Exists and ther is the Long & Latitude ", location.lat, location.lng );
                // mapRef.current.panTo(e.target.viewport);

                console.log("here the location object", location)

                console.log("Here is the Formatted Adress ", e.target.value.formattedAddress)

                
                setFormattedAddress(e.target.value.formattedAddress);
                setMapPosition(location)
    
            // }
        }
        else{
          console.log(" No place Details returned on Search")
        }
    
      };
      const countries = [];

      const Panmaptoselectedlocation=({location})=>{

        const map=useMap();

        console.log("here the Map ", map )

        // const position={
        //     lat:location.Panmap.lat,
        //     lng:location.Panmap        
        // }


        if(!map){
            console.log("Map Reference  Instance NULL MAPref.current ", map );
            return;
        
        }else{
            
            console.log("Map Reference Exists and ther is the Long & Latitude " ,location)
            // console.log("Map Reference Exists and ther is the Long & Latitude ", location).Panmap;

            // console.log("Map Reference Exists and ther is the Long & Latitude ", position.lat, position.lng );
            
            map.panTo(location);
                
        
        }

        return null;

      }


    return (
        <APIProvider apiKey="AIzaSyARlxfTfWB8J9gCxyxgmw-bWaXyv4ILLGQ " onLoad={()=> console.log("GOOGLE MAPS JUST GOT LOADED")}>
           
            <Maprender>
                
                <Geolocationdiv>
                    <Selectlocationheader>
                        <h4> Type to Select Your Property Location Area, Then Pin the Exact Location on the Map</h4>
                        <p>Here is some Shit to cool your nerves </p>
                    </Selectlocationheader>
                    
                    <div className="autocompletewhole">
                        <APILoader apiKey="AIzaSyARlxfTfWB8J9gCxyxgmw-bWaXyv4ILLGQ" solutionChannel="GMP_GCC_placepicker_v1" style={{backgroundColor:"green",margin:"0.5rem"}}/>
                        <div className="container">
                            <PlacePicker country={countries} placeholder="Enter a place to see its address" onPlaceChange={handlePlaceChange} />
                            <div className="result">
                                {formattedAddress}
                            </div>
                        </div>
                    </div>


                    <Map 
                        style={{ width: "100%", height: "400px", display:"block" }}
                        defaultZoom={13}
                        defaultCenter={{lat: -1.2124522310998684, lng: 36.75581696637829}}
                        onCameraChanged={handleCameraChanged}

                        disableDefaultUI={false} // Hides default buttons
                        gestureHandling="greedy" // Allows smooth zoom & pan
                        mapTypeId="hybrid" // Loads as Satellite view
                        mapId="a99c0ae2ccbc0904"                    
                        zoomControl={true}
                        fullscreenControl={true}     

                        // ref={mapRef}
                    
                    >     
                    <Panmaptoselectedlocation location={mapPosition}/>  
                    
                    </Map>
                </Geolocationdiv>



            </Maprender>


        </APIProvider>

    )
    


}



export default RenderGoogleMap