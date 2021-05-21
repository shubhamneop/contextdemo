import React from "react";
import ReactDOM from "react-dom";
import Modal from "./UI/Modal";

const PortalDemo = (props) => {
  return ReactDOM.createPortal(
    <Modal show={props.show} modalClosed={props.modalClosed}>
      {props.children}
    </Modal>,
    document.getElementById("modal-root")
  );
};

export default PortalDemo;
