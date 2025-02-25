type TButton = {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
};
const Button = ({ text, className, onClick, disabled, loading }: TButton) => {
  return (
    <button
      onClick={onClick}
      className={` px-4 py-2 rounded-sm ${className} ${
        disabled || (loading && "!bg-gray-600 !cursor-not-allowed")
      }`}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex text-white text-sm gap-2 justify-center items-center">
          <div className="border-gray-300 h-5 w-5 animate-spin rounded-full border-2 border-t-primary" />
          loading...
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
