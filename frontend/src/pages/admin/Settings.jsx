import DashboardLayout from "../../components/layout/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>

      <h1>System Settings</h1>

      <br />

      <div className="stats-grid">

        <div className="stat-card">
          <h3>System Name</h3>
          <p>Intelligent Library System</p>
        </div>

        <div className="stat-card">
          <h3>Version</h3>
          <p>1.0.0</p>
        </div>

        <div className="stat-card">
          <h3>Database Status</h3>
          <p>Connected</p>
        </div>

        <div className="stat-card">
          <h3>AI Module</h3>
          <p>Active</p>
        </div>

      </div>

      <br />

      <div className="stat-card">

        <h2>System Information</h2>

        <br />

        <p>
          <strong>Frontend:</strong> React.js
        </p>

        <p>
          <strong>Backend:</strong> Node.js & Express.js
        </p>

        <p>
          <strong>Database:</strong> PostgreSQL
        </p>

        <p>
          <strong>AI Service:</strong> Python Flask
        </p>

        <p>
          <strong>Machine Learning Model:</strong> Random Forest Regressor
        </p>

        <p>
          <strong>Status:</strong> Operational
        </p>

      </div>

    </DashboardLayout>
  );
};

export default Settings;