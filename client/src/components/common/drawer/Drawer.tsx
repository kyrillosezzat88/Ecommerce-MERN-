type TDrawerProps = {
  isOpen: boolean;
  onClose?: () => void;
  setIsDrawerOpen: (value: boolean) => void;
  children: React.ReactNode;
  title: string;
};

const Drawer = ({
  isOpen,
  setIsDrawerOpen,
  onClose,
  children,
  title,
}: TDrawerProps) => {
  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
    if (onClose) {
      onClose();
    }
  };
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeDrawerHandler}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div
        className={`fixed top-0 h-full transition-transform duration-300 right-0 w-1/3 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative h-full bg-white shadow-xl">
          {/* Content Container */}
          <div className="h-full overflow-y-auto p-6 pt-0">
            <div className=" bg-white py-6 flex justify-between sticky top-0 mb-4">
              <h3 className="text-2xl font-semibold">{title}</h3>
              {/* Close Button */}
              <button
                onClick={closeDrawerHandler}
                className="p-2 cursor-pointer text-3xl"
                aria-label="Close drawer"
              >
                &times;
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
