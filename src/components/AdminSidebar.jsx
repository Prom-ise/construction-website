import { NavLink, useNavigate } from "react-router-dom";
import { MdLogout,  MdHome } from "react-icons/md";
import { IoBarChart } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <aside className="w-64 bg-white border-r h-full shadow-md">
      <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
      <nav className="flex flex-col p-4 gap-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-600" : "text-gray-700"
          }
        >
          <MdHome className="inline mr-2" /> Dashboard
        </NavLink>
        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-600" : "text-gray-700"
          }
        >
          <FaCalendarCheck className="inline mr-2" /> Bookings
        </NavLink>
        <NavLink
          to="/admin/analytics"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-600" : "text-gray-700"
          }
        >
          <IoBarChart className="inline mr-2" /> Analytics
        </NavLink>
        <button onClick={logout} className="mt-auto text-red-600 hover:underline">
          <MdLogout className="inline mr-2" /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
