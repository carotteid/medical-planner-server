const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/create", Controllers.User.create);
router.post("/destroy", Controllers.User.destroy);
router.post("/index", Controllers.User.showAll);
router.post("/show", Controllers.User.show);
router.post("/update", Controllers.User.update);

module.exports = router;
