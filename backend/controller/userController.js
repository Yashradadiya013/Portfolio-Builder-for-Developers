const user = require("../model/user");
const joi = require("joi");

const sighupValidation = joi.object({
  username: joi.string().trim().required().min(3).max(30),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  portfolios: joi.array().items(joi.string().hex().length(24)),
});
const signUp = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  signUp,
};
