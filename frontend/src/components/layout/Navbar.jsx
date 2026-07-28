import { FaBars } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Navbar = ({ toggleSidebar }) => {
  const { user } = useAuth();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button
          className="menu-toggle"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <div>
          <h2>Library Dashboard</h2>
          <p>Intelligent Space & Resource Booking</p>
        </div>
      </div>

      <div className="profile-box">
        <div className="avatar">
          {user?.name?.charAt(0)}
        </div>

        <div>
          <h4>{user?.name}</h4>

          <small>
            {user?.role === "admin"
              ? "Librarian"
              : user?.role}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Navbar;