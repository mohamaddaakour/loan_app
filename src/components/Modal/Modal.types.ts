export interface ModalProps {
  message: string;
  isOpen: boolean;

  // we are sending function as a props
  onClose: () => void;
}