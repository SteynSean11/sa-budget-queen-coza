
import React from 'react';

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalBase: React.FC<ModalBaseProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-brand-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-brand-off-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md relative animate-modal-appear"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-brand-text-secondary hover:text-brand-pink text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 id="modal-title" className="text-2xl font-serif font-bold text-brand-text-secondary mb-6 text-center">
          {title}
        </h2>
        {children}
      </div>
      <style>{`
        @keyframes modal-appear {
          from { opacity: 0; transform: scale(0.95) translateY(-20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-appear {
          animation: modal-appear 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ModalBase;
