import { useEffect, useState } from "react";
import api from "../services/api";

export default function MyReservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/reservations/my")
      .then((res) => {
        setReservations(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-4">Loading reservations...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">My Reservations</h2>

      {reservations.length === 0 && (
        <p className="text-gray-500">No reservations found.</p>
      )}

      <div className="space-y-4">
        {reservations.map((r) => (
          <div
            key={r._id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">
                  Date: <span className="text-gray-700">{r.date}</span>
                </p>
                <p>
                  Time: <span className="text-gray-700">{r.timeSlot}</span>
                </p>
                <p>
                  Guests: <span className="text-gray-700">{r.guests}</span>
                </p>
                <p>
                  Table:{" "}
                  <span className="text-gray-700">
                    Table {r.table?.tableNumber} ({r.table?.capacity} seats)
                  </span>
                </p>
              </div>

              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  r.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
