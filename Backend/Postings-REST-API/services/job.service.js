const jobRepository = require("../repositories/job.repository");

module.exports.createJob = async (jobDetails) => {
  try {
    const job = await jobRepository.create(jobDetails);
    return job;
  } catch (error) {
    throw new Error("Error in creating job service.");
  }
};

module.exports.validateJob = (jobDetails) => {
  const {
    institution_name,
    post,
    level,
    vacancy,
    type,
    salary,
    deadline,
    state,
    city,
    venue,
    education,
    experience,
    specifications,
    description,
  } = req.body;

  const errors = [];

  if (!institution_name) errors.push("Institution name is required.");
  if (!post) errors.push("Post is required.");
  if (!level) errors.push("Level is required.");
  if (typeof vacancy !== "number") errors.push("Vacancy must be a number.");
  if (!type) errors.push("Type is required.");
  if (typeof salary !== "number") errors.push("Salary must be a number.");

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  next();
};

module.exports.getAllJobs = async () => {
  const res = await jobRepository.getAllJobs();
  return res;
};

module.exports.getJobById = async (id) => {
  const job = await jobRepository.getJobById(id);
  return job;
};
