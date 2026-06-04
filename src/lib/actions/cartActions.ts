/**
 * @file cartActions.ts
 * @description Cart management actions and utilities
 */

import { thumbnailProduct1 } from "@/assets/images";
import { CartProps } from "@/types";
import { Dispatch, SetStateAction } from "react";

interface QuantityActions {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

interface CartActions {
  thumbnail: string | undefined;
  quantity: number;
  price: number;
  setCart: Dispatch<SetStateAction<CartProps>>;
}

export const handleAddToCart = ({ quantity, setQuantity }: QuantityActions) => {
  setQuantity(quantity + 1);
};

export const handleRemoveFromCart = ({
  quantity,
  setQuantity,
}: QuantityActions) => {
  if (quantity > 0) {
    setQuantity(quantity - 1);
  }
};

export const cartDefaults = {
  thumbnailProduct1,
};

export const handleCart = ({
  thumbnail,
  quantity,
  price,
  setCart,
}: CartActions) => {
  if (quantity > 0) {
    setCart({
      thumbnail,
      quantity,
      price,
    });
  }
};
