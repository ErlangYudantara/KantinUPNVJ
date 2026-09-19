import { ShieldCheck } from "lucide-react";

export default function RegisterPageFooter() {
  return (
    <div className="mx-auto mt-6 max-w-md text-center">
      <p className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280]">
        <ShieldCheck size={14} className="text-[#14532D]" />
        Single Sign-On Terintegrasi UPNVJ
      </p>

      <p className="mt-4 text-xs text-[#9CA3AF]">
        © 2025 UPN Veteran Jakarta. Sistem Pemesanan Kantin Terpadu. •{" "}
        Pusat Bantuan Kampus
      </p>
    </div>
  );
}