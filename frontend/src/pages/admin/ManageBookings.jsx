import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../../services/bookingService";

import { getUsers } from "../../services/userService";
import { getSpaces } from "../../services/spaceService";
import { getResources } from "../../services/resourceService";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [spaces, setSpaces] = useState([]);
  const [resources, setResources] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    bookingDate: "",
    purpose: "",
    status: "pending",
    UserId: "",
    SpaceId: "",
    ResourceId: "",
  });

  const loadBookings = async () => {
    try {
      const response = await getBookings();
      setBookings(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const loadSpaces = async () => {
    try {
      const response = await getSpaces();
      setSpaces(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const loadResources = async () => {
    try {
      const response = await getResources();
      setResources(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadBookings();
    loadUsers();
    loadSpaces();
    loadResources();
  }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateBooking(editingId, formData);
      } else {
        await createBooking(formData);
      }

      setFormData({
        bookingDate: "",
        purpose: "",
        status: "pending",
        UserId: "",
        SpaceId: "",
        ResourceId: "",
      });

      setEditingId(null);
      setShowForm(false);

      loadBookings();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    try {
      await deleteBooking(id);
      loadBookings();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (booking) => {
    setEditingId(booking.id);

    setFormData({
      bookingDate: booking.bookingDate?.split("T")[0] || "",
      purpose: booking.purpose,
      status: booking.status,
      UserId: booking.UserId,
      SpaceId: booking.SpaceId,
      ResourceId: booking.ResourceId || "",
    });

    setShowForm(true);
  };

    const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "pending"
  ).length;

  const approvedBookings = bookings.filter(
    (booking) => booking.status === "approved"
  ).length;

  const rejectedBookings = bookings.filter(
    (booking) => booking.status === "rejected"
  ).length;

  const filteredBookings = bookings.filter((booking) => {
    const student =
      booking.User?.name?.toLowerCase() || "";

    const space =
      booking.Space?.name?.toLowerCase() || "";

    const purpose =
      booking.purpose?.toLowerCase() || "";

    return (
      student.includes(search.toLowerCase()) ||
      space.includes(search.toLowerCase()) ||
      purpose.includes(search.toLowerCase())
    );
  });

    return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Manage Bookings
        </h1>

        <button
          className="btn-primary"
          onClick={() => {
            setShowForm(!showForm);

            if (showForm) {
              setEditingId(null);

              setFormData({
                bookingDate: "",
                purpose: "",
                status: "pending",
                UserId: "",
                SpaceId: "",
                ResourceId: "",
              });
            }
          }}
        >
          {showForm ? "Close Form" : "Add Booking"}
        </button>
      </div>

      {showForm && (
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingId
              ? "Edit Booking"
              : "Create Booking"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label>Booking Date</label>

              <input
                type="date"
                className="input"
                value={formData.bookingDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bookingDate: e.target.value,
                  })
                }
                required
              />
            </div>

            <div>
              <label>Status</label>

              <select
                className="input"
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value,
                  })
                }
              >
                <option value="pending">
                  Pending
                </option>

                <option value="approved">
                  Approved
                </option>

                <option value="rejected">
                  Rejected
                </option>
              </select>
            </div>

                        <div>
              <label>User</label>

              <select
                className="input"
                value={formData.UserId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    UserId: e.target.value,
                  })
                }
                required
              >
                <option value="">
                  Select User
                </option>

                {users.map((user) => (
                  <option
                    key={user.id}
                    value={user.id}
                  >
                    {user.name} ({user.role})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Space</label>

              <select
                className="input"
                value={formData.SpaceId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    SpaceId: e.target.value,
                  })
                }
                required
              >
                <option value="">
                  Select Space
                </option>

                {spaces.map((space) => (
                  <option
                    key={space.id}
                    value={space.id}
                  >
                    {space.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Resource (Optional)</label>

              <select
                className="input"
                value={formData.ResourceId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ResourceId: e.target.value,
                  })
                }
              >
                <option value="">
                  No Resource
                </option>

                {resources.map((resource) => (
                  <option
                    key={resource.id}
                    value={resource.id}
                  >
                    {resource.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label>Purpose</label>

              <textarea
                className="input"
                rows="4"
                placeholder="Enter booking purpose..."
                value={formData.purpose}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    purpose: e.target.value,
                  })
                }
              />
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                className="btn-primary"
              >
                {editingId
                  ? "Update Booking"
                  : "Create Booking"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setEditingId(null);

                    setShowForm(false);

                    setFormData({
                      bookingDate: "",
                      purpose: "",
                      status: "pending",
                      UserId: "",
                      SpaceId: "",
                      ResourceId: "",
                    });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}
      
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card">
          <h3 className="text-gray-500">
            Total Bookings
          </h3>

          <h2 className="text-3xl font-bold">
            {totalBookings}
          </h2>
        </div>

        <div className="card">
          <h3 className="text-gray-500">
            Pending
          </h3>

          <h2 className="text-3xl font-bold text-yellow-600">
            {pendingBookings}
          </h2>
        </div>

        <div className="card">
          <h3 className="text-gray-500">
            Approved
          </h3>

          <h2 className="text-3xl font-bold text-green-600">
            {approvedBookings}
          </h2>
        </div>

        <div className="card">
          <h3 className="text-gray-500">
            Rejected
          </h3>

          <h2 className="text-3xl font-bold text-red-600">
            {rejectedBookings}
          </h2>
        </div>
      </div>

      <div className="mb-5">
        <input
          type="text"
          className="input w-full"
          placeholder="Search by user, space or purpose..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="card overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">
                Date
              </th>

              <th className="p-3 text-left">
                User
              </th>

              <th className="p-3 text-left">
                Space
              </th>

              <th className="p-3 text-left">
                Resource
              </th>

              <th className="p-3 text-left">
                Purpose
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8"
                >
                  No bookings found.
                </td>
              </tr>
            ) : (
              filteredBookings.map(
                (booking) => (
                  <tr
                    key={booking.id}
                    className="border-b"
                  >
                    <td className="p-3">
                      {booking.bookingDate
                        ?.split("T")[0]}
                    </td>

                    <td className="p-3">
                      {booking.User?.name ||
                        "-"}
                    </td>

                    <td className="p-3">
                      {booking.Space?.name ||
                        "-"}
                    </td>

                    <td className="p-3">
                      {booking.Resource
                        ?.name || "-"}
                    </td>

                    <td className="p-3">
                      {booking.purpose}
                    </td>

                                        <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          booking.status === "approved"
                            ? "bg-green-600"
                            : booking.status === "pending"
                            ? "bg-yellow-500"
                            : "bg-red-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    <td className="p-3 text-center">
                      <button
                        className="btn-primary mr-2"
                        onClick={() =>
                          handleEdit(booking)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn-danger"
                        onClick={() =>
                          handleDelete(
                            booking.id
                          )
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default ManageBookings;