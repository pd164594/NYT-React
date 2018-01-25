
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nytreact = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true},
  url: String,
});

const nytArticles = mongoose.model("nytArticles", nytreact);

module.exports = nytArticles;
