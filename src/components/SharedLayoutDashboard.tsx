import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Sidebar/Navbar";
import Section from "./Section";
import { Sidebar } from "react-admin";
import SidebarAdmin from "./Admin/SidebarAdmin";
import Dashboard from "./Admin/Dashboard";
import NavbarAdmin from "./Admin/NavbarAdmin";

type Props = {};

const SharedLayoutDashboard = (props: Props) => {
  return (
    <div className="dashboard">
      <NavbarAdmin />
      <SidebarAdmin />

      {/* <Dashboard /> */}
      <div className="outlet-section">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayoutDashboard;
