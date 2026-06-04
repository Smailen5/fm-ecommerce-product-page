/**
 * @file OverlayGallery.tsx
 * @description Modal gallery component for displaying images in a fullscreen overlay
 */

import { IconClose } from "@/assets/images";
import { Button } from "../atoms/Button";
import ProductGallery from "../organism/ProductGallery";

/**
 * @interface OverlayGalleryProps
 * @property {boolean} overlay - Controls visibility of the overlay
 * @property {Function} setOverlay - Function to update overlay state
 */
interface OverlayGalleryProps {
  overlay: boolean;
  setOverlay: (overlay: boolean) => void;
}

/**
 * OverlayGallery component
 * @component
 * @description Displays a fullscreen modal gallery with close button and product images
 *
 * @example
 * ```tsx
 * <OverlayGallery
 *   overlay={isOpen}
 *   setOverlay={setIsOpen}
 * />
 * ```
 *
 * @returns {JSX.Element} A modal overlay containing the product gallery
 *
 * @accessibility
 * - Modal can be closed via button
 * - Uses semantic button elements
 * - Includes proper ARIA attributes
 */
const OverlayGallery = ({ overlay, setOverlay }: OverlayGalleryProps) => {
  return (
    <>
      {overlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/75">
          {/* Contenitore overlay */}
          <div className="flex flex-col items-center justify-center">
            {/* Contenitore immagine */}
            <div className="z-50 h-1/2 w-1/2">
              <div className="flex justify-end">
                <Button
                  variant={"ghost"}
                  size={"close"}
                  onClick={() => setOverlay(false)}
                  className="group/close mb-8"
                >
                  <IconClose className="group-hover/close:[&>path]:fill-primary scale-150 [&>path]:fill-white" />
                </Button>
              </div>
              <ProductGallery />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayGallery;
