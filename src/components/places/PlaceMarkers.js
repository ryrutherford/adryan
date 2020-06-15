import React, {useState} from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import Typography from '@material-ui/core/Typography';


/**
 * The PlaceMarkers component returns a Marker for a location on a GoogleMap. It will also display an InfoWindow if the marker is clicked
 * @param {location} param0 the location object which contains the country name and location, city names, and years visited
 */
const PlaceMarkers = ({location}) => {
  const [showDescription, setDescription] = useState(false);
  const toggleDescription = () => setDescription(!showDescription);
  return (
    <React.Fragment>
      <Marker position={location.location} onClick={() => setDescription(true)}/>
      {showDescription ? 
        <InfoWindow position={location.location} onCloseClick={toggleDescription}>
          <div>
            <Typography variant='h6'>
              {location.country}
            </Typography>
            <Typography variant='caption'>
              {'Cities: ' + location.cities.join(', ')}
              <br/>
              {'Years: ' + location.years.join(', ')}
            </Typography>
          </div>
        </InfoWindow>
        :
        null
      }
    </React.Fragment>
  );
}
 
export default PlaceMarkers;