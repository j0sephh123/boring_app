const cvs          = require('express').Router();
const all          = require('./all');
const single       = require('./single');

cvs.get('/'      , all);
cvs.get('/:cvsId', single);

module.exports = cvs;