const mysql = require('mysql');

const database = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'boring_app'
});

module.exports = database;