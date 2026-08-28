import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="MICT Technology Solutions - Home"
      className="group inline-flex items-center gap-3"
    >
      <Image
        src="/images/branding/mict-technology-solutions-logo.png"
        alt="MICT Technology Solutions"
        width={compact ? 48 : 64}
        height={compact ? 48 : 64}
        priority
        className={`object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
          compact ? "h-10 w-10" : "h-14 w-14"
        }`}
      />

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            MICT
          </span>

          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
            Technology Solutions
          </span>
        </span>
      )}
    </Link>
  );
}