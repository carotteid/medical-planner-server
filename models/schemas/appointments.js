const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: Date,
  diagnostic: String,
  treatment: String,
  weight: Number,
  height: Number,
  patient: { type: Schema.Types.ObjectId, ref: "Patient" },
  schedule: { type: Schema.Types.ObjectId, ref: "Schedule" },
});

module.exports = appointmentSchema;
