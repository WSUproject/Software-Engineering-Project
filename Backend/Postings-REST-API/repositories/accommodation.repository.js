const { Accommodations } = require("../models");
module.exports.create = async (accommodationDetails) => {
  try {
    const accommodation = await Accommodations.create(accommodationDetails);
    return accommodation;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllAccommodations = async () => {
  try {
    const accommodations = await Accommodations.findAll();
    return accommodations;
  } catch (error) {
    throw error;
  }
};

module.exports.getAccommodationById = async (id) => {
  try {
    const accommodation = await Accommodations.findOne({
      where: { uuid: id },
    });
    return accommodation;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteAccommodationById = async (id) => {
  try {
    const result = await Accommodations.destroy({
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateAccommodationById = async (id, accommodationDetails) => {
  try {
    const result = await Accommodations.update(accommodationDetails, {
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
