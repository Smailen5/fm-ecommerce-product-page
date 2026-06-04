/**
 * @file ProductQuantity.tsx
 * @description Component for managing product quantity selection with increment/decrement controls.
 */

import { IconMinus, IconPlus } from "@/assets/images";
import { useCart } from "@/lib/hooks/useCart";
import { Button } from "../atoms/Button";

/**
 * ProductQuantity component
 * @component
 * @description Renders a quantity selector with increase/decrease buttons and current quantity display
 *
 * @example
 * ```tsx
 * <ProductQuantity />
 * ```
 *
 * @returns {JSX.Element} A quantity selector group containing:
 * - Decrease button
 * - Current quantity display
 * - Increase button
 *
 * @accessibility
 * - Uses semantic button and output elements
 * - Includes aria-labels for screen readers
 * - Groups related controls with role="group"
 */
const ProductQuantity = () => {
  const { quantity, handleAddToCart, handleRemoveFromCart } = useCart();

  return (
    <div
      className="bg-secondary flex h-14 items-center justify-between rounded-lg px-6 lg:h-auto lg:w-full lg:flex-1 lg:px-0 lg:gap-6"
      role="group"
      aria-label="Quantity selector"
    >
      <Button
        type="button"
        aria-label="Decrease quantity"
        variant={"ghost"}
        size={"icon"}
        rounded={"lg"}
        onClick={handleRemoveFromCart}
      >
        <IconMinus aria-hidden={true} />
      </Button>
      <output className="font-bold" aria-label="Current quantity">
        {quantity}
      </output>
      <Button
        type="button"
        aria-label="Increase quantity"
        variant={"ghost"}
        size={"icon"}
        rounded={"lg"}
        onClick={handleAddToCart}
      >
        <IconPlus aria-hidden={true} />
      </Button>
    </div>
  );
};

export default ProductQuantity;
