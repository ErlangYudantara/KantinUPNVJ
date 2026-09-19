import { useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import RegisterBadge from "../components/RegisterPage/RegisterBadge";
import RegisterRoleTabs from "../components/RegisterPage/RegisterRoleTabs";
import RegisterForm from "../components/RegisterPage/RegisterForm";
import RegisterFooter from "../components/RegisterPage/RegisterFooter";
import RegisterPageFooter from "../components/RegisterPage/RegisterPageFooter";

export default function Register() {
  const [activeRole, setActiveRole] = useState("mahasiswa");

  return (
    <div className="min-h-screen bg-[#F5F7FB] px-4 py-12 font-['Manrope']">
      <RegisterBadge />

      <div className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="h-1.5 bg-gradient-to-r from-[#14532D] to-[#2F8F4E]" />

        <div className="px-8 pb-8 pt-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#14532D]">
            <UtensilsCrossed size={24} color="white" />
          </div>

          <h1 className="mt-4 text-center text-2xl font-extrabold text-[#111827]">
            Daftar Akun Baru
          </h1>
          <p className="mx-auto mt-2 max-w-xs text-center text-sm text-[#6B7280]">
            Buat akun untuk memesan makanan di Kantin UPNVJ tanpa antre
          </p>

          <div className="mt-6">
            <RegisterRoleTabs activeRole={activeRole} onChange={setActiveRole} />
          </div>

          <RegisterForm activeRole={activeRole} />
          <RegisterFooter />
        </div>
      </div>

      <RegisterPageFooter />
    </div>
  );
}