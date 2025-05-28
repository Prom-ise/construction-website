import React from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq.jsx"
import construct1 from "../assets/construct1.jpg";
import construct2 from "../assets/construct2.jpg";
import construct3 from "../assets/construct3.jpg";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div
        className="section1 flex flex-row w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${construct1})` }}
      >
        <div className="subSect1 w-5/12 p-8 text-white">
          <p className="text-[rgb(254,93,20)] font-bold">
            Dev_Promise Construction
          </p>
          <h1 className="text-6xl font-bold mb-4">
            Building contractor & timber systems specialists
          </h1>
          <p>
            We undertake projects of all shapes and sizes - each and every one
            of which is treated with the same core values that characterise our
            company - honesty, integrity, professional advice and quality
            craftmanship.
          </p>

          <div>
           <Link to="/about" className="button">Learn More</Link>
          </div>
        </div>
        <div className="arrows w-7/12 flex items-center justify-end p-8 gap-4">
          {/* <div className="flex space-x-4">
            <h1 className="arrow text-2xl bg-white rounded-2 p-1 text-[rgb(254,93,20)]">
              <FaArrowLeftLong />
            </h1>
            <h1 className="arrow text-2xl bg-white rounded-2 p-1 text-[rgb(254,93,20)]">
              <FaArrowRightLong />
            </h1>
          </div> */}
        </div>
      </div>

      <div></div>

      <div className="my-[5em]">
        <div className="flex flex-row justify-center space-x-[4em] items-center mx-auto ">
          <div className="card lg:w-4/12 md:w-6/12">
            <div className="content">
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
            </div>
          </div>
          <div className="card lg:w-4/12 md:w-6/12">
            <div className="content">
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
            </div>
          </div>
          <div className="card lg:w-4/12 md:w-6/12">
            <div className="content">
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[2em]">
          <Link to="/projects" className="button font-bold">Past Project</Link>
        </div>
      </div>

      <div>
        <div className="flex bg-white flex-row px-[2em] py-[5em]">
          <div className="w-6/12">
            <h1 className="text-3xl text-[rgb(254,93,20)] font-bold">
              Building with Intention
            </h1>
            <p className="text-black">
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
            <Link to='/about' className="button font-bold">About Us</Link>
          </div>
          <div className="w-6/12">
            <img src={construct2} alt="const-img.." />
          </div>
        </div>
      </div>

      <div className="relative p-[3em] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${construct3})` }}>
  <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
  
  <div className="relative z-10">
  <h1 className="text-center text-4xl text-[rgb(254,93,20)] font-bold">
          Ready to Discuss your Next Project?
        </h1>
        <div className="flex justify-center my-5">
          <Link to='/contact' className="get-in font-bold">Get in Touch</Link>
        </div>
  </div>
</div>

<div className="mt-[7em]">
  <div>
    <h1 className="text-center text-[rgb(254,93,20)] font-bold">Our FAQS</h1>
    <h1 className="text-center font-bold text-4xl text-black">Frequently asked Questions</h1>
<div>
<Faq/>
</div>
  </div>
</div>
    </div>
  );
};

export default Homepage;
