import React, { useRef } from "react";
import close from "../images/close.png";

function Modal({ show, children, closeModal }) {
  const modalRef = useRef(null);
  var visibility = show;

  return (
    <div
      className="modal"
      style={{ display: visibility ? "block" : "none" }}
      ref={modalRef}
    >
      <div className="modal-wrapper">
        <button onClick={closeModal} className="close-button">
          <img src={close} alt="close-button" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
