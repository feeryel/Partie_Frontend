import React from "react";
import "../_dist/SDGS.css";
import { Divider } from "antd";
const SDGS = () => {
  return (
    <div className="sdgs-container">
      <div className="quote">
        <p>
          “Help in reducing work bias and enhancing inclusivity by sharing your
          work knowledge through a peer review system.”
        </p>
      </div>
      <div className="sdgs-global">
        <h2>SDGS</h2>
        <div className="divider-title">
          <Divider type="horizontal" />
        </div>
        <div className="sdgs">
          <div className="card1">
            <div className="card1-div">
              <p className="paragraph">#8 Decent Work and Economic Growth</p>
            </div>
          </div>
          <div className="card2">
            <div className="card2-div">
              <p className="paragraph">#10 Reduced Inequality</p>
            </div>
          </div>
          <div className="card3">
            <div className="card3-div">
              <p className="paragraph">#11 Sustainable Cities & Communities</p>
            </div>
          </div>

          <div className="card4">
            <div className="card4-div">
              <p className="paragraph">#17 Partnerships for the Goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGS;
