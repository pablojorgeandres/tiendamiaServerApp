const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;