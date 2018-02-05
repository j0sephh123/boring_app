const express       = require('express'),
      router        = express.Router(),
      database      = require('../models/database'),
      queries       = require('../models/queries'),
      cars          = require('./cars'),
      createRoute   = require('./create'),
      indexRoute    = require('./index'),
      postRoute     = require('./post'),
      showRoute     = require('./show'),
      editRoute     = require('./edit'),
      updateRoute   = require('./update'),
      deleteRoute   = require('./delete');
      


router.use('/cars', cars); 

router.use(indexRoute)
router.use(createRoute);
router.use(postRoute);
router.use(showRoute);
router.use(editRoute);
router.use(updateRoute);
router.use(deleteRoute);

module.exports = router;