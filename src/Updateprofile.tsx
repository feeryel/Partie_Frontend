import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { State, UserActionCreators } from "./components/Redux";
import { User } from "./components/Redux/reducers/UserReducer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Updateprofile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { userCurrent, getOneUser, updateUsers } = bindActionCreators(
    UserActionCreators,
    dispatch
  );
  const oneUser: User = useSelector(
    (state: State) => state.UserReducer.oneUser
  );
  const [file, setFile] = useState<any | null>(null);
  const [picture, setPicture] = useState<any | null>(null);
  const [updateUser, setUpdateUser] = useState({
    firstName: oneUser.firstName,
    lastName: oneUser.lastName,
    birthday: oneUser.birthday,
    biography: oneUser.biography,
    bannerimage: oneUser.bannerimage,
    profileimage: oneUser.profileimage,
  });

  const uploadImage = async (file: any) => {
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "feryel");

      const response = await axios
        .post("https://api.cloudinary.com/v1_1/dals4vqls/upload", form)
        .then((result) => {
          setUpdateUser({ ...updateUser, bannerimage: result.data.secure_url });
        });
      return response;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const uploadProfile = async (picture: any) => {
    try {
      const form = new FormData();
      form.append("file", picture);
      form.append("upload_preset", "feryel");

      const response = await axios
        .post("https://api.cloudinary.com/v1_1/dals4vqls/upload", form)
        .then((result) => {
          setUpdateUser({
            ...updateUser,
            profileimage: result.data.secure_url,
          });
        });
      return response;
    } catch (error) {
      console.error("Error uploading profile image:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (file) {
      uploadImage(file);
    }
  }, [file]);

  useEffect(() => {
    if (picture) {
      uploadProfile(picture);
    }
  }, [picture]);

  const userId = params.id;

  const handleUpdate = (e: any) => {
    e.preventDefault();
    updateUsers(userId, updateUser);
    navigate("/profile");
  };

  useEffect(() => {
    if (oneUser && oneUser.id !== userId) {
      getOneUser(userId);
    }
    setUpdateUser({
      firstName: oneUser?.firstName,
      lastName: oneUser?.lastName,
      birthday: oneUser?.birthday,
      biography: oneUser?.biography,
      bannerimage: oneUser?.bannerimage,
      profileimage: oneUser?.profileimage,
    });
  }, [userId, oneUser]);

  return (
    <div>
      <span>FirstName </span>
      <input
        type="text"
        placeholder="Please enter your firstName..."
        value={updateUser?.firstName}
        onChange={(e: any) => {
          setUpdateUser({ ...updateUser, firstName: e.target.value });
        }}
      />
      <span>LastName </span>
      <input
        type="text"
        placeholder="Please enter your lastName..."
        value={updateUser?.lastName}
        onChange={(e: any) => {
          setUpdateUser({ ...updateUser, lastName: e.target.value });
        }}
      />
      <span>Birthdate </span>
      <input
        type="text"
        placeholder="Please enter your birthdate..."
        value={updateUser?.birthday}
        onChange={(e: any) => {
          setUpdateUser({ ...updateUser, birthday: e.target.value });
        }}
      />
      <span>Biography </span>
      <input
        type="text"
        placeholder="Please enter your biography..."
        value={updateUser?.biography}
        onChange={(e: any) => {
          setUpdateUser({ ...updateUser, biography: e.target.value });
        }}
      />
      <input type="file" onChange={(e: any) => setFile(e.target.files[0])} />
      <input type="file" onChange={(e: any) => setPicture(e.target.files[0])} />
      <button onClick={handleUpdate}>Update profile</button>
    </div>
  );
};

export default Updateprofile;
