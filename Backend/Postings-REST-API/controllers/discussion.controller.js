const service = require("../services/discussion.service");

exports.createDiscussion = async (req, res, next) => {
  try {
    var discussionData = { ...req.body };
    discussionData.user_uuid = req.user.uuid;
    const discussion = await service.createDiscussion(discussionData);
    res.status(201).json({
      message: "Discussion created successfully",
      discussion: discussion,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllDiscussionsForAccomodation = async (req, res, next) => {
  try {
    const discussions = await service.getAllDiscussionsForAccomodation(
      req.params.accomodationId
    );
    res.send(discussions);
  } catch (error) {
    next(error);
  }
};

exports.getAllDiscussionsForAccomodationForUser = async (req, res, next) => {
  try {
    const discussions = await service.getAllDiscussionsForAccomodationForUser(
      req.params.accomodationId,
      req.user.uuid
    );
    res.send(discussions);
  } catch (error) {
    next(error);
  }
};

exports.getDiscussionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const discussion = await service.getDiscussionById(id);
    res.send(discussion);
  } catch (error) {
    next(error);
  }
};

exports.deleteDiscussionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    service.deleteDiscussionById(id, req.user.uuid);
    res.send({ message: "Discussion deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateDiscussionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    var udpatedDiscussion = await service.updateDiscussionById(id, req.body);
    res.send({
      message: "Discussion updated successfully",
      udpatedDiscussion,
    });
  } catch (error) {
    next(error);
  }
};
