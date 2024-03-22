const { create } = require("../repositories/job.repository");

module.exports.createJob = async (jobDetails) => {
  try {
    const job = await create(jobDetails);
    return job;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.validateJob = (req, res, next) => {
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
  if (vacancy)
    if (typeof vacancy !== "number") errors.push("Vacancy must be a number.");
  if (!type) errors.push("Type is required.");
  if (salary)
    if (typeof salary !== "number") errors.push("Salary must be a number.");
  if (!deadline) errors.push("Deadline is required.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deadline))
    errors.push("Deadline must be in YYYY-MM-DD format.");
  if (!state) errors.push("State is required.");
  if (!city) errors.push("City is required.");

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
