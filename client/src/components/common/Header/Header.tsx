import { NavLink } from "react-router-dom";
import MenuLinks from "./Menu.json";
import {
  MenuIcon,
  SearchIcon,
  UserIcon,
  WishlistIcon,
  CartIcon,
} from "@assets/icons";
import { useState } from "react";
import { CartDrawer, Search, WishlistDrawer } from "@components/e-commerce";
import { useAppSelector } from "@store/hooks";
import HeaderCounter from "@components/e-commerce/headerCounter/HeaderCounter";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import AuthModal from "@components/e-commerce/modals/AuthModal";
import Modal from "../modal/Modal";
const Header = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const totalCartQuantity = useAppSelector(getCartTotalQuantitySelector);
  const wishlistProductsCount = useAppSelector(
    (state) => state.wishlist.products
  );
  const AuthModalHandler = (e) => {
    e.stopPropagation();
    setIsAuthModalOpen(true);
  };
  const SearchModalHandler = (e) => {
    e.stopPropagation();
    setIsSearchOpen(true);
  };
  return (
    <>
      <CartDrawer
        isOpen={isCartDrawerOpen}
        setIsDrawerOpen={setIsCartDrawerOpen}
      />
      <WishlistDrawer
        isOpen={isWishlistDrawerOpen}
        setIsDrawerOpen={setIsWishlistDrawerOpen}
      />
      <Modal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen((prev) => !prev)}
        ModalContent={<AuthModal />}
        size="sm"
        height="auto"
      />
      <Modal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen((prev) => !prev)}
        ModalContent={<Search />}
        size="lg"
        height="auto"
      />
      <nav className="py-6 absolute inset-0 md:h-[74px] h-[56px] bg-transparent w-full">
        <div className="container">
          <div className="flex items-center justify-between">
            <MenuIcon className="md:hidden" />
            <div className="flex items-center gap-12">
              <h1 className="font-bold text-xl md:text-3xl pb-1 border-b-2 border-white">
                Anvogue
              </h1>
              <ul className="hidden md:flex gap-3 items-center">
                {MenuLinks.map((link, idx) => (
                  <NavLink
                    key={idx}
                    to={link.url}
                    className={({ isActive }) =>
                      `uppercase text-sm font-bold pb-1 border-b-2 transition-all ${
                        isActive ? "border-black" : "border-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 items-center [&>svg]:cursor-pointer">
              <SearchIcon
                className="hidden md:block"
                onClick={SearchModalHandler}
              />

              <UserIcon onClick={AuthModalHandler} />
              <HeaderCounter
                icon={<WishlistIcon />}
                counter={wishlistProductsCount.length}
                onClick={() => setIsWishlistDrawerOpen(true)}
              />
              <HeaderCounter
                icon={<CartIcon />}
                counter={totalCartQuantity}
                onClick={() => setIsCartDrawerOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
