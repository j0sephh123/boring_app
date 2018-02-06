const database   = require('../../models/database');

module.exports = (req, res) => {
  database.query('SELECT * FROM `group` WHERE id=?', req.params.cvsId, (err, result) => {
    res.send(result);
  });
}