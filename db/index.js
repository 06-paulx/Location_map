const connection = require('./connection.js');

// const getCoordinates = (listingId, callback) => {
//   const query =
//     'SELECT longitude, latitude FROM locationMap WHERE listing_id= ?';
//   const params = [listingId];
//   connection.query(query, params, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, result[0]);
//     }
//   });
// };

const getListing = (listingId, callback) => {
  const query = 'SELECT * FROM locationMap WHERE listing_id=?';
  const params = [listingId];
  connection.query(query, params, (err, result) => {
    // console.log(result, 'DB RESULTT');
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getListing,
};
