import { Store, ShieldCheck } from "lucide-react";

export default function LoginHeader() {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14532D]">
          <Store size={20} color="white" />
        </div>
        <div>
          <p className="font-['Manrope'] text-lg font-extrabold text-[#14532D]">
            Kantin UPNVJ
          </p>
          <p className="text-xs font-medium tracking-wide text-[#6B7280]">
            LAYANAN TERPADU KAMPUS
          </p>
        </div>
      </div>

      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E7ECF5] px-3 py-1.5 text-xs font-semibold text-[#374151]">
        <ShieldCheck size={14} className="text-[#14532D]" />
        SSO 256-bit
      </span>
    </div>
  );
}