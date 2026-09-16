import { useState } from "react";
import LoginHeader from "../components/LoginPage/LoginHeader";
import RoleTabs from "../components/LoginPage/RoleTabs";
import LoginForm from "../components/LoginPage/LoginForm";
import LoginFooter from "../components/LoginPage/LoginFooter";

export default function Login() {
  const [activeRole, setActiveRole] = useState("mahasiswa");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F7FB] px-4 py-12 font-['Manrope']">
      <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-[#EAF3EC] via-white to-[#FBF3E8] p-8 shadow-sm">
        <LoginHeader />

        <h1 className="mt-6 text-2xl font-extrabold text-[#111827]">
          Masuk ke Akun
        </h1>
        <p className="mt-1 text-sm text-[#6B7280]">
          Pesan kuliner favorit tanpa antre atau kelola kedai kantin Anda.
        </p>

        <div className="mt-6">
          <RoleTabs activeRole={activeRole} onChange={setActiveRole} />
        </div>

        <LoginForm activeRole={activeRole} />
        <LoginFooter />
      </div>
    </div>
  );
}