module.exports = function ownerValidator(user_uuid, object) {
  if (user_uuid == object.user_uuid) return true;
  return false;
};
