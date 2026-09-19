import { useState } from "react";
import { User, Hash, AtSign, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const roleFieldConfig = {
  mahasiswa: {
    idLabel: "NIM (Nomor Induk Mahasiswa)",
    idPlaceholder: "Contoh: 2110511001",
    emailLabel: "Email Kampus Resmi",
    emailPlaceholder: "nama@upnvj.ac.id",
  },
  dosen: {
    idLabel: "NIDN (Nomor Induk Dosen Nasional)",
    idPlaceholder: "Contoh: 2110511001",
    emailLabel: "Email Resmi",
    emailPlaceholder: "nama@upnvj.ac.id",
  },
};

export default function RegisterForm({ activeRole }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const config = roleFieldConfig[activeRole];

  return (
    <form className="mt-6 space-y-5">
      <div>
        <label className="text-sm font-semibold text-[#111827]">
          Nama Lengkap
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#EDF1F9] px-3.5 py-2.5">
          <User size={18} className="text-[#6B7280]" />
          <input
            type="text"
            placeholder="Nama Lengkap Anda"
            className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-[#111827]">
          {config.idLabel}
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#EDF1F9] px-3.5 py-2.5">
          <Hash size={18} className="text-[#6B7280]" />
          <input
            type="text"
            placeholder={config.idPlaceholder}
            className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-[#111827]">
          {config.emailLabel}
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#EDF1F9] px-3.5 py-2.5">
          <AtSign size={18} className="text-[#6B7280]" />
          <input
            type="text"
            placeholder={config.emailPlaceholder}
            className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-[#111827]">
          Kata Sandi
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#EDF1F9] px-3.5 py-2.5">
          <Lock size={18} className="text-[#6B7280]" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Minimal 8 karakter"
            className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-[#6B7280] hover:text-[#111827]"
            aria-label={showPassword ? "Sembunyikan sandi" : "Tampilkan sandi"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-[#111827]">
          Konfirmasi Kata Sandi
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#EDF1F9] px-3.5 py-2.5">
          <Lock size={18} className="text-[#6B7280]" />
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Ulangi kata sandi"
            className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="text-[#6B7280] hover:text-[#111827]"
            aria-label={showConfirm ? "Sembunyikan sandi" : "Tampilkan sandi"}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-[#4B5563]">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-[#D1D5DB] text-[#14532D] focus:ring-[#14532D]"
        />
        <span>
          Saya menyetujui{" "}
          <a href="#" className="font-semibold text-[#14532D] hover:underline">
            Ketentuan Layanan
          </a>{" "}
          &{" "}
          <a href="#" className="font-semibold text-[#14532D] hover:underline">
            Tata Tertib Green Kantin
          </a>{" "}
          UPNVJ.
        </span>
      </label>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#14532D] py-3 text-sm font-semibold text-white hover:bg-[#0F3F22]"
      >
        Daftar Sekarang
        <ArrowRight size={16} />
      </button>
    </form>
  );
}