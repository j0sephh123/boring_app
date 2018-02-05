const deleteRoute = require('express').Router();
const database   = require('../models/database');

deleteRoute.delete('/:id', (req, res) => {
  database.query('DELETE FROM names WHERE id=?', req.params.id, function(err){
    if(err){
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = deleteRoute;