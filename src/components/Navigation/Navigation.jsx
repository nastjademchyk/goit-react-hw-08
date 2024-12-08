import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={s.nav} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={s.nav} to="/contacts">
          Your Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
