import Joi, { any } from "joi";

const createScriptSchema = {
  title: Joi.string().min(2).max(20).required(),
  genre: Joi.any(),
  length: Joi.any(),
  language: Joi.string().min(2).max(20).required(),
  synopsis: Joi.string().min(10).max(1500).required(),
  anotherScreenwriter: Joi.string().min(2).allow(""),
  script_treatment: Joi.string().min(10).allow(),
  fullScript: Joi.string().min(10).allow(),
  id: Joi.any().allow(""),
};

export default createScriptSchema;
