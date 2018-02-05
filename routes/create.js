const createRoute = require('express').Router();

createRoute.get('/new', (req, res) => {
  res.render('new');
});

module.exports = createRoute;