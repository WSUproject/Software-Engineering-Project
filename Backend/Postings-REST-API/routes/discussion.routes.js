const discussionController = require("../controllers/discussion.controller");
const createDiscussionValidator = require("../validators/create-discussion.validator");
const express = require("express");

const router = express.Router();
router.post(
  "/",
  createDiscussionValidator,
  discussionController.createDiscussion
);

router.get(
  "/accommodation/:accomodationId",
  discussionController.getAllDiscussionsForAccomodation
);

router.get(
  "/user/:accomodationId",
  discussionController.getAllDiscussionsForAccomodationForUser
);

router.get("/:id", discussionController.getDiscussionById);

router.delete("/:id", discussionController.deleteDiscussionById);

router.put(
  "/:id",
  createDiscussionValidator,
  discussionController.updateDiscussionById
);

module.exports = router;
