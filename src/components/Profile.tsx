import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    userCurrent();
  }, [user]);
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
          {/* Add other user information fields here */}
        </div>

        {/* <div className="profile-divider">
            <Divider type="horizontal" />
          </div> */}
      </div>
    </div>
  );
};

export default Profile;
