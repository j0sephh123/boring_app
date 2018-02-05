const updateRoute = require('express').Router();
const database   = require('../models/database');

updateRoute.put('/:id', (req, res) => {
  let cope = req.body.item;
  let params = [cope.name1, cope.name2, req.params.id];
  console.log(params);
  let queries = database.query('UPDATE names SET name1=?, name2=? WHERE id=?', params,
  function(err, foundUpdatedBlog){
    if(err){
      throw err;
    } else {
      res.redirect('/'+req.params.id);
    }
  });
});

module.exports = updateRoute;