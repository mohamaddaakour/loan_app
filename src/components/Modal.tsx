import type { ModalProps } from '../types';

const Modal: React.FC<ModalProps> = ({ isVisible, errorMessage, onClose }) => {
  if (!isVisible)
    return null;

  return (
    <div 
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {errorMessage ? (
          <div className="text-center">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
            <p className="text-gray-700">{errorMessage}</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700">The form has been submitted successfully</p>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
