import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const projectType = new URLSearchParams(location.search).get("type") || "";

  const [num1] = useState(Math.floor(Math.random() * 10));
  const [num2] = useState(Math.floor(Math.random() * 10));
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType,
    date: new Date().toISOString().split("T")[0], // auto-filled date
    service: projectType,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(userAnswer) !== num1 + num2) {
      setStatus("captchaError");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://construct-backend.onrender.com/api/bookings", {
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
    <div className="p-6 max-w-xl mt-[5em] mx-auto my-10 bg-white text-black shadow rounded">
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
          type="text"
          name="service"
          required
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

        <div className="flex items-center space-x-2">
          <label className="text-sm">
            What is {num1} + {num2}? (to verify you're human)
          </label>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            required
            className="border p-1 rounded w-20"
          />
        </div>

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
        {status === "captchaError" && (
          <p className="text-red-600 mt-2">Incorrect answer. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Book;
