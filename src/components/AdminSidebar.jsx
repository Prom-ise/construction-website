// components/AdminSidebar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, BarChart, CalendarCheck, Home } from "lucide-react";

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
          <Home className="inline mr-2" /> Dashboard
        </NavLink>
        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-600" : "text-gray-700"
          }
        >
          <CalendarCheck className="inline mr-2" /> Bookings
        </NavLink>
        <NavLink
          to="/admin/analytics"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-600" : "text-gray-700"
          }
        >
          <BarChart className="inline mr-2" /> Analytics
        </NavLink>
        <button onClick={logout} className="mt-auto text-red-600 hover:underline">
          <LogOut className="inline mr-2" /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
