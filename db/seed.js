const faker = require('faker');
const connection = require('./connection.js');

// creating mock data for 9 cities
const cities = [
  {
    displayName: 'San Francisco, California',
    airport: 'San Francisco International Airport',
    latitude: 37.706373,
    longitude: -122.437089,
  },
  {
    displayName: 'Seattle, Washington',
    airport: 'Seattle-Tacoma International Airport',
    latitude: 47.47968,
    longitude: -122.286686,
  },
  {
    displayName: 'Hollywood, California',
    airport: 'Los Angeles International Airport',
    latitude: 34.09448,
    longitude: -118.328804,
  },
  {
    displayName: 'Santa Monica, California',
    airport: 'Los Angeles International Airport',
    latitude: 34.020409,
    longitude: -118.492054,
  },
  {
    displayName: 'San Diego, California',
    airport: 'San Diego International Airport',
    latitude: 32.763213,
    longitude: -117.032742,
  },
  {
    displayName: 'Portland, Oregon',
    airport: 'Portland International Airport',
    latitude: 45.526443,
    longitude: -122.628947,
  },
  {
    displayName: 'San Jose, California',
    airport: 'Norman Y. Mineta San Jose International Airport',
    latitude: 37.303083,
    longitude: -121.903946,
  },
  {
    displayName: 'Boulder, Colorado',
    airport: 'Denver International Airport',
    latitude: 40.020083,
    longitude: -105.277407,
  },
  {
    displayName: 'Austin, Texas',
    airport: 'Austin–Bergstrom International Airport',
    latitude: 30.287,
    longitude: -97.750718,
  },
];

// get random coordinates that are +- 0.2 of each city's coordinates
const getRandomCoords = coords => {
  const lat = coords.latitude + (0.02 * Math.random() - 0.01);
  const lon = coords.longitude + (0.02 * Math.random() - 0.01);

  return { latitude: lat, longitude: lon };
};

const dbSeeding = function(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const entries = [];

cities.forEach(city => {
  for (let i = 0; i < 20; i++) {
    const query =
      'INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)';

    const coordinates = getRandomCoords(city);
    const params = [
      city.displayName,
      'United States',
      faker.lorem.paragraph(),
      city.airport,
      Math.floor(Math.random() * 50 + 15),
      coordinates.longitude,
      coordinates.latitude,
    ];
    entries.push(dbSeeding(query, params));
  }
});

Promise.all(entries)
  .then(result => {
    console.log(result);
    connection.end();
  })
  .catch(err => {
    console.log(err);
    connection.end();
  });
