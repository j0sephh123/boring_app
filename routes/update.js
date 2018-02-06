const updateRoute = require('express').Router();
const database   = require('../models/database');

updateRoute.put('/:id', (req, res) => {
  let cope = req.body.item;
  let params = [cope.inn, cope.dose, req.params.id];
  console.log(params);
  let queries = database.query('UPDATE cvs SET inn=?, dose=? WHERE id=?', params,
  function(err, foundUpdatedBlog){
    if(err){
      throw err;
    } else {
      res.redirect('/'+req.params.id);
    }
  });
});

module.exports = updateRoute;