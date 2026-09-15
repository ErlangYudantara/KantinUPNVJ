import {Star, Clock} from "lucide-react";
import buSriImg from "../../assets/image/BuSri.png";
import nusantaraImg from "../../assets/image/Nusantara.png";
import esVeteranImg from "../../assets/image/EsVeteran.png";

const stalls = [
  {
    number: "STAN 01",
    name: "Kedai Bu Sri",
    rating: "4.8",
    tag: "Pondok Labu",
    tagColor: "bg-[#14532D]",
    description:
      "Ayam Geprek sambal bawang pedas nikmat, nasi hemat mahasiswa, dan aneka lauk rumahan bergizi.",
    hours: "07.30 - 16.30 WIB",
    price: "Mulai Rp 12.000",
    image :buSriImg,
  },
  {
    number: "STAN 02",
    name: "Dapur Nusantara",
    rating: "4.9",
    tag: "Pondok Labu",
    tagColor: "bg-[#14532D]",
    description:
      "Soto ayam kaldu rempah kuning, soto Betawi gurih, serta aneka masakan tradisional nusantara.",
    hours: "08.00 - 17.00 WIB",
    price: "Mulai Rp 15.000",
    image: nusantaraImg,
  },
  {
    number: "STAN 03",
    name: "Kopi & Minuman Veteran",
    rating: "4.9",
    tag: "Diskon Tumbler",
    tagColor: "bg-[#C98A1D]",
    description:
      "Kopi susu gula aren khas kampus, matcha oat, teh herbal segar, dan jus buah asli penyemangat kuliah.",
    hours: "07.30 - 18.00 WIB",
    price: "Mulai Rp 8.000",
    image: esVeteranImg,
  },
];

export default function FeaturedMenu() {
  return (
    <section id="menu" className="scroll-mt-24 bg-[#F5F7FB] px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold text-[#C98A1D]">
          PILIHAN MAKANAN & MINUMAN
        </p>
        <h2 className="mt-2 font-['Manrope'] text-3xl font-extrabold text-[#14532D]">
          Stan Kantin Favorit UPNVJ
        </h2>

        <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
          {stalls.map((s) => (
            <div
              key={s.name}
              className="overflow-hidden rounded-2xl border border-[#E5E9F0] bg-white"
            >
              <div className="relative h-44">
                <img src={s.image} alt={s.name} className="h-full w-full object-cover"/>
              

                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#14532D]">
                  <Star size={12} fill="currentColor"/>
                  {s.rating}
                </span>

                <span
                  className={`absolute bottom-3 right-3 rounded-full ${s.tagColor} px-2.5 py-1 text-xs font-semibold text-white`}
                >
                  {s.tag}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold text-[#C98A1D]">{s.number}</p>
                <h3 className="mt-1 font-['Manrope'] text-lg font-bold text-[#14532D]">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  {s.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1.5 text-[#6B7280]">
                    <Clock size={14} />
                    {s.hours}
                  </span>
                  <span className="font-bold text-[#14532D]">{s.price}</span>
                </div>

                <button className="mt-4 w-full rounded-lg bg-[#14532D] py-2.5 text-sm font-semibold text-white hover:bg-[#0F3F22]">
                  Lihat Menu & Pesan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
