const postRoute = require('express').Router();
const database   = require('../models/database');


postRoute.post('/new', (req, res) => {
  let records = [[req.body.name1, req.body.name2]];
  let sql = 'INSERT INTO names (name1, name2) VALUES ?';
  database.query(sql, [records], function(err, result, fields){
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  res.redirect('/');
});  

module.exports = postRoute;