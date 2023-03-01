const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'loki',
  database: 'blog',
});

module.exports = db