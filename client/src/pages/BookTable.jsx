import { useState } from "react";
import api from "../services/api";
import "../styles.css";

export default function BookTable() {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  const bookTable = async () => {
    try {
      await api.post("/reservations", {
        date,
        timeSlot,
        guests,
      });
      setMessage("Reservation successful!");
    } catch {
      setMessage("No tables available");
    }
  };

  return (
    <div className="container">
      <h2>Book a Table</h2>

      <input type="date" style={{ marginRight: "8px" }} onChange={e => setDate(e.target.value)} />

      <select onChange={e => setTimeSlot(e.target.value)}>
        <option value="">Select Time Slot</option>
        <option>18:00-20:00</option>
        <option>20:00-22:00</option>
      </select>

      <input
        type="number"
        min="1"
        style={{ marginLeft: "8px" }}
        placeholder="Number of Guests"
        onChange={e => setGuests(e.target.value)}
      />
      <button style={{ marginLeft: "8px" }} onClick={bookTable}>Reserve Table</button>
      {message && <p>{message}</p>}
    </div>
  );
}
