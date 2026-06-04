/**
 * @file CartProvider.tsx
 * @description Cart context provider component
 */

import {
  cartDefaults,
  handleAddToCart,
  handleCart,
  handleRemoveFromCart,
} from "@/lib/actions/cartActions";
import { CartProps } from "@/types";
import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

/**
 * Cart context provider component
 * @component
 * @description Provides cart state and setter to child components
 */
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [cart, setCart] = useState<CartProps>({
    thumbnail: undefined,
    quantity: 0,
    price: 0,
  });

  const value = {
    cartOpen,
    setCartOpen,
    ...cartDefaults,
    quantity,
    handleAddToCart: () => handleAddToCart({ quantity, setQuantity }),
    handleRemoveFromCart: () => handleRemoveFromCart({ quantity, setQuantity }),
    cart,
    setCart,
    handleCart: ({ thumbnail, quantity, price }: CartProps) =>
      handleCart({ thumbnail, quantity, price, setCart }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
