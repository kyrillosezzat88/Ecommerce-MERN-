import { Button } from "@components/form";
import { addToCart } from "@store/cart/CartSlice";
import { useAppDispatch } from "@store/hooks";
import { TProduct } from "@types";
import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Product = memo(({ id, name, mainImage, price, gallery }: TProduct) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const addToCartHandler = (id: number) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addToCart(id));
      setLoading(false);
      toast(`${name} Added to cart`, { type: "success" });
    }, 300);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="relative cursor-pointer group overflow-hidden rounded-2xl">
        <img
          src={mainImage}
          alt={name}
          className="z-10 h-60 w-full object-contain"
        />
        {gallery && gallery.length && (
          <img
            className="absolute inset-0 transition-all h-60 w-full object-cover duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            src={gallery[0]}
            alt={name}
          />
        )}
        <span className="uppercase absolute top-3 left-3 bg-secondary rounded-full text-sm px-3 py-1">
          new
        </span>

        {/* actions  buttons */}
        <div className="flex gap-3 absolute transition-all duration-300 -bottom-20 group-hover:bottom-3 items-center justify-center w-full">
          <Button
            text="Add To Cart"
            className="btn-secondary rounded-full"
            onClick={() => addToCartHandler(id)}
            loading={loading}
          />
          <Button text="Quick view" className="btn-secondary rounded-full" />
        </div>
        <div className="flex flex-col gap-2 absolute -right-10 top-3 transition-all duration-300 group-hover:right-3">
          <button
            className="btn btn-circle btn-sm [&>svg]:w-4"
            // onClick={wishlistToggleHandler}
            // disabled={isAddToWishlistDisabled}
          >
            {/* {isWishLoading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : isLiked ? (
                  <HeartSolidIcon />
                ) : (
                  <HeartIcon />
                )} */}
          </button>
          <button
            className="btn btn-circle btn-sm [&>svg]:w-4"
            // onClick={compareHandler}
            // disabled={isAddToCompareDisabled}
          >
            {/* {isCompareLoading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <RepeatIcon />
            )} */}
          </button>
        </div>
      </div>
      <NavLink to={`/products/${id}`}>
        <h2 className="font-semibold">{name}</h2>
      </NavLink>
      <div className="flex items-center gap-4">
        <span>${price}</span>
        <span className="text-sm text-gray-400 line-through">$36</span>
        <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
          -22%
        </span>
      </div>
    </div>
  );
});

export default Product;
