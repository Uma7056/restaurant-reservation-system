const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  table: { type: mongoose.Schema.Types.ObjectId, ref: "Table" },
  date: String,
  timeSlot: String,
  guests: Number,
  status: { type: String, default: "ACTIVE" }
});

module.exports = mongoose.model("Reservation", reservationSchema);
