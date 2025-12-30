import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles.css";

export default function AdminDashboard() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    api.get("/admin/reservations").then(res => setReservations(res.data));
  }, []);

  return (
    <div className="container">
      <h2>All Reservations</h2>

      {reservations.map(r => (
        <div key={r._id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          <p><b>User:</b> {r.user.name}</p>
          <p><b>Date:</b> {r.date}</p>
          <p><b>Time:</b> {r.timeSlot}</p>
          <p><b>Guests:</b> {r.guests}</p>
        </div>
      ))}
    </div>
  );
}
