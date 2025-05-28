import React from "react";
import { Link } from "react-router-dom"
import construct7 from "../assets/construct7.jpg";
import construct8 from "../assets/construct8.jpg";
import { GiHouse } from "react-icons/gi";

const Services = () => {
  return (
    <div>
      <div
        className="w-full bg-cover px-[4em] py-[6em] bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${construct7})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-start text-white">Services</h1>
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
        <div className="flex flex-row justify-center items-center gap-x-5 mx-5">
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
         <div className="flex flex-row justify-center items-center gap-x-5 my-[2em] mx-5">
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
         <div className="flex flex-row justify-center items-center gap-x-5 mx-5">
    <div className="w-4/12 service-card">
      <div className="service-content">
        <div className="service-back">
          <div className="service-back-content">
            <div className="service-icon"><GiHouse /></div>
            <strong>Shops, malls,mart, complexes 
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-4/12 service-card">
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
              <button className="service-card-footer">Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
