import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Route, Navigate, Outlet } from "react-router-dom";
import { UserActionCreators } from "./Redux";
import { bindActionCreators } from "redux";
import { UserState } from "./Redux/reducers/UserReducer";
import Dashboard from "./Admin/Dashboard";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userCurrent } = bindActionCreators(UserActionCreators, dispatch);
  const isAuth = localStorage.getItem("token");

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
