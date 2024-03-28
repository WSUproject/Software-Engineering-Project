const jobApplicationRepository = require("../repositories/jobApplication.repository");
const ownerValidation = require("../utils/ownerUpdateDeleteValidator");

module.exports.createJobApplication = async (jobApplicationDetails) => {
  try {
    const jobApplication = await jobApplicationRepository.create(
      jobApplicationDetails
    );
    return jobApplication;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllJobApplicationsForJob = async (id, userId) => {
  try {
    const res = await jobApplicationRepository.getAllJobApplicationsForJob(id);
    return res;
  } catch (error) {
    throw error;
  }
};
module.exports.getAllJobApplicationsForJobForUser = async (id, userId) => {
  try {
    const res =
      await jobApplicationRepository.getAllJobApplicationsForJobForUser(
        id,
        userId
      );
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports.getJobApplicationById = async (id) => {
  try {
    const jobApplication = await jobApplicationRepository.getJobApplicationById(
      id
    );
    return jobApplication;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteJobApplicationById = async (id, user_uuid) => {
  try {
    const data = await jobApplicationRepository.getJobApplicationById(id);
    if (!ownerValidation(user_uuid, data))
      throw new Error("Unable to delete jobApplication created by other user");
    const result = await jobApplicationRepository.deleteJobApplicationById(id);
    if (result === 0) throw new Error("No jobApplication with given ID found");
  } catch (error) {
    throw error;
  }
};

module.exports.updateJobApplicationById = async (id, jobApplicationDetails) => {
  try {
    const data = await jobApplicationRepository.getJobApplicationById(id);
    if (!ownerValidation(user_uuid, data))
      throw new Error("Unable to delete jobApplication created by other user");
    const result = await jobApplicationRepository.updateJobApplicationById(
      id,
      jobApplicationDetails
    );
    if (result[0] !== 1)
      throw new Error("JobApplication with given ID not found");
    else if (result[0] == 1) {
      const updatedJobApplication =
        await jobApplicationRepository.getJobApplicationById(id);
      return updatedJobApplication;
    }
  } catch (error) {
    throw error;
  }
};

const validateSameUserUpdateAndDelete = () => {};
