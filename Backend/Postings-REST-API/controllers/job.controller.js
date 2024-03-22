const {
  createJob,
  validateJob,
  getAllJobs,
  getJobById,
} = require("../services/job.service");
const express = require("express");

const router = express.Router();

router.post("/", validateJob, async (req, res, next) => {
  try {
    const jobDetails = req.body;
    const data = await createJob(jobDetails);
    res.status(201).json({
      message: "Job created successfully",
      job: data,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const data = await getAllJobs();
  res.send(data);
});

router.get("/:id", async (req, res, next) => {
  const job = await getJobById(req.params.id);
  return job;
});

module.exports = router;
