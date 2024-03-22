const eventRepository = require("../repositories/event.repository");

module.exports.createEvent = async (eventDetails) => {
  try {
    const event = await eventRepository.create(eventDetails);
    return event;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllEvents = async () => {
  try {
    const res = await eventRepository.getAllEvents();
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports.getEventById = async (id) => {
  try {
    const event = await eventRepository.getEventById(id);
    return event;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteEventById = async (id) => {
  try {
    const result = await eventRepository.deleteEventById(id);
    if (result === 0) throw new Error("No event with given ID found");
  } catch (error) {
    throw error;
  }
};

module.exports.updateEventById = async (id, eventDetails) => {
  try {
    const result = await eventRepository.updateEventById(id, eventDetails);
    if (result[0] !== 1) throw new Error("Event with given ID not found");
    else if (result[0] == 1) {
      const updatedEvent = await eventRepository.getEventById(id);
      return updatedEvent;
    }
  } catch (error) {
    throw error;
  }
};
