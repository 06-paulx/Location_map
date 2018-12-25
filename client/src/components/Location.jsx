import React from 'react';
import Map from './Map.jsx';

const Location = props => (
  <div>
    <h2 className="location">Location</h2>
    <h4 className="city">{props.city}</h4>
    <h4 className="country">{props.country}</h4>
    <h4 className="airport">{props.airport}</h4>
    <p className="time">{props.time}</p>
    <p className="description">{props.description}</p>
    <p>{props.lat}</p>
    <p>{props.lng}</p>
    <Map lat={props.lat} lng={props.lng} />
  </div>
);

export default Location;
