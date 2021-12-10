var express = require('express');
var router = express.Router();
var APICONTROLLER = require('../controller/api.controller')
/* GET users listing. */
router.post('/saveAPIData', APICONTROLLER.saveAPIData);

module.exports = router;
