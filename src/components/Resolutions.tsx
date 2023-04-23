import React from "react";
import "../_dist/Resolutions.css";
import { Divider } from "antd";
const Resolutions = () => {
  return (
    <div className="resolution-container">
      <p className="quote">
        “A full pack of front pages for a complete professional digital
        presence.”
      </p>

      <div className="resolution">
        <h1 className="h1"> Our Resolutions</h1>
        <div className="divider-resolution">
          <Divider type="horizontal" />
        </div>
        <div className="resolution-div1">
          <div className="resolution-div2">
            <img src="../images/Vector.svg" alt="vector" />
            <p className="quote2">
              Inspiring hope in professionals through work
              <span className="spanviolet"> with organisations </span>
              inside and outside of their countries.
            </p>
          </div>
          <div className="resolution-div2-div3">
            <img src="../images/Group5.png" alt="vector" />
            <p className="quote2">
              Supporting <span className="spanrose">expats</span> everywhere in
              <span className="spanrose"> remotely helping</span> their
              homelands.
            </p>
          </div>
          <div className="resolution-div2">
            <img src="../images/Group8.svg" alt="vector" />
            <p className="quote2">
              Creating healthy professional
              <span className="spanbleu"> ecosystems</span> and
              <span className="spanbleu"> company cultures.</span>
            </p>
          </div>
          <div className="resolution-div2-div3">
            <img src="../images/Group4.png" alt="vector" />
            <p className="quote2">
              Offering{" "}
              <span className="spanorange">real time benchmarking</span> of best
              practices, making their implementation intuitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resolutions;
