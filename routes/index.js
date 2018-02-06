const indexRoute = require('express').Router();
const database   = require('../models/database');

indexRoute.get('/', (req, res) => {
  database.query('SELECT * FROM cvs', function(err, result, fields){
    if (err) throw err;
    res.render('index', {cvs: result});
  });
});

module.exports = indexRoute;