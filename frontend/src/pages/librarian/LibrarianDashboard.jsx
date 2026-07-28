import DashboardLayout from "../../components/layout/DashboardLayout";

const LibrarianDashboard = () => {
  return (
    <DashboardLayout>

      <div className="dashboard-header">
        <h1>Librarian Dashboard</h1>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Pending Bookings</h4>
          <h1>14</h1>
        </div>

        <div className="stat-card">
          <h4>Available Spaces</h4>
          <h1>18</h1>
        </div>

        <div className="stat-card">
          <h4>Resources Issued</h4>
          <h1>72</h1>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default LibrarianDashboard;