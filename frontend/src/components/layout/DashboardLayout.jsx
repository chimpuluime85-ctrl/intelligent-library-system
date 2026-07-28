import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
  const [mobile, setMobile] = useState(
    window.innerWidth <= 900
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const resize = () => {
      setMobile(window.innerWidth <= 900);

      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", resize);

    return () =>
      window.removeEventListener(
        "resize",
        resize
      );
  }, []);

  return (
    <div className="dashboard-layout">

      {mobile && open && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setOpen(false)
          }
        />
      )}

      <Sidebar
        mobile={mobile}
        open={open}
      />

      <div className="dashboard-main">

        <Navbar
          toggleSidebar={() =>
            setOpen(!open)
          }
        />

        {children}

        <Footer />

      </div>

    </div>
  );
};

export default DashboardLayout;