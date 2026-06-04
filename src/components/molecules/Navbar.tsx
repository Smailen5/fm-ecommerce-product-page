/**
 * @file Navbar.tsx
 * @description Main navigation component with mobile menu, cart and user profile
 */

import { IconCart, IconMenu, imageAvatar, Logo } from "@/assets/images";
import { Button } from "@/components/atoms/Button";
import { useCart } from "@/lib/hooks/useCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../atoms/Image";
import Cart from "./Cart";
import NavLinks from "./NavLinks";
import { Sidebar } from "./Sidebar";
/**
 * Navbar component
 * @component
 * @description Main navigation bar with mobile menu toggle, logo, cart and user profile
 *
 * @example
 * ```tsx
 * <Navbar />
 * ```
 *
 * @returns {JSX.Element} Navigation bar with mobile menu integration
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartOpen, setCartOpen } = useCart();
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-background relative container mx-auto flex justify-between p-4 pb-7 lg:px-32">
        <div className="flex items-center gap-2 lg:gap-12">
          {/* Mobile menu */}
          <Button
            variant={"ghost"}
            size={"icon"}
            rounded={"lg"}
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
          >
            <IconMenu aria-hidden={true} />
          </Button>

          {/* Logo */}
          <Logo className="cursor-pointer" onClick={() => navigate("/")} />

          <ul className="hidden gap-6 lg:flex">
            <NavLinks isSidebar />
          </ul>
        </div>

        <div className="flex items-center gap-2 lg:gap-8">
          <div className="relative">
            {/* Cart icon */}
            <Button
              aria-label="cart"
              variant={"ghost"}
              size={"icon"}
              rounded={"lg"}
              onClick={() => setCartOpen(!cartOpen)}
            >
              <IconCart aria-hidden={true} className="[&>path]:fill-current" />
            </Button>
            {cart.quantity > 0 && (
              <span
                className="bg-primary absolute top-1 right-0 cursor-pointer rounded-xl px-2 text-xs text-white"
                onClick={() => setCartOpen(!cartOpen)}
              >
                {cart.quantity}
              </span>
            )}
          </div>
          {/* User avatar */}
          <Image
            src={imageAvatar}
            width={24}
            height={24}
            alt="user"
            className="ring-primary h-6 w-6 cursor-pointer rounded-full hover:ring-2 lg:h-10 lg:w-10"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Cart in desktop mode */}
        <div className="absolute top-1/4 right-1/6 hidden w-96 translate-x-1/2 translate-y-10 lg:block">
          <Cart isOpen={cartOpen} />
        </div>
      </nav>

      <div className="container mx-auto hidden w-full px-32 lg:block">
        <hr />
      </div>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
