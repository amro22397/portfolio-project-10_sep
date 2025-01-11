import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-gray-700 text-background hover:bg-accent-hover",
          primary: "bg-background text-white",
          outline: "border border-gray-700 bg-green-400 dark:bg-green-700 text-white hover:bg-green-500 dark:hover:bg-green-800 hover:text-white active:bg-green-800"
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[48px] px-6",
        lg: "h-[56px] text-sm uppercase tracking-[2px] px-8",
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
