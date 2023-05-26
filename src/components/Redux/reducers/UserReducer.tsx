import { AnyAction } from "redux";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
} from "../Constante/UserType";

interface User {
  // Define the shape of the contact object
  // Update the types based on your actual data structure
  // For example: id: number, name: string, etc.
}
interface UserState {
  userListe: User[];
  errors: any | null;
  status: string;
  isAuthentificated: boolean;
}

interface UserAction {
  type: string;
  payload: any; // Update the type based on your payload data type
}

const initialState: UserState = {
  userListe: [],
  errors: null,
  status: "",
  isAuthentificated: false,
};
const UserReducer = (
  state: UserState = initialState,
  { type, payload }: UserAction
): UserState => {
  switch (type) {
    case GET_USER:
      return { ...state, status: "request send" };
    case GET_USER_SUCCESS:
      return { ...state, status: "Success", userListe: payload };
    case GET_USER_FAIL:
      return { ...state, status: "Fail", errors: payload };
    case ADD_USER:
      return { ...state, status: payload };
    case ADD_USER_SUCCESS:
      return { ...state, status: payload };
    case ADD_USER_FAIL:
      return { ...state, status: payload };
    case DELETE_USER:
      return { ...state, status: payload };
    case DELETE_USER_SUCCESS:
      return { ...state, status: payload };
    case DELETE_USER_FAIL:
      return { ...state, status: payload };
    case LOGIN_USER:
      return { ...state, status: payload };
    case LOGIN_USER_SUCCESS:
      // localStorage.setItem("token", action?.payload?.accessToken);
      return { ...state, status: payload, isAuthentificated: true };
    case LOGIN_USER_FAIL:
      return { ...state, status: payload };
    default:
      return state;
  }
};

export default UserReducer;
