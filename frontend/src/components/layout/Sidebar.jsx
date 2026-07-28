import {
  FaHome,
  FaBook,
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  const studentLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Spaces",
      path: "/spaces",
      icon: <FaBook />,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: <FaBook />,
    },
    {
      name: "Bookings",
      path: "/my-bookings",
      icon: <FaCalendarAlt />,
    },
    {
      name: "AI Predictions",
      path: "/predictions",
      icon: <FaChartLine />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartLine />,
    },
  ];

  const adminLinks = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaHome />,
    },
    {
      name: "Manage Users",
      path: "/manage-users",
      icon: <FaUsers />,
    },
    {
      name: "Manage Spaces",
      path: "/manage-spaces",
      icon: <FaBook />,
    },
    {
      name: "Manage Resources",
      path: "/manage-resources",
      icon: <FaBook />,
    },
    {
      name: "Manage Bookings",
      path: "/manage-bookings",
      icon: <FaCalendarAlt />,
    },
    {
      name: "AI Predictions",
      path: "/predictions",
      icon: <FaChartLine />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartLine />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  const librarianLinks = [
    {
      name: "Dashboard",
      path: "/librarian",
      icon: <FaHome />,
    },
    {
      name: "Manage Bookings",
      path: "/manage-bookings",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Manage Spaces",
      path: "/manage-spaces",
      icon: <FaBook />,
    },
    {
      name: "Manage Resources",
      path: "/manage-resources",
      icon: <FaBook />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartLine />,
    },
  ];

  let links = studentLinks;

  if (user?.role === "admin") {
    links = adminLinks;
  }

  if (user?.role === "librarian") {
    links = librarianLinks;
  }

  return (
    <div className="sidebar">
      <div className="logo">
        IntelliLibrary
      </div>

      <div className="menu">
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="menu-item"
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;