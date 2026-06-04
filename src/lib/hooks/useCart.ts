/**
 * @file useCart.ts
 * @description Custom hook for accessing cart context
 */

import type { CartContextProps } from "@/types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/**
 * Custom hook for accessing cart context
 * @returns {CartContextProps} Cart context value
 * @throws {Error} If used outside of CartProvider
 */
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve essere usato all'interno di CartProvider");
  }
  return context;
};
