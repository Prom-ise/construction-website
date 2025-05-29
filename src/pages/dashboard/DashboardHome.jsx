import { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardHome = () => {
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/admin/stats/summary', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (err) {
        console.error('Failed to fetch summary stats:', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Total Bookings</h2>
          <p className="text-2xl">{stats.total}</p>
        </div>
        <div className="bg-green-100 p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-2xl">{stats.completed}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl">{stats.pending}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
