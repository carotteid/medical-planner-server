const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  nombre: String,
  ap_p: String,
  ap_m: String,
  telefono: String,
  direccion: String,
  user: {type: Schema.Types.ObjectId, ref: "User"}
});

module.exports = appointmentSchema;
