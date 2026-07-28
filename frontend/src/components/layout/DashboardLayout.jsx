import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <div
      style={{
        display: isMobile ? "block" : "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

     <div
  style={{
    flex: 1,
    width: "100%",
    minWidth: 0,
    padding: "20px",
    boxSizing: "border-box",
    overflowX: "hidden",
  }}
>
        <Navbar />

        {children}

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;