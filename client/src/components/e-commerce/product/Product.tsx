import { Modal } from "@components/common";
import { Button } from "@components/form";
import { TProduct } from "@types";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import ProductModal from "../modals/ProductModal";
import useProduct from "@hooks/useProduct";
import { HeartIcon, HeartSolidIcon, RepeatIcon } from "@assets/icons";

const Product = memo((product: TProduct) => {
  const { id, name, mainImage, price, gallery, isLiked } = product;
  const {
    loading,
    openProductModal,
    addToCartHandler,
    openProductModalHandler,
    setOpenProductModal,
    addToWishlistHandler,
    wishlistLoading,
    wishlistError,
  } = useProduct();

  return (
    <>
      <Modal
        isOpen={openProductModal}
        onClose={() => setOpenProductModal((prev) => !prev)}
        ModalContent={<ProductModal {...product} />}
        size="lg"
      />
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
              className="btn btn-secondary rounded-full"
              onClick={() => addToCartHandler(id, 1, name)}
              loading={loading}
            />
            <Button
              text="Quick view"
              className="btn btn-secondary rounded-full"
              onClick={openProductModalHandler}
            />
          </div>
          <div className="flex flex-col gap-2 absolute -right-10 top-3 transition-all duration-300 group-hover:right-3">
            <Button
              text={isLiked ? <HeartSolidIcon /> : <HeartIcon />}
              className="btn-circle text-sm [&>svg]:w-4 w-auto px-2 py-1"
              onClick={() => addToWishlistHandler(id, name)}
              loading={wishlistLoading === "pending"}
              loadingText={false}
            />
            <Button
              text={<RepeatIcon />}
              className="btn-circle text-sm [&>svg]:w-4 w-auto px-2 py-1"
            />
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
    </>
  );
});

export default Product;
