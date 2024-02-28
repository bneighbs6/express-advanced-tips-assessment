const methodNotAllowed = require("../errors/methodNotAllowed");

const router = require("express").Router();

// need to import controller when it has functioning code
const controller = require("./ratings.controller")

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router; 