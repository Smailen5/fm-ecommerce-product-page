/**
 * @file ProductButton.tsx
 * @description Add to cart button component with price calculation
 */

import { IconCart } from "@/assets/images";
import { sneakers } from "@/data";
import { useCart } from "@/lib/hooks/useCart";
import { calculatePrice } from "@/lib/utils/price";
import { Button } from "../atoms/Button";

/**
 * ProductButton component
 * @component
 * @description Renders an "Add to cart" button that handles product addition with price calculation
 *
 * @example
 * ```tsx
 * <ProductButton />
 * ```
 *
 * @returns {JSX.Element} A button that adds the current product to cart
 *
 * @accessibility
 * - Uses semantic button element
 * - Includes aria-label for screen readers
 * - Icon is marked as decorative
 */
const ProductButton = () => {
  const { thumbnailProduct1, quantity, handleCart } = useCart();
  const { price } = sneakers;

  return (
    <Button
      type="button"
      rounded={"lg"}
      size={"icon"}
      className="h-14 w-full gap-4 lg:h-auto lg:text-sm"
      aria-label="Add to cart"
      onClick={() =>
        handleCart({
          thumbnail: thumbnailProduct1,
          quantity,
          price: calculatePrice({
            originalPrice: price.original,
            discount: price.discount,
          }),
        })
      }
    >
      {/* TODO: ridurre dimensione icona in modalita desktop */}
      <IconCart aria-hidden="true" className="[&>path]:fill-current" />
      <span>Add to cart</span>
    </Button>
  );
};

export default ProductButton;
