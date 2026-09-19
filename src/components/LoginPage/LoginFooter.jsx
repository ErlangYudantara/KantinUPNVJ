import { Link } from "react-router-dom";
export default function LoginFooter() {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-[#4B5563]">
        Belum punya akun Kantin?{" "}
        <Link to="/register" className="font-semibold text-[#14532D] hover:underline">
          Daftar di sini
        </Link>
      </p>
      <p className="mt-2 text-xs text-[#9CA3AF]">
        Universitas Pembangunan Nasional Veteran Jakarta • Kampus Bela Negara
      </p>
    </div>
  );
}