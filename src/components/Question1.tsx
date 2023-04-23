import React from "react";
import "../_dist/Question1.css";
import { Divider } from "antd";
const Question1 = () => {
  return (
    <div className="question-container">
      <p className="quote">
        “A solid foundation to plan your professional life, and a trustworthy
        foothold to go forward with your career.”
      </p>
      <div className="question">
        <h1>Why Are We Doing This?</h1>
        <div className="divider-question1">
          <Divider type="horizontal" />
        </div>
      </div>
      <div className="question-paragraph">
        <p>
          Try asking around
          <span className="span1">
            “what's the biggest challenge holding you up from living a better
            life?”
          </span>
        </p>

        <p>
          In nearly every answer we found out that it's all about
          <span className="span2">
            {" "}
            access to some sort of skill set.
            <br />
          </span>
          Money is nothing more than a medium for service, and
          <span className="span2">
            good service comes from people
            <br /> who turned their skills into careers.
          </span>
        </p>

        <p>
          While good <span className="span2">careers</span> come from safe,
          synergetic economical and social systems, we'll help <br />
          you
          <span> identify</span>,<span>secure</span>, and
          <span> solidify</span> one that is most compatible to your needs.
        </p>
      </div>
    </div>
  );
};

export default Question1;
