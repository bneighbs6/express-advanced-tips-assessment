const methodNotAllowed = require("../errors/methodNotAllowed");

const router = require("express").Router();

// need to import controller when it has functioning code
const controller = require("./ratings.controller").all(methodNotAllowed)

router.route("/").get(controller.list);