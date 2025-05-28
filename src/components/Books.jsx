import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const projectType = new URLSearchParams(location.search).get("type") || "";

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
  projectType,
  date: "",
  service: "",
});

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-10 bg-white text-black shadow rounded">
      <h2 className="text-xl font-bold mb-4">Book: {projectType}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
  <input
    name="name"
    required
    onChange={handleChange}
    placeholder="Your Name"
    className="w-full border p-2 rounded"
  />
  <input
    name="email"
    type="email"
    required
    onChange={handleChange}
    placeholder="Email"
    className="w-full border p-2 rounded"
  />
  <input
    name="phone"
    onChange={handleChange}
    placeholder="Phone Number"
    className="w-full border p-2 rounded"
  />
  <input
    type="date"
    name="date"
    required
    onChange={handleChange}
    className="w-full border p-2 rounded"
  />
  <input
    name="service"
    required
    // onChange={handleChange}
    value={projectType}
    readOnly
    className="w-full border p-2 rounded"
  />
  <textarea
    name="message"
    onChange={handleChange}
    placeholder="Message (Optional)"
    className="w-full border p-2 rounded"
  />
  <button
    type="submit"
    className="w-full bg-green-600 text-white p-2 rounded"
  >
    {status === "loading" ? "Submitting..." : "Submit Booking"}
  </button>
  {status === "success" && (
    <p className="text-green-600 mt-2">Booking sent successfully!</p>
  )}
  {status === "error" && (
    <p className="text-red-600 mt-2">Something went wrong.</p>
  )}
</form>

    </div>
  );
};

export default Book;
