import React, { useEffect, useState } from "react";
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
    <div>
      <div className="profile-div">
        <h1 className="profile-title">Profile</h1>

        <div className="profile-info">
          <div>
            <label>Email:</label>
            <span>{currentUser?.email}</span>
          </div>
          <div>
            <label>Name:</label>
            <span>{currentUser?.firstName}</span>
          </div>
        </div>
      </div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Profile;
