export default function Footer() {
  return (
    <footer className="bg-[#14532D] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-['Manrope'] text-lg font-extrabold">Kantin UPNVJ</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Platform pemesanan makanan kantin untuk mahasiswa dan civitas UPN
            Veteran Jakarta.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/90">Tautan</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="#menu" className="hover:text-[#C98A1D]">
                Menu
              </a>
            </li>
            <li>
              <a href="#cara-pesan" className="hover:text-[#C98A1D]">
                Cara Pesan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/90">Kontak</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Kampus UPN Veteran Jakarta</li>
            <li>Jl. RS Fatmawati, Pondok Labu</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} Kantin UPNVJ. Dibuat untuk memudahkan
        jajan di sela kuliah.
      </p>
    </footer>
  );
}
