import { Checkbox, Divider, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { bindActionCreators } from "redux";
import { ReportActionCreators, State } from "./Redux";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";

import "../_dist/CreateAccount.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
import "../_dist/ReportBug.css";
import axios from "axios";

const ReportBug = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  const { addReport } = bindActionCreators(ReportActionCreators, dispatch);

  const currentUser = useSelector(
    (state: State) => state.UserReducer.currentUser
  );

  const [Data, setData] = useState(localStorage.getItem("language") || "");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  const [file, setFile] = useState<any | null>(null);
  const [NewReport, setNewReport] = useState({
    typeBug: "",
    description: "",
    image: "",
    email: currentUser?.email,
  });
  const form = useRef(null);

  //image upload
  const uploadImage = async (file: any) => {
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "feryel");

      const response = await axios
        .post("https://api.cloudinary.com/v1_1/dals4vqls/upload", form)
        .then((result) => {
          setNewReport({ ...NewReport, image: result.data.secure_url });
        });
      return response;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (file) {
      uploadImage(file);
    }
  }, [file]);

  const validateEmail = (email: string) => {
    if (NewReport.email === currentUser.email) {
      // If the email is pre-filled, skip the validation
      return true;
    }

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateEmail(NewReport.email)) {
      setIsValidEmail(false);
      setErrorMessage("Invalid email address");
      setErrorModalVisible(true);
      return;
    }

    setIsValidEmail(true);
    setErrorMessage("");
    setErrorModalVisible(false);
    setSuccessMessage("Report sent successfully!");

    addReport(NewReport);
    console.log("send Email");

    if (form.current) {
      emailjs
        .sendForm(
          "service_nfdnkop",
          "template_7z7b6bc",
          form.current,
          "4vHOD4U-u76RQAR7b"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form className="login-div" ref={form}>
      <div className="body2">
        <div className="right">
          <h1 className="bug">Report a bug</h1>
          <select
            name="user-typebug"
            required
            className="champ"
            onChange={(e) =>
              setNewReport({ ...NewReport, typeBug: e.target.value })
            }
          >
            <option value="">Select type of bug</option>
            <option value="functionnal bug">functionnal bug</option>
            <option value="design bug">design bug</option>
            <option value="security bug">security bug</option>
          </select>
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="text"
            placeholder="description"
            name="user-description"
            className="champ"
            onChange={(e) =>
              setNewReport({ ...NewReport, description: e.target.value })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="file"
            placeholder="image"
            className="champ"
            onChange={(e: any) => setFile(e.target.files[0])}
          />

          <div className="div-report  ">
            <button className="create" onClick={sendEmail}>
              Add new report
            </button>
          </div>
        </div>
      </div>

      <Modal
        title="Error"
        visible={errorModalVisible}
        onCancel={() => setErrorModalVisible(false)}
        footer={null}
      >
        <p>{errorMessage}</p>
      </Modal>
    </form>
  );
};

export default ReportBug;
