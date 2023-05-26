import React, { useState } from "react";
import "../../_dist/Aboutkwk.css";
import { dataEN } from "../data/EnglishData";
import { dataFR } from "../data/FrenchData";
const Aboutkwk = () => {
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
    <div className="about">
      <div className="bigdiv3">
        <p>{data?.aboutkwk.p}</p>
      </div>
      <div className="bigdiv4">
        <div className="div4">
          <h1>{data?.aboutkwk.h1}</h1>
          <p>
            {data?.aboutkwk.pkwk.p1}
            <span className="span1">{data?.aboutkwk.pkwk.span}</span>
            {data?.aboutkwk.pkwk.p2}
          </p>
          <p>
            {data?.aboutkwk.p2}
            <span> {data?.aboutkwk.span1}</span>
            {data?.aboutkwk.p3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutkwk;
