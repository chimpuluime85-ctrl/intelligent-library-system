import DashboardLayout from "../../components/layout/DashboardLayout";

const ManageBookings = () => {
  return (
    <DashboardLayout>

      <h1>Booking Management</h1>

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>User</th>
              <th>Space</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>John Doe</td>
              <td>Study Room A</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>Mary Jane</td>
              <td>Conference Hall</td>
              <td>Approved</td>
            </tr>

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default ManageBookings;