import {
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  ADD_CONTACT,
  DELETE_CONTACT,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  UPDATE_CONTACT,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_SUCCESS,
} from "../Constante/ContactType";
import axios from "axios";
import { useEffect } from "react";
import { Dispatch } from "redux";

// Define TypeScript types for response data
interface ContactData {
  // Update the types based on your actual response data structure
}
export interface newContact {
  // <T>(arg: T): T;
}
// Define TypeScript types for action objects
interface GetContactAction {
  type: typeof GET_CONTACT;
}

interface GetContactSuccessAction {
  type: typeof GET_CONTACT_SUCCESS;
  payload: ContactData;
}

interface GetContactFailAction {
  type: typeof GET_CONTACT_FAIL;
  payload: any; // Update the type based on your error data type
}
interface ADD_CONTACTAction {
  type: typeof ADD_CONTACT;
  payload: any; // Update the type based on your error data type
}
interface DeletetContactSuccessAction {
  type: typeof DELETE_CONTACT_SUCCESS;
  payload: ContactData;
}

interface deleteContactFailAction {
  type: typeof DELETE_CONTACT_FAIL;
  payload: any; // Update the type based on your error data type
}
interface DELETE_CONTACTAction {
  type: typeof DELETE_CONTACT;
  payload: any; // Update the type based on your error data type
}
interface UpdateContactSuccessAction {
  type: typeof UPDATE_CONTACT_SUCCESS;
  payload: ContactData;
}
interface UpdateContactFailAction {
  type: typeof UPDATE_CONTACT_FAIL;
  payload: any; // Update the type based on your error data type
}
interface UPDATEContactAction {
  type: typeof UPDATE_CONTACT;
  payload: any;
}
// Define the combined type for all possible actions
type ContactAction =
  | GetContactAction
  | GetContactSuccessAction
  | GetContactFailAction
  | ADD_CONTACTAction
  | DELETE_CONTACTAction
  | deleteContactFailAction
  | DeletetContactSuccessAction
  | UPDATEContactAction
  | UpdateContactFailAction
  | UpdateContactSuccessAction;

export const getContact = () => async (dispatch: Dispatch<ContactAction>) => {
  dispatch({ type: GET_CONTACT });

  try {
    let result = await axios.get("/contacts");
    dispatch({ type: GET_CONTACT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error });
  }
};
export const addContact =
  (newContact: newContact) => async (dispatch: Dispatch<ContactAction>) => {
    try {
      let result = await axios.post("/contact/create", newContact);
      dispatch({ type: ADD_CONTACT, payload: result.data.message });
    } catch (error) {
      dispatch({ type: GET_CONTACT_FAIL, payload: error });
    }
  };
export const deleteContact =
  (id: any) => async (dispatch: Dispatch<ContactAction>) => {
    // dispatch({type:DELETE_CONTACT});
    try {
      let result = await axios.delete(`/contact/${id}/delete`);
      dispatch({ type: DELETE_CONTACT_SUCCESS, payload: result.data });
      // dispatch(deleteContact);
      // console.log(result);
    } catch (error) {
      dispatch({ type: DELETE_CONTACT_FAIL, payload: error });
      console.log(error);
    }
  };

export const updateContact =
  (id: any) => async (dispatch: Dispatch<ContactAction>) => {
    try {
      let result = await axios.put(`/contact/${id}/update`);
      dispatch({ type: UPDATE_CONTACT, payload: result.data });
    } catch (error) {
      dispatch({ type: UPDATE_CONTACT_FAIL, payload: error });
      console.log(error);
    }
  };
