const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const Reservation = require("../models/Reservation");
const Table = require("../models/Table");

router.post("/", auth, async (req, res) => {
  const { date, timeSlot, guests } = req.body;
  const tables = await Table.find({ capacity: { $gte: guests } });

  for (const table of tables) {
    const booked = await Reservation.findOne({
      table: table._id,
      date,
      timeSlot,
      status: "ACTIVE"
    });

    if (!booked) {
      const reservation = await Reservation.create({
        user: req.user.id,
        table: table._id,
        date,
        timeSlot,
        guests
      });
      return res.json(reservation);
    }
  }
  res.status(409).json({ message: "No tables available" });
});

router.get("/my", auth, async (req, res) => {
  res.json(await Reservation.find({ user: req.user.id }).populate("table"));
});

router.delete("/:id", auth, async (req, res) => {
  await Reservation.findByIdAndUpdate(req.params.id, { status: "CANCELLED" });
  res.json({ message: "Cancelled" });
});

module.exports = router;
