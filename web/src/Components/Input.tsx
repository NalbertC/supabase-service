import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <div className="group shadow rounded-full h-11">
      <input  {...props} className="h-full w-full rounded-[inherit] px-4" />
    </div>
  )
}