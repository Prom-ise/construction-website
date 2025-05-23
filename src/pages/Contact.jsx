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

      <div className="container mx-auto px-[4em] my-[7em]">
        <div className="flex flex-row justify-center items-center gap-x-4">
          <div className="w-6/12">
            <label htmlFor="name" className="block text-black mb-1">
              NAME
            </label>
            <input
              id="name"
              className="bg-[#222630] w-full px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="name"
              placeholder="Your Name"
              type="text"
            />
          </div>

          <div className=" w-6/12">
            <label htmlFor="email" className="block text-black mb-1">
              EMAIL
            </label>
            <input
              id="email"
              className="bg-[#222630] w-full px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="email"
              placeholder="Your Email"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-x-4 my-5">
          <div className="w-6/12">
            <label htmlFor="tel" className="block text-black mb-1">
              CONTACT
            </label>
            <input
            id="tel"
            className="bg-[#222630] w-full px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="tel"
            placeholder="Contact Number"
            type="number"
          />
          </div>
          
          <div className="w-6/12">
            <label htmlFor="text" className="block text-black mb-1">
              SUBJECT
            </label>
            {/* <input
            className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="text"
            placeholder="Enter email or username"
            type="text"
          /> */}
          <select className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]" name="subject" id="subject">
            <option value="">Please select your subject</option>
            <option value="Building from scratch">Building from scratch</option>
            <option value="Completing">Completing</option>
            <option value="Evaluation">Evaluation</option>
            <option value="Drainage">Drainage</option>
            <option value="Road">Road</option>
            <option value="Shops, malls,mart, complexes">Shops, malls,mart, complexes</option>
            <option value="Bridges">Bridges</option>
            <option value="Warehouses">Warehouses</option>
            <option value="Pens and farmhouses">Pens and farmhouses</option>
          </select>
          </div>
          
        </div>
        <div>
<label htmlFor="message" className="block text-black mb-1">MESSAGE</label>
        <textarea
        id="message"
          className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] resize-none"
          placeholder="Enter your message here..."
          rows="7"
        />
        </div>
      
      </div>
    </div>
  );
};

export default Contact;
