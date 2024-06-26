import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-50 bg-green-800 hover:bg-green-800/90",
      footer:
        "text-gray-300 hover:text-gray-50 font-semibold p-2 -ml-2 sm:ml-0",
    },
    size: {
      default: "h-10 px-4 py-2",
      icon: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, linkVariants };
