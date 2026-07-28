const Modal = ({
  isOpen,
  title,
  children,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>

          <button onClick={onClose}>
            X
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;