import React, { useContext } from "react";
import "../../_dist/Navbar.css";
import { Button, Divider } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "../SharedLayout";

interface NavbarProps {
  onLanguageChange: (language: string) => void;
  language: string; // Add the language prop
}

const Navbar = ({ onLanguageChange }: NavbarProps) => {
  const navigate = useNavigate();
  const data = useContext(DataContext);
  const handleLanguageChange = () => {
    const selectedLanguage =
      localStorage.getItem("language") === "English" ? "French" : "English";
    onLanguageChange(selectedLanguage);
  };

  return (
    <nav className="navbar">
      <div className="nav">
        <div className="logo">
          <img
            src="../images/Logo.svg"
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="lang">
          <Button className="btn-language" onClick={handleLanguageChange}>
            {localStorage.getItem("language") === "English" ? "EN" : "FR"}
          </Button>
          <label className="label2">:</label>
          <img src="../images/language.svg" className="lan" alt="language" />
        </div>
      </div>

      <ul className="list">
        <Divider type="vertical" className="feryel" />
        <li className="list1" onClick={() => navigate("/magazine")}>
          {data?.nav?.magazine}
        </li>

        <Divider type="vertical" />

        <li className="list2" onClick={() => navigate("/magazine")}>
          {data?.nav?.pricing}
        </li>
        <Divider type="vertical" />

        <li className="list3" onClick={() => navigate("/roadmap")}>
          {data?.nav?.roadmap}
        </li>
        <Divider type="vertical" />

        <li className="list4" onClick={() => navigate("/contactus")}>
          {data?.nav?.contactus}
        </li>
        <Divider type="vertical" className="feryel" />

        <li className="list5" onClick={() => navigate("/signup")}>
          {data?.nav?.signup}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
