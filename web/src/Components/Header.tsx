import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="h-20 w-full bg-[#023f85] px-4 flex items-center justify-between">
      <Logo size={44} color="#fff"/>


    </header>
  )
}