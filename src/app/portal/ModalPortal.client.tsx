'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/shared/ui/';
import { useModal } from '@/shared/ui/Modal/hook/useModal';

export default function ModalPortal() {
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
      onClick={(e) => {
        // 모달 외부 클릭시에만 닫기
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <Button
            onclick={closeModal}
            label="닫기"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
