const Joi = require("joi");

const validateCardWithJoi = (card) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    genre: Joi.string().min(2).required(),
    length: Joi.string().min(2).required(),
    language: Joi.string().min(2).required(),
    synopsis: Joi.string().min(2).required(),
    script_treatment: Joi.string().min(2).allow(""),

    publisherDetails: Joi.object()
      .keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string()
          .ruleset.pattern(
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
          )
          .rule({ message: "mail mast be a valid mail" })
          .required(),
        user_id: Joi.string().allow(""),
      })
      .required(),
  });
  return schema.validate(card);
};

module.exports = validateCardWithJoi;
