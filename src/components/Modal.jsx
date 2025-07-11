// components/Modal.js
function Modal({ message, onClose }) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3 style={{ color: 'red' }}>Error</h3>
        <p>{message}</p>
        <button onClick={onClose} style={buttonStyle}>Close</button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  textAlign: 'center'
};

const buttonStyle = {
  marginTop: '15px',
  padding: '8px 12px',
  backgroundColor: '#f44336',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Modal;
