const mongoose = require('mongoose');
const CopySchema = mongoose.Schema({
    itemName : String,
    price : Number,
    quantity : Number,
    size : String,
   
});

module.exports = new mongoose.model("Copies_Data",CopySchema);