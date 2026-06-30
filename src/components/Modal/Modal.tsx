import type { ModalProps } from "./Modal.types";

const Modal = ({ message, isOpen, onClose }: ModalProps) => {
  if (!isOpen)
    return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="bg-cyan-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;