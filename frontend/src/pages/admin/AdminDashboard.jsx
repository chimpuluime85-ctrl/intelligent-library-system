import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getDashboardStats } from "../../services/adminService";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStudents: 0,
    totalLibrarians: 0,
    totalAdmins: 0,
    totalSpaces: 0,
    totalResources: 0,
    totalBookings: 0,
    availableSpaces: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data.stats);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard-header">
       <h1>Library Management Dashboard</h1>
        <p>System Overview</p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total Users</h4>
          <h1>{stats.totalUsers}</h1>
        </div>

        <div className="stat-card">
          <h4>Total Students</h4>
          <h1>{stats.totalStudents}</h1>
        </div>

        <div className="stat-card">
          <h4>Total Librarians</h4>
          <h1>{stats.totalLibrarians}</h1>
        </div>

        <div className="stat-card">
          <h4>Total Admins</h4>
          <h1>{stats.totalAdmins}</h1>
        </div>

        <div className="stat-card">
          <h4>Total Spaces</h4>
          <h1>{stats.totalSpaces}</h1>
        </div>

        <div className="stat-card">
          <h4>Available Spaces</h4>
          <h1>{stats.availableSpaces}</h1>
        </div>

        <div className="stat-card">
          <h4>Total Resources</h4>
          <h1>{stats.totalResources}</h1>
        </div>

        <div className="stat-card">
          <h4>Total Bookings</h4>
          <h1>{stats.totalBookings}</h1>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;