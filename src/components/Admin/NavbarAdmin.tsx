import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "../../_dist/NavbarAdmin.css";
import { Navigate } from "react-router-dom";
const NavbarAdmin = () => {
  const [loggedOut, setLoggedOut] = useState(false); // New loggedOut state

  const logOut = () => {
    localStorage.removeItem("token");
    setLoggedOut(true); // Update loggedOut state when logging out
  };
  if (loggedOut) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="nav-admin">
      <div className="title">
        <h1 className="admin-title">Welcome to Admin Panel</h1>
      </div>
      <button className="user_logout_btn" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default NavbarAdmin;
