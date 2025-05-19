import React from "react";
import construct6 from "../assets/construct6.jpg";

const Contact = () => {
  return (
    <div>
      <div
        className="w-full bg-cover p-[4em] bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${construct6})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-start text-white">
            Contact Us
          </h1>
          <h3>Get in touch with us about your next construction project</h3>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <input
          class="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          name="text"
          placeholder="Your Name"
          type="text"
        /><input
          class="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          name="email"
          placeholder="Your Email"
          type="text"
        />
        </div>
      </div>
    </div>
  );
};

export default Contact;
