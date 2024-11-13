const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Controller to get experts (doctors)
const getExperts = asyncHandler(async (req, res) => {
  try {
    // Find all users who are marked as doctors
    const experts = await User.find({ isDoctor: true }).select("name specialization profilePic");
    res.json(experts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve experts", error });
  }
});

module.exports = { getExperts };
