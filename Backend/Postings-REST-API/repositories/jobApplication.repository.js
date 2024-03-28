const { JobApplications } = require("../models");
module.exports.create = async (jobApplicationDetails) => {
  try {
    const jobApplication = await JobApplications.create(jobApplicationDetails);
    return jobApplication;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllJobApplicationsForJob = async (job_uuid) => {
  try {
    const jobApplications = await JobApplications.findAll({
      where: { job_uuid },
    });
    return jobApplications;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllJobApplicationsForJobForUser = async (
  job_uuid,
  user_uuid
) => {
  try {
    const jobApplications = await JobApplications.findAll({
      where: { job_uuid, user_uuid },
    });
    return jobApplications;
  } catch (error) {
    throw error;
  }
};

module.exports.getJobApplicationById = async (id) => {
  try {
    const jobApplication = await JobApplications.findOne({
      where: { uuid: id },
    });
    return jobApplication;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteJobApplicationById = async (id) => {
  try {
    const result = await JobApplications.destroy({
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateJobApplicationById = async (id, jobApplicationDetails) => {
  try {
    const result = await JobApplications.update(jobApplicationDetails, {
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
