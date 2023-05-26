import React, { useState } from "react";
import "../_dist/Resolutions.css";
import { Divider } from "antd";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
const Resolutions = () => {
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
    <div className="resolution-container">
      <p className="quote">{data?.resolutions.p}</p>

      <div className="resolution">
        <h1 className="h1">{data?.resolutions.h1}</h1>
        <div className="divider-resolution">
          <Divider type="horizontal" />
        </div>
        <div className="resolution-div1">
          <div className="resolution-div2">
            <img src="../images/Vector.svg" alt="vector" />
            <p className="quote2">
              {data?.resolutions.parapgraphs.p1.p1}
              <span className="spanviolet">
                {" "}
                {data?.resolutions.parapgraphs.p1.span1}{" "}
              </span>
              {data?.resolutions.parapgraphs.p1.p2}
            </p>
          </div>
          <div className="resolution-div2-div3">
            <img src="../images/Group5.png" alt="vector" />
            <p className="quote2">
              {data?.resolutions.parapgraphs.p2.p2}{" "}
              <span className="spanrose">
                {data?.resolutions.parapgraphs.p2.span2}
              </span>{" "}
              {data?.resolutions.parapgraphs.p2.p3}
              <span className="spanrose">
                {" "}
                {data?.resolutions.parapgraphs.p2.span3}
              </span>{" "}
              {data?.resolutions.parapgraphs.p2.p4}
            </p>
          </div>
          <div className="resolution-div2">
            <img src="../images/Group8.svg" alt="vector" />
            <p className="quote2">
              {data?.resolutions.parapgraphs.p3.p3}
              <span className="spanbleu">
                {" "}
                {data?.resolutions.parapgraphs.p3.span4}
              </span>{" "}
              {data?.resolutions.parapgraphs.p3.p4}
              <span className="spanbleu">
                {data?.resolutions.parapgraphs.p3.span5}
              </span>
              {data?.resolutions.parapgraphs.p3.p5}
            </p>
          </div>
          <div className="resolution-div2-div3">
            <img src="../images/Group4.png" alt="vector" />
            <p className="quote2">
              {data?.resolutions.parapgraphs.p4.p4}
              <span className="spanorange">
                {data?.resolutions.parapgraphs.p4.span5}
              </span>{" "}
              {data?.resolutions.parapgraphs.p4.p5}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resolutions;
