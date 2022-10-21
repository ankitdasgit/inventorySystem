const mongoose = require('mongoose');
const PenSchema = mongoose.Schema({
    itemName : String,
    price : Number,
    quantity : Number
});

module.exports = new mongoose.model("Pen",PenSchema);