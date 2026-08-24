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
      <span
        className="flex h-10 w-10 items-center justify-center rounded-lg
                   bg-red-600 text-lg font-extrabold text-white
                   shadow-sm transition-transform duration-200
                   group-hover:scale-105"
      >
        M
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-extrabold tracking-tight text-slate-900">
            MICT
          </span>

          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">
            Technology Solutions
          </span>
        </span>
      )}
    </Link>
  );
}