import { UtensilsCrossed, LogIn, Leaf}  from "lucide-react";

const stats = [
  { value: "3 Stan Mitra Aktif", label: "Pilihan Menu Kampus", accent: false },
  { value: "8–10 Mnt", label: "Rata-rata Siap Saji", accent: true },
  { value: "100% Bebas Antre", label: "Sistem Pemesanan Cerdas", accent: false },
];

export default function Hero() {
  return (
    <section className="bg-[#F5F7FB] px-6 pb-16 pt-20 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F3EA] px-4 py-1.5 text-sm font-medium text-[#14532D]">
          <Leaf size={14} />
          Green Campus • UPN Veteran Jakarta
        </span>

        <h1 className="mt-6 font-['Manrope'] text-4xl font-extrabold leading-tight text-[#14532D] md:text-5xl">
          Kantin Digital UPN Veteran Jakarta
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[#4B5563]">
          Pesan santapan favorit langsung dari stan kantin kampus tanpa
          antre. Hemat waktu kuliah, higienis, dan dukung gerakan ramah
          lingkungan Green Campus.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-lg bg-[#14532D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0F3F22]"
          >
            <UtensilsCrossed size={16} />
            Pesan Sekarang
          </a>
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-lg bg-[#DCEAFB] px-6 py-3 text-sm font-semibold text-[#1D4ED8] hover:bg-[#CBDFF7]"
          >
            <LogIn size={16} />
            Masuk / Daftar Akun
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-[#E5E9F0] border-t border-[#E5E9F0] pt-8">
          {stats.map((s) => (
            <div key={s.value}>
              <p
                className={`font-['Manrope'] text-lg font-extrabold md:text-xl ${
                  s.accent ? "text-[#C98A1D]" : "text-[#14532D]"
                }`}
              >
                {s.value}
              </p>
              <p className="mt-1 text-xs text-[#6B7280]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
