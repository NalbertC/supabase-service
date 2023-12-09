import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, type , className, ...props }: ButtonProps) {
  return (
    <button type={type} {...props} className={clsx("h-12 w-full bg-[#023f85] flex items-center justify-center rounded-full font-bold text-white shadow-md", className)}>{children}</button>
  )
}