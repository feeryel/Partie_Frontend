import React, { useState } from "react";
import "../../_dist/Aboutus.css";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { dataEN } from "../data/EnglishData";
import { dataFR } from "../data/FrenchData";
const Aboutus = () => {
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
  return (
    <div className="aboutus-container">
      <p className="quote">{data?.aboutus.paragraph}</p>
      <div className="aboutus">
        <div className="header">
          <h2>{data?.aboutus.h1}</h2>
          <div className="divider-about">
            <Divider type="horizontal" />
          </div>
        </div>

        <div className="body">
          <p>{data?.aboutus.p}</p>
        </div>
        <div className="footer">
          <div className="contact">
            <h2>{data?.aboutus.contacts}</h2>
            <p>{data?.aboutus.firstcontact}</p>
            <p>{data?.aboutus.secondmedia}</p>
          </div>
          <div className="follow">
            <h2>{data?.aboutus.followus}</h2>
            <div className="icons">
              <div className="name">
                <img src="../images/Linkedin.svg" alt="" />
                <Link
                  className="link"
                  to="https://www.linkedin.com/showcase/kore-wa-kore/"
                  target="_blank"
                >
                  {data?.aboutus.sociaux1}
                </Link>
              </div>
              <div className="name">
                <img src="../images/Instagram.svg" alt="" />
                <Link
                  className="link"
                  to="https://www.instagram.com/erathis.global/"
                  target="_blank"
                >
                  {data?.aboutus.sociaux2}
                </Link>
              </div>
              <div className="name">
                <img src="../images/Twitter.svg" alt="" />
                <p>{data?.aboutus.sociaux3}</p>
              </div>
              <div className="name">
                <img src="../images/Facebook.svg" alt="" />
                <Link
                  className="link"
                  to="https://www.facebook.com/KWK.hub"
                  target="_blank"
                >
                  {data?.aboutus.sociaux4}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rights">
          <p>{data?.aboutus.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
