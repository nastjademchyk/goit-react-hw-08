import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import React from "react";
import clsx from "clsx";

export const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        <span className={s.btn}>Register</span>
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        <span className={s.btn}>Log in</span>
      </NavLink>
    </div>
  );
};

export default AuthNav;
