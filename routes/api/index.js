const router = require("express").Router();
const mediaRoutes = require("./media");


// Media routes
router.use("/media", mediaRoutes);


module.exports = router;