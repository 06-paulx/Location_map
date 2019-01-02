const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db');

const app = express();

app.use(bodyParser.json());

app.use('/achou01', express.static(path.join(__dirname, '../public/dist')));

app.get('/achou01/api/location/:listingId', (req, res) => {
  db.getListing(req.params.listingId, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result[0]);
    }
  });
});

app.get('/achou01/listing/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

// app.listen(port, () => {
//   console.log('Listening to port ', port);
// });

module.exports = app;
