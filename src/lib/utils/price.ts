/**
 * @file price.ts
 * @description Utility functions for price calculations
 */

interface PriceCalculation {
  originalPrice: number;
  discount?: number;
}

export const calculatePrice = ({
  originalPrice,
  discount,
}: PriceCalculation) => {
  if (!discount) return originalPrice;

  const discountedPrice = originalPrice * (1 - discount / 100);
  return discountedPrice;
};
