import React, { useState } from "react";
import "../_dist/Question1.css";
import { Divider } from "antd";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
const Question1 = () => {
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
    <div className="question-container">
      <p className="quote">{data?.question1.p1}</p>
      <div className="question">
        <h1>{data?.question1.h1}</h1>
        <div className="divider-question1">
          <Divider type="horizontal" />
        </div>
      </div>
      <div className="question-paragraph">
        <p>
          {data?.question1.p2}
          <span className="span1">{data?.question1.span1}</span>
        </p>

        <p>
          {data?.question1.p3}{" "}
          <span className="span2">
            {" "}
            {data?.question1.span2} <br />
          </span>
          {data?.question1.p4}{" "}
          <span className="span2">
            {data?.question1.span3} <br />
          </span>
        </p>

        <p>
          {data?.question1.p5}
          <span className="span2">{data?.question1.span4}</span>{" "}
          {data?.question1.p6} <br />
          <span> {data?.question1.span5}</span> {data?.question1.p7}
          <span> {data?.question1.span7}</span> {data?.question1.p8}
        </p>
      </div>
    </div>
  );
};

export default Question1;
