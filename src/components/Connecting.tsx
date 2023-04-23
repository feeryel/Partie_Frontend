import React, { useState } from "react";
import "../_dist/Connecting.css";
import { Divider, Modal } from "antd";
const Connecting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Organisation, setOrganisation] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

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
      <p className="quote">
        “Collaborate on projects globally and locally with people and
        organisations from all over the world.”
      </p>
      <div className="connecting-global">
        <h2>connecting</h2>
        <div className="divider-title">
          <Divider type="horizontal" />
        </div>
        <div className="connecting">
          <div className="card">
            <div className="card-div">
              <div className="card-div1">
                <h3>We can be part of your adventure</h3>
                <p>
                  We are diverse, authentic, and sincerely committed to building
                  a better world.
                </p>
              </div>
              <div className="button1">
                <button className="button" onClick={showModal}>
                  Contact us
                </button>
              </div>
              <div className="contact-us-modal">
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
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div className="contact">
                        {" "}
                        <Divider type="horizontal" />
                      </div>

                      <input
                        type="email"
                        placeholder="Email"
                        className="champs"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="contact">
                        {" "}
                        <Divider type="horizontal" />
                      </div>

                      <input
                        type="text"
                        placeholder="Organisation"
                        className="champs"
                        onChange={(e) => setOrganisation(e.target.value)}
                      />
                      <div className="contact">
                        {" "}
                        <Divider type="horizontal" />
                      </div>

                      <input
                        type="text"
                        placeholder="Subject"
                        className="champs"
                        onChange={(e) => setSubject(e.target.value)}
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
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here"
                      />
                      <button className="send">Send</button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connecting;
