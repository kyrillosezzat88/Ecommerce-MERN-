import { StarIcon } from "@assets/icons";
import { useState } from "react";

const RatingProduct = () => {
  const [filledStar, setFilledStar] = useState(0); // for hover effect
  const [rate, setRate] = useState(0); // final selected rating

  const handleMouseOver = (index: number) => {
    setFilledStar(index);
  };

  const handleMouseLeave = () => {
    setFilledStar(rate); // restore selected stars after hover ends
  };

  const handleClick = (index: number) => {
    setRate(index);
  };

  return (
    <div
      className="flex gap-1 cursor-pointer my-3"
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: 5 }).map((_, id) => (
        <StarIcon
          key={id}
          className={`w-5 h-5 transition-colors ${
            id < filledStar ? "fill-amber-500" : "fill-white"
          }`}
          onMouseOver={() => handleMouseOver(id + 1)}
          onClick={() => handleClick(id + 1)}
        />
      ))}
    </div>
  );
};

export default RatingProduct;
