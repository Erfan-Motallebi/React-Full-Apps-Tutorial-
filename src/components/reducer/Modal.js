import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <div className="modal-control">
      <h1 className="modal-box">{modalContent}</h1>
    </div>
  );
};

export default Modal;
