import React from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq.jsx";
import construct1 from "../assets/construct1.jpg";
import construct2 from "../assets/construct2.jpg";
import construct3 from "../assets/construct3.jpg";
import { MdRealEstateAgent, MdOutlineNextPlan } from "react-icons/md";
import { FaThinkPeaks, FaBuilding } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="Homepage">
      {/* Hero Section */}
      <div
        className="section1 flex flex-col md:flex-row w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${construct1})` }}
      >
        <div className="subSect1 w-full md:w-5/12 p-8 text-white z-10">
          <p className="text-[rgb(254,93,20)] font-bold">
            Bumia co lmt - Construction Company
          </p>
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Turning Dreams Into Durable Realities
          </h1>
          <p>
            Dream, think, plan, build Building your own dream to durability; at
            what stage of building can you? Let’s build you an ediphs you’d love
            happily ever after. Bumia construction company limited is here to
            make your dream come true, from the foundation to the roof, we are
            here to make your dream come true.
          </p>
          <div className="mt-4">
            <Link to="/about" className="button">
              Learn More
            </Link>
          </div>
        </div>
        <div className="arrows w-full md:w-7/12 flex items-center justify-end p-8 gap-4"></div>
        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
      </div>

      {/* Cards Section */}
      <div className="my-10 md:my-[5em]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          <div className="card w-full mx-auto">
            <div className="content">
              <div className="flex justify-center items-center mb-[-1em] mt-[-.7em] gap-2">
                <h1 className="font-bold">DREAM</h1>
                <MdRealEstateAgent className="text-[#fe5d14]" />
              </div>
              <p className="para font-semibold text-gray-300">
                Did you want to own a property and…… All real properties started
                with the dream of their owners today. What do you own?
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
                Ownership comes with decisions making, take a sit how do you
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
                How do you From putting the structure on paper to placing the
                bricks on the other, Bumia construction company limited is like
                no other, what are you waiting for Let’s do you next!
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
                Don’t just build to own Build with value, validity, quality to
                enjoy comfort with serenity
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa
            deleniti rem et voluptate incidunt sapiente fugit ipsa autem dolorem
            ea quam, mollitia corporis vel ad illo quisquam nobis quo.
          </p>
          <p className="text-black mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            tempora illo necessitatibus aut ad quae aliquid modi autem adipisci
            esse blanditiis voluptas, vero a quas ratione ea explicabo! Nemo,
            quibusdam?
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
