const Models = require("../models");
module.exports = {
  create: async (req, res) => {
    try {
      const { fecha, descripcion } = req.body;
      const schedule = new Models.Schedules({ fecha, descripcion });
      await schedule.save();
      res.json({ schedule });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { _id } = req.body;
      await Models.Schedules.deleteOne({ _id });
      res.json({ _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  showAll: async (req, res) => {
    try {
      const schedules = await Models.Schedules.find({});
      res.json({ schedules });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  show: async (req, res) => {
    try {
      const schedule = await Models.Schedules.findOne({ _id: req.body._id });
      res.json({ schedule });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { fecha, descripcion, _id } = req.body;
      await Models.Schedules.updateOne({ _id }, { fecha, descripcion });
      res.json({ fecha, descripcion, _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
