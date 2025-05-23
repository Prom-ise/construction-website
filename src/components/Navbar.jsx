import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
  return (
    <div className='navbar'>
      <div className='logo text-[rgb(254,93,20)]'>Dev_Promise Construction</div>
      <div className="flex items-center space-x-5">
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

    </div>
  )
}

export default Navbar