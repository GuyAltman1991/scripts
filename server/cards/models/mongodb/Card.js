const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidator");

const CardSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATION,
  genre: DEFAULT_VALIDATION,
  length: DEFAULT_VALIDATION,
  synopsis: {
    type: String,
    require: true,
  },
  script_treatment: String,
  fullScript: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [String],
  language: String,
  screenwriter: String,

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Card = mongoose.model("card", CardSchema);

module.exports = Card;
