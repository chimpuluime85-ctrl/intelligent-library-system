import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

/* Auth Pages */
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

/* Dashboard */
import Dashboard from "../pages/dashboard/Dashboard";

/* Users */
import Profile from "../pages/users/Profile";
import MyBookings from "../pages/users/MyBookings";
import BookingDetails from "../pages/users/BookingDetails";

/* Spaces */
import Spaces from "../pages/spaces/Spaces";
import SpaceDetails from "../pages/spaces/SpaceDetails";
import BookSpace from "../pages/spaces/BookSpace";

/* Resources */
import Resources from "../pages/resources/Resources";
import ResourceDetails from "../pages/resources/ResourceDetails";
import BookResource from "../pages/resources/BookResource";

/* Analytics */
import Predictions from "../pages/analytics/Predictions";
import Forecasts from "../pages/analytics/Forecasts";
import Recommendations from "../pages/analytics/Recommendations";

/* Admin */
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageStaff from "../pages/admin/ManageStaff";
import Settings from "../pages/admin/Settings";

/* Librarian */
import LibrarianDashboard from "../pages/librarian/LibrarianDashboard";
import ManageBookings from "../pages/librarian/ManageBookings";
import ManageSpaces from "../pages/librarian/ManageSpaces";
import ManageResources from "../pages/librarian/ManageResources";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-bookings"
        element={
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/booking-details/:id"
        element={
          <ProtectedRoute>
            <BookingDetails />
          </ProtectedRoute>
        }
      />

      {/* Spaces */}

      <Route
        path="/spaces"
        element={
          <ProtectedRoute>
            <Spaces />
          </ProtectedRoute>
        }
      />

      <Route
        path="/spaces/:id"
        element={
          <ProtectedRoute>
            <SpaceDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/book-space"
        element={
          <ProtectedRoute>
            <BookSpace />
          </ProtectedRoute>
        }
      />

      {/* Resources */}

      <Route
        path="/resources"
        element={
          <ProtectedRoute>
            <Resources />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resources/:id"
        element={
          <ProtectedRoute>
            <ResourceDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/book-resource"
        element={
          <ProtectedRoute>
            <BookResource />
          </ProtectedRoute>
        }
      />

      {/* Analytics */}

      <Route
        path="/predictions"
        element={
          <ProtectedRoute>
            <Predictions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/forecasts"
        element={
          <ProtectedRoute>
            <Forecasts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/recommendations"
        element={
          <ProtectedRoute>
            <Recommendations />
          </ProtectedRoute>
        }
      />

      {/* Admin */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-users"
        element={
          <ProtectedRoute>
            <ManageUsers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-staff"
        element={
          <ProtectedRoute>
            <ManageStaff />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Librarian */}

      <Route
        path="/librarian"
        element={
          <ProtectedRoute>
            <LibrarianDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-bookings"
        element={
          <ProtectedRoute>
            <ManageBookings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-spaces"
        element={
          <ProtectedRoute>
            <ManageSpaces />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-resources"
        element={
          <ProtectedRoute>
            <ManageResources />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}

      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;