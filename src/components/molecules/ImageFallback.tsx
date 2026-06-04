/**
 * @file ImageFallback.tsx
 * @description Fallback component displayed when an image fails to load or is not found
 */

/**
 * ImageFallback component
 * @component
 * @description Displays a placeholder with a message when an image is not available
 *
 * @example
 * ```tsx
 * <ImageFallback />
 * ```
 *
 * @returns {JSX.Element} A styled placeholder with "Image not found" message
 */
const ImageFallback = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="border-accent rounded-lg m-4 flex h-full w-full items-center justify-center border-2 border-dotted">
        <p className="text-accent-foreground font-bold">
          Image not found
        </p>
      </div>
    </div>
  );
};

export default ImageFallback;
