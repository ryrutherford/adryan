import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PlaceMarkers from './PlaceMarkers.js';
import { makeStyles } from '@material-ui/core/styles';
import locationData from './LocationData.js';

const containerStyle = {
  width: '90%',
  height: 500,
  margin: '10px',
};

const center = {
  lat: 20,
  lng: 30,
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

/**
 * The Places component returns a GoogleMap with Markers on it for each location I've visited
 * the location data comes from the LocationData.js file (it is hardcoded but I'm planning on making an API to make updating the data easier)
 */
const Places = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
          {locationData.map((location) => <PlaceMarkers location={location} key={location.country}/>)}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
 
export default React.memo(Places);