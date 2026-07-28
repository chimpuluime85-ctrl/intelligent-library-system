import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaBook,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaUser />,
  },
  {
    name: "My Bookings",
    path: "/my-bookings",
    icon: <FaCalendarCheck />,
  },
  {
    name: "Spaces",
    path: "/spaces",
    icon: <FaBuilding />,
  },
  {
    name: "Resources",
    path: "/resources",
    icon: <FaBook />,
  },
  {
    name: "Predictions",
    path: "/predictions",
    icon: <FaChartLine />,
  },
  {
    name: "Librarian",
    path: "/librarian",
    icon: <FaUsers />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];

const Sidebar = ({ mobile, open }) => {
  return (
    <div
  className={`sidebar ${
    mobile
      ? open
        ? "sidebar sidebar-open"
        : "sidebar sidebar-close"
      : "sidebar"
  }`}
>
      <div className="logo">IntelliLibrary</div>

      <div className="menu">
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
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