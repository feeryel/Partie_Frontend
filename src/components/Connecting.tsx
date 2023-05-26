import React, { useState } from "react";
import "../_dist/Connecting.css";
import { Divider, Modal } from "antd";
import { addContact } from "./Redux/Actions/ContactAction";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ContactActionCreators } from "./Redux";
import { Link } from "react-router-dom";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
const Connecting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const dispatch = useDispatch();
  const { addContact } = bindActionCreators(ContactActionCreators, dispatch);

  const [NewContact, setNewContact] = useState({
    Name: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="connecting-container">
      <p className="quote">{data?.connecting.p}</p>
      <div className="connecting-global">
        <h2>{data?.connecting.h1}</h2>
        <div className="divider-title">
          <Divider type="horizontal" />
        </div>
        <div className="connecting">
          <div className="card">
            <div className="card-div">
              <div className="card-div1">
                <h3>{data?.connecting.title}</h3>
                <p>{data?.connecting.h3}</p>
              </div>
              <div className="button1">
                {/* <button className="button" onClick={showModal}>
                  Contact us
                </button> */}
                <Link to="/contactus" className="contact-button">
                  {data?.nav.contactus}
                </Link>
                <Link to="/reportbug" className="report-button">
                  {data?.connecting.button}
                </Link>
              </div>
              {/* <div className="contact-us-modal">
                <Modal
                  transitionName=""
                  // maskTransitionName=
                  className="button-contact"
                  // title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <div className="body">
                    <div className="left">
                      <img src="../images/logokwk.svg" alt="Logo KwK" />
                      <h2>Contact Us</h2>
                      <input
                        type="text"
                        placeholder="Name"
                        className="champs"
                        onChange={(e) =>
                          setNewContact({ ...NewContact, Name: e.target.value })
                        }
                      />
                      <div className="contact">
                        {" "}
                        <Divider type="horizontal" />
                      </div>

                      <input
                        type="email"
                        placeholder="Email"
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
                        placeholder="Organisation"
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
                        placeholder="Subject"
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
                      <div className="last">
                        <Divider type="horizontal" />
                      </div>
                    </div>
                    <div className="right">
                      <h2>Your message</h2>
                      <div className="msg">
                        {" "}
                        <Divider type="horizontal" />
                      </div>
                      <input
                        type="text"
                        className="message"
                        onChange={(e) =>
                          setNewContact({
                            ...NewContact,
                            message: e.target.value,
                          })
                        }
                        placeholder="Type your message here"
                      />
                      <button
                        className="send"
                        onClick={() => addContact(NewContact)}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </Modal>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connecting;
