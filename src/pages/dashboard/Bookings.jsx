// pages/dashboard/Bookings.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("adminToken");

  const fetchBookings = async () => {
    try {
      const res = await axios.get("/api/admin/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data);
    } catch (err) {
      console.error("Error loading bookings:", err);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.put(`/api/admin/bookings/${id}/complete`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings(); // refresh list
    } catch (err) {
      console.error("Complete error:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`/api/admin/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings(); // refresh list
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b._id} className="bg-white p-4 rounded shadow border">
              <p><strong>Name:</strong> {b.name}</p>
              <p><strong>Email:</strong> {b.email}</p>
              <p><strong>Date:</strong> {new Date(b.date).toLocaleString()}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={b.completed ? "text-green-600" : "text-yellow-600"}>
                  {b.completed ? "Completed" : "Pending"}
                </span>
              </p>
              <div className="mt-2 space-x-2">
                {!b.completed && (
                  <button
                    onClick={() => handleComplete(b._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm"
                  >
                    Mark as Completed
                  </button>
                )}
                <button
                  onClick={() => handleDelete(b._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
