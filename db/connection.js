const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '172.17.0.2',
  // host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'locationMap',
});

module.exports = connection;
