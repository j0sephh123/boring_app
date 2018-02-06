const express       = require('express'),
      router        = express.Router(),
      database      = require('../models/database'),
      queries       = require('../models/queries'),
      cvs           = require('./cvs'),
      createRoute   = require('./create'),
      indexRoute    = require('./index'),
      postRoute     = require('./post'),
      showRoute     = require('./show'),
      editRoute     = require('./edit'),
      updateRoute   = require('./update'),
      deleteRoute   = require('./delete');
      


router.use('/cvs', cvs); 


router.use(indexRoute)
router.use(createRoute);
router.use(postRoute);
router.use(showRoute);
router.use(editRoute);
router.use(updateRoute);
router.use(deleteRoute);

router.get('/cvs/:id', (req, res) => {
      console.log(req.params.id);
});

module.exports = router;