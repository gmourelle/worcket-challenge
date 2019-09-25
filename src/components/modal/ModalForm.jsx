import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { PENDING } from "../../constants";

import "./ModalForm.scss";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "250px",
    width: "400px",
    borderRadius: "10px"
  }
};

const ModalForm = ({ addItem, isOpen, closeModal, status }) => {
  const [item, setItem] = useState("");

  useEffect(() => {
    if (isOpen) setItem("");
  }, [isOpen]);
  const submitItem = event => {
    event.preventDefault();

    addItem(item);
  };

  const handleChange = event => {
    event.preventDefault();
    setItem(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} shouldCloseOnOverlayClick>
      <form className="form-container" onSubmit={submitItem}>
        <h2 className="form-container__align-h2">Add Item</h2>
        <input
          autoFocus
          type="text"
          className="form-container__form-input"
          value={item}
          onChange={handleChange}
          disabled={status === PENDING}
        />
        <div className="form-container__action-buttons">
          <button
            type="submit"
            disabled={status === PENDING || !item}
            className="form-container__button form-container__button--submit"
          >
            Add Item
          </button>
          <button
            type="button"
            className="form-container__button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

ModalForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

export default ModalForm;
