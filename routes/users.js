var express = require('express');
var router = express.Router();
// Get the controller
const UsersController = require("../app/controller").UsersController;

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


/* GET the users listing function */
router.get('/', UsersController.getUsers);

module.exports = router;
