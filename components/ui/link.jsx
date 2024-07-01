import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "nes irx nmm gkd ftd cti dpn uur ygz elq jig cba kzk rgy",
  {
    variants: {
      variant: {
        default:
          "qse xdv mtg zbd eht jwx gtm",
        footer:
          "rqa zbd eht nsl nmm oet bsj",
        icon: "bgv ovn oub jkz fvb",
        logo: "oet",
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
