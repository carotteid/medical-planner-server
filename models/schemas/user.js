const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  user: String,
  pass: String,
  doctor: { type: Schema.Types.ObjectId, ref: "DoctorProfile" },
});

module.exports = appointmentSchema;
