const router = require("express").Router();
const controller = require("./notes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// New route for "/:noteId/ratings"
// This route will return all ratings for the specific note
router.use("/noteId/ratings", controller.noteExists)

router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;
