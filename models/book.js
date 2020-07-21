const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model("Book", bookSchema);

