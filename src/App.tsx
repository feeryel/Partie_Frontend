import React from "react";
import "../src/_dist/app.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import CarouselContainer from "./components/CarouselContainer";
import { Divider } from "antd";
import CreateRoutes from "./components/CreateRoutes";

function App() {
  return (
    <div className="page-container">
      <div className="navbar-container ">
        <Navbar />
      </div>

      {/* <Divider type="vertical" /> */}
      <Section />
      <CreateRoutes />
    </div>
  );
}

export default App;
