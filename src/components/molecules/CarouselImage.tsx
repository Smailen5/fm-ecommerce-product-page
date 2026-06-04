/**
 * @file CarouselImage.tsx
 * @description Image carousel component with next/previous navigation and animations
 */

import { imageProducts } from "@/assets/images";
import { useCart } from "@/lib/hooks/useCart";
import { useImageGallery } from "@/lib/hooks/useImageGallery";
import { AnimatePresence, motion } from "framer-motion";
import Cart from "./Cart";
import GalleryButton from "./GalleryButton";
import ImageFallback from "./ImageFallback";

/**
 * Slide animation variants configuration
 * @typedef {Object} SlideVariants
 * @property {Function} enter - Animation for entering slides
 * @property {Object} center - Animation for centered slides
 * @property {Function} exit - Animation for exiting slides
 */

/**
 * CarouselImage component
 * @component
 * @description A carousel component that displays product images with animated transitions.
 * Features include:
 * - Next/Previous navigation buttons
 * - Smooth slide animations
 * - Responsive image display
 * - Keyboard navigation support
 *
 * @example
 * ```tsx
 * <CarouselImage />
 * ```
 *
 * @returns {JSX.Element} An image carousel with:
 * - Navigation buttons
 * - Animated image transitions
 * - Full-width responsive display
 *
 * @accessibility
 * - Uses semantic button elements
 * - Includes aria-labels for navigation
 * - Supports keyboard navigation
 */
const CarouselImage = () => {
  const { cartOpen } = useCart();
  const { currentImage, direction, handleNextImage, handlePrevImage } =
    useImageGallery(imageProducts);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-[300px] overflow-hidden lg:hidden">
      {!imageProducts[currentImage] ? (
        <ImageFallback />
      ) : (
        <>
          <GalleryButton
            handleNextImage={handleNextImage}
            handlePrevImage={handlePrevImage}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentImage}
                src={imageProducts[currentImage]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute h-[300px] w-full object-cover"
              />
            </AnimatePresence>
          </GalleryButton>
        </>
      )}
      <Cart isOpen={cartOpen} />
    </div>
  );
};

export default CarouselImage;
