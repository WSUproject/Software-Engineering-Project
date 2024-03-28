const service = require("../services/jobApplication.service");

exports.createJobApplication = async (req, res, next) => {
  try {
    var jobApplicationData = { ...req.body };
    jobApplicationData.user_uuid = req.user.uuid;
    const jobApplication = await service.createJobApplication(
      jobApplicationData
    );
    res.status(201).json({
      message: "JobApplication created successfully",
      jobApplication: jobApplication,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllJobApplicationsForJob = async (req, res, next) => {
  try {
    const jobApplications = await service.getAllJobApplicationsForJob(
      req.params.jobId
    );
    res.send(jobApplications);
  } catch (error) {
    next(error);
  }
};

exports.getAllJobApplicationsForJobForUser = async (req, res, next) => {
  try {
    const jobApplications = await service.getAllJobApplicationsForJobForUser(
      req.params.jobId,
      req.user.uuid
    );
    res.send(jobApplications);
  } catch (error) {
    next(error);
  }
};

exports.getJobApplicationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const jobApplication = await service.getJobApplicationById(id);
    res.send(jobApplication);
  } catch (error) {
    next(error);
  }
};

exports.deleteJobApplicationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    service.deleteJobApplicationById(id, req.user.uuid);
    res.send({ message: "JobApplication deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateJobApplicationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    var udpatedJobApplication = await service.updateJobApplicationById(
      id,
      req.body
    );
    res.send({
      message: "JobApplication updated successfully",
      udpatedJobApplication,
    });
  } catch (error) {
    next(error);
  }
};
