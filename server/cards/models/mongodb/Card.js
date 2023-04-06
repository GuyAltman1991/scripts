const mongoose = require("mongoose");
const PublisherDetailsSchema = require("./PublisherDetails");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidator");

const CardSchema = new mongoose.Schema({
  publisherDetails: PublisherDetailsSchema,
  title: DEFAULT_VALIDATION,
  genre: DEFAULT_VALIDATION,
  lentgth: DEFAULT_VALIDATION,
  synopsis: String,
  script_treatment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  language: String,
});

const Card = mongoose.model("card", CardSchema);

module.exports = Card;
