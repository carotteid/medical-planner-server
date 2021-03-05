const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  fecha: String,
  descripcion: String,
  consultas: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
});

module.exports = appointmentSchema;
