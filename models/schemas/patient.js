const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  nombre: String,
  ap_p: String,
  ap_m: String,
  direccion: String,
  telefono: String,
  nacimiento: String,
  sexo: String,
});

module.exports = appointmentSchema;
