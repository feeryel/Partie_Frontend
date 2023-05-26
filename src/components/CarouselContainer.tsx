import React, { useState } from "react";
import { Carousel, Checkbox, Divider, Modal } from "antd";
import "../_dist/carousel.css";
import SignUp from "./Sidebar/SignUp";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { UserActionCreators } from "./Redux";
import { Link } from "react-router-dom";
import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";
const CarouselContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenS, setIsModalOpenS] = useState(false);
  const [isModalOpenL, setIsModalOpenL] = useState(false);

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
    confirmpassword: "",
    birthday: "",
  });
  const [User, setUser] = useState({
    email: "",
    password: "",
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
  const showModalL = () => {
    setIsModalOpenL(true);
    setIsModalOpenS(false);
    setIsModalOpen(false);
  };

  const handleOkL = () => {
    setIsModalOpenL(false);
  };

  const handleCancelL = () => {
    setIsModalOpenL(false);
  };

  const showModalS = () => {
    setIsModalOpenS(true);
    setIsModalOpen(false);
  };

  const handleOkS = () => {
    setIsModalOpenS(false);
  };

  const handleCancelS = () => {
    setIsModalOpenS(false);
  };

  return (
    <div className="carousel-container">
      <Carousel className="caro" autoplaySpeed={3000} autoplay dots={true}>
        <div className="s1">
          <img src="../images/first.jpg" alt="" />
        </div>
        <div className="s1">
          <img src="../images/second.jpg" alt="slide2" />
        </div>
        <div className="s1">
          <img src="../images/third.jpg" alt="slide3" />
        </div>
      </Carousel>
      <div className="fer">
        <div className="bigdiv1">
          <div className="div1">
            <h1> {data?.carousel.h1} </h1>
          </div>

          <div className="div2">
            <h3>{data?.carousel.h3}</h3>
          </div>
        </div>
        <div className="bigdiv2">
          <div className="div3">
            <p>{data?.carousel.p}</p>
          </div>
        </div>
        <div className="but2">
          {/* <button className="signup" onClick={showModal}>
            Sign Up
          </button> */}
          <Link to="/signup" className="signup-link">
            {data?.nav.signup}
          </Link>
        </div>
        <div>
          <div className="caroussel-modal">
            <Modal
              transitionName=""
              className="button-caroussel"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <img
                className="logokwk"
                src="../images/logokwk.svg"
                alt="Logo KwK"
              />
              <h1 className="signin">Sign In</h1>

              <div className="buttons">
                <button className="private" onClick={showModalS}>
                  Private Account
                </button>
                <button className="society">
                  I have a registered Business/Organisation
                </button>
                <div className="div-login">
                  <label className="label1">Already have an account?</label>
                  <button className="login" onClick={showModalL}>
                    Log In
                  </button>
                </div>
              </div>
              <div className="caro-divider2">
                <Divider type="horizontal" />
              </div>
            </Modal>
            <div className="caroussel-modal2">
              <Modal
                transitionName=""
                // maskTransitionName=
                className="button-private"
                // title="Basic Modal"
                open={isModalOpenS}
                onOk={handleOkS}
                onCancel={handleCancelS}
              >
                <div className="body2">
                  <div className="left">
                    <img src="../images/logokwk.svg" alt="Logo KwK" />
                    <h2> Sign Up</h2>
                    <button className="private-signin">Private Account</button>
                    <button className="society-signin">
                      I have a registered Business/Organisation
                    </button>
                    <div className="caroussel-divider2">
                      <Divider type="horizontal" />
                    </div>
                  </div>
                  <div className="right">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="champ"
                      onChange={(e) =>
                        setNewUser({ ...NewUser, firstName: e.target.value })
                      }
                    />
                    <div className="contact1">
                      <Divider type="horizontal" />
                    </div>
                    <input
                      type="text"
                      placeholder="Last Name*"
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
                      placeholder="Birth Date*"
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
                      placeholder="E-mail address*"
                      className="champ"
                      onChange={(e) =>
                        setNewUser({ ...NewUser, email: e.target.value })
                      }
                    />
                    <div className="contact1">
                      <Divider type="horizontal" />
                    </div>
                    <input
                      type="password"
                      placeholder="Password*"
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
                      placeholder="Confirm Password*"
                      className="champ"
                      onChange={(e) =>
                        setNewUser({
                          ...NewUser,
                          confirmpassword: e.target.value,
                        })
                      }
                    />
                    <div className="contact1">
                      <Divider type="horizontal" />
                    </div>
                    <Checkbox className="checkbox">
                      <h3>
                        I am an Independent and I have a registered Business.
                      </h3>
                    </Checkbox>
                    <div className="div-login2">
                      <label className="label-account">
                        Already have an account?
                      </label>
                      <button className="login-button" onClick={showModalL}>
                        Log In
                      </button>

                      <button
                        className="create"
                        onClick={() => addUser(NewUser)}
                      >
                        Create a KWK Private Account
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
              <div className="caroussel-modal3">
                <Modal
                  transitionName=""
                  className="login-caroussel"
                  open={isModalOpenL}
                  onOk={handleOkL}
                  onCancel={handleCancelL}
                >
                  <img
                    className="logokwk"
                    src="../images/logokwk.svg"
                    alt="Logo KwK"
                  />
                  <h1 className="signin">Sign In</h1>

                  <div className="input-log">
                    <input
                      type="email"
                      placeholder="E-mail Address"
                      className="email-log"
                      onChange={(e) =>
                        setUser({ ...User, email: e.target.value })
                      }
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="password-log"
                      onChange={(e) =>
                        setUser({ ...User, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="div-login">
                    <button className="log" onClick={() => loginUser(User)}>
                      Log In
                    </button>
                  </div>

                  <div className="caro-divider2">
                    <Divider type="horizontal" />
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

export default CarouselContainer;
