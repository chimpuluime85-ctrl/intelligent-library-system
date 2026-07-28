import DashboardLayout from "../../components/layout/DashboardLayout";

const ManageUsers = () => {
  const users = [
    {
      id: 1,
      name: "Admin User",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Library Staff",
      role: "Librarian",
      status: "Active",
    },
    {
      id: 3,
      name: "Student User",
      role: "Student",
      status: "Active",
    },
  ];

  return (
    <DashboardLayout>

      <h1>Manage Users</h1>

      <br />

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Users</h3>
          <h1>3</h1>
        </div>

        <div className="stat-card">
          <h3>Admins</h3>
          <h1>1</h1>
        </div>

        <div className="stat-card">
          <h3>Librarians</h3>
          <h1>1</h1>
        </div>

        <div className="stat-card">
          <h3>Students</h3>
          <h1>1</h1>
        </div>

      </div>

      <br />

      <div className="stat-card">

        <h2>User List</h2>

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
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </DashboardLayout>
  );
};

export default ManageUsers;