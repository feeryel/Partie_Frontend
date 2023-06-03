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
  GET_CURRENTUSER_FAIL,
  GET_CURRENTUSER_SUCCESS,
  GET_CURRENTUSER,
} from "../Constante/UserType";

export interface User {
  currentUser: any;
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  profileimage: null;
  bannerimage: null;
  biography: null;
  role: string;
}
export interface UserState {
  userListe: User[];
  currentUser: User[];
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
  currentUser: [],
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
      localStorage.setItem("token", payload.accessToken);
      return { ...state, status: payload, isAuthentificated: true };
    case LOGIN_USER_FAIL:
      return { ...state, status: payload };
    case GET_CURRENTUSER_FAIL:
      return { ...state, status: "fail" };
    case GET_CURRENTUSER_SUCCESS:
      return { ...state, status: "success", currentUser: payload };
    case GET_CURRENTUSER:
      return { ...state, status: "request send" };

    case LOGIN_USER:
    default:
      return state;
  }
};

export default UserReducer;
