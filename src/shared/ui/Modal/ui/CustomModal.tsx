'use client';

interface ModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  component: React.ComponentType<T>;
  componentProps: T & { onClose?: () => void };
  zIndex?: number;
}

const Modal = <T extends object>({
  isOpen,
  onClose,
  component: Component,
  componentProps,
  zIndex = 1000,
}: ModalProps<T>) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{ zIndex }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}>
        <Component
          {...componentProps}
          onClose={onClose}
        />
        <button
          className="modal-close"
          onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
