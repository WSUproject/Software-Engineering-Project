const { Events } = require("../models");
module.exports.create = async (eventDetails) => {
  try {
    const event = await Events.create(eventDetails);
    return event;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllEvents = async () => {
  try {
    const events = await Events.findAll();
    return events;
  } catch (error) {
    throw error;
  }
};

module.exports.getEventById = async (id) => {
  try {
    const event = await Events.findOne({
      where: { uuid: id },
    });
    return event;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteEventById = async (id) => {
  try {
    const result = await Events.destroy({
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateEventById = async (id, eventDetails) => {
  try {
    const result = await Events.update(eventDetails, {
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
