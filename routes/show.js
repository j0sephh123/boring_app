const showRoute = require('express').Router();
const database   = require('../models/database');

showRoute.get('/:id', (req, res) => {
  database.query('SELECT * FROM names WHERE id=?', req.params.id, function(err, foundBlog){
    if(err){
      throw err;
    } 
    else {
      res.render('show', {result: foundBlog});
    }
  });
});

module.exports = showRoute;