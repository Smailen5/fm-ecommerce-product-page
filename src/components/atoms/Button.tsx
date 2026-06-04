/**
 * @file Button.tsx
 * @description Custom button component with variants
 */

import { buttonVariants } from "@/variants/buttonVariants";
import { type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/**
 * @interface ButtonProps
 */
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/**
 * Button component
 * @component
 * @description A customizable button component with different variants and sizes
 *
 * @example
 * ```tsx
 * <Button>Click me</Button>
 * <Button variant="ghost" size="icon">
 *   <IconComponent />
 * </Button>
 * ```
 */
const Button = ({
  className,
  variant,
  size,
  rounded,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonVariants({ variant, size, rounded }), className)}
      {...props}
    />
  );
};

export { Button };
