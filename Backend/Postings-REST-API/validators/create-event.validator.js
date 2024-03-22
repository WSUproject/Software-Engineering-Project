const { body, validationResult } = require("express-validator");

const jobValidator = [
  [
    body("eventName")
      .exists()
      .withMessage("Event name is missing")
      .notEmpty()
      .withMessage("Event name is empty")
      .isString()
      .withMessage("Event name must be a string"),
    body("imageURL").isString().withMessage("imageURL name must be a string"),
    body("eventOrganizer")
      .exists()
      .withMessage("Event Organizer is missing")
      .notEmpty()
      .withMessage("Event Organizer is empty")
      .isString()
      .withMessage("Event Organizer must be a string"),
    body("eventTag").isString().withMessage("Event Tag must be a string"),
    body("date")
      .exists()
      .withMessage("Date is missing")
      .notEmpty()
      .withMessage("Date is empty")
      .matches(/^\d{4}-\d{2}-\d{2}$/, "i")
      .withMessage("Date must be in YYYY-MM-DD format"),
    body("startTime")
      .matches(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/, "i")
      .withMessage("Start Time must be in HH:MM 24 hours format"),
    body("endTime")
      .matches(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/, "i")
      .withMessage("End Time must be in HH:MM 24 hours format"),
    body("state")
      .exists()
      .withMessage("State is missing")
      .notEmpty()
      .withMessage("State is empty")
      .isString()
      .withMessage("State must be a string"),
    body("city")
      .exists()
      .withMessage("City is missing")
      .notEmpty()
      .withMessage("City is empty")
      .isString()
      .withMessage("City must be a string"),
    body("venue").isString().withMessage("Venue must be a string"),
    body("description").isString().withMessage("Description must be a string"),
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

module.exports = jobValidator;
