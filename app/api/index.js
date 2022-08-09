var express = require('express');
var router = express.Router();
 
router.use('/v1.0.0', require('./v1.0.0/routes'));
router.use('/v1.0.1', require('./v1.0.1/routes'));
 
module.exports = router;