/* env jest */
/* global window */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Map from '../client/src/components/Map.jsx';

Enzyme.configure({ adapter: new Adapter() });

const request = require('supertest');
const app = require('../server');
const connection = require('../db/connection.js');

describe('GET /api/location/1', () => {
  test('It should respond with a listing object', done => {
    request(app)
      .get('/api/location/1')
      .end((err, response) => {
        expect(response.body.airport).toEqual(
          'San Francisco International Airport',
        );
        expect(response.body.city).toEqual('San Francisco, California');
        expect(response.body.listing_id).toEqual(1);
        expect(response.body.latitude).toBeGreaterThanOrEqual(37.706373 - 0.01);
        expect(response.body.latitude).toBeLessThanOrEqual(37.706373 + 0.01);
        expect(response.body.longitude).toBeLessThanOrEqual(-122.437089 + 0.01);
        expect(response.body.longitude).toBeGreaterThanOrEqual(
          -122.437089 - 0.01,
        );
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  afterAll(() => {
    connection.end();
  });
});

describe('Map component rendering', () => {
  it('should render a map of the location', () => {
    const mapComponent = shallow(<Map />);
    expect(mapComponent).toMatchSnapshot();
  });
});

describe('Google initMap is called', () => {
  it('should call the Google initMap function', () => {
    const mapMock = jest.fn();
    const markerMock = jest.fn();
    window.google = { maps: { Map: mapMock, Marker: markerMock } };

    const lat = 37.784523;
    const lng = -122.356782;

    shallow(<Map lat={lat} lng={lng} />);
    window.initMap();
    expect(markerMock).toBeCalledWith({
      map: {},
      icon: '/css/map_icon.png',
      position: { lat: lat, lng: lng },
    });
    expect(mapMock).toBeCalledWith(window.document.getElementById('map'), {
      center: { lat: lat, lng: lng },
      zoom: 16,
      scrollwheel: false,
    });
  });
});
