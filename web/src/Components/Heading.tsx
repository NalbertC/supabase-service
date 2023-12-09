import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

interface HeadingProps {
  size?: "sm" | "md" | "lg"
  asChild?: boolean;
  children: string;
}

export function Heading({ size = "md",
  asChild,
  children
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp className={clsx("font-bold my-1", {
      "text-lg": size === "sm",
      "text-xl": size === "md",
      "text-2xl": size === "lg"
    })}>
      {children}
    </Comp>
  )
}