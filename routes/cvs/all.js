const database   = require('../../models/database');

module.exports = (req, res) => {
  database.query('SELECT * FROM `group`', (err, result, fields) => {
    if (err) throw err;
    res.render('cvs', {result})
  });
};