/**
 * @file types.ts
 * @description Type definitions for product data and navigation links
 */

import { Dispatch, SetStateAction } from "react";

/**
 * Product data interface
 * @interface ProductData
 * @property {string} company - Company name
 * @property {string} title - Product title
 * @property {string} description - Product description
 * @property {Object} price - Product price information
 * @property {number} price.original - Original product price
 * @property {number} [price.discount] - Optional discount percentage
 */
export interface ProductData {
  company: string;
  title: string;
  description: string;
  price: {
    original: number;
    // current: number;
    discount?: number;
  };
}

/**
 * Navigation link properties
 * @interface linksNavProps
 * @property {string} label - Display text for the link
 * @property {string} href - URL destination for the link
 */
export interface linksNavProps {
  label: string;
  href: string;
}

/**
 * Sidebar component props
 * @interface SidebarProps
 * @property {boolean} isOpen - Controls sidebar visibility
 * @property {function} setIsOpen - Function to update sidebar state
 */
export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

/**
 * Cart data props
 * @interface CartProps
 * @property {string} thumbnail - Product thumbnail image
 * @property {number} quantity - Number of items
 * @property {number} price - Total price
 */
export interface CartProps {
  thumbnail: string | undefined;
  quantity: number;
  price: number;
}

/**
 * CartContent component props
 * @interface CartContentProps
 * @property {CartProps} cartData - Cart data
 * @property {string} title - Product title
 */
export interface CartContentProps {
  cartData: CartProps;
  title: string;
  handleRemoveCart: (cart: CartProps) => void;
}

/**
 * Cart context properties
 * @interface CartContextProps
 */
export interface CartContextProps {
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
  thumbnailProduct1?: string;
  quantity: number;
  handleAddToCart: () => void;
  handleRemoveFromCart: () => void;
  cart: CartProps;
  setCart: Dispatch<SetStateAction<CartProps>>;
  handleCart: (params: {
    thumbnail: string | undefined;
    quantity: number;
    price: number;
  }) => void;
}
