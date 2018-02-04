const cars = require('express').Router();
const all = require('./all');

cars.get('/', all);

module.exports = cars;