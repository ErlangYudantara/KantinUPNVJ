import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

export default function RegisterFooter() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-[#E5E9F0]" />
        <span className="text-xs font-semibold text-[#9CA3AF]">ATAU</span>
        <div className="h-px flex-1 bg-[#E5E9F0]" />
      </div>

      <p className="mt-4 text-center text-sm text-[#4B5563]">
        Sudah punya akun Kantin?
      </p>
      <Link
        to="/login"
        className="mt-1 flex items-center justify-center gap-1.5 text-sm font-bold text-[#14532D] hover:underline"
      >
        Masuk Sekarang
        <LogIn size={16} />
      </Link>
    </div>
  );
}