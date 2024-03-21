const jobService = require("../services/job.service");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const jobDetails = req.body;
    const data = await jobService.createJob(jobDetails);
    res.status(201).json({
      message: "Job created successfully",
      job: data,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = await jobService.createJob();
});

router.get("/", async (req, res, next) => {
  const data = await jobService.getAllJobs();
  res.send(data);
});

router.get("/:id", async (req, res, next) => {
  const job = await jobService.getJobById(req.params.id);
  return job;
});

module.exports = router;
