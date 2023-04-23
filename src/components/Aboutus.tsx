import React from "react";
import "../_dist/Aboutus.css";
import { Divider } from "antd";
const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <p className="quote">
        “Customized professional ecosystem maps for the specific needs of each
        organisation.”
      </p>
      <div className="aboutus">
        <div className="header">
          <h2>About us</h2>
          <div className="divider-about">
            <Divider type="horizontal" />
          </div>
        </div>

        <div className="body">
          <p>
            We are a Values-Purpose-Culture based platform for people or
            organisations to gather around Meaningful Projects and accurately
            Benchmark <br />
            Careers and Ecosystems. We designed it for everyone. Young and
            seasoned professionals, artists, artisans, researchers, to all kinds
            of organizations,
            <br /> global NGOs and local structures. With KWK, you can share,
            follow and also collaborate with organizations and initiatives
            around you and all over <br />
            the world.
          </p>
        </div>
        <div className="footer">
          <div className="contact">
            <h2>Contacts </h2>
            <p>Contact@korewakore.com</p>
            <p>Media@korewakore.com</p>
          </div>
          <div className="follow">
            <h2>Follow us</h2>
            <div className="icons">
              <div className="name">
                <img src="../images/Linkedin.svg" alt="" />
                <p>Linkedin</p>
              </div>
              <div className="name">
                <img src="../images/Instagram.svg" alt="" />
                <p>Instagram</p>
              </div>
              <div className="name">
                <img src="../images/Twitter.svg" alt="" />
                <p>Twitter</p>
              </div>
              <div className="name">
                <img src="../images/Facebook.svg" alt="" />
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rights">
          <p>Ⓒ KOREWAKORE All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
