import React from "react";
import { FaTimes } from "react-icons/fa";
import { Context1 } from "./App";
const Modal = () => {
  const [modal, setModal] = React.useContext(Context1);
  return (
    <button className="close-modal-btn" onClick={() => setModal(!modal)}>
      <FaTimes />
    </button>
  );
};

export default Modal;
