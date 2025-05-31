import React from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq.jsx"
import construct1 from "../assets/construct1.jpg";
import construct2 from "../assets/construct2.jpg";
import construct3 from "../assets/construct3.jpg";

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
            Dev_Promise Construction
          </p>
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Building contractor & timber systems specialists
          </h1>
          <p>
            We undertake projects of all shapes and sizes - each and every one
            of which is treated with the same core values that characterise our
            company - honesty, integrity, professional advice and quality
            craftmanship.
          </p>
          <div className="mt-4">
            <Link to="/about" className="button">Learn More</Link>
          </div>
        </div>
        <div className="arrows w-full md:w-7/12 flex items-center justify-end p-8 gap-4"></div>
        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
      </div>

      {/* Cards Section */}
      <div className="my-10 md:my-[5em]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[4em] items-center mx-auto px-4">
          {[1, 2, 3].map((_, i) => (
            <div className="card w-full md:w-11/12 mx-auto" key={i}>
              <div className="content">
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  laboriosam at voluptas minus culpa deserunt delectus sapiente
                  inventore pariatur
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-[2em]">
          <Link to="/projects" className="button font-bold">Past Project</Link>
        </div>
      </div>

      {/* Building with Intention Section */}
      <div className="flex flex-col md:flex-row bg-white px-4 md:px-[2em] py-10 md:py-[5em] gap-8">
        <div className="w-full md:w-6/12 mb-6 md:mb-0 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl text-[rgb(254,93,20)] font-bold">
            Building with Intention
          </h1>
          <p className="text-black mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            culpa deleniti rem et voluptate incidunt sapiente fugit ipsa autem
            dolorem ea quam, mollitia corporis vel ad illo quisquam nobis quo.
          </p>
          <p className="text-black mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            tempora illo necessitatibus aut ad quae aliquid modi autem
            adipisci esse blanditiis voluptas, vero a quas ratione ea
            explicabo! Nemo, quibusdam?
          </p>
          <Link to='/about' className="button font-bold mt-4">About Us</Link>
        </div>
        <div className="w-full md:w-6/12 flex justify-center">
          <img src={construct2} alt="const-img.." className="rounded-lg max-h-80 w-full object-cover" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative px-4 md:p-[3em] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${construct3})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 py-10 md:py-0">
          <h1 className="text-center text-2xl md:text-4xl text-[rgb(254,93,20)] font-bold">
            Ready to Discuss your Next Project?
          </h1>
          <div className="flex justify-center my-5">
            <Link to='/contact' className="get-in font-bold">Get in Touch</Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 md:mt-[7em] px-4">
        <div>
          <h1 className="text-center text-[rgb(254,93,20)] font-bold">Our FAQS</h1>
          <h1 className="text-center font-bold text-2xl md:text-4xl text-black">Frequently asked Questions</h1>
          <div>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;