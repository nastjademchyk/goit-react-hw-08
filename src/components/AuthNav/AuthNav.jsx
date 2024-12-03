import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import React from "react";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default AuthNav;
