var faker = require("faker");
var connection = require("./connection.js");

//creating mock data for 9 cities

var cityToCoordinates = {
  "San Francisco": { latitude: 37.6920865, longitude: -122.7632618 },
  Seattle: { latitude: 47.47968, longitude: -122.286686 },
  Hollywood: { latitude: 34.09448, longitude: -118.328804 },
  "Santa Monica": { latitude: 34.020409, longitude: -118.492054 },
  "San Diego": { latitude: 32.874342, longitude: -117.016538 },
  Portland: { latitude: 45.526443, longitude: -122.628947 },
  "San Jose": { latitude: 37.303083, longitude: -121.903946 },
  Boulder: { latitude: 40.020083, longitude: -105.277407 },
  Austin: { latitude: 30.287, longitude: -97.750718 }
};

//get random coordinates that are +- 0.2 of each city's coordinates
const getRandomCoords = coords => {
  const lat = coords.latitude + (0.4 * Math.random() - 0.2);
  const lon = coords.longitude + (0.4 * Math.random() - 0.2);
  return { latitude: lat, longitude: lon };
};

var dbSeeding = function(query, params) {
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

//SF

var entries = [];
for (var i = 0; i < 20; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "San Francisco, California",
    "United States",
    faker.lorem.paragraph(),
    "San Francisco International Airport",
    Math.floor(Math.random() * 50 + 15),
    getRandomCoords(cityToCoordinates["San Francisco"])["longitude"],
    getRandomCoords(cityToCoordinates["San Francisco"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//Seattle
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "Seattle, Washington",
    "United States",
    faker.lorem.paragraph(),
    "Seattle-Tacoma International Airport",
    Math.floor(Math.random() * 40 + 15),
    getRandomCoords(cityToCoordinates["Seattle"])["longitude"],
    getRandomCoords(cityToCoordinates["Seattle"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//Hollywood
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "Hollywood, California",
    "United States",
    faker.lorem.paragraph(),
    "Seattle-Tacoma International Airport",
    Math.floor(Math.random() * 60 + 15),
    getRandomCoords(cityToCoordinates["Hollywood"])["longitude"],
    getRandomCoords(cityToCoordinates["Hollywood"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//santa monica
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "Santa Monica, California",
    "United States",
    faker.lorem.paragraph(),
    "Los Angeles International Airport",
    Math.floor(Math.random() * 60 + 15),
    getRandomCoords(cityToCoordinates["Santa Monica"])["longitude"],
    getRandomCoords(cityToCoordinates["Santa Monica"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//San Diego
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "San Diego, California",
    "United States",
    faker.lorem.paragraph(),
    "San Diego International Airport",
    Math.floor(Math.random() * 60 + 15),
    getRandomCoords(cityToCoordinates["Santa Monica"])["longitude"],
    getRandomCoords(cityToCoordinates["San Diego"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//Portland
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "Portland, Oregon",
    "United States",
    faker.lorem.paragraph(),
    "San Diego International Airport",
    Math.floor(Math.random() * 50 + 15),
    getRandomCoords(cityToCoordinates["Santa Monica"])["longitude"],
    getRandomCoords(cityToCoordinates["San Diego"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//San Jose
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "San Jose, California",
    "United States",
    faker.lorem.paragraph(),
    "Norman Y. Mineta San Jose International Airport",
    Math.floor(Math.random() * 40 + 15),
    getRandomCoords(cityToCoordinates["San Jose"])["longitude"],
    getRandomCoords(cityToCoordinates["San Jose"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//Boulder
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "Boulder, Colorado",
    "United States",
    faker.lorem.paragraph(),
    "Denver International Airport",
    Math.floor(Math.random() * 50 + 15),
    getRandomCoords(cityToCoordinates["Boulder"])["longitude"],
    getRandomCoords(cityToCoordinates["Boulder"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

//Austin
for (var i = 0; i < 10; i++) {
  var query =
    "INSERT INTO locationMap (city, country, listing_description, airport, time_to_airport, longitude, latitude) VALUES (?,?,?,?,?,?,?)";
  var params = [
    "Austin, Texas",
    "United States",
    faker.lorem.paragraph(),
    "Austin–Bergstrom International Airport",
    Math.floor(Math.random() * 50 + 15),
    getRandomCoords(cityToCoordinates["Austin"])["longitude"],
    getRandomCoords(cityToCoordinates["Austin"])["latitude"]
  ];

  entries.push(dbSeeding(query, params));
}

Promise.all(entries)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
