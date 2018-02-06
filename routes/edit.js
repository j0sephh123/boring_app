const editRoute = require('express').Router();
const database   = require('../models/database');

editRoute.get('/:id/edit', (req, res) => {
  database.query('SELECT * FROM cvs WHERE id=?', req.params.id, function(err, foundBlog){
    if(err){
      throw err;
    } else {
      res.render('edit', {result: foundBlog});
    }
  });
});

module.exports = editRoute;