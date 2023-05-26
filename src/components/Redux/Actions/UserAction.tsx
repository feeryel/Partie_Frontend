import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from "../Constante/UserType";
import axios from "axios";
import { Dispatch } from "redux";

// Define TypeScript types for response data
interface UserData {
  // Update the types based on your actual response data structure
}
export interface newUser {
  // <T>(arg: T): T;
}
export interface user {}
// Define TypeScript types for action objects
interface GetUserAction {
  type: typeof GET_USER;
}
interface AddUserSuccessAction {
  type: typeof ADD_USER_SUCCESS;
  payload: UserData;
}

interface AddUserFailAction {
  type: typeof ADD_USER_FAIL;
  payload: any; // Update the type based on your error data type
}
interface DeleteUserSuccessAction {
  type: typeof DELETE_USER_SUCCESS;
  payload: UserData;
}

interface DeleteUserFailAction {
  type: typeof DELETE_USER_FAIL;
  payload: any; // Update the type based on your error data type
}
interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: UserData;
}

interface LoginUserFailAction {
  type: typeof LOGIN_USER_FAIL;
  payload: any; // Update the type based on your error data type
}
interface GetUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  payload: UserData;
}

interface GetUserFailAction {
  type: typeof GET_USER_FAIL;
  payload: any; // Update the type based on your error data type
}
interface ADDUserAction {
  type: typeof ADD_USER;
  payload: any; // Update the type based on your error data type
}
interface DELETEUserAction {
  type: typeof DELETE_USER;
  payload: any; // Update the type based on your error data type
}
interface LOGINUserAction {
  type: typeof LOGIN_USER;
  payload: any; // Update the type based on your error data type
}
// Define the combined type for all possible actions
type UserAction =
  | GetUserAction
  | GetUserSuccessAction
  | GetUserFailAction
  | ADDUserAction
  | AddUserSuccessAction
  | AddUserFailAction
  | DeleteUserFailAction
  | DeleteUserSuccessAction
  | DELETEUserAction
  | LOGINUserAction
  | LoginUserFailAction
  | LoginUserSuccessAction;

export const getUser = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: GET_USER });
  // const accessToken = localStorage.getItem("token");
  try {
    let result = await axios.get("/user/users", {
      // headers: {
      //   Authorization: accessToken ? `Bearer ${accessToken}` : "",
      // },
    });

    dispatch({ type: GET_USER_SUCCESS, payload: result.data });
    console.log(result);
    // Check if user is an admin and redirect to admin dashboard
    // if (result.data.isAdmin) {
    //   window.location.href = "/admin/dashboard";
    // }
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};
export const loginUser =
  (user: user) => async (dispatch: Dispatch<UserAction>) => {
    // dispatch({ type: LOGIN_USER });
    try {
      let result = await axios.post("/user/login", user);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAIL, payload: error });
      console.log(error);
    }
  };
export const addUser =
  (newUser: newUser) => async (dispatch: Dispatch<UserAction>) => {
    try {
      let result = await axios.post("/user/register", newUser);
      dispatch({ type: ADD_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: ADD_USER_FAIL, payload: error });
    }
  };
export const deleteUser =
  (id: any) => async (dispatch: Dispatch<UserAction>) => {
    try {
      let result = await axios.delete(`/user/${id}`);
      dispatch({ type: DELETE_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: DELETE_USER_FAIL, payload: error });
      console.log(error);
    }
  };