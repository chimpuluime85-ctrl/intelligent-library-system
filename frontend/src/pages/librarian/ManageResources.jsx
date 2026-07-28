import DashboardLayout from "../../components/layout/DashboardLayout";

const ManageResources = () => {

  const resources = [
    {
      id: 1,
      name: "Computer Systems",
      category: "Hardware",
      status: "Available",
    },
    {
      id: 2,
      name: "Projector",
      category: "Equipment",
      status: "Available",
    },
    {
      id: 3,
      name: "Reference Books",
      category: "Books",
      status: "Available",
    },
    {
      id: 4,
      name: "Digital Library Access",
      category: "Software",
      status: "Available",
    },
  ];

  return (
    <DashboardLayout>

      <h1>Manage Resources</h1>

      <br />

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Resources</h3>
          <h1>4</h1>
        </div>

        <div className="stat-card">
          <h3>Available</h3>
          <h1>4</h1>
        </div>

        <div className="stat-card">
          <h3>Categories</h3>
          <h1>4</h1>
        </div>

      </div>

      <br />

      <div className="stat-card">

        <h2>Resource Inventory</h2>

        <br />

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Resource Name</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td>{resource.id}</td>
                <td>{resource.name}</td>
                <td>{resource.category}</td>
                <td>{resource.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </DashboardLayout>
  );
};

export default ManageResources;