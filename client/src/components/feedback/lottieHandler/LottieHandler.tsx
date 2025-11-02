import Lottie from "lottie-react";
import loading from "@assets/lottieFiles/Loading_Dots.json";
import invalid from "@assets/lottieFiles/Invalid.json";
import NotFound from "@assets/lottieFiles/Error_404.json";
import EmptyCart from "@assets/lottieFiles/empty_cart.json";

const lottieFilesMap = {
  loading,
  invalid,
  NotFound,
  EmptyCart,
};

type TProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  ErrorClassName?: string;
};

const LottieHandler = ({ type, message, ErrorClassName }: TProps) => {
  const lottie = lottieFilesMap[type];
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <Lottie animationData={lottie} style={{ width: "300px" }} />
      {message && (
        <h3 className={`font-bold text-3xl uppercase ${ErrorClassName}`}>
          {message}
        </h3>
      )}
    </div>
  );
};

export default LottieHandler;
