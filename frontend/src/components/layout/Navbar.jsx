import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar">
      <div>
        <h2>Library Dashboard</h2>
        <p>
          Intelligent Space &
          Resource Booking
        </p>
      </div>

      <div className="profile-box">
        <div className="avatar">
          {user?.name?.charAt(0)}
        </div>

        <div>
          <h4>{user?.name}</h4>
          <small>{user?.role}</small>
        </div>
      </div>
    </div>
  );
};

export default Navbar;