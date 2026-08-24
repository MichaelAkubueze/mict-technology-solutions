interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
            dark ? "text-green-400" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}