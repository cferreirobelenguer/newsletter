/*Modal component*/
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
    <div className="modal-overlay">
        <div className="modal">
            <button className="close-button" onClick={onClose}>
                &times;
            </button>
            <div className="modal-content">{children}</div>
        </div>
    </div>
    );
};

export default Modal;
