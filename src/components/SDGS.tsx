import React, { useState } from "react";
import "../_dist/SDGS.css";
import { Divider } from "antd";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
const SDGS = () => {
  const [Data, setData] = useState(localStorage.getItem("language") || "");

  const data_switch = (Data: any) => {
    switch (Data) {
      case "English":
        return dataEN;
      case "French":
        return dataFR;
      default:
        return dataEN;
    }
  };

  const data = data_switch(Data);
  return (
    <div className="sdgs-container">
      <div className="quote">
        <p>{data?.sdgs.p}</p>
      </div>
      <div className="sdgs-global">
        <h2>{data?.sdgs.h1}</h2>
        <div className="divider-title">
          <Divider type="horizontal" />
        </div>
        <div className="sdgs">
          <div className="card1">
            <div className="card1-div">
              <p className="paragraph">{data?.sdgs.first}</p>
            </div>
          </div>
          <div className="card2">
            <div className="card2-div">
              <p className="paragraph">{data?.sdgs.second}</p>
            </div>
          </div>
          <div className="card3">
            <div className="card3-div">
              <p className="paragraph">{data?.sdgs.third}</p>
            </div>
          </div>

          <div className="card4">
            <div className="card4-div">
              <p className="paragraph">{data?.sdgs.fourth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGS;
