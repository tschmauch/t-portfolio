const router = require("express").Router();
const mediaController = require("../../controllers/mediaController");

// Matches with "/api/media"
router.route("/")
  .get(mediaController.findAll)
//   .post(mediaController.create);

// Matches with "/api/media/:id"
router
  .route("/:id")
  .get(mediaController.findById)
//   .put(mediaController.update)
// 	.delete(mediaController.remove);

module.exports = router;