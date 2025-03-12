import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetUserCompares } from "@store/compare/compareSlice";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";

const useHeader = () => {
  const dispatch = useAppDispatch();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalCartQuantity = useAppSelector(getCartTotalQuantitySelector);

  const wishlistProductsCount = useAppSelector(
    (state) => state.wishlist.products
  );

  const comparesProductsCount = useAppSelector((state) => state.compare.items);

  const AuthModalHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsAuthModalOpen(true);
  };

  const SearchModalHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsSearchOpen(true);
  };

  const MenuDrawerHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };
  useEffect(() => {
    // get products added to compares by user
    dispatch(actGetUserCompares());
  }, [dispatch]);

  return {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    isWishlistDrawerOpen,
    setIsWishlistDrawerOpen,
    isAuthModalOpen,
    setIsAuthModalOpen,
    isSearchOpen,
    setIsSearchOpen,
    isMenuOpen,
    setIsMenuOpen,
    totalCartQuantity,
    wishlistProductsCount,
    comparesProductsCount,
    AuthModalHandler,
    SearchModalHandler,
    MenuDrawerHandler,
  };
};

export default useHeader;
