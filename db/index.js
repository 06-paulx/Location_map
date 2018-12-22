const connection = require('./connection.js');

const getCoordinates = (listingId, callback) => {
  const query =
    'SELECT longitude, latitude FROM locationMap WHERE listing_id= ?';
  const params = [listingId];
  connection.query(query, params, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result[0]);
    }
  });
};

module.exports = {
  getCoordinates
};
