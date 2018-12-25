/* global window,google */
import React from 'react';

const Map = props => {
  window.initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: props.lat, lng: props.lng },
      zoom: 16,
      scrollwheel: false,
    });

    const marker = new google.maps.Marker({
      position: { lat: props.lat, lng: props.lng },
      map: map,
      icon: '/css/map_icon.png',
    });
  };

  // const marker = google.maps.Marker({
  //   position: { lat: props.lat, lng: props.lng },
  //   map: map,
  //   icon: '/map_icon.png',
  // });

  // if (window.map && window.map.setCenter) {
  //   window.map.setCenter({ lat: props.lat, lng: props.lng });
  // }
  return <div className="map" id="map" />;
};
// <div className="map" id="map" />,

export default Map;
