import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "nes irx gkd ftd nkq cti mtg dpn uur ygz elq focus-visible:ring-gray-950 gqx kzk rgy dark:ring-offset-gray-950 ouy",
  {
    variants: {
      variant: {
        default: "xpb ove vrx qra hmd bot",
        destructive:
          "bg-red-500 ove hover:bg-red-500/90 dark:bg-red-900 elp dark:hover:bg-red-900/90",
        bfu:
          "oep ugs giv vmr wlm rio dark:bg-gray-950 syl gtm",
        secondary:
          "vnp dqg krp zmj elp azn",
        ghost: "vmr wlm syl gtm",
        link: "dqg zbd eht elp",
      },
      size: {
        default: "hxa faq wle",
        sm: "yfc nkq lkq",
        lg: "wav nkq sfv",
        icon: "hxa bzx",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
