const express    = require('express'),
      router     = express.Router(),
      database   = require('../models/database'),
      queries    = require('../models/queries'),
      cars       = require('./cars');
      


router.use('/cars', cars);      
      // GET 
router.get('/', (req, res) => {
  database.query(queries, function(err, result, fields){
    if (err) throw err;
    res.render('arb', {result : result});
  });
});
// CREATE ROUTE
router.get('/new', (req, res) => {
  res.render('new');
});
// POST 
router.post('/new', (req, res) => {
  let records = [[req.body.name1, req.body.name2]];
  let sql = 'INSERT INTO names (name1, name2) VALUES ?';
  database.query(sql, [records], function(err, result, fields){
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  res.redirect('/');
});  

// SHOW ROUTE
router.get('/:id', (req, res) => {
  database.query('SELECT * FROM names WHERE id=?', req.params.id, function(err, foundBlog){
    if(err){
      throw err;
    } 
    else {
      res.render('show', {result: foundBlog});
    }
  });
});
// EDIT
router.get('/:id/edit', (req, res) => {
  database.query('SELECT * FROM names WHERE id=?', req.params.id, function(err, foundBlog){
    if(err){
      throw err;
    } else {
      res.render('edit', {result: foundBlog});
    }
  });
});
// UPDATE
router.put('/:id', (req, res) => {
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
// DELETE
router.delete('/:id', (req, res) => {
  database.query('DELETE FROM names WHERE id=?', req.params.id, function(err){
    if(err){
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  });
});
module.exports = router;