const { body, validationResult } = require("express-validator");

const jobApplicationValidator = [
  [
    body("job_uuid")
      .exists()
      .withMessage("job_uuid is missing")
      .notEmpty()
      .withMessage("job_uuid is empty")
      .isString()
      .withMessage("job_uuid must be a string"),
    body("fileURL")
      .exists()
      .withMessage("fileURL is missing")
      .notEmpty()
      .withMessage("fileURL is empty")
      .isString()
      .withMessage("fileURL must be a String"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: "invalid payload", ...errors });
    } else {
      next();
    }
  },
];

module.exports = jobApplicationValidator;
