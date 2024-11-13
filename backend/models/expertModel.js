// models/expertModel.js
const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  profilePic: { type: String },
  role: { type: String, default: "doctor" },
  gender: { type: String, required: true },
});

const Expert = mongoose.model("Expert", expertSchema);

module.exports = Expert;
