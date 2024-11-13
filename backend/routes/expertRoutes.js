const express = require("express");
const { getExperts } = require("../controllers/expertController");
const { protect } = require("../middleware/authMiddleware"); // Use auth middleware if required

const router = express.Router();

// Define the route for getting experts
router.get("/", protect, getExperts);

module.exports = router;
