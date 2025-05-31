import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = [
    { name: "Homepage", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className='logo text-[rgb(254,93,20)] font-bold text-xl'>Dev_Promise</div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <MdClose /> : <MdMenu />}
      </button>

      {/* Links */}
      <div
        className={`
          fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          md:static md:h-auto md:w-auto md:max-w-none md:bg-transparent md:shadow-none md:translate-x-0
          flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-5 p-8 md:p-0
        `}
        style={{ zIndex: 100 }}
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden mb-8 self-end text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <MdClose />
        </button>
        {NavLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[rgb(254,93,20)] font-semibold"
                : "text-gray-700 font-semibold"
            }
            key={link.name}
            to={link.path}
            onClick={() => setOpen(false)}
            style={{
              textAlign: "center",
              textDecoration: "none",
              fontSize: "18px",
              width: "100%",
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;