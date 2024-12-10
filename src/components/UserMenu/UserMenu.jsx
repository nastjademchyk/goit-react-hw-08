import React from "react";
import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.name}>Welcome, {user.name}!</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
