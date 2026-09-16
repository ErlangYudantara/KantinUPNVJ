export default function LoginFooter() {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-[#4B5563]">
        Belum punya akun Kantin?{" "}
        <a href="/daftar" className="font-semibold text-[#14532D] hover:underline">
          Daftar di sini
        </a>
      </p>
      <p className="mt-2 text-xs text-[#9CA3AF]">
        Universitas Pembangunan Nasional Veteran Jakarta • Kampus Bela Negara
      </p>
    </div>
  );
}