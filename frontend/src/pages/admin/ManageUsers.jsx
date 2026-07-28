import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/userService";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateUser(editingId, formData);
      } else {
        await createUser(formData);
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "student",
      });

      setEditingId(null);
      setShowForm(false);

      loadUsers();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Operation failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setEditingId(user.id);

    setFormData({
      name: user.name,
      email: user.email,
      password: "",
      role: user.role,
    });

    setShowForm(true);
  };

  const admins = users.filter((user) => user.role === "admin").length;
  const librarians = users.filter(
    (user) => user.role === "librarian"
  ).length;
  const students = users.filter(
    (user) => user.role === "student"
  ).length;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1>Manage Users</h1>

      <br />

      <button
        className="btn-primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Form" : "Add User"}
      </button>

      {showForm && (
        <>
          <br />
          <br />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
            />

            <br />
            <br />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />

            <br />
            <br />

            <input
              type="password"
              placeholder={
                editingId
                  ? "Leave blank to keep current password"
                  : "Password"
              }
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              required={!editingId}
            />

            <br />
            <br />

            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
                })
              }
            >
              <option value="student">Student</option>
              <option value="librarian">Librarian</option>
              <option value="admin">Admin</option>
            </select>

            <br />
            <br />

            <button
              type="submit"
              className="btn-primary"
            >
              {editingId ? "Update User" : "Create User"}
            </button>

            {editingId && (
              <>
                <br />
                <br />

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setEditingId(null);

                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      role: "student",
                    });

                    setShowForm(false);
                  }}
                >
                  Cancel Edit
                </button>
              </>
            )}
          </form>
        </>
      )}

      <br />
      <br />

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <h1>{users.length}</h1>
        </div>

        <div className="stat-card">
          <h3>Admins</h3>
          <h1>{admins}</h1>
        </div>

        <div className="stat-card">
          <h3>Librarians</h3>
          <h1>{librarians}</h1>
        </div>

        <div className="stat-card">
          <h3>Students</h3>
          <h1>{students}</h1>
        </div>
      </div>

      <br />

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

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
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center" }}
                >
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  <td>
                    <button
                      className="btn-primary"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>

                    {" "}

                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default ManageUsers;