const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../db');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/:listingId/location', (req, res) => {
  db.getListing(req.params.listingId, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result[0]);
    }
  });
});

app.get('/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

//removed below for testing

// app.listen(port, () => {
//   console.log('Listening to port ', port);
// });

module.exports = app;
