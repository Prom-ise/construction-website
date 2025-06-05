import React from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import construct3 from "../assets/construct3.jpg";
import construct7 from "../assets/construct7.jpg";
import construct8 from "../assets/construct8.jpg";
import { GiHouse } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
            className=" w-full bg-cover py-[5em] px-2 md:p-[4em] bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${construct7})` }}
          >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-6xl font-bold text-start text-white">Services</h1>
          <h3>Construction services</h3>
        </div>
      </div>

      <div className="container mx-auto ms-4 my-[10em]">
        <h1 className="text-2xl font-bold text-black ">
          Our Featured Services
        </h1>
        <h2 className="text-xl text-[rgb(254,93,20)]">Start booking now for any of your wanted service below</h2>
        <p className="text-black my-[1em]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta excepturi aut, harum numquam unde aperiam, voluptate tenetur minima commodi qui, voluptates eaque vitae eos reiciendis sapiente iusto vel maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est fugiat obcaecati consequatur illo natus soluta dolorum harum voluptates iusto quas, alias dignissimos commodi perferendis et veritatis distinctio sint. Ratione?
        </p>

        <p className="text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro error impedit assumenda aspernatur harum voluptates voluptatum, consectetur quasi at cum doloribus laborum totam officiis similique reiciendis vero, reprehenderit atque iure? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque iure deserunt ducimus adipisci, perspiciatis non autem maiores nulla blanditiis quae sed animi dicta cum enim quo possimus. Eum, corporis.
        </p>
      </div>

      <div className="mx-auto">
        <h1 className="text-3xl mt-[2em] font-bold text-center text-[rgb(254,93,20)]">Featured Construction Services & Bookings</h1>
        <div className="mt-[3em] mb-[8em]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Building from scratch</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            {/* <div className="service-description">Services we render.... grab your book and book with us now!!!</div> */}
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Building from scratch</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <button className="service-card-footer" onClick={() => navigate(`/book?type=Building from scratch`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Plan and Layout</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Plan and Layout</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <button className="service-card-footer" onClick={() => navigate(`/book?type=Plan and Layout`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Completing</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Completing</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <button className="service-card-footer" onClick={() => navigate(`/book?type=Completing`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 my-[3em]">
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Evaluation</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Evaluation</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <button className="service-card-footer" onClick={() => navigate(`/book?type=Evaluation`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Drainage</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Drainage</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
             <button className="service-card-footer" onClick={() => navigate(`/book?type=Drainage`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Road</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Road</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
             <button className="service-card-footer" onClick={() => navigate(`/book?type=Road`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Shops, malls,mart, complexes </strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Shops, malls,mart, complexes </strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <button className="service-card-footer" onClick={() => navigate(`/book?type=Shops, malls,mart, complexes`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Bridges 
</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Bridges</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <button className="service-card-footer" onClick={() => navigate(`/book?type=Bridges`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service-card w-full">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Warehouses, Pens, and farmhouses</strong>
          </div>
        </div>

        <div className="service-front">
          <div className="service-img">
            <div className="service-circle"></div>
            <div className="service-circle" id="right"></div>
            <div className="service-circle" id="bottom"></div>
          </div>

          <div className="service-front-content" style={{ backgroundImage: `url(${construct8})` }}>
            <Link to="/contact" className="service-badge">Contact Us</Link>
            <div className="service-description">
              <div className="service-title">
                <p className="service-title">
                  <strong>Warehouses, Pens, and farmhouses</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <button className="service-card-footer" onClick={() => navigate(`/book?type=Warehouses, Pens, and farmhouses`)}>Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
      </div>


      <div>
        <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <FaBriefcase className="mx-auto h-10 w-10 text-blue-600 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Project Management
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We oversee and coordinate your entire construction project from concept to completion. Get peace of mind with expert planning, supervision, and execution.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Timeline Planning",
              desc: "Structured schedules ensure that every milestone is met on time.",
              icon: "🗓️",
            },
            {
              title: "Budget Management",
              desc: "We keep your project within budget by optimizing resources efficiently.",
              icon: "💰",
            },
            {
              title: "Team Coordination",
              desc: "We handle communication across contractors, suppliers, and stakeholders.",
              icon: "👥",
            },
            {
              title: "Site Supervision",
              desc: "On-ground presence ensures quality work and risk mitigation.",
              icon: "🏗️",
            },
            {
              title: "Progress Tracking",
              desc: "You’ll receive transparent updates and performance insights.",
              icon: "📈",
            },
            {
              title: "Client Support",
              desc: "We’re available for your questions and decisions, every step of the way.",
              icon: "📞",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    </div>
  );
};

export default Services;
