import React, { useEffect } from "react";
import { State, UserActionCreators } from "./Redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "antd";
// import "../_dist/Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { getCurrentUser } = bindActionCreators(UserActionCreators, dispatch);
  const currentUser = useSelector(
    (state: State) => state.UserReducer.currentUser
  );

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  console.log(currentUser);
  return (
    <div>
      <div className="profile-div">
        <h1 className="profile-title">Profile</h1>

        {currentUser ? (
          <div className="profile-info">
            <div>
              <label>Email:</label>
              <span>{currentUser.email}</span>
            </div>
            <div>
              <label>Name:</label>
              <span>{currentUser.firstName}</span>
            </div>
            {/* Add other user information fields here */}
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {/* <div className="profile-divider">
            <Divider type="horizontal" />
          </div> */}
      </div>
    </div>
  );
};

export default Profile;
