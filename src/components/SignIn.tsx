import React, { useState } from "react";
import { UserActionCreators } from "./Redux";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { Divider } from "antd";
import "../_dist/SignIn.css";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";

const SignIn = () => {
  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(UserActionCreators, dispatch);
  const navigate = useNavigate(); // Access the navigate function

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
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    await loginUser(User);
    navigate("/profile"); // Redirect to the profile page
  };

  return (
    <div>
      <div className="signin-div">
        <img className="logokwk" src="../images/logokwk.svg" alt="Logo KwK" />
        <h1 className="signin">{data?.signinComponent.h1}</h1>

        <div className="input-log">
          <input
            type="email"
            placeholder={data?.signinComponent.field1}
            className="email-log"
            onChange={(e) => setUser({ ...User, email: e.target.value })}
          />
          <input
            type="password"
            placeholder={data?.signinComponent.field2}
            className="password-log"
            onChange={(e) => setUser({ ...User, password: e.target.value })}
          />
        </div>
        <div className="div-login">
          <button className="log" onClick={handleLogin}>
            {data?.signinComponent.button}
          </button>
        </div>

        {/* <div className="caro-divider2">
          <Divider type="horizontal" />
        </div> */}
      </div>
    </div>
  );
};

export default SignIn;
