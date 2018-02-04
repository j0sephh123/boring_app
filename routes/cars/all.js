const data   = require('../../data.json');
const dbData = require('../../models/database');

module.exports = (req, res) => {
  const cars = data.cars;
  res.render('cars', {cars})
  // res.status(200).json({ cars });
};