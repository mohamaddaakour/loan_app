import type { NavbarProps } from "./Navbar.types";

// we import an icon from react icons library
import { CgDarkMode } from "react-icons/cg";


export default function Navbar({ title = "Loan App" }: NavbarProps) {
  return (
    <nav className="min-h-24 bg-cyan-500 flex justify-between items-center px-6">
      <h1 className="text-2xl font-bold text-black">{title}</h1>

      <button
        aria-label="Toggle Dark Mode"
        className="text-2xl rounded-2xl border-2 border-black p-2 hover:scale-105 transition-transform cursor-pointer"
      >
        <CgDarkMode />
      </button>
    </nav>
  );
}