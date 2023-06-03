import { Checkbox, Divider, Modal } from "antd";
import React, { useRef, useState } from "react";
import { bindActionCreators } from "redux";
import { ReportActionCreators } from "./Redux";
import { useDispatch } from "react-redux";
import "../_dist/CreateAccount.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";

const ReportBug = () => {
  const dispatch = useDispatch();
  const { addReport } = bindActionCreators(ReportActionCreators, dispatch);

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
  const [NewReport, setNewReport] = useState({
    typeBug: "",
    description: "",
    image: "",
    email: "",
  });
  const form = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
          (result: { text: any }) => {
            console.log(result.text);
          },
          (error: { text: any }) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form className="login-div" ref={form}>
      <div className="body2">
        <div className="right">
          <input
            type="text"
            placeholder="typebug"
            className="champ"
            name="user-typebug"
            required
            onChange={(e) =>
              setNewReport({ ...NewReport, typeBug: e.target.value })
            }
          />
          <div className="contact1">
            <Divider type="horizontal" />
          </div>
          <input
            type="text"
            placeholder="email"
            className="champ"
            name="user-email"
            onChange={(e) => {
              setNewReport({ ...NewReport, email: e.target.value });
              setIsValidEmail(true);
              setErrorMessage("");
            }}
          />
          {!isValidEmail && <div className="error-message">{errorMessage}</div>}
          {isValidEmail && successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
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
            type="text"
            placeholder="image"
            className="champ"
            onChange={(e) =>
              setNewReport({ ...NewReport, image: e.target.value })
            }
          />

          <div className="div-login2">
            {/* <button className="login-button" onClick={showModalL}>
              Log In
            </button> */}

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
