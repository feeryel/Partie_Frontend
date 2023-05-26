import React from "react";
import { BiSearch } from "react-icons/bi";
import "../../_dist/NavbarAdmin.css";
const NavbarAdmin = () => {
  return (
    <div className="navbar-admin">
      <div className="nav-admin">
        <div className="title">
          <h1>
            Welcome to <span> Admin Panel</span>
          </h1>
        </div>
        <div className="search">
          <BiSearch />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
