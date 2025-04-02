'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './hook/useModal';

export const ModalPortal = () => {
  const [mounted, setMounted] = useState(false);
  const { isOpen, children, closeModal } = useModal();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};
