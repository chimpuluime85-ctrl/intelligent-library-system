import DashboardLayout from "../../components/layout/DashboardLayout";

import OccupancyChart from "../../components/charts/OccupancyChart";
import DemandChart from "../../components/charts/DemandChart";
import AnalyticsChart from "../../components/charts/AnalyticsChart";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>
          Dashboard Overview
        </h1>

        <p>
          AI Powered Library
          Analytics
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total Spaces</h4>
          <h1>25</h1>
        </div>

        <div className="stat-card">
          <h4>Total Resources</h4>
          <h1>120</h1>
        </div>

        <div className="stat-card">
          <h4>Bookings Today</h4>
          <h1>18</h1>
        </div>

        <div className="stat-card">
          <h4>Occupancy</h4>
          <h1>84%</h1>
        </div>

      </div>

      <div className="charts-grid">

        <OccupancyChart />

        <DemandChart />

      </div>

      <br />

      <AnalyticsChart />

    </DashboardLayout>
  );
};

export default Dashboard;