import DashboardLayout from "../../components/layout/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout>

      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>System Overview</p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total Users</h4>
          <h1>524</h1>
        </div>

        <div className="stat-card">
          <h4>Total Librarians</h4>
          <h1>12</h1>
        </div>

        <div className="stat-card">
          <h4>Total Bookings</h4>
          <h1>4,892</h1>
        </div>

        <div className="stat-card">
          <h4>System Usage</h4>
          <h1>89%</h1>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default AdminDashboard;