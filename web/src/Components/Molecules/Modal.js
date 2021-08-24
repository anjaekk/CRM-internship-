import React from 'react';

// LIBRARY
import Modal from 'react-modal';

function ModalComponent({ children, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyle}>
      {children}
    </Modal>
  );
}

export default ModalComponent;

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    width: '800px',
    height: '500px',
    margin: `auto`,
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};
