import s from "./Contact.module.css";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { editContact } from "../../redux/contacts/contactsOps";
import { CiEdit } from "react-icons/ci";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={s.name}>
          <FaUser className={s.icon} />
          <p>{name}</p>
        </div>
        <div className={s.number}>
          <FaPhoneAlt className={s.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={s.iconButton}
        onClick={() => {
          dispatch(editContact());
        }}
      >
        <CiEdit className={s.iconEdit} />
      </button>
      <button className={s.btn} type="submit" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
