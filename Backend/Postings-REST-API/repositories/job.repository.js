const db = require("../db");
const Jobs = require("../models/jobs")

module.exports.create = async (jobDetails) => {
  try {
    const job = await Jobs.create(jobDetails);
    return job;
  } catch (error) {
    throw new Error("Error creating the job.");
  }
};

// module.exports.getAllJobs = async () => {
//   const employees = await db.query("selecd 1");
//   return employees;
// };

// module.exports.getJobById = async (id) => {
//   const employee = await db.query("select * from jobs where id = ?", [id]);
//   return employee;
// };
