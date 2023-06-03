import { Checkbox, Divider, Modal, message } from "antd";
import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { UserActionCreators } from "./Redux";
import { useDispatch } from "react-redux";
import "../_dist/CreateAccount.css";
import { Link } from "react-router-dom";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const { addUser, loginUser } = bindActionCreators(
    UserActionCreators,
    dispatch
  );

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
  const [NewUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    bannerimage: "",
    profilimage: "",
    biography: "",
  });

  const handleSignUp = () => {
    // Perform email and password validation checks
    if (!validateEmail(NewUser.email)) {
      message.error("Invalid email address");
      return;
    }

    if (NewUser.password !== NewUser.confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    // Call the addUser action to register the new user
    addUser(NewUser);
  };

  const validateEmail = (email: string) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-div">
      <div className="body2">
        <div className="left">
          <img src="../images/logokwk.svg" alt="Logo KwK" />
          <h2> {data?.nav.signup}</h2>
          <button className="private-signin">
            {data?.signupComponent.link1}
          </button>
          <button className="society-signin">
            {data?.signupComponent.link2}{" "}
          </button>
          <div className="caroussel-divider2">
            <Divider type="horizontal" />
          </div>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder={data?.createaccount.field1}
            className="champ"
            required
            onChange={(e) =>
              setNewUser({ ...NewUser, firstName: e.target.value })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="text"
            placeholder={data?.createaccount.fiedl2}
            className="champ"
            onChange={(e) =>
              setNewUser({ ...NewUser, lastName: e.target.value })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="text"
            placeholder={data?.createaccount.field3}
            className="champ"
            onChange={(e) =>
              setNewUser({ ...NewUser, birthday: e.target.value })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="email"
            placeholder={data?.createaccount.field4}
            className="champ"
            onChange={(e) => setNewUser({ ...NewUser, email: e.target.value })}
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="password"
            placeholder={data?.createaccount.field5}
            className="champ"
            onChange={(e) =>
              setNewUser({ ...NewUser, password: e.target.value })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="password"
            placeholder={data?.createaccount.field6}
            className="champ"
            onChange={(e) =>
              setNewUser({
                ...NewUser,
                confirmPassword: e.target.value,
              })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="file"
            placeholder="banner image"
            className="champ"
            onChange={(e) =>
              setNewUser({
                ...NewUser,
                bannerimage: e.target.value,
              })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="file"
            placeholder="profile image"
            className="champ"
            onChange={(e) =>
              setNewUser({
                ...NewUser,
                profilimage: e.target.value,
              })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="text"
            placeholder="Biography"
            className="champ"
            onChange={(e) =>
              setNewUser({
                ...NewUser,
                biography: e.target.value,
              })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <Checkbox className="checkbox">
            <h3>{data?.createaccount.chekbox}</h3>
          </Checkbox>
          <div className="div-login2">
            <label className="label-account">
              {data?.signupComponent.link3}
            </label>
            {/* <button className="login-button" onClick={showModalL}>
              Log In
            </button> */}
            <Link to="/signin" className="link-login">
              {data?.signinComponent.button}
            </Link>
            <button className="create" onClick={handleSignUp}>
              {data?.createaccount.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
