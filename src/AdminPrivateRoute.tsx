import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { State } from "./components/Redux";
import { User } from "./components/Redux/reducers/UserReducer";
import jwt_decode, { JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

const AdminPrivateRoutes = () => {
  const isAuth = localStorage.getItem("token");

  // Check the user's role
  const decodedToken = isAuth ? jwt_decode<CustomJwtPayload>(isAuth) : null;
  const userRole = decodedToken?.role;

  console.log(decodedToken);

  return userRole === "admin" ? <Outlet /> : <Navigate to="/profile" />;
};

export default AdminPrivateRoutes;
