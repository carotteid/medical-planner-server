const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/create", Controllers.Appointments.create);
router.post("/destroy", Controllers.Appointments.destroy);
router.post("/index", Controllers.Appointments.showAll);
router.post("/show", Controllers.Appointments.show);
router.post("/update", Controllers.Appointments.update);

module.exports = router;
