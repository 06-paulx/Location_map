import React from 'react';
import Map from './Map.jsx';

const Location = props => (
  <div className="locationComponentAC">
    <h2 className="locationAC">Location</h2>
    <h4 className="cityAC">
      {props.city}, {props.country}
    </h4>
    <div className="locationColumnsAC">
      <div className="columnAC">
        <p className="descriptionAC">{props.description}</p>
      </div>
      <div className="columnAC">
        <h4 className="airportAC">Distance from {props.airport}</h4>
        <p className="timeAC">{props.time} mins by car without traffic</p>
      </div>
    </div>
    <Map lat={props.lat} lng={props.lng} />
    <p>Exact location provided after booking</p>
  </div>
);

export default Location;
