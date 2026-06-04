/**
 * @file button-variants.ts
 * @description Button component variants and styles
 */

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "font-medium transition-colors duration-300 ease-in-out focus:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary shadow-primary/25 focus-visible:ring-primary/50 text-primary-foreground font-bold shadow-xl hover:opacity-75 focus-visible:ring-2 focus-visible:outline-none",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-75",
        ghost:
          "bg-transparent text-foreground hover:bg-accent/15 focus-visible:ring-2 focus-visible:ring-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10 p-2 flex items-center justify-center",
        close: "flex items-center justify-end",
      },
      rounded: {
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
        xs: "rounded-xs",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
