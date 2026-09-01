//@ts-nocheck


import React from 'react';
import '../App.css';

import {APILoader, PlacePicker} from '@googlemaps/extended-component-library/react';

export default function App() {
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
    <div className="autocompletewhole">
      <APILoader apiKey="AIzaSyARlxfTfWB8J9gCxyxgmw-bWaXyv4ILLGQ" solutionChannel="GMP_GCC_placepicker_v1" style={{width:"500px", height:"500px", backgroundColor:"green",margin:"2rem"}}/>
      <div className="container">
        <PlacePicker country={countries} placeholder="Enter a place to see its address" onPlaceChange={handlePlaceChange} />
        <div className="result">
          {formattedAddress}
        </div>
      </div>
    </div>
  );
}
