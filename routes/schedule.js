const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/create", Controllers.Schedule.create);
router.post("/destroy", Controllers.Schedule.destroy);
router.post("/index", Controllers.Schedule.showAll);
router.post("/show", Controllers.Schedule.show);
router.post("/update", Controllers.Schedule.update);

module.exports = router;
