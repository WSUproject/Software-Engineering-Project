const jobRepository = require("../repositories/job.repository");

module.exports.createJob = async (jobDetails) => {
  try {
    const job = await jobRepository.create(jobDetails);
    return job;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllJobs = async () => {
  try {
    const res = await jobRepository.getAllJobs();
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports.getJobById = async (id) => {
  try {
    const job = await jobRepository.getJobById(id);
    return job;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteJobById = async (id) => {
  try {
    const result = await jobRepository.deleteJobById(id);
    if (result === 0) throw new Error("No job with given ID found");
  } catch (error) {
    throw error;
  }
};

module.exports.updateJobById = async (id, jobDetails) => {
  try {
    const result = await jobRepository.updateJobById(id, jobDetails);
    if (result[0] !== 1) throw new Error("Job with given ID not found");
    else if (result[0] == 1) {
      const updatedJob = await jobRepository.getJobById(id);
      return updatedJob;
    }
  } catch (error) {
    throw error;
  }
};
