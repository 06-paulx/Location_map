/* global window */

import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import Location from './Location.jsx';

//App's props is id
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      airport: null,
      time: '',
      descriptoin: '',
      lng: null,
      lat: null,
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://3.16.114.148/' + this.props.id + '/location',
      // url: '/' + this.props.id + '/location',
      success: listing => {
        this.setState({
          city: listing.city,
          country: listing.country,
          airport: listing.airport,
          time: listing.time_to_airport,
          descriptoin: listing.listing_description,
          lng: listing.longitude,
          lat: listing.latitude,
        });
        const apiScript = window.document.createElement('script');
        apiScript.setAttribute(
          'src',
          `https://maps.googleapis.com/maps/api/js?key=${
            window.apiKey
          }&callback=initMap`,
        );
        window.document.body.appendChild(apiScript);
      },
    });
  }

  render() {
    return (
      <Location
        city={this.state.city}
        country={this.state.country}
        description={this.state.descriptoin}
        airport={this.state.airport}
        time={this.state.time}
        lng={this.state.lng}
        lat={this.state.lat}
      />
    );
  }
}

App.propTypes = {
  id: PropTypes.string.isRequired,
};

export default App;
