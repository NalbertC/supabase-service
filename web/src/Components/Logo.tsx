import { RiSupabaseLine } from "react-icons/ri";

interface LogoProps {
  size: number
  color: string
}

export function Logo({ size, color }: LogoProps) {
  return (
    <div>
      <RiSupabaseLine size={size} color={color} />
    </div>
  )
}