import React, { useEffect, useState } from "react";

// import "../../src/_dist/Profile/Profile.css";
import { Link, Navigate } from "react-router-dom";

import { State, UserActionCreators } from "./Redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "antd";
import { User } from "./Redux/reducers/UserReducer";
import "../_dist/profile.css";
import ContactUs from "./Sidebar/ContactUs";

const Profile = () => {
  const dispatch = useDispatch();
  const { userCurrent, getOneUser } = bindActionCreators(
    UserActionCreators,
    dispatch
  );
  const oneUser: User = useSelector(
    (state: State) => state.UserReducer.oneUser
  );
  const current: User = useSelector(
    (state: State) => state.UserReducer.currentUser
  );
  const [user, setUser] = useState(oneUser);
  const [loggedOut, setLoggedOut] = useState(false); // New loggedOut state

  const logOut = () => {
    localStorage.removeItem("token");
    setLoggedOut(true); // Update loggedOut state when logging out
  };

  useEffect(() => {
    userCurrent();
    getOneUser(current?.id);
  }, [user, current?.id]);

  // Redirect to "/signin" if logged out
  if (loggedOut) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="user_profile">
      <div className="user_profile_navbar">
        <div className="user_profile_nav_items">
          {" "}
          <h1>KWK</h1>
          <Link className="user-contact-btn" to="/contactus">
            {" "}
            Send Message
          </Link>
          <Link className="user-report-btn" to="/reportbug">
            {" "}
            Report a bug
          </Link>
          <Link
            className="user-update-btn"
            to={`/updateprofile/${oneUser?.id}`}
          >
            Update Profile
          </Link>
          <button className="user_logout_btn" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
      <div className="user_profile_main">
        <div className="user_profile_banner">
          {oneUser?.bannerimage && (
            <img src={oneUser.bannerimage} alt="banner" />
          )}
        </div>
        <div className="user_profile_info_section">
          <div className="user_profile_image">
            {oneUser?.profileimage && (
              <img src={oneUser?.profileimage} alt="banner" />
            )}
          </div>
          <div className="user_profile_informations">
            <h1>
              {oneUser.firstName} {oneUser.lastName} personal informations
            </h1>
            <div className="user_personal">
              <p className="user_info">
                Full name : {oneUser.firstName} {oneUser.lastName}
              </p>
              <p className="user_info">Email : {oneUser?.email}</p>
              <p className="user_info">Birthday : {oneUser?.birthday}</p>
              <p className="user_info">Birthday : {oneUser?.biography}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
