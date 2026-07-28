import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  createSpace,
  getSpaces,
  deleteSpace,
} from "../../services/spaceService";



const ManageSpaces = () => {
  const [spaces, setSpaces] =
    useState([]);

  const [formData, setFormData] =
    useState({
      name: "",
      location: "",
      capacity: "",
    });

  useEffect(() => {
    fetchSpaces();
  }, []);

  const fetchSpaces =
    async () => {
      try {
        const response =
          await getSpaces();

        setSpaces(
          response.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const handleDelete = async (
    id
  ) => {
    try {
      await deleteSpace(id);

      fetchSpaces();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await createSpace({
          ...formData,
          status:
            "available",
        });

        setFormData({
          name: "",
          location: "",
          capacity: "",
        });

        fetchSpaces();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <DashboardLayout>
      <h1>
        Manage Spaces
      </h1>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Space Name"
          value={
            formData.name
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Location"
          value={
            formData.location
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              location:
                e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Capacity"
          value={
            formData.capacity
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              capacity:
                e.target.value,
            })
          }
        />

        <button type="submit">
          Add Space
        </button>
      </form>

      <br />

      <div className="stats-grid">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="stat-card"
          >
            <h3>
              {space.name}
            </h3>

            <p>
              {space.location}
            </p>

            <p>
              Capacity:{" "}
              {space.capacity}
            </p>

            <p>
              Status:{" "}
              {space.status}
            </p>

            <button
              className="delete-btn"
              onClick={() =>
                handleDelete(
                  space.id
                )
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ManageSpaces;