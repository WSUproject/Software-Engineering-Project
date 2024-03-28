const { Discussions } = require("../models");
module.exports.create = async (discussionDetails) => {
  try {
    const discussion = await Discussions.create(discussionDetails);
    return discussion;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllDiscussionsForAccomodation = async (
  accommodation_uuid
) => {
  try {
    const discussions = await Discussions.findAll({
      where: { accommodation_uuid },
    });
    return discussions;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllDiscussionsForAccomodationForUser = async (
  accommodation_uuid,
  user_uuid
) => {
  try {
    const discussions = await Discussions.findAll({
      where: { accommodation_uuid, user_uuid },
    });
    return discussions;
  } catch (error) {
    throw error;
  }
};

module.exports.getDiscussionById = async (id) => {
  try {
    const discussion = await Discussions.findOne({
      where: { uuid: id },
    });
    return discussion;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteDiscussionById = async (id) => {
  try {
    const result = await Discussions.destroy({
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateDiscussionById = async (id, discussionDetails) => {
  try {
    const result = await Discussions.update(discussionDetails, {
      where: { uuid: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
