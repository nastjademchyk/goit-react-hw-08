import s from "./Contact.module.css";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { editContact } from "../../redux/contacts/contactsOps";
import { CiEdit } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import ModalDelete from "../ModalDelete/ModalDelete";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success("Contact deleted!");
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleEdit = () => {
    const newName = prompt("Enter the new name: ", name);
    const newNumber = prompt("Enter the new number", number);
    if (newName && newNumber) {
      dispatch(
        editContact({
          contactId: id,
          updatedData: { name: newName, number: newNumber },
        })
      );
    }
  };

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

      {showModal && (
        <ModalDelete on onConfirm={handleDelete} onCancel={handleCancel} />
      )}
      <button className={s.iconButton} onClick={handleEdit}>
        <CiEdit className={s.iconEdit} />
      </button>
      <button className={s.btn} type="submit" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
