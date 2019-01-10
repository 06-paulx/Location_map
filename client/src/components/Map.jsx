/* global window */
import React from 'react';
import PropTypes from 'prop-types';

const Map = props => {
  window.initMap = () => {
    const map = new window.google.maps.Map(
      window.document.getElementById('map'),
      {
        center: { lat: props.lat, lng: props.lng },
        zoom: 16,
        scrollwheel: false,
      },
    );

    const marker = new window.google.maps.Marker({
      position: { lat: props.lat, lng: props.lng },
      map: map,
      icon: 'http://3.16.114.148/css/map_icon.png',
      // icon: '/css/map_icon.png',
    });
  };

  return <div className="mapAC" id="map" />;
};
// <div className="map" id="map" />,

Map.defaultProps = {
  lat: 0,
  lng: 0,
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default Map;
