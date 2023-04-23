import React from "react";
import "../_dist/Navbar.css";
import { Divider } from "antd";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav">
        <div className="logo">
          <img src="../images/Logo.svg" alt="Logo" />
        </div>
        <div className="lang">
          <input type="button" className="but" value="EN" />
          <label className="label">:</label>
          <img src="../images/language.svg" className="lan" alt="language" />
        </div>
      </div>

      <ul className="list">
        <Divider type="vertical" className="feryel" />
        <li className="list1">Magazine</li>
        <Divider type="vertical" />

        <li className="list2">Pricing</li>
        <Divider type="vertical" />

        <li className="list3">Roadmap</li>
        <Divider type="vertical" />

        <li className="list4">Contact us</li>
        <Divider type="vertical" className="feryel" />

        <li className="list5">Sign up</li>
      </ul>
    </nav>
  );
};

export default Navbar;
