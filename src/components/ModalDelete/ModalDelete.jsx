import React, { useEffect } from "react";
import s from "./ModalDelete.module.css";

const ModalDelete = ({ onConfirm, onCancel }) => {
  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onConfirm();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onConfirm]);

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

export default ModalDelete;
