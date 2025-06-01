import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdLogout, MdHome, MdMenu, MdClose } from "react-icons/md";
import { IoBarChart } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const SidebarContent = (
    <nav className="flex flex-col p-4 gap-4 h-full">
      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          isActive ? "font-semibold text-[#fe5d14]" : "text-gray-700"
        }
        onClick={() => setOpen(false)}
      >
        <MdHome className="inline mr-2" /> Dashboard
      </NavLink>
      <NavLink
        to="/admin/bookings"
        className={({ isActive }) =>
          isActive ? "font-semibold text-[#fe5d14]" : "text-gray-700"
        }
        onClick={() => setOpen(false)}
      >
        <FaCalendarCheck className="inline mr-2" /> Bookings
      </NavLink>
      <NavLink
        to="/admin/analytics"
        className={({ isActive }) =>
          isActive ? "font-semibold text-[#fe5d14]" : "text-gray-700"
        }
        onClick={() => setOpen(false)}
      >
        <IoBarChart className="inline mr-2" /> Analytics
      </NavLink>
      <NavLink
        to="/admin/upload-project"
        className={({ isActive }) =>
          isActive ? "font-semibold text-[#fe5d14]" : "text-gray-700"
        }
        onClick={() => setOpen(false)}
      >
        <IoBarChart className="inline mr-2" /> Project Upload
      </NavLink>
      <button
        onClick={logout}
        className=" text-red-600 hover:underline"
      >
        <MdLogout className="inline mr-2" /> Logout
      </button>
    </nav>
  );

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <MdMenu size={28} />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r shadow-md z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
        style={{ maxWidth: "16rem" }}
      >

        <div className="md:hidden flex justify-end p-2">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="text-gray-700"
          >
            <MdClose size={28} />
          </button>
        </div>
        <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
        {SidebarContent}
      </aside>
    </>
  );
};

export default AdminSidebar;