const Joi = require("joi");

const validateCardWithJoi = (card) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    genre: Joi.string().min(2).required(),
    length: Joi.string().min(2).required(),
    language: Joi.string().min(2).required(),
    synopsis: Joi.string().min(2).required(),
    script_treatment: Joi.string().min(2).allow(""),
    fullScript: Joi.string().min(2).allow(""),
    screenwriter: Joi.string().min(2).allow(""),
  });
  return schema.validate(card);
};

module.exports = validateCardWithJoi;
