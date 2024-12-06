import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import React from "react";

export const AuthNav = () => {
  return (
    <div className={s.nav}>
      <NavLink className={s.link} to="/register">
        Register
      </NavLink>
      <NavLink className={s.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
