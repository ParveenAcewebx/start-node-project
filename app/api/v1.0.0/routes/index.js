var express = require('express');
var router = express.Router();
router.use(require('./test.routes')); 

module.exports = router;