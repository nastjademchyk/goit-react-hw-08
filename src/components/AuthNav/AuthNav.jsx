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
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
