const router = require("express").Router();
const controller = require("./notes.controller");
const ratingsController = require("../ratings/ratings.controller")
const methodNotAllowed = require("../errors/methodNotAllowed");
const ratingsRouter = require("../ratings/ratings.router")

// New route for "/:noteId/ratings/:ratingId"
router.all("/:noteId/ratings/:ratingId", controller.noteExists, ratingsController.ratingExists, ratingsRouter)

// New route for "/:noteId/ratings"
// This route will return all ratings for the specific note
// calling noteExists before ratingsRouter ensures proper err message
router.use("/:noteId/ratings", controller.noteExists, ratingsRouter)

router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;
