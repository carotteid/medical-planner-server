const Models = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { user, pass } = req.body;
      const userObj = new Models.Users({ user, pass });
      await userObj.save();
      res.json({ user: userObj });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { _id } = req.body;
      await Models.Users.deleteOne({ _id });
      res.json({ _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  showAll: async (req, res) => {
    try {
      const users = await Models.Users.find({});
      res.json({ users });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  show: async (req, res) => {
    try {
      const user = await Models.Users.findOne({ _id: req.body._id });
      res.json({ user });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { user, pass, _id } = req.body;
      await Models.Users.updateOne({ _id }, { user, pass });
      res.json({ user, pass, _id });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
