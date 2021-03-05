const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/create", Controllers.DoctorProfile.create);
router.post("/destroy", Controllers.DoctorProfile.destroy);
router.post("/index", Controllers.DoctorProfile.showAll);
router.post("/show", Controllers.DoctorProfile.show);
router.post("/update", Controllers.DoctorProfile.update);

module.exports = router;
