const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidator");

const PublisherDetailsSchema = new mongoose.Schema({
  firstName: DEFAULT_VALIDATION,
  lastName: DEFAULT_VALIDATION,
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249__340.png",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = PublisherDetailsSchema;
