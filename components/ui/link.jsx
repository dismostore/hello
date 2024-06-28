import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center p-2 justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-gray-600 dark:text-gray-300 font-medium underline-offset-4 hover:underline hover:text-gray-800 dark:hover:text-gray-50",
        footer:
          "text-gray-300 underline-offset-4 hover:underline hover:text-gray-50 p-2 -ml-2 sm:ml-0",
        icon: "stroke-gray-400 dark:stroke-gray-500 hover:stroke-gray-500 dark:hover:stroke-gray-400 rounded-lg",
        logo: "-ml-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, linkVariants };
