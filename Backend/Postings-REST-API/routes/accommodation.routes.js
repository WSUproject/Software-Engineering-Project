const accommodationController = require("../controllers/accommodation.controller");
const createAccommodationValidator = require("../validators/create-accommodation.validator");
const express = require("express");

const router = express.Router();
router.post(
  "/",
  createAccommodationValidator,
  accommodationController.createAccommodation
);

router.get("/", accommodationController.getAllAccommodations);

router.get("/:id", accommodationController.getAccommodationById);

router.delete("/:id", accommodationController.deleteAccommodationById);

router.put("/:id", accommodationController.updateAccommodationById);

module.exports = router;
