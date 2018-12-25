import React from 'react';
import Map from './Map.jsx';

const Location = props => (
  <div className="locationComponent">
    <h2 className="location">Location</h2>
    <h4 className="city">
      {props.city}, {props.country}
    </h4>
    <div className="locationColumns">
      <div className="column">
        <p className="description">{props.description}</p>
      </div>
      <div className="column">
        <h4 className="airport">Distance from {props.airport}</h4>
        <p className="time">{props.time} mins by car without traffic</p>
      </div>
    </div>
    <Map lat={props.lat} lng={props.lng} />
    <p>Exact location provided after booking</p>
  </div>
);

export default Location;
