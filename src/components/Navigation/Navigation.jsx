import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.nav} to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
