const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableNumber: Number,
  capacity: Number
});

module.exports = mongoose.model("Table", tableSchema);
