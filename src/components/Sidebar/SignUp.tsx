import { Divider, Modal } from "antd";
import React, { useState } from "react";
import "../../_dist/Signup.css";
import { Link } from "react-router-dom";
import "../CreateAccount";
import { dataEN } from "../data/EnglishData";
import { dataFR } from "../data/FrenchData";

const SignUp = () => {
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
    <div className="signup-div">
      <img className="logokwk" src="../images/logokwk.svg" alt="Logo KwK" />
      <h1 className="signin">{data?.signupComponent.h1}</h1>

      <div className="buttons">
        <Link to="/CreateAccount" className="private">
          {data?.signupComponent.link1}
        </Link>
        <button className="society">{data?.signupComponent.link2}</button>
        <div className="div-login">
          <label className="label1"> {data?.signupComponent.link3}</label>
          {/* <button className="login" onClick={showModalL}>
            Log In
          </button> */}
          <Link to="/signin" className="login-link">
            {data?.signupComponent.link4}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
