const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db');

const port = 3007;

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(bodyParser.json());

app.get('/api/location/:listingId', (req, res) => {
  db.getCoordinates(req.params.listingId, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log('Listening to port ', port);
});
