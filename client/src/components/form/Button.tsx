type TButton = {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};
const Button = ({ text, className, onClick, disabled }: TButton) => {
  return (
    <button
      onClick={onClick}
      className={` px-4 py-2 rounded-sm ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
