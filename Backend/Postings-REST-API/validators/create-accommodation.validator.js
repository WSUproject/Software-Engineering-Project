const { body, validationResult } = require("express-validator");

const accommodationValidator = [
  [
    body("roomType")
      .exists()
      .withMessage("Room type is missing")
      .notEmpty()
      .withMessage("Room type is empty")
      .isString()
      .withMessage("Room type must be a string"),
    body("imageURL").isString().withMessage("imageURL name must be a string"),
    body("moveIn")
      .exists()
      .withMessage("Move-in date is missing")
      .notEmpty()
      .withMessage("Move-in date is empty")
      .matches(/^\d{4}-\d{2}-\d{2}$/, "i")
      .withMessage("Move-in date must be in YYYY-MM-DD format"),
    body("rent")
      .exists()
      .withMessage("Rent is missing")
      .notEmpty()
      .withMessage("Rent is empty")
      .isNumeric()
      .withMessage("Rent must be a number"),
    body("space").isString().withMessage("Space must be a string"),
    body("amenities").isString().withMessage("Amenities must be a string"),
    body("rules").isString().withMessage("Rules must be a string"),
    body("location").isString().withMessage("Location must be a string"),
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
