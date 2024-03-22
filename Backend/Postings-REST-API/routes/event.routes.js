const eventController = require("../controllers/event.controller");
const createEventValidator = require("../validators/create-event.validator");
const express = require("express");

const router = express.Router();
router.post("/", createEventValidator, eventController.createEvent);

router.get("/", eventController.getAllEvents);

router.get("/:id", eventController.getEventById);

router.delete("/:id", eventController.deleteEventById);

router.put("/:id", createEventValidator, eventController.updateEventById);

module.exports = router;
