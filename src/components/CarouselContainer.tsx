import React, { useState } from "react";
import { Carousel, Divider, Modal } from "antd";
import "../_dist/carousel.css";
const CarouselContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Email, setEmail] = useState("");

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
            <h1> Koré Wa Koré</h1>
          </div>

          <div className="div2">
            <h3>Supporting Resolutions</h3>
          </div>
        </div>
        <div className="bigdiv2">
          <div className="div3">
            <p>
              We offer individuals a single solution for all their career needs
              and organizations a powerful time-saver to take the best care of
              their human capital.
            </p>
          </div>
        </div>
        <div className="but2">
          <button className="signup" onClick={showModal}>
            Sign Up
          </button>
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
              <input
                className="email"
                type="email"
                placeholder="E-mail Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="caro-divider">
                <Divider type="horizontal" />
              </div>
              <button className="souscrire">Souscrire</button>
              <div className="caro-divider2">
                <Divider type="horizontal" />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default CarouselContainer;
