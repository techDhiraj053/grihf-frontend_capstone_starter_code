import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("auth-token");
  const email = sessionStorage.getItem("email");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  // Extract username from email
  const user = email ? email.split("@")[0] : "";

  return (
    <nav className="navbar">
      <h2>StayHealthy</h2>

      {/* Navigation links */}
      <Link to="/">Home</Link>

      {token ? (
        <>
          <span style={{ color: "white", marginLeft: "auto", marginRight: "10px" }}>
            {user}
          </span>
          <button onClick={handleLogout} style={{ backgroundColor: "#dc3545", color: "white", padding: "10px", borderRadius: "4px" }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
