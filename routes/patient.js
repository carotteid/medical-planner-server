const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/create", Controllers.Patient.create);
router.post("/destroy", Controllers.Patient.destroy);
router.post("/index", Controllers.Patient.showAll);
router.post("/show", Controllers.Patient.show);
router.post("/update", Controllers.Patient.update);

module.exports = router;
