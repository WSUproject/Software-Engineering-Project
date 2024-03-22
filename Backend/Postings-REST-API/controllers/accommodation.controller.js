const service = require("../services/accommodation.service");

exports.createAccommodation = async (req, res, next) => {
  try {
    const accommodation = await service.createAccommodation(req.body);
    res.status(201).json({
      message: "Accommodation created successfully",
      accommodation: accommodation,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllAccommodations = async (req, res, next) => {
  try {
    const accommodations = await service.getAllAccommodations();
    res.send(accommodations);
  } catch (error) {
    next(error);
  }
};

exports.getAccommodationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const accommodation = await service.getAccommodationById(id);
    res.send(accommodation);
  } catch (error) {
    next(error);
  }
};

exports.deleteAccommodationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    service.deleteAccommodationById(id);
    res.send({ message: "Accommodation deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateAccommodationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    var udpatedAccommodation = await service.updateAccommodationById(
      id,
      req.body
    );
    res.send({
      message: "Accommodation updated successfully",
      udpatedAccommodation,
    });
  } catch (error) {
    next(error);
  }
};
