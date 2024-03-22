const express = require("express");
const router = express.Router();

const jobRoutes = require("./routes/job.routes");
const eventRoutes = require("./routes/event.routes");

router.use("/jobs", jobRoutes);
router.use("/events", eventRoutes);

module.exports = router;
