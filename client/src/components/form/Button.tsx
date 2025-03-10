type TButton = {
  text: string | React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: boolean;
  type?: "submit" | "reset" | "button";
};
const Button = ({
  text,
  className,
  onClick,
  disabled,
  loading,
  loadingText = true,
  type = "button",
}: TButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${
        disabled || loading
          ? "!bg-gray-500 !cursor-not-allowed !text-white"
          : ""
      }`}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex text-white text-sm gap-2 justify-center items-center">
          <div className="border-gray-300 h-4 w-4 animate-spin rounded-full border-2 border-t-primary" />
          {loadingText && "loading..."}
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
