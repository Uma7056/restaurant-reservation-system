require("dotenv").config();
const mongoose = require("mongoose");
const Table = require("../models/Table");

mongoose.connect(process.env.MONGO_URI, {
  dbName: "restaurantDB",
});

const tables = [
  { tableNumber: 1, capacity: 2 },
  { tableNumber: 2, capacity: 4 },
  { tableNumber: 3, capacity: 6 },
];

Table.insertMany(tables)
  .then(() => {
    console.log("✅ Tables inserted");
    process.exit();
  })
  .catch(console.error);
