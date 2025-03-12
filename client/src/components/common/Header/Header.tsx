import {
  MenuIcon,
  SearchIcon,
  UserIcon,
  WishlistIcon,
  CartIcon,
  RepeatIcon,
} from "@assets/icons";
import { CartDrawer, Search, WishlistDrawer } from "@components/e-commerce";
import HeaderCounter from "@components/e-commerce/headerCounter/HeaderCounter";
import AuthModal from "@components/e-commerce/modals/AuthModal";
import Modal from "../modal/Modal";
import { HeaderLinks, Menu } from "@components/common";
import useHeader from "@hooks/useHeader";
const Header = () => {
  const {
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
  } = useHeader();

  return (
    <>
      <CartDrawer
        isOpen={isCartDrawerOpen}
        setIsDrawerOpen={setIsCartDrawerOpen}
      />

      <Menu isOpen={isMenuOpen} setIsDrawerOpen={setIsMenuOpen} dir="ltr" />

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
            <MenuIcon className="md:hidden" onClick={MenuDrawerHandler} />
            <div className="flex items-center gap-12">
              <h1 className="font-bold text-xl md:text-3xl pb-1 border-b-2 border-white">
                Anvogue
              </h1>
              <HeaderLinks className="hidden md:flex gap-3 items-center" />
            </div>
            <div className="flex gap-3 items-center [&>svg]:cursor-pointer">
              <SearchIcon
                className="hidden md:block"
                onClick={SearchModalHandler}
              />

              <UserIcon onClick={AuthModalHandler} />

              <HeaderCounter
                icon={<RepeatIcon />}
                counter={comparesProductsCount.length}
                onClick={() => setIsWishlistDrawerOpen(true)}
              />

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
