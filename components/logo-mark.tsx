import logo from "@/app/logo.webp";

export function LogoMark() {
  return (
    <span
      aria-label="나만바"
      className="block size-9 rounded-xl bg-[#A0D4F8] bg-contain bg-center bg-no-repeat shadow-sm"
      style={{ backgroundImage: `url(${logo.src})` }}
    />
  );
}
