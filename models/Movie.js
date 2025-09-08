const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  genre: String
});

module.exports = mongoose.model("Movie", MovieSchema);