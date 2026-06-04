/**
 * @file Sidebar.tsx
 * @description Mobile navigation sidebar component with overlay
 */

import { IconClose } from "@/assets/images";
import { SidebarProps } from "@/types";
import { Button } from "../atoms/Button";
import NavLinks from "./NavLinks";

/**
 * Sidebar component
 * @component
 * @description Mobile navigation sidebar with dark overlay and animated transitions
 *
 * @example
 * ```tsx
 * <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
 * ```
 *
 * @param {SidebarProps} props - Component props
 * @returns {JSX.Element} Sidebar with navigation links and overlay
 */
export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {/* Overlay scuro */}
      <div
        className={`bg-foreground fixed inset-0 z-20 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-80" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar effettiva */}
      <div
        className={`bg-background fixed top-0 left-0 z-30 h-screen w-2/3 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full space-y-14 p-6">
          <Button
            aria-label="close sidebar"
            variant={"ghost"}
            size={"icon"}
            rounded={"lg"}
          >
            <IconClose onClick={() => setIsOpen(false)} aria-hidden={true} />
          </Button>

          <ul className="flex flex-col gap-6">
            <NavLinks setIsOpen={setIsOpen} />
          </ul>
        </div>
      </div>
    </>
  );
};
