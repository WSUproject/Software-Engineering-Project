const express = require("express");
const router = express.Router();

const jobRoutes = require("./routes/job.routes");
const eventRoutes = require("./routes/event.routes");
const accommodationRoutes = require("./routes/accommodation.routes");
const discussionRoutes = require("./routes/discussion.routes");
const jobApplicationRoutes = require("./routes/jobApplication.routes");

router.use("/jobs", jobRoutes);
router.use("/events", eventRoutes);
router.use("/accommodations", accommodationRoutes);
router.use("/discussions", discussionRoutes);
router.use("/jobApplications", jobApplicationRoutes);

module.exports = router;
