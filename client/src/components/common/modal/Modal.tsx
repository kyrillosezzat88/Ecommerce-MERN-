import { useEffect } from "react";

type TModal = {
  title?: string;
  ModalContent?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  actionBtn?: boolean;
  classes?: string;
  actionBtnLabel?: string;
};
const Modal = ({
  title,
  ModalContent,
  isOpen,
  onClose,
  actionBtn = false,
  actionBtnLabel = "Save changes",
  classes,
}: TModal) => {
  useEffect(() => {
    const handleWindowClick = () => {
      if (isOpen) onClose();
    };
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-40 before:bg-black/20 before:w-full before:h-full before:fixed before:z-10">
      <div
        className={`w-3/4 bg-white h-3/4 rounded-md shadow z-30 ${classes}`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {title && (
          <div className="flex justify-between border-b border-gray-200 px-6 py-4">
            <h2>{title}</h2>
            <span onClick={onClose}>X</span>
          </div>
        )}
        <div className="p-6 h-full overflow-auto">{ModalContent}</div>
        {actionBtn && (
          <div className="mt-auto bottom-0">
            <button className="btn btn-primary uppercase">
              {actionBtnLabel}
            </button>
            <button className="btn btn-gray uppercase">Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
