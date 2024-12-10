import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/">
        <span className={s.btn}>Home</span>
      </NavLink>

      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          <span className={s.btn}>Your Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
