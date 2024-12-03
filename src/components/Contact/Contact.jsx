import s from "./Contact.module.css";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={s.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={s.number}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.btn} type="submit" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
