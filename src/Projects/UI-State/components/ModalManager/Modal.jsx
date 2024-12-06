import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../../redux/slices/ModalSlice";

const Modal = ({ modalId, title, children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.modals[modalId]);

  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={() => dispatch(closeModal(modalId))}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
