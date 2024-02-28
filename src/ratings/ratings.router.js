// Create instance of express router()
const router = require("express").Router();

// Import ratings controller
const controller = require("./ratings.controller")

// Import methodNotAllowed() fx 
const methodNotAllowed = require("../errors/methodNotAllowed");

// Create new route for "/"
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router; 