import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = () => {
  return <div>RestrictedRoute</div>;
};

export default RestrictedRoute;
