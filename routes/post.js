const postRoute = require('express').Router();
const database   = require('../models/database');


postRoute.post('/new', (req, res) => {
  let records = [[req.body.inn, req.body.dose]];
  let sql = 'INSERT INTO cvs (inn, dose) VALUES ?';
  database.query(sql, [records], function(err, result, fields){
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  res.redirect('/');
});  

module.exports = postRoute;