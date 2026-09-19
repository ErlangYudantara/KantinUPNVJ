export default function RegisterBadge() {
  return (
    <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#E5E9F0] bg-white px-5 py-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14532D] text-xs font-extrabold text-white">
        UPN
      </div>
      <div className="text-left">
        <p className="text-xs font-extrabold tracking-wide text-[#14532D]">
          GREEN CAMPUS KANTIN
        </p>
        <p className="text-xs text-[#6B7280]">
          Universitas Pembangunan Nasional Veteran Jakarta
        </p>
      </div>
    </div>
  );
}