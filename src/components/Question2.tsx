import React, { useState } from "react";
import "../_dist/Question2.css";
import { Divider } from "antd";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
const Question2 = () => {
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
    <div className="question2-container">
      <p className="quote">{data?.question2.p}</p>
      <div className="question2">
        <h1>{data?.question2.h1}</h1>
        <div className="divider-question2">
          <Divider type="horizontal" />
        </div>
      </div>
      <div className="question2-paragraph">
        <p>
          {data?.question2.p1}
          <span className="span2">{data?.question2.span1} </span>
          {data?.question2.p2}
        </p>
        <p>
          <span className="span2">{data?.question2.span2}</span>{" "}
          {data?.question2.p3}
          <span className="span2"> {data?.question2.span3} </span>
          {data?.question2.p4}
          <span className="span2"> {data?.question2.span4}</span>
        </p>
        <p>
          {data?.question2.p5}{" "}
          <span className="span2">{data?.question2.span5}</span>{" "}
          {data?.question2.p6} <br />
          <span className="span1">
            {data?.question2.span6} {data?.question2.p7}
          </span>
          {/* {data?.question2.p7} */}
          <span>{data?.question2.span7}</span>
          {data?.question2.p8} <span>{data?.question2.span8}</span>.
        </p>
      </div>
    </div>
  );
};

export default Question2;
