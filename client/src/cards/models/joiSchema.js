import Joi from "joi";

const createScriptSchema = {
  title: Joi.string().min(2).max(20).required(),
  genre: Joi.any(),
  length: Joi.any(),
  language: Joi.string().min(2).max(20).required(),
  synopsis: Joi.string().min(10).max(1500).required(),
  anotherScreenwriter: Joi.string().min(2),
  script_treatment: Joi.string().min(10),
  fullScript: Joi.string().min(10),
};

export default createScriptSchema;
