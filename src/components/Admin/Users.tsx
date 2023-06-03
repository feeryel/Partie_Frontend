import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// import "../../_dist/Users.css";
import { bindActionCreators } from "redux";
import { State, UserActionCreators } from "../Redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Users = () => {
  const dispatch = useDispatch();

  const { getUser, deleteUser } = bindActionCreators(
    UserActionCreators,
    dispatch
  );
  useEffect(() => {
    getUser();
  }, []);
  const users = useSelector((state: State) => state.UserReducer.userListe);

  const handleDelete = (userId: string) => {
    deleteUser(userId);
  };
  console.log(users);

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>{user.role}</td>
              <td>
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(user.id)}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(user.id)}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
