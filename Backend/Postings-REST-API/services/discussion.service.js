const discussionRepository = require("../repositories/discussion.repository");
const ownerValidation = require("../utils/ownerUpdateDeleteValidator");

module.exports.createDiscussion = async (discussionDetails) => {
  try {
    const discussion = await discussionRepository.create(discussionDetails);
    return discussion;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllDiscussionsForAccomodation = async (id, userId) => {
  try {
    const res = await discussionRepository.getAllDiscussionsForAccomodation(id);
    return res;
  } catch (error) {
    throw error;
  }
};
module.exports.getAllDiscussionsForAccomodationForUser = async (id, userId) => {
  try {
    const res =
      await discussionRepository.getAllDiscussionsForAccomodationForUser(
        id,
        userId
      );
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports.getDiscussionById = async (id) => {
  try {
    const discussion = await discussionRepository.getDiscussionById(id);
    return discussion;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteDiscussionById = async (id, user_uuid) => {
  try {
    const data = await discussionRepository.getDiscussionById(id);
    if (!ownerValidation(user_uuid, data))
      throw new Error("Unable to delete discussion created by other user");
    const result = await discussionRepository.deleteDiscussionById(id);
    if (result === 0) throw new Error("No discussion with given ID found");
  } catch (error) {
    throw error;
  }
};

module.exports.updateDiscussionById = async (id, discussionDetails) => {
  try {
    const data = await discussionRepository.getDiscussionById(id);
    if (!ownerValidation(user_uuid, data))
      throw new Error("Unable to delete discussion created by other user");
    const result = await discussionRepository.updateDiscussionById(
      id,
      discussionDetails
    );
    if (result[0] !== 1) throw new Error("Discussion with given ID not found");
    else if (result[0] == 1) {
      const updatedDiscussion = await discussionRepository.getDiscussionById(
        id
      );
      return updatedDiscussion;
    }
  } catch (error) {
    throw error;
  }
};

const validateSameUserUpdateAndDelete = () => {};
