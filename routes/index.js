const express = require("express");

const router = express.Router();

router.use("/appointments", require("./appointments"));
router.use("/doctor-profiles", require("./doctor_profile"));
router.use("/patients", require("./patient"));
router.use("/schedules", require("./schedule"));
router.use("/users", require("./user"));

module.exports = router;
