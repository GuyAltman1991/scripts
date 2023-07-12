import Joi from "joi";

const createScriptSchema = {
  title: Joi.string().min(2).max(50).required(),
  genre: Joi.any(),
  length: Joi.any(),
  language: Joi.string().min(2).max(20).required(),
  synopsis: Joi.string().min(10).max(2000).required(),
  anotherScreenwriter: Joi.string().allow(""),
  script_treatment: Joi.string().allow(),
  fullScript: Joi.string().allow(),
  user_id: Joi.string().allow(""),
  userFirstName: Joi.string().allow(""),
  userLastName: Joi.string().allow(""),
  userImage: Joi.string().allow(""),
  userEmail: Joi.string().allow(""),
};

export default createScriptSchema;
