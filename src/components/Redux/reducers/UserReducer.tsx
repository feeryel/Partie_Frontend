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
  GET_CURRENT_USER,
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
} from "../Constante/UserType";

export interface User {
  image: any;
  typeBug: any;
  description: any;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  bannerimage: string;
  profilimage: string;
  biography: string;
}

export interface UserState {
  userListe: User[];
  errors: any | null;
  status: string;
  isAuthentificated: boolean;
  currentUser: User | undefined;
}

export interface UserAction {
  type: string;
  payload: any; // Update the type based on your payload data type
}

const initialState: UserState = {
  userListe: [],
  errors: null,
  status: "",
  isAuthentificated: false,
  currentUser: {} as User,
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
    case GET_CURRENT_USER:
      return { ...state, status: "request send" };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, status: "Success", currentUser: payload };
    case GET_CURRENT_USER_FAIL:
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
      return {
        ...state,
        status: payload,
        isAuthentificated: true,

        currentUser: payload,
      };
    case LOGIN_USER_FAIL:
      return { ...state, status: payload };
    default:
      return state;
  }
};

export default UserReducer;
