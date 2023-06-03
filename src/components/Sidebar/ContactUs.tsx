import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ContactActionCreators } from "../Redux";
import emailjs from "@emailjs/browser";
import { Alert, Button, Divider } from "antd";

import "../../_dist/ContactUs.css";
import form from "antd/es/form";
import { dataEN } from "../data/EnglishData";
import { dataFR } from "../data/FrenchData";
const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Data, setData] = useState(localStorage.getItem("language") || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
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
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (
      !NewContact.email ||
      !NewContact.Name ||
      !NewContact.organisation ||
      !NewContact.subject ||
      !NewContact.message
    ) {
      setErrorMessage("Please fill in all the fields.");
      setSuccessMessage("");
      return;
    }

    // Validate email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(NewContact.email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    addContact(NewContact);
    console.log("send Email");
    if (form.current) {
      emailjs
        .sendForm(
          "service_nfdnkop",
          "template_cjsvuj5",
          form.current,
          "4vHOD4U-u76RQAR7b"
        )
        .then(
          (result: { text: any }) => {
            console.log(result.text);
            setErrorMessage("");
            setSuccessMessage("Message sent successfully!");
          },
          (error: { text: any }) => {
            console.log(error.text);
            setErrorMessage("An error occurred while sending the email.");
            setSuccessMessage("");
          }
        );
    }
  };
  const dispatch = useDispatch();
  const { addContact } = bindActionCreators(ContactActionCreators, dispatch);

  const [NewContact, setNewContact] = useState({
    Name: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
  });

  return (
    <div>
      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          closable
          className="alert"
          style={{ position: "absolute", top: 0, width: "100%" }}
        />
      )}
      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          showIcon
          closable
          className="alert"
          style={{ position: "absolute", top: 0, width: "100%" }}
        />
      )}
      <div
        // maskTransitionName=
        className="contact-div"
        // title="Basic Modal"
      >
        <form className="body" ref={form}>
          <div className="left">
            <img src="../images/logokwk.svg" alt="Logo KwK" />
            <h2>{data?.nav.contactus}</h2>
            <input
              type="text"
              placeholder={data?.contactusComponent.field1}
              name="user-name"
              className="champs"
              onChange={(e) =>
                setNewContact({ ...NewContact, Name: e.target.value })
              }
            />
            <div className="contact">
              <Divider type="horizontal" />
            </div>

            <input
              type="email"
              placeholder={data?.contactusComponent.fiedl2}
              name="user-email"
              className="champs"
              onChange={(e) =>
                setNewContact({
                  ...NewContact,
                  email: e.target.value,
                })
              }
            />
            <div className="contact">
              {" "}
              <Divider type="horizontal" />
            </div>

            <input
              type="text"
              placeholder={data?.contactusComponent.fiedl3}
              className="champs"
              onChange={(e) =>
                setNewContact({
                  ...NewContact,
                  organisation: e.target.value,
                })
              }
            />
            <div className="contact">
              <Divider type="horizontal" />
            </div>

            <input
              type="text"
              placeholder={data?.contactusComponent.field4}
              className="champs"
              onChange={(e) =>
                setNewContact({
                  ...NewContact,
                  subject: e.target.value,
                })
              }
            />
            <div className="contact">
              <Divider type="horizontal" />
            </div>
            {/* <div className="last">
              <Divider type="horizontal" />
            </div> */}
          </div>
          <div className="right">
            <h2>{data?.contactusComponent.h2}</h2>
            <div className="msg">
              <Divider type="horizontal" />
            </div>
            <input
              type="text"
              className="message"
              name="message"
              onChange={(e) =>
                setNewContact({
                  ...NewContact,
                  message: e.target.value,
                })
              }
              placeholder={data?.contactusComponent.field5}
            />
            <button className="send" onClick={sendEmail}>
              {data?.contactusComponent.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
