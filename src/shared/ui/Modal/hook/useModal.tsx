'use client';

import { useState, ReactNode, useEffect } from 'react';

// 전역 상태 객체
type ModalState = {
  isOpen: boolean;
  children: ReactNode | null;
};

let globalState: ModalState = {
  isOpen: false,
  children: null,
};

const listeners: Set<(state: ModalState) => void> = new Set();

// 상태 업데이트 함수
const updateState = (newState: Partial<ModalState>) => {
  globalState = { ...globalState, ...newState };
  listeners.forEach((listener) => listener(globalState));
};

export const useModal = () => {
  const [state, setState] = useState<ModalState>(globalState);

  useEffect(() => {
    // 컴포넌트마다 리스너 등록
    const listener = (newState: ModalState) => {
      setState(newState);
    };
    listeners.add(listener);

    // 언마운트시 리스너 제거
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const openModal = (content: ReactNode) => {
    updateState({
      isOpen: true,
      children: content,
    });
  };

  const closeModal = () => {
    updateState({
      isOpen: false,
      children: null,
    });
  };

  return {
    isOpen: state.isOpen,
    children: state.children,
    openModal,
    closeModal,
  };
};
