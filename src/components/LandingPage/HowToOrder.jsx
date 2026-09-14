import { Hand, QrCode, BellRing } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Pilih Stan & Menu Favorit",
    description:
      "Telusuri stan favorit Anda di UPNVJ dan pilih makanan atau minuman tanpa harus berdiri antre di lokasi.",
    iconBg: "bg-[#14532D]",
    Icon: Hand,
  },
  {
    number: 2,
    title: "Bayar Mudah Pakai QRIS",
    description:
      "Selesaikan pembayaran instan melalui QRIS atau saldo U-Pay kampus terintegrasi yang 100% nir-tunai.",
    iconBg: "bg-[#C98A1D]",
    Icon: QrCode,
  },
  {
    number: 3,
    title: "Ambil saat Makanan Siap",
    description:
      "Terima notifikasi real-time saat pesanan siap di stan. Datang dan ambil santapan hangat Anda tepat waktu.",
    iconBg: "bg-[#14532D]",
    Icon: BellRing,
  },
];

export default function HowToOrder() {
  return (
    <section id="cara-pesan" className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#EDF1F9] px-6 py-16 text-center">
        <p className="text-sm font-semibold text-[#C98A1D]">
          ALUR PEMESANAN PRAKTIS
        </p>
        <h2 className="mt-2 font-['Manrope'] text-3xl font-extrabold text-[#14532D]">
          3 Langkah Mudah Tanpa Antre
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.number} className="rounded-2xl bg-white p-8">
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg}`}
              >
                <s.Icon size={22} color="white" />
              </div>
              <h3 className="mt-5 font-['Manrope'] text-base font-bold text-[#14532D]">
                {s.number}. {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}