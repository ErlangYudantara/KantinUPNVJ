import { useState } from "react";
import {Menu, X} from "lucide-react";
import logoUpnvj from "../../assets/logos/LOGO_UPNVJ.png";
const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Cara Pesan", href: "#cara-pesan" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E9F0] bg-white/95 backdrop-blur">
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
       <a href="/" className="flex items-center gap-2.5">
       <img src={logoUpnvj} alt="Logo UPNVJ" className="h-9 w-9 object-contain" />
       <span className="font-['Manrope'] text-xl font-extrabold text-[#14532D]">
       Kantin UPNVJ
       </span>
      </a>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className=" group relative text-sm font-medium text-[#4B5563] transition hover:text-[#14532D]"
            >
              {link.label}
              <span className="absoulute -bottom-1 left-0 h-0.5 w-0 bg-[#145326] transition-all duration-200 group-hover:w-full"/>
            </a>
          ))}
        </nav>

        <a
          href="#menu"
          className="hidden rounded-lg bg-[#14532D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0F3F22] md:inline-block"
        >
          Pesan Sekarang
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-[#14532D] md:hidden"
          aria-label="Buka menu navigasi"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-[#E5E9F0] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-[#4B5563]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-[#14532D] px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
