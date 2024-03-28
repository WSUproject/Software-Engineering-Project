const jobApplicationController = require("../controllers/jobApplication.controller");
const createJobApplicationValidator = require("../validators/create-jobApplication.validator");
const express = require("express");

const router = express.Router();
router.post(
  "/",
  createJobApplicationValidator,
  jobApplicationController.createJobApplication
);

router.get("/job/:jobId", jobApplicationController.getAllJobApplicationsForJob);

router.get(
  "/user/:jobId",
  jobApplicationController.getAllJobApplicationsForJobForUser
);

router.get("/:id", jobApplicationController.getJobApplicationById);

router.delete("/:id", jobApplicationController.deleteJobApplicationById);

router.put(
  "/:id",
  createJobApplicationValidator,
  jobApplicationController.updateJobApplicationById
);

module.exports = router;
