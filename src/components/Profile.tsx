import React, { useEffect, useState } from "react";

import "../../src/_dist/Profile/Profile.css";
import { Navigate } from "react-router-dom";
import { State, UserActionCreators } from "./Redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "antd";
import { User } from "./Redux/reducers/UserReducer";
// import "../_dist/Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { userCurrent } = bindActionCreators(UserActionCreators, dispatch);
  const currentUser: User = useSelector(
    (state: State) => state.UserReducer.currentUser
  );
  const [user, setUser] = useState(currentUser);
  const [loggedOut, setLoggedOut] = useState(false); // New loggedOut state

  const logOut = () => {
    localStorage.removeItem("token");
    setLoggedOut(true); // Update loggedOut state when logging out
  };

  useEffect(() => {
    userCurrent();
  }, [user]);

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
          <button className="user_logout_btn" onClick={logOut}>Log Out</button>
        </div>
      </div>
      <div className="user_profile_main">
        <div className="user_profile_banner">
          <img
            src="https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="user_profile_info_section">
          <div className="user_profile_image">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
              alt=""
            />
          </div>
          <div className="user_profile_informations">
            <h1>
              {currentUser.firstName} {currentUser.lastName} personal
              informations
            </h1>
            <div className="user_personal">
              <p className="user_info">
                Full name : {currentUser.firstName} {currentUser.lastName}
              </p>
              <p className="user_info">Email : {currentUser.email}</p>
              <p className="user_info">Birthday : {currentUser.birthday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
