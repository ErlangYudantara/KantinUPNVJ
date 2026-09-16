import { useState } from "react";
import { AtSign, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const roleFieldConfig = {
  mahasiswa: {
    fieldLabel: "Email Kampus / NIM",
    placeholder: "nama.mahasiswa@upnvj.ac.id",
    toggleLabel: "Gunakan NIM",
  },
  dosen: {
    fieldLabel: "Email Dosen",
    placeholder: "Email",
    toggleLabel: "Gunakan Email",
  },
  tenant: {
    fieldLabel: "Email Tenant",
    placeholder: "Email",
    toggleLabel: "Gunakan Email",
  },
};

export default function LoginForm({ activeRole }) {
  const [showPassword, setShowPassword] = useState(false);
  const config = roleFieldConfig[activeRole];

  return (
    <form className="mt-6 space-y-5">
      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-[#111827]">
            {config.fieldLabel}
          </label>
          <button
            type="button"
            className="text-xs font-semibold text-[#14532D] hover:underline"
          >
            {config.toggleLabel}
          </button>
        </div>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#EDF1F9] px-3.5 py-2.5">
          <AtSign size={18} className="text-[#6B7280]" />
          <input
            type="text"
            placeholder={config.placeholder}
            className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-[#111827]">
            Kata Sandi
          </label>
          <button
            type="button"
            className="text-xs font-semibold text-[#14532D] hover:underline"
          >
            Lupa Sandi?
          </button>
        </div>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#EDF1F9] px-3.5 py-2.5">
          <Lock size={18} className="text-[#6B7280]" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••"
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

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-[#4B5563]">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-[#D1D5DB] text-[#14532D] focus:ring-[#14532D]"
          />
          Ingat saya di perangkat ini
        </label>
        <span className="rounded-full bg-[#E8F3EA] px-2.5 py-1 text-xs font-semibold text-[#14532D]">
          Aman & Terenkripsi
        </span>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#14532D] py-3 text-sm font-semibold text-white hover:bg-[#0F3F22]"
      >
        Masuk ke Akun
        <ArrowRight size={16} />
      </button>
    </form>
  );
}