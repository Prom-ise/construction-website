import React, { useState } from "react";
import construct6 from "../assets/construct6.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = form;

    if (!name || !email || !phone || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Your message has been sent successfully!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div
        className="w-full bg-cover p-[4em] bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${construct6})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-start text-white">Contact Us</h1>
          <h3 className="text-white text-lg">Get in touch with us about your next construction project</h3>
        </div>
      </div>

      {/* Form Section */}
      <form className="container mx-auto px-[4em] my-[7em]" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center items-center gap-x-4">
          <div className="w-6/12">
            <label htmlFor="name" className="block text-black mb-1">NAME</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              type="text"
              className="bg-[#222630] w-full px-4 py-3 text-white rounded-lg border-2 focus:border-[#596A95] border-[#2B3040]"
              required
            />
          </div>

          <div className="w-6/12">
            <label htmlFor="email" className="block text-black mb-1">EMAIL</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              type="email"
              className="bg-[#222630] w-full px-4 py-3 text-white rounded-lg border-2 focus:border-[#596A95] border-[#2B3040]"
              required
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-x-4 my-5">
          <div className="w-6/12">
            <label htmlFor="phone" className="block text-black mb-1">CONTACT</label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              type="tel"
              className="bg-[#222630] w-full px-4 py-3 text-white rounded-lg border-2 focus:border-[#596A95] border-[#2B3040]"
              required
            />
          </div>

          <div className="w-6/12">
            <label htmlFor="subject" className="block text-black mb-1">SUBJECT</label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="bg-[#222630] w-full px-4 py-3 text-white rounded-lg border-2 focus:border-[#596A95] border-[#2B3040]"
              required
            >
              <option value="">Please select your subject</option>
              <option value="Building from scratch">Building from scratch</option>
              <option value="Completing">Completing</option>
              <option value="Evaluation">Evaluation</option>
              <option value="Drainage">Drainage</option>
              <option value="Road">Road</option>
              <option value="Shops, malls, mart, complexes">Shops, malls, mart, complexes</option>
              <option value="Bridges">Bridges</option>
              <option value="Warehouses">Warehouses</option>
              <option value="Pens and farmhouses">Pens and farmhouses</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block text-black mb-1">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            rows="7"
            className="bg-[#222630] w-full px-4 py-3 text-white rounded-lg border-2 focus:border-[#596A95] border-[#2B3040]"
            required
          />
        </div>

        {status && (
          <p className="mb-4 text-center font-semibold text-blue-500">{status}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
