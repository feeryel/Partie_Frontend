import React, { useState } from "react";
import "../_dist/Organisation.css";
import { Divider } from "antd";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
const Organisation = () => {
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
    <div className="org">
      <div className="orgdiv1">
        <p>{data?.organisation.p1}</p>
      </div>
      <div className="orgdiv2">
        <h1>{data?.organisation.h1} </h1>
        <div className="divider-organisation">
          <Divider type="horizontal" className="organisation-divider-section" />
        </div>
        <h2 className="h">{data?.organisation.organisation}</h2>
        <p className="p1">{data?.organisation.p2}</p>
        <h2 className="hh">{data?.organisation.yourself}</h2>
        <p className="p2">{data?.organisation.p3}</p>
      </div>
    </div>
  );
};

export default Organisation;
