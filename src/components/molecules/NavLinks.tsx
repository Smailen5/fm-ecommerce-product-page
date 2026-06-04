/**
 * @file NavLinks.tsx
 * @description Navigation links component for header and sidebar navigation
 */

import { linksNav } from "@/data/links/linksNav";
import { Link } from "react-router-dom";

/**
 * @interface NavLinksProps
 * @property {Function=} setIsOpen - Optional function to control sidebar state
 * @property {boolean=} isSidebar - Optional flag to enable sidebar-specific styling
 */
interface NavLinksProps {
  setIsOpen?: (boolean: boolean) => void;
  isSidebar?: boolean;
}

/**
 * NavLinks component
 * @component
 * @description Renders a list of navigation links with optional sidebar behavior
 *
 * @example
 * ```tsx
 * // In header
 * <NavLinks isSidebar={true} />
 *
 * // In sidebar
 * <NavLinks setIsOpen={setIsOpen} />
 * ```
 *
 * @returns {JSX.Element} A list of navigation links with appropriate styling
 *
 * @accessibility
 * - Uses semantic list elements
 * - Employs React Router Links for navigation
 * - Includes hover effects for visual feedback
 */
const NavLinks = ({ setIsOpen, isSidebar }: NavLinksProps) => {
  const handleOpen = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {linksNav.map((link) => {
        return (
          <li key={link.label} className="relative">
            <Link
              to={link.href}
              className={`${setIsOpen ? "text-foreground text-xl font-bold" : "text-accent-foreground peer text-sm"} capitalize`}
              onClick={handleOpen}
            >
              {link.label}
            </Link>
            {isSidebar && (
              <div className="peer-hover:bg-primary absolute top-14 left-0 size-10 h-1 w-full transition-all duration-300 ease-in-out" />
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
