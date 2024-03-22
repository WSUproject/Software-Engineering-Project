const service = require("../services/job.service");

exports.createJob = async (req, res, next) => {
  try {
    const job = await service.createJob(req.body);
    res.status(201).json({
      message: "Job created successfully",
      job: job,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllJobs = async (req, res, next) => {
  try {
    const jobs = await service.getAllJobs();
    res.send(jobs);
  } catch (error) {
    next(error);
  }
};

exports.getJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await service.getJobById(id);
    res.send(job);
  } catch (error) {
    next(error);
  }
};

exports.deleteJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    service.deleteJobById(id);
    res.send({ message: "Job deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    var udpatedJob = await service.updateJobById(id, req.body);
    res.send({
      message: "Job updated successfully",
      udpatedJob,
    });
  } catch (error) {
    next(error);
  }
};
