const Models = require("../models");
module.exports = {
  create: async (req, res) => {
    try {
      const { nombre, ap_p, ap_m, telefono, direccion, user } = req.body;
      const doctorProfile = new Models.DoctorProfiles({
        nombre,
        ap_p,
        ap_m,
        telefono,
        direccion,
        user,
      });
      await doctorProfile.save();
      res.json({ doctorProfile });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { _id } = req.body;
      await Models.DoctorProfiles.deleteOne({ _id });
      res.json({ _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  showAll: async (req, res) => {
    try {
      const doctorProfiles = await Models.DoctorProfiles.find({});
      res.json({ doctorProfiles });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  show: async (req, res) => {
    try {
      const doctorProfile = await Models.DoctorProfiles.findOne({
        _id: req.body._id,
      });
      res.json({ doctorProfile });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { nombre, ap_p, ap_m, telefono, direccion, user, _id } = req.body;
      await Models.DoctorProfiles.updateOne(
        { _id },
        { nombre, ap_p, ap_m, telefono, direccion, user }
      );
      res.json({ nombre, ap_p, ap_m, telefono, direccion, user, _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
