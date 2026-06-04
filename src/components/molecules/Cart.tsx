/**
 * @file Cart.tsx
 * @description Shopping cart modal component that displays cart contents and controls
 */

import { sneakers } from "@/data";
import { useCart } from "@/lib/hooks/useCart";
import CartContent from "./CartContent";

/**
 * @interface CartProps
 * @property {boolean} isOpen - Controls visibility of the cart modal
 */
interface CartProps {
  isOpen: boolean;
}

/**
 * Cart component
 * @component
 * @description Renders a modal cart interface with product details and checkout options
 *
 * @example
 * ```tsx
 * <Cart isOpen={isCartOpen} />
 * ```
 *
 * @returns {JSX.Element} A modal cart interface
 *
 * @accessibility
 * - Uses semantic HTML structure (aside, section, header)
 * - Includes proper headings hierarchy
 * - Manages modal visibility state
 */
const Cart = ({ isOpen }: CartProps) => {
  const { cart, setCart } = useCart();
  const { title } = sneakers;

  return (
    <aside
      className={`top-0 z-10 flex h-full w-full items-start justify-center p-2 ${
        isOpen ? "absolute" : "hidden"
      }`}
    >
      <section
        className={`bg-background text-foreground h-auto w-full rounded-lg shadow-xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Header */}
        <header className="p-4 px-6 pb-6">
          <h3 className="text-lg font-bold">Cart</h3>
        </header>

        <hr className="border-muted-foreground" />

        <CartContent cartData={cart} title={title} handleRemoveCart={setCart} />
      </section>
    </aside>
  );
};

export default Cart;
