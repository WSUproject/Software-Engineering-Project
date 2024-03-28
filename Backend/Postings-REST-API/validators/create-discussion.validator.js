const { body, validationResult } = require("express-validator");

const accommodationValidator = [
  [
    body("accommodation_uuid")
      .exists()
      .withMessage("user_uuid is missing")
      .notEmpty()
      .withMessage("user_uuid is empty")
      .isString()
      .withMessage("user_uuid must be a string"),
    body("message")
      .exists()
      .withMessage("Message is missing")
      .notEmpty()
      .withMessage("Message is empty")
      .isString()
      .withMessage("Message must be a String"),
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

module.exports = accommodationValidator;
