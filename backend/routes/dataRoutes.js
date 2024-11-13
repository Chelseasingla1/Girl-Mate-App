const express = require("express");
const router = express.Router();

// Static health information data
const healthData = [
  {
    title: "Benefits of Physical Activity",
    description: "Regular physical activity can improve muscle strength and boost endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.",
    source: "World Health Organization",
  },
  {
    title: "Healthy Eating",
    description: "A balanced diet is essential for a healthy lifestyle. Eating a variety of foods ensures that you get all the essential nutrients your body needs to function properly.",
    source: "Centers for Disease Control and Prevention",
  },
  {
    title: "Mental Health and Wellbeing",
    description: "Mental health is just as important as physical health. It affects how we think, feel, and act. Maintaining good mental health is essential to overall well-being.",
    source: "National Institute of Mental Health",
  },
  // Add more entries as needed
];

// Route to get health information
router.get("/health-info", (req, res) => {
  res.json(healthData); // Send static data to the frontend
});

module.exports = router;
