import { GraduationCap, Briefcase } from "lucide-react";

export const registerRoles = [
  { id: "mahasiswa", label: "Mahasiswa", Icon: GraduationCap },
  { id: "dosen", label: "Dosen", Icon: Briefcase },
];

export default function RegisterRoleTabs({ activeRole, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-xl bg-[#EDF1F9] p-1">
      {registerRoles.map((r) => {
        const isActive = r.id === activeRole;
        return (
          <button
            key={r.id}
            type="button"
            onClick={() => onChange(r.id)}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-[#14532D] text-white"
                : "text-[#4B5563] hover:text-[#14532D]"
            }`}
          >
            <r.Icon size={16} />
            {r.label}
          </button>
        );
      })}
    </div>
  );
}