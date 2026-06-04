/**
 * @file CartContext.ts
 * @description Cart context definition
 */

import type { CartContextProps } from "@/types";
import { createContext } from "react";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);
