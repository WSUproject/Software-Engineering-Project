const jobController = require("../controllers/job.controller");
const createJobValidator = require("../validators/create-job.validator");
const express = require("express");

const router = express.Router();
router.post("/", createJobValidator, jobController.createJob);

router.get("/", jobController.getAllJobs);

router.get("/:id", jobController.getJobById);

router.delete("/:id", jobController.deleteJobById);

router.put("/:id", createJobValidator, jobController.updateJobById);

module.exports = router;
