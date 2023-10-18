import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const TransportMap = ({ county, from }) => {
  const Map = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 0, lng: 0 }} // Set initial center coordinates
    >
      <Marker position={{ lat: 0, lng: 0 }} /> {/* Replace with actual coordinates */}
    </GoogleMap>
  ));

  return (
    <div>
      <h2>{county} - {from}</h2>
      <Map
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default TransportMap;
