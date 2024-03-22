const service = require("../services/event.service");

exports.createEvent = async (req, res, next) => {
  try {
    const event = await service.createEvent(req.body);
    res.status(201).json({
      message: "Event created successfully",
      event: event,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllEvents = async (req, res, next) => {
  try {
    const events = await service.getAllEvents();
    res.send(events);
  } catch (error) {
    next(error);
  }
};

exports.getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await service.getEventById(id);
    res.send(event);
  } catch (error) {
    next(error);
  }
};

exports.deleteEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    service.deleteEventById(id);
    res.send({ message: "Event deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    var udpatedEvent = await service.updateEventById(id, req.body);
    res.send({
      message: "Event updated successfully",
      udpatedEvent,
    });
  } catch (error) {
    next(error);
  }
};
