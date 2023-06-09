import { Checkbox, Divider, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { UserActionCreators } from "./Redux";
import { useDispatch } from "react-redux";
import "../_dist/CreateAccount.css";
import { Link } from "react-router-dom";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
import axios from "axios";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const { addUser, loginUser } = bindActionCreators(
    UserActionCreators,
    dispatch
  );

  //dals4vqls
  // https://api.cloudinary.com/v1_1/dals4vqls
  // feryel
  const [file, setFile] = useState<any | null>(null);
  const [picture, setPicture] = useState<any | null>(null);

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

  const uploadImage = async (file: any) => {
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "feryel");

      const response = await axios
        .post("https://api.cloudinary.com/v1_1/dals4vqls/upload", form)
        .then((result) => {
          setNewUser({ ...NewUser, bannerimage: result.data.secure_url });
        });
      return response;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const uploadProfile = async (picture: any) => {
    try {
      const form = new FormData();
      form.append("file", picture);
      form.append("upload_preset", "feryel");

      const response = await axios
        .post("https://api.cloudinary.com/v1_1/dals4vqls/upload", form)
        .then((result) => {
          setNewUser({ ...NewUser, profileimage: result.data.secure_url });
        });
      return response;
    } catch (error) {
      console.error("Error uploading profile image:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (file) {
      uploadImage(file);
    }
  }, [file]);

  useEffect(() => {
    if (picture) {
      uploadProfile(picture);
    }
  }, [picture]);

  const [NewUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    bannerimage: "",
    profileimage: "",
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
    // uploadImage();
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
          <label htmlFor="file" className="file-input-label">
            <span>{data?.createaccount.field7}</span>
          </label>
          <input
            className="file-input"
            type="file"
            // value={file}
            onChange={(e: any) => setFile(e.target.files[0])}
          />
          {/* <img src={url} /> */}
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <label htmlFor="file" className="file-input-label">
            <span>{data?.createaccount.field8}</span>
          </label>
          <input
            className="file-input"
            type="file"
            // value={file}
            onChange={(e: any) => setPicture(e.target.files[0])}
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
            <button className="account" onClick={handleSignUp}>
              {data?.createaccount.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
