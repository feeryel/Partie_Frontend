import React, { useEffect, useState } from "react";
import "../../_dist/Contacts.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ContactActionCreators, State } from "../Redux";
import { bindActionCreators } from "redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const Users = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(
    (state: State) => state.ContactReducer.contactListe
  );

  const { getContact, deleteContact } = bindActionCreators(
    ContactActionCreators,
    dispatch
  );
  useEffect(() => {
    getContact();
  }, []);
  const handleDelete = (userId: string) => {
    deleteContact(userId);
  };
  console.log(contacts);

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Organisation</th>
            <th>Subject</th>
            <th>message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact: any) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.Name}</td>
              <td>{contact.email}</td>
              <td>{contact.organisation}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
              <td>
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(contact.id)}
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
