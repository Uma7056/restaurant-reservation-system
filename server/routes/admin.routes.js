const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { isAdmin } = require("../middleware/role.middleware");
const Reservation = require("../models/Reservation");

router.get("/reservations", auth, isAdmin, async (req, res) => {
  const filter = req.query.date ? { date: req.query.date } : {};
  res.json(await Reservation.find(filter).populate("user table"));
});

module.exports = router;
