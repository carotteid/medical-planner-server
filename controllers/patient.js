const Models = require("../models");
module.exports = {
  create: async (req, res) => {
    try {
      const {
        nombre,
        ap_p,
        ap_m,
        direccion,
        telefono,
        nacimiento,
        sexo,
      } = req.body;
      const patient = new Models.Patients({
        nombre,
        ap_p,
        ap_m,
        direccion,
        telefono,
        nacimiento,
        sexo,
      });
      await patient.save();
      res.json({ patient });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { _id } = req.body;
      await Models.Patients.deleteOne({ _id });
      res.json({ _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  showAll: async (req, res) => {
    try {
      const patients = await Models.Patients.find({});
      res.json({ patients });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  show: async (req, res) => {
    try {
      const patient = await Models.Patients.findOne({ _id: req.body._id });
      res.json({ patient });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const {
        nombre,
        ap_p,
        ap_m,
        direccion,
        telefono,
        nacimiento,
        sexo,
        _id,
      } = req.body;
      await Models.Patients.updateOne(
        { _id },
        { nombre, ap_p, ap_m, direccion, telefono, nacimiento, sexo }
      );
      res.json({
        nombre,
        ap_p,
        ap_m,
        direccion,
        telefono,
        nacimiento,
        sexo,
        _id,
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
