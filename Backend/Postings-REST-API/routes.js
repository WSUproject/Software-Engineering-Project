const express = require("express");
const router = express.Router();

const jobRoutes = require("./routes/job.routes");
const eventRoutes = require("./routes/event.routes");
const accommodationRoutes = require("./routes/accommodation.routes");

router.use("/jobs", jobRoutes);
router.use("/events", eventRoutes);
router.use("/accommodations", accommodationRoutes);

module.exports = router;
