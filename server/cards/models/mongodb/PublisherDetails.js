const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidator");

const PublisherDetailsSchema = new mongoose.Schema({
  firstName: DEFAULT_VALIDATION,
  lastName: DEFAULT_VALIDATION,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = PublisherDetailsSchema;
