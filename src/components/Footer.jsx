import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const NavLinks = [
    { name: "Homepage", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  const NavLinked = [
    { name: "Priavcy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];
  return (
    <footer className="footer py-5 bg-white border-t">
      {/* Main Nav Links */}
      <div className="flex flex-wrap justify-center my-3 items-center gap-4">
        {NavLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold !underline"
                : "text-white font-semibold"
            }
            key={link.name}
            to={link.path}
            style={{
              textAlign: "center",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-[rgb(19,25,68)] mx-3 rounded-2xl px-4 py-4 gap-4 md:gap-0">
  {/* Phone Numbers */}
  <div className="flex w-full md:w-auto gap-3 overflow-x-auto scrollbar-hide">
    {[
      { label: "Call Today!", number: "+90 548 821 6001" },
      { label: "Office", number: "+234 706 708 1269" },
      { label: "Support", number: "+234 703 274 1306" },
      { label: "WhatsApp", number: "+234 813 254 9469" },
    ].map((item, idx) => (
      <a
        key={idx}
        href={`tel:${item.number.replace(/\s+/g, '')}`}
        className="flex items-center bg-[rgb(254,93,20)] text-white rounded-md px-3 py-2 min-w-[220px] shadow hover:opacity-90 transition-all duration-300"
      >
        <div className="text-2xl bg-white rounded-full p-2 text-[navy] mr-2">
          <IoMdCall />
        </div>
        <div>
          <div className="text-xs font-semibold">{item.label}</div>
          <div className="text-sm font-bold">{item.number}</div>
        </div>
      </a>
    ))}
  </div>
  {/* Socials */}
  <div className="flex justify-center items-center text-3xl space-x-2 text-[rgb(254,93,20)] my-3">
    <a
      href="https://facebook.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-full p-2 hover:text-[navy] transition-all duration-300 cursor-pointer"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://instagram.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-full p-2 hover:text-[navy] transition-all duration-300 cursor-pointer"
    >
      <FaInstagram />
    </a>
    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-full p-2 hover:text-[navy] transition-all duration-300 cursor-pointer"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>

      {/* Privacy/Terms */}
      <div className="flex flex-wrap justify-center my-3 items-center gap-4">
        {NavLinked.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold underline"
                : "text-white font-semibold"
            }
            key={link.name}
            to={link.path}
            style={{
              textAlign: "center",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="text-center text-[rgb(254,93,20)] mt-4 text-sm">
        ©2024 Construction. All rights Reserved | Designed by Dev_Promise
      </div>
    </footer>
  );
};

export default Footer;
