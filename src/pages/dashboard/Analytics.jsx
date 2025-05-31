import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState({ total: 0, completed: 0, pending: 0 });
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [monthly, summaryRes] = await Promise.all([
          axios.get("https://construct-backend.onrender.com/api/admin/stats/monthly", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://construct-backend.onrender.com/api/admin/stats/summary", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setData(monthly.data);
        setSummary(summaryRes.data);
      } catch (err) {
        console.error("Error loading stats:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">Dashboard Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-white">
        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 className="text-gray-500 text-sm">Total Bookings</h2>
          <p className="text-2xl font-bold">{summary.total}</p>
        </div>
        <div className="bg-green-100 dark:bg-green-800 shadow rounded-xl p-4">
          <h2 className="text-green-700 dark:text-green-300 text-sm">Completed</h2>
          <p className="text-2xl font-bold">{summary.completed}</p>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-800 shadow rounded-xl p-4">
          <h2 className="text-yellow-700 dark:text-yellow-300 text-sm">Pending</h2>
          <p className="text-2xl font-bold">{summary.pending}</p>
        </div>
      </div>

      {data.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="bookings" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Analytics;
