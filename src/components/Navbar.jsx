import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NavLinks = [
    { name: "Homepage", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
        style={{
          padding: "16px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div className="logo text-[rgb(254,93,20)] font-bold text-lg sm:text-xl">
          Bumia co lmt
        </div>

        {/* Hamburger for mobile */}
        <button
          className={`md:hidden text-3xl transition-colors duration-300 ${
            scrolled || open ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <MdClose /> : <MdMenu />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {NavLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[rgb(254,93,20)] font-bold"
                  : `${scrolled ? "text-black" : "text-white"} font-semibold`
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-white shadow-lg z-[60] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-8 pt-20 gap-6 md:hidden`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Close button for mobile */}
        <button
          className="mb-8 self-end text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <MdClose />
        </button>
        {NavLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[rgb(254,93,20)] font-bold"
                : "text-black font-semibold"
            }
            key={link.name}
            to={link.path}
            onClick={() => setOpen(false)}
            style={{
              textAlign: "left",
              textDecoration: "none",
              fontSize: "20px",
              width: "100%",
              padding: "10px 0",
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
    </>
  );
};

export default Navbar;