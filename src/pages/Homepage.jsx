import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq.jsx";
import construct1 from "../assets/construct1.jpg";
import construct2 from "../assets/construct2.jpg";
import construct3 from "../assets/construct3.jpg";
import { MdRealEstateAgent, MdOutlineNextPlan } from "react-icons/md";
import { FaThinkPeaks, FaBuilding } from "react-icons/fa";

const heroImages = [construct1, construct2, construct3];
const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Homepage">
      <div className="relative w-full h-[100dvh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}></div>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 flex flex-col md:flex-row w-full h-full items-center justify-between p-8 text-white">
          <div className="subSect w-full md:w-6/12">
            <p className="text-[rgb(254,93,20)] font-bold text-lg md:text-xl mb-2">
              Bumia co lmt - Construction Company
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Turning Dreams Into Durable Realities
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Dream, think, plan, build Building your own dream to durability;
              at what stage of building can you? Let's build you an ediphs you'd
              love happily ever after. Bumia construction company limited is
              here to make your dream come true, from the foundation to the
              roof, we are here to make your dream come true.
            </p>
            <div className="mt-6">
              <Link to="/about" className="button">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:w-5/12 items-center justify-center">
            {/* Reserved for future right-side content */}
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer border-2 border-white transition-all duration-300 ${
                currentIndex === index ? "bg-white" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="my-10 md:my-[5em]">
        <h1 className="text-center text-3xl mb-[1.5em] font-bold text-[#fe5d14]">
          Road to Ownership
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          <div className="card w-full mx-auto">
            <div className="content">
              <div className="flex justify-center items-center mb-[-1em] mt-[-.7em] gap-2">
                <h1 className="font-bold">DREAM</h1>
                <MdRealEstateAgent className="text-[#fe5d14]" />
              </div>
              <p className="para font-semibold text-gray-300">
                Did you ever want to own a property? Every real property began
                as a dream in the mind of its owner. What do you own today?
              </p>
            </div>
          </div>

          <div className="card w-full mx-auto">
            <div className="content">
              <div className="flex justify-center items-center mb-[-1em] mt-[-.7em] gap-2">
                <h1 className="font-bold">THINK</h1>
                <FaThinkPeaks className="text-[#fe5d14]" />
              </div>
              <p className="para font-semibold text-gray-300">
                Ownership comes with decision-making. Take a seat—how do you
                want to make yourself an owner?
              </p>
            </div>
          </div>

          <div className="card w-full mx-auto">
            <div className="content">
              <div className="flex justify-center items-center mb-[-1em] mt-[-.7em] gap-2">
                <h1 className="font-bold">PLAN</h1>
                <MdOutlineNextPlan className="text-[#fe5d14]" />
              </div>
              <p className="para font-semibold text-gray-300">
                From putting the structure on paper to placing the bricks one
                after the other, Bumia Construction Company Limited is like no
                other. What are you waiting for? Let's build your dream next!
              </p>
            </div>
          </div>

          <div className="card w-full mx-auto">
            <div className="content">
              <div className="flex justify-center items-center mb-[-1em] mt-[-.7em] gap-2">
                <h1 className="font-bold">BUILD</h1>
                <FaBuilding className="text-[#fe5d14]" />
              </div>
              <p className="para font-semibold text-gray-300">
                Don't just build to own. Build with value, quality, and
                integrity to enjoy comfort and peace of mind.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-[2em]">
          <Link to="/projects" className="button font-bold">
            Past Project
          </Link>
        </div>
      </div>

      {/* Building with Intention Section */}
      <div className="flex flex-col md:flex-row bg-white px-4 md:px-[2em] py-10 md:py-[5em] gap-8">
        <div className="w-full md:w-6/12 mb-6 md:mb-0 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl text-[rgb(254,93,20)] font-bold">
            Building with Intention
          </h1>
          <p className="text-black mt-2">
            Bumia Construction Company Limited is a think tank of civil
            engineers, architects, town planners, surveyors, mechanical and
            electrical engineers, quantity surveyors, builders, painters,
            interior decorators, and carpenters—all equipped with the expertise
            and tools to deliver exceptional results. Our team is dedicated to
            providing you with top-notch service, ensuring every project is
            handled with precision, creativity, and care.
          </p>
          <p className="text-black mt-4">
            Whether you’re dreaming of a new home, a commercial space, or a
            community development, we turn your vision into reality with quality
            craftsmanship and innovative solutions. At Bumia, we don’t just
            build structures—we build trust, comfort, and lasting value for
            every client.
          </p>
          <Link to="/about" className="button font-bold mt-4">
            About Us
          </Link>
        </div>
        <div className="w-full md:w-6/12 flex justify-center">
          <img
            src={construct2}
            alt="const-img.."
            className="rounded-lg max-h-80 w-full object-cover"
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative px-4 md:p-[3em] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${construct3})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 py-10 md:py-0">
          <h1 className="text-center text-2xl md:text-4xl text-[rgb(254,93,20)] font-bold">
            Ready to Discuss your Next Project?
          </h1>
          <div className="flex justify-center my-5">
            <Link to="/contact" className="get-in font-bold">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 md:mt-[7em] px-4">
        <div>
          <h1 className="text-center text-[rgb(254,93,20)] font-bold">
            Our FAQS
          </h1>
          <h1 className="text-center font-bold text-2xl md:text-4xl text-black">
            Frequently asked Questions
          </h1>
          <div>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
