import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  margin: '10px',
};

const center = {
  lat: 0,
  lng: 0,
};

const Places = () => {

  return (
    <React.Fragment>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={1}
        >
        </GoogleMap>
      </LoadScript>
    </React.Fragment>
  );
}
 
export default React.memo(Places);