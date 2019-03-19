const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  url: { type: String, required: true },
  savedate: { type: Date, default: Date.now }
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;