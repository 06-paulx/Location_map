const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db');

const port = 3007;

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/api/location/:listingId', (req, res) => {
  db.getListing(req.params.listingId, (err, result) => {
    console.log(result[0], 'RESULT CITY');
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result[0]);
    }
  });
});

// app.get('/api/location/:listingId', (req, res) => {
//   console.log(req.params.listingId, 'ID');
//   db.getCoordinates(req.params.listingId, (err, result) => {
//     console.log(result, 'RESULT COORD');
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

app.get('/listing/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.listen(port, () => {
  console.log('Listening to port ', port);
});
