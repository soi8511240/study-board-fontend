// ModalContext.tsx
'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useModal } from '@/shared/ui/';

const ModalContext = createContext<ReturnType<typeof useModal> | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const modalState = useModal();

  return (
    <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
  );
}

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};
