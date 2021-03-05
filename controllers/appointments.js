const Models = require("../models");
module.exports = {
  create: async (req, res) => {
    try {
      const { date, diagnostic, treatment, weight, height, patient } = req.body;
      const appointment = await Models.Appointments({
        date,
        diagnostic,
        treatment,
        weight,
        height,
        patient,
      });
      await appointment.save();
      res.json({ appointment });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { _id } = req.body;
      await Models.Appointments.deleteOne({ _id });
      res.json({ _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  showAll: async (req, res) => {
    try {
      const appointments = await Models.Appointments.find({});
      res.json({ appointments });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  show: async (req, res) => {
    try {
      const appointment = await Models.Appointments.findOne({
        _id: req.body._id,
      });
      res.json({ appointment });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const {
        date,
        diagnostic,
        treatment,
        weight,
        height,
        patient,
        _id,
      } = req.body;
      await Models.Appointments.updateOne(
        { _id },
        { date, diagnostic, treatment, weight, height, patient }
      );
      res.json({ date, diagnostic, treatment, weight, height, patient, _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
