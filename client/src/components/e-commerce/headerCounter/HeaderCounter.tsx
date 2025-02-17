type THeaderCounter = {
  icon: React.ReactNode;
  counter: number;
  className?: string;
  type?: string;
  name?: string;
  onClick?: () => void;
};

const HeaderCounter = ({
  icon,
  counter,
  className = "",
  type,
  name,
  onClick,
}: THeaderCounter) => {
  const Wrapper = type === "drawer" ? "label" : "div";
  const wrapperProps =
    type === "drawer"
      ? {
          htmlFor: name,
          className: `relative drawer-button cursor-pointer ${className}`,
        }
      : { className: `relative cursor-pointer ${className}` };

  return (
    <Wrapper {...wrapperProps} onClick={onClick}>
      {icon}
      <span className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-black text-white flex justify-center items-center text-xs p-1">
        {counter}
      </span>
    </Wrapper>
  );
};

export default HeaderCounter;
