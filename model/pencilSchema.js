const mongoose = require("mongoose");
const PencilSchema = new mongoose.Schema({
  itemName: String,
  price: Number,
  quantity: Number,
});


module.exports = new mongoose.model("pencil",PencilSchema);
