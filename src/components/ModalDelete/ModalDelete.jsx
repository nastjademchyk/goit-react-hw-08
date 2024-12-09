import React from "react";
import s from "./ModalDelete.module.css";

export const ModalDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <p className={s.text}>Are you sure you want to delete this contact?</p>
        <div className={s.buttons}>
          <button type="submit" className={s.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className={s.confirmBtn} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
