import React from "react";
import "../_dist/Question2.css";
import { Divider } from "antd";
const Question2 = () => {
  return (
    <div className="question2-container">
      <p className="quote">
        “Re-envision work, follow people’s full careers and capabilities and
        find out all the plus value they have to offer.”
      </p>
      <div className="question2">
        <h1>SO why Now?</h1>
        <div className="divider-question2">
          <Divider type="horizontal" />
        </div>
      </div>
      <div className="question2-paragraph">
        <p>
          We are living in an entirely <span className="span2">New Era </span>
          with infinite technological potential.
        </p>
        <p>
          What if we used <span className="span2">machine learning</span> and
          <span className="span2"> data science </span>
          not only to gather static demographic data but to directly
          <span className="span2">
            {" "}
            study the interactions and tendencies of entire professional-
            <br />
            ecosystems
          </span>
          ?
        </p>
        <p>
          Organisations such as
          <span className="span2">
            {" "}
            Governments, NGOs, Corporations, Universities and Research
            <br /> Centers
          </span>{" "}
          need durable solutions to connect
          <span className="span1"> meaningfully</span> with engaged and
          committed
          <br /> <span>Workforces</span> and Loyal <span>Partners</span>.
        </p>
      </div>
    </div>
  );
};

export default Question2;
