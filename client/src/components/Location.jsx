import React from 'react';
import Map from './Map.jsx';

const Location = props => (
  <div>
    <h2 className="location">Location</h2>
    <h4 className="city">City, Country</h4>
    <h4 className="airport">Time to Airport</h4>

    <p className="description">Description</p>
    <Map />
  </div>
);

export default Location;
