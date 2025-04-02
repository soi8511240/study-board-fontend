export { Button } from './Button/Button';
export { StyledLink as Link } from './Link/Link';
export { Alert } from './Modal/ui/Alert';
// export { CustomModal } from './Modal/ui/CustomModal';

export { useModal } from './Modal/hook/useModal';
export { default as GlobalModal } from './Modal/ui/GlobalModal';
export {
  default as modalReducer,
  selectModal,
  setModal,
  initialModal,
  type ModalState,
} from './Modal/slicer/modalSlicer';
