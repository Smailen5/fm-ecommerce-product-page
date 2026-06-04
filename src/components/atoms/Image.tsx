/**
 * @file Image.tsx
 * @description Reusable image component with standardized props and event handling
 */

/**
 * @interface ImageProps
 * @property {string} src - Source URL of the image
 * @property {string} alt - Alternative text description for accessibility
 * @property {string=} className - Optional CSS classes for styling
 * @property {Function=} onClick - Optional click handler function
 * @property {number} width - Width of the image in pixels
 * @property {number} height - Height of the image in pixels
 * @property {boolean=} priority - Optional flag to indicate if the image is priority
 */
type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  width: number;
  height: number;
  priority?: boolean;
};

/**
 * Image component
 * @component
 * @description A wrapper around the HTML img element with standardized props
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Image
 *   src="/path/to/image.jpg"
 *   alt="Description"
 * />
 *
 * // With styling and click handler
 * <Image
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   className="rounded-lg hover:opacity-75"
 *   onClick={() => handleClick()}
 * />
 * ```
 *
 * @returns {JSX.Element} An img element with configured props
 *
 * @accessibility
 * - Requires alt text for screen readers
 * - Maintains semantic HTML structure
 */
function Image({
  src,
  alt,
  className = "",
  onClick,
  width,
  height,
  priority = false,
}: ImageProps) {
  return (
    <img
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
}

export default Image;
