import React from 'react'
import { NavLink } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  const NavLinks = [
    {
      name: "Homepage",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Contact",
      path: "/contact",
    },
    // { name: "Service", path: "/About/Service" }
  ];
  const NavLinked = [
    {
      name: "Priavcy",
      path: "/privacy",
    },
    {
      name: "Terms & Conditions",
      path: "/terms",
    },
  ]
  return (
    <div className='footer py-5'>
      <div className='flex justify-center my-3 items-center space-x-5'>
         {NavLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink" : "unlink no-underline"
              }
              key={link.name}
              to={link.path}
            >
              <div
                style={{
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {link.name}
              </div>
            </NavLink>
          ))}
      </div>

          <div className='flex justify-between items-center bg-[rgb(19,25,68)] mx-3 rounded-full px-4'>
          <a
  href="tel:+23481000659398"
  className='flex font-bold justify-between items-center bg-[rgb(254,93,20)] text-white p-2 rounded-md w-[300px] mx-auto my-3 hover:opacity-90 transition-all duration-300'
>
  <div className='text-4xl bg-white rounded-full p-3 text-[navy]'>
    <IoMdCall />
  </div>
  <div>
    <div>Call Today!</div>
    <div>(+234) 810 0065 9398</div>
  </div>
</a>


            <div className='flex justify-center items-center text-3xl space-x-2 text-[rgb(254,93,20)] my-3'>
  <a
    href="https://facebook.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className='bg-white rounded-full p-2 hover:text-[navy] transition-all duration-300 cursor-pointer'
  >
    <FaFacebookF />
  </a>
  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className='bg-white rounded-full p-2 hover:text-[navy] transition-all duration-300 cursor-pointer'
  >
    <FaInstagram />
  </a>
  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className='bg-white rounded-full p-2 hover:text-[navy] transition-all duration-300 cursor-pointer'
  >
    <FaLinkedinIn />
  </a>
</div>

          </div>

      <div className='flex justify-center my-3 items-center space-x-5'>
      {NavLinked.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink" : "unlink no-underline"
              }
              key={link.name}
              to={link.path}
            >
              <div
                style={{
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {link.name}
              </div>
            </NavLink>
          ))}
      </div>

      <div className='text-center text-[rgb(254,93,20)]'>
        @2024 Construction. All right Reserved | Designed by Dev_Promise
      </div>
    </div>
  )
}

export default Footer