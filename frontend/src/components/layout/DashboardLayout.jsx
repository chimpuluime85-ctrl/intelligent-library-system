import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
  const [mobile, setMobile] = useState(window.innerWidth <= 900);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 900);

      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar
        mobile={mobile}
        open={open}
      />

      {mobile && open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="dashboard-main">
        <Navbar
          mobile={mobile}
          toggleSidebar={() =>
            setOpen(!open)
          }
        />

        <div className="dashboard-content">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;