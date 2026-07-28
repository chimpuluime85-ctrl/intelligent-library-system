import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  getResources,
  createResource,
  updateResource,
  deleteResource,
} from "../../services/resourceService";

const ManageResources = () => {
  const [resources, setResources] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: 1,
    available: true,
  });

  const loadResources = async () => {
    try {
      const response = await getResources();
      setResources(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadResources();
  }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateResource(editingId, formData);
      } else {
        await createResource(formData);
      }

      setFormData({
        name: "",
        category: "",
        quantity: 1,
        available: true,
      });

      setEditingId(null);
      setShowForm(false);

      loadResources();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this resource?")) return;

    try {
      await deleteResource(id);
      loadResources();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (resource) => {
    setEditingId(resource.id);

    setFormData({
      name: resource.name,
      category: resource.category,
      quantity: resource.quantity,
      available: resource.available,
    });

    setShowForm(true);
  };

    const totalResources = resources.length;

  const availableResources =
    resources.filter(
      (resource) => resource.available
    ).length;

  const unavailableResources =
    totalResources - availableResources;

  const filteredResources =
    resources.filter(
      (resource) =>
        resource.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        resource.category
          .toLowerCase()
          .includes(search.toLowerCase())
    );

      return (
    <DashboardLayout>
      <h1>Manage Resources</h1>

      <br />

      <button
        className="btn-primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Form" : "Add Resource"}
      </button>

      {showForm && (
        <>
          <br />
          <br />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Resource Name"
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
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
              required
            />

            <br />
            <br />

            <input
              type="number"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  quantity: Number(e.target.value),
                })
              }
              required
            />

            <br />
            <br />

            <select
              value={formData.available}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  available: e.target.value === "true",
                })
              }
            >
              <option value={true}>Available</option>
              <option value={false}>Unavailable</option>
            </select>

            <br />
            <br />

            <button
              type="submit"
              className="btn-primary"
            >
              {editingId
                ? "Update Resource"
                : "Create Resource"}
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
                      category: "",
                      quantity: 1,
                      available: true,
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
          <h3>Total Resources</h3>
          <h1>{totalResources}</h1>
        </div>

        <div className="stat-card">
          <h3>Available</h3>
          <h1>{availableResources}</h1>
        </div>

        <div className="stat-card">
          <h3>Unavailable</h3>
          <h1>{unavailableResources}</h1>
        </div>
      </div>

      <br />

      <input
        type="text"
        placeholder="Search resources..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <div className="stat-card">
        <h2>Resource List</h2>

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
              <th>Category</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredResources.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                  }}
                >
                  No resources found.
                </td>
              </tr>
            ) : (
              filteredResources.map((resource) => (
                <tr key={resource.id}>
                  <td>{resource.id}</td>
                  <td>{resource.name}</td>
                  <td>{resource.category}</td>
                  <td>{resource.quantity}</td>
                  <td>
                    {resource.available
                      ? "Available"
                      : "Unavailable"}
                  </td>

                  <td>
                    <button
                      className="btn-primary"
                      onClick={() =>
                        handleEdit(resource)
                      }
                    >
                      Edit
                    </button>

                    {" "}

                   <button
  className="btn-danger"
  onClick={() => handleDelete(resource.id)}
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

export default ManageResources;