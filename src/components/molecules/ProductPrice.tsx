/**
 * @file ProductPrice.tsx
 * @description Component for displaying product price information including current price, discount, and original price.
 */

import { sneakers } from "@/data";

/**
 * ProductPrice component
 * @component
 * @description Renders product price information including current price, discount, and original price
 *
 * @example
 * ```tsx
 * <ProductPrice />
 * ```
 *
 * @returns {JSX.Element} A product price information section with:
 * - Current price
 * - Discount percentage (if applicable)
 * - Original price (if applicable)
 */
const ProductPrice = () => {
  const { price } = sneakers;

  return (
    <div className="my-8 flex h-8 items-center justify-between font-bold lg:h-auto lg:flex-col lg:items-start lg:gap-4">
      <div className="flex gap-4 lg:items-center">
        <p className="text-3xl">
          <span className="sr-only">Current price:</span>$
          {price.discount
            ? (price.original * (1 - price.discount / 100)).toFixed(2)
            : price.original}
        </p>
        {price.discount && (
          <span className="flex items-center justify-center rounded-lg bg-black px-3 text-white lg:h-6 lg:text-sm">
            <span className="sr-only">Discount:</span>
            {price.discount}%
          </span>
        )}
      </div>
      {price.discount && (
        <p className="text-accent-foreground text-base">
          <span className="sr-only">Original price:</span>
          <del className="decoration-accent-foreground line-through decoration-1">
            ${price.original.toFixed(2)}
          </del>
        </p>
      )}
    </div>
  );
};

export default ProductPrice;
