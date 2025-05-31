import { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchService, setSearchService] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchBookings = async () => {
    try {
      const res = await axios.get("https://construct-backend.onrender.com/api/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Error loading bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    let result = bookings;

    if (searchService.trim()) {
      result = result.filter((b) =>
        b.service?.toLowerCase().includes(searchService.toLowerCase())
      );
    }

    if (dateFrom) {
      result = result.filter((b) => new Date(b.date) >= new Date(dateFrom));
    }
    if (dateTo) {
      result = result.filter((b) => new Date(b.date) <= new Date(dateTo));
    }

    setFiltered(result);
  }, [searchService, dateFrom, dateTo, bookings]);

const handleComplete = async (id, currentStatus) => {
  const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
  if (!window.confirm("Are you sure?")) return;

  try {
    await axios.patch(
      `https://construct-backend.onrender.com/api/bookings/${id}/complete`,
      { status: newStatus },
      {  headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          }, }
    );
    alert("Marked as completed.");
    fetchBookings();
  } catch (err) {
    console.error("Error in marking booking as completed:", err);
    alert("Failed to mark booking as completed. Please check console for details.");
  }
};

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await axios.delete(`https://construct-backend.onrender.com/api/bookings/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBookings();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by service"
          className="border px-3 py-2 rounded"
          value={searchService}
          onChange={(e) => setSearchService(e.target.value)}
        />
        <input
          type="date"
          className="border px-3 py-2 rounded"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <input
          type="date"
          className="border px-3 py-2 rounded"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((b) => (
            <div key={b._id} className="bg-white p-4 rounded shadow border">
              <p><strong>Name:</strong> {b.name}</p>
              <p><strong>Email:</strong> {b.email}</p>
              <p><strong>Service:</strong> {b.service}</p>
              <p><strong>Date:</strong> {new Date(b.date).toLocaleString()}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={b.status === "completed" ? "text-green-600" : "text-yellow-600"}>
  {b.status === "completed" ? "Completed" : "Pending"}
</span>

              </p>
              <div className="mt-2 space-x-2">
               {b.status !== "completed" && (
  <button
    onClick={() => handleComplete(b._id, b.status)}
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
