const { Jobs } = require("../models");
module.exports.create = async (jobDetails) => {
  try {
    const job = await Jobs.create(jobDetails);
    return job;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllJobs = async () => {
  try {
    const jobs = await Jobs.findAll();
    return jobs;
  } catch (error) {
    throw error;
  }
};

module.exports.getJobById = async (id) => {
  try {
    const job = await Jobs.findOne({
      where: { uuid: id },
    });
    return job;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteJobById = async (id) => {
  try {
    const result = await Jobs.destroy({
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateJobById = async (id, jobDetails) => {
  try {
    const result = await Jobs.update(jobDetails, {
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
