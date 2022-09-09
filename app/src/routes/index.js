var express = require('express');
var router = express.Router();

const vehicles = require('../controllers/vehicle')
const catchAsync = require("./catchAsync")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/vehicles').post(catchAsync(vehicles.AddVehicle))


module.exports = router;
