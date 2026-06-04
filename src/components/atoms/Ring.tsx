/**
 * @file Ring.tsx
 * @description Decorative ring component for highlighting and interactive elements
 */

/**
 * @interface RingProps
 * @property {string=} className - Optional CSS classes for styling
 * @property {boolean=} noRing - Optional flag to disable the ring border
 * @property {Function=} onClick - Optional click handler function
 */
interface RingProps {
  className?: string;
  noRing?: boolean;
  onClick?: () => void;
}

/**
 * Ring component
 * @component
 * @description A decorative overlay component that adds a ring border or interactive highlight
 *
 * @example
 * ```tsx
 * // With ring border
 * <Ring className="bg-white/50" />
 *
 * // Without ring border, interactive
 * <Ring
 *   noRing
 *   className="hover:bg-white/50"
 *   onClick={() => handleClick()}
 * />
 * ```
 *
 * @returns {JSX.Element} A div element with configurable ring border and interaction states
 */
const Ring = ({ className, noRing, onClick }: RingProps) => {
  return (
    <div
      className={`absolute inset-0 cursor-pointer rounded-xl ${!noRing && "ring-primary ring-2"} ${className}`}
      onClick={onClick}
    />
  );
};

export default Ring;
