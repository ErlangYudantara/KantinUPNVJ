const features = [
  {
    icon: "⏱️",
    title: "Ga perlu antre panjang",
    description:
      "Pesan dari kelas atau kosan, tinggal ambil pas udah jadi. Jam istirahat jadi lebih tenang.",
  },
  {
    icon: "🍽️",
    title: "Semua kios dalam satu tempat",
    description:
      "Bandingkan menu dan harga dari tiap kios kantin tanpa harus muter dulu.",
  },
  {
    icon: "💳",
    title: "Bayar sesuai kebiasaan",
    description:
      "Cash langsung di kios atau QRIS, keduanya tetap bisa dipakai seperti biasa.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-lg font-['Fraunces'] text-3xl text-[#1E3D2F]">
          Kenapa pesan lewat sini
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="border-l-2 border-[#E8A33D] pl-5">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 font-['Fraunces'] text-lg text-[#1E3D2F]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#23231F]/70">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
