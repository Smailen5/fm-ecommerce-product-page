/**
 * @file GalleryButton.tsx
 * @description Navigation buttons component for image galleries with previous/next controls
 */

import { IconNext, IconPrevious } from "@/assets/images";
import { twMerge } from "tailwind-merge";

/**
 * @interface GalleryButtonProps
 * @property {Function} handlePrevImage - Function to handle previous image navigation
 * @property {Function} handleNextImage - Function to handle next image navigation
 * @property {React.ReactNode} children - Content to be displayed between navigation buttons
 * @property {boolean=} productGallery - Optional flag to enable product gallery specific styling
 */
interface GalleryButtonProps {
  handlePrevImage: () => void;
  handleNextImage: () => void;
  children: React.ReactNode;
  productGallery?: boolean;
}

/**
 * GalleryButton component
 * @component
 * @description Renders navigation buttons for image galleries with customizable positioning
 *
 * @example
 * ```tsx
 * <GalleryButton
 *   handlePrevImage={() => {}}
 *   handleNextImage={() => {}}
 *   productGallery={true}
 * >
 *   <img src="image.jpg" alt="Gallery image" />
 * </GalleryButton>
 * ```
 *
 * @returns {JSX.Element} Navigation buttons wrapping the provided content
 *
 * @accessibility
 * - Uses semantic button elements
 * - Includes aria-labels for screen readers
 * - Icons are marked as decorative with aria-hidden
 */
const GalleryButton = ({
  handlePrevImage,
  handleNextImage,
  children,
  productGallery,
}: GalleryButtonProps) => {
  const leftButton = productGallery && "-left-8 size-14";
  const rightButton = productGallery && "-right-8 size-14";

  return (
    <>
      <button
        aria-label="previous image"
        className={twMerge(
          "bg-background group/prev absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
          leftButton,
        )}
        onClick={handlePrevImage}
      >
        <IconPrevious
          aria-hidden={true}
          className="group-hover/prev:[&>path]:stroke-primary"
        />
      </button>

      {children}

      <button
        aria-label="next image"
        className={twMerge(
          "bg-background group/next absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
          rightButton,
        )}
        onClick={handleNextImage}
      >
        <IconNext
          aria-hidden={true}
          className="group-hover/next:[&>path]:stroke-primary"
        />
      </button>
    </>
  );
};

export default GalleryButton;
