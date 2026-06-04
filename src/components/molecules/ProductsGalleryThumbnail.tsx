/**
 * @file ProductsGalleryThumbnail.tsx
 * @description Thumbnail gallery component for product images with selection indicators
 */

import Image from "../atoms/Image";
import Ring from "../atoms/Ring";

/**
 * @interface ProductsGalleryThumbnailProps
 * @property {Array<string>=} imageProducts - Array of product image URLs
 * @property {Function=} setOverlay - Optional function to control overlay state
 * @property {number} currentImage - Index of currently selected image
 * @property {Function} handleImage - Function to handle image selection
 */
interface ProductsGalleryThumbnailProps {
  imageProducts?: string[];
  setOverlay?: (overlay: boolean) => void;
  currentImage: number;
  handleImage: (index: number) => void;
}

/**
 * ProductsGalleryThumbnail component
 * @component
 * @description Renders a grid of product image thumbnails with selection indicators
 *
 * @example
 * ```tsx
 * <ProductsGalleryThumbnail
 *   imageProducts={images}
 *   currentImage={currentIndex}
 *   handleImage={setCurrentImage}
 * />
 * ```
 *
 * @returns {JSX.Element} A collection of interactive product thumbnails
 *
 * @accessibility
 * - Images include descriptive alt text
 * - Interactive elements are properly labeled
 * - Visual indicators for selected state
 */
const ProductsGalleryThumbnail = ({
  imageProducts,
  setOverlay,
  currentImage,
  handleImage,
}: ProductsGalleryThumbnailProps) => {
  return (
    <>
      {imageProducts &&
        imageProducts.map((image, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`product image ${index + 1}`}
                width={80}
                height={80}
                className={`size-20 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:opacity-50 ${
                  !setOverlay && currentImage === index
                    ? "opacity-75"
                    : currentImage === index && "opacity-25"
                }`}
                onClick={() => handleImage(index)}
              />

              {/* Ring indicator for selected state */}
              {!setOverlay && currentImage === index ? (
                <Ring className="bg-white/75" />
              ) : !setOverlay ? (
                <Ring
                  noRing
                  className="hover:bg-white/50"
                  onClick={() => handleImage(index)}
                />
              ) : (
                currentImage === index && <Ring />
              )}
            </div>
          );
        })}
    </>
  );
};

export default ProductsGalleryThumbnail;
