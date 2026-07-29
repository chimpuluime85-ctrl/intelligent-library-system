import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import OccupancyChart from "../../components/charts/OccupancyChart";
import DemandChart from "../../components/charts/DemandChart";
import AnalyticsChart from "../../components/charts/AnalyticsChart";

import { getDashboardStats } from "../../services/dashboardService";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalSpaces: 0,
    totalResources: 0,
    bookingsToday: 0,
    occupancy: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboardStats();

        setStats(data);
      } catch (err) {
        console.error("Dashboard Error:", err);
      }
    };

    loadDashboard();
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>

        <p>AI Powered Library Analytics</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Spaces</h4>
          <h1>{stats.totalSpaces}</h1>
        </div>

        <div className="stat-card">
          <h4>Total Resources</h4>
          <h1>{stats.totalResources}</h1>
        </div>

        <div className="stat-card">
          <h4>Bookings Today</h4>
          <h1>{stats.bookingsToday}</h1>
        </div>

        <div className="stat-card">
          <h4>Occupancy</h4>
          <h1>{stats.occupancy}%</h1>
        </div>
      </div>

      <div className="charts-grid">
        <OccupancyChart />

        <DemandChart />
      </div>

      <AnalyticsChart
        totalBookings={stats.bookingsToday}
      />
    </DashboardLayout>
  );
};

export default Dashboard;