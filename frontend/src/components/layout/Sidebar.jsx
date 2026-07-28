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
      path: "/predictions",
      icon: <FaChartLine />,
    },
  ];

  const adminLinks = [
    {
      name: "Admin",
      path: "/admin",
      icon: <FaUsers />,
    },
    {
      name: "Manage Users",
      path: "/manage-users",
      icon: <FaUsers />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  const librarianLinks = [
    {
      name: "Librarian",
      path: "/librarian",
      icon: <FaUsers />,
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
  ];

  let links = [...studentLinks];

  // TEMP DEVELOPMENT MODE
  // Admin can see both Admin and Librarian menus

  if (user?.role === "admin") {
    links = [
      ...links,
      ...adminLinks,
      ...librarianLinks,
    ];
  }

  if (user?.role === "librarian") {
    links = [
      ...links,
      ...librarianLinks,
    ];
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