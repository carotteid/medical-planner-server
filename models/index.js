const appointmentsSchema = require("./schemas/appointments.js");
const doctorProfileSchema = require("./schemas/doctor_profile");
const patientSchema = require("./schemas/patient");
const scheduleSchema = require("./schemas/schedule");
const userSchema = require("./schemas/user");

const mongoose = require("mongoose");
// const  url = "mongodb://localhost:27017/test"
const url = "mongodb+srv://carrot:Misora01@cluster0.5rjsg.mongodb.net/medical_planner?retryWrites=true&w=majority"
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  Appointments: mongoose.model("Appointment", appointmentsSchema),
  DoctorProfiles: mongoose.model("DoctorProfile", doctorProfileSchema),
  Patients: mongoose.model("Patient", patientSchema),
  Schedules: mongoose.model("Schedule", scheduleSchema),
  Users: mongoose.model("User", userSchema),
};
