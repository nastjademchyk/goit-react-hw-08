import React from "react";
import s from "./ModalDelete.module.css";

export const ModalDelete = ({ onConfirm, onCancel }) => {
  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className={s.modalOverlay} onClick={handleBackDropClick}>
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
