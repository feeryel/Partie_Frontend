import React from "react";
import "../_dist/Organisation.css";
import { Divider } from "antd";
const Organisation = () => {
  return (
    <div className="org">
      <div className="orgdiv1">
        <p>
          “Benchmarking peer-reviewed insider knowledge and insights about the
          industry.”
        </p>
      </div>
      <div className="orgdiv2">
        <h1>what if ... </h1>
        <div className="divider-organisation">
          <Divider type="horizontal" className="organisation-divider-section" />
        </div>
        <h2 className="h">Your organisation</h2>
        <p className="p1">
          ... could have a living portfolio that would naturally connect you
          with the best opportunities, in terms of projects, partnerships and
          human capital?
        </p>
        <h2 className="hh">You yourself</h2>
        <p className="p2">
          ... could showcase your entire career on a platform that would
          naturally connect you to organisations and entities that share your
          values and views?
        </p>
      </div>
    </div>
  );
};

export default Organisation;
