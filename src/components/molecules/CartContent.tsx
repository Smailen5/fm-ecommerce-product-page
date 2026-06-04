/**
 * @file CartContent.tsx
 * @description Component for rendering the contents of the shopping cart
 */

import { IconDelete } from "@/assets/images";
import { CartContentProps } from "@/types";
import { Button } from "../atoms/Button";

/**
 * CartContent component
 * @component
 * @description Displays cart items, quantities, prices and checkout button
 *
 * @example
 * ```tsx
 * <CartContent
 *   cartData={cart}
 *   title="Product Title"
 *   handleRemoveCart={handleRemove}
 * />
 * ```
 *
 * @returns {JSX.Element} Cart contents with items or empty state message
 *
 * @accessibility
 * - Uses semantic HTML (article, main)
 * - Includes screen reader text for empty state
 * - Uses proper heading hierarchy
 * - Provides clear button labels
 */
const CartContent = ({
  cartData,
  title,
  handleRemoveCart,
}: CartContentProps) => {
  const { thumbnail, quantity, price } = cartData;

  const handleDelete = () => {
    handleRemoveCart({
      thumbnail: undefined,
      quantity: 0,
      price: 0,
    });
  };

  return (
    <main
      className={`${
        quantity > 0
          ? "space-y-6 p-6 pb-8"
          : "flex h-48 items-center justify-center"
      }`}
    >
      {quantity > 0 ? (
        <>
          <article className="flex items-center gap-3">
            {/* Immagine prodotto */}
            {/* TODO: Aggiungere un placeholder quando non c'è un'immagine */}
            <img
              src={thumbnail}
              alt="thumbnail"
              className="h-14 w-14 rounded-lg"
            />

            {/* Testo prodotto e costo */}
            <div className="text-accent-foreground flex-1">
              <h4 className="text-sm">{title}</h4>
              <p className="mt-1">
                <span className="text-sm">
                  ${price} x {quantity}{" "}
                </span>
                <span className="text-foreground font-bold">
                  ${(price * quantity).toFixed(2)}
                </span>
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              rounded={"lg"}
              className="h-auto self-center"
              onClick={handleDelete}
            >
              <IconDelete aria-hidden={true} />
            </Button>
          </article>

          <Button
            className="text-primary-foreground h-14 w-full rounded-lg font-bold"
            onClick={() => alert("the checkout is not available yet")}
          >
            Checkout
          </Button>
        </>
      ) : (
        <p className="text-accent-foreground font-bold">
          <span className="sr-only">the cart is empty</span>Your cart is empty.
        </p>
      )}
    </main>
  );
};

export default CartContent;
