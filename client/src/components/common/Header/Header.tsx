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
import { CartDrawer, WishlistDrawer } from "@components/e-commerce";
const Header = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);

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
              <SearchIcon className="hidden md:block" />
              <UserIcon />
              <WishlistIcon onClick={() => setIsWishlistDrawerOpen(true)} />
              <CartIcon onClick={() => setIsCartDrawerOpen(true)} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
