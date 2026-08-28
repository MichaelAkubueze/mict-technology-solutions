import Link from "next/link";

const pillars = [
  {
    number: "01",
    label: "IT Services & Solutions",
    title: "Build, transform and optimize your technology.",
    description:
      "From software and portal development to data engineering, automation, infrastructure and IT consulting, we design technology around real business requirements.",
    href: "/services",
    theme: "blue",
    items: [
      "Software & Portal Development",
      "Data Engineering & Analytics",
      "Executive Dashboard Design",
      "Business & IT Automation",
      "Network & Computer Engineering",
      "Mobile App Development",
      "IT Consulting",
    ],
  },
  {
    number: "02",
    label: "Training & E-Learning",
    title: "Build the skills that power the future.",
    description:
      "Practical technology training designed to help individuals, professionals and organizations develop relevant digital, analytical and technical capabilities.",
    href: "/training",
    theme: "green",
    items: [
      "Data Science & Analytics",
      "Python & Programming",
      "Database Management",
      "Networking & Cybersecurity",
      "Web & Software Development",
      "Business Technology",
      "Professional IT Skills",
    ],
  },
];

export default function BusinessPillars() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background technology pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#0f172a 1px, transparent 1px),
              linear-gradient(90deg, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
              What MICT Does
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Two pillars. One technology partner.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            MICT combines technology delivery with professional development,
            helping organizations solve today&apos;s technology challenges while
            developing the skills needed for tomorrow.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => {
            const isBlue = pillar.theme === "blue";

            return (
              <article
                key={pillar.number}
                className={`group relative overflow-hidden rounded-[2rem] border p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-9 ${
                  isBlue
                    ? "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50/60 hover:border-blue-200 hover:shadow-blue-900/10"
                    : "border-green-100 bg-gradient-to-br from-green-50 via-white to-green-50/60 hover:border-green-200 hover:shadow-green-900/10"
                }`}
              >
                {/* Decorative glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl ${
                    isBlue ? "bg-blue-400/15" : "bg-green-400/15"
                  }`}
                />

                {/* Large background number */}
                <div
                  className={`pointer-events-none absolute -right-3 top-0 select-none text-[10rem] font-black leading-none opacity-[0.045] ${
                    isBlue ? "text-blue-700" : "text-green-700"
                  }`}
                >
                  {pillar.number}
                </div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg ${
                        isBlue
                          ? "bg-blue-600 shadow-blue-600/20"
                          : "bg-green-600 shadow-green-600/20"
                      }`}
                    >
                      {pillar.number}
                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-wide sm:text-xs ${
                        isBlue
                          ? "bg-blue-700 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {isBlue
                        ? "Technology Delivery"
                        : "Professional Development"}
                    </span>
                  </div>

                  {/* Label */}
                  <p
                    className={`mt-8 text-sm font-bold uppercase tracking-[0.15em] ${
                      isBlue ? "text-blue-700" : "text-green-700"
                    }`}
                  >
                    {pillar.label}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    {pillar.description}
                  </p>

                  {/* Capability list */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {pillar.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors group-hover:border-slate-200"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${
                            isBlue ? "bg-blue-600" : "bg-green-600"
                          }`}
                        >
                          ✓
                        </span>

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 border-t border-slate-200/70 pt-6">
                    <Link
                      href={pillar.href}
                      className={`group/link inline-flex items-center text-sm font-bold ${
                        isBlue
                          ? "text-blue-700 hover:text-blue-900"
                          : "text-green-700 hover:text-green-900"
                      }`}
                    >
                      {isBlue
                        ? "Explore IT Services"
                        : "Explore Training & E-Learning"}

                      <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom connector */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-blue-200 sm:w-20" />

          <span className="h-2 w-2 rounded-full bg-blue-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Technology + Skills
          </span>

          <span className="h-2 w-2 rounded-full bg-green-500" />

          <span className="h-px w-12 bg-green-200 sm:w-20" />
        </div>
      </div>
    </section>
  );
}