const accommodationRepository = require("../repositories/accommodation.repository");

module.exports.createAccommodation = async (accommodationDetails) => {
  try {
    const accommodation = await accommodationRepository.create(
      accommodationDetails
    );
    return accommodation;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllAccommodations = async () => {
  try {
    const res = await accommodationRepository.getAllAccommodations();
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports.getAccommodationById = async (id) => {
  try {
    const accommodation = await accommodationRepository.getAccommodationById(
      id
    );
    return accommodation;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteAccommodationById = async (id) => {
  try {
    const result = await accommodationRepository.deleteAccommodationById(id);
    if (result === 0) throw new Error("No accommodation with given ID found");
  } catch (error) {
    throw error;
  }
};

module.exports.updateAccommodationById = async (id, accommodationDetails) => {
  try {
    const result = await accommodationRepository.updateAccommodationById(
      id,
      accommodationDetails
    );
    if (result[0] !== 1)
      throw new Error("Accommodation with given ID not found");
    else if (result[0] == 1) {
      const updatedAccommodation =
        await accommodationRepository.getAccommodationById(id);
      return updatedAccommodation;
    }
  } catch (error) {
    throw error;
  }
};
