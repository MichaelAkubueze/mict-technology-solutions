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
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            What MICT Does
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Two pillars. One technology partner.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            MICT combines technology delivery with professional development,
            helping organizations solve today's technology challenges while
            developing the skills needed for tomorrow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => {
            const isBlue = pillar.theme === "blue";

            return (
              <article
                key={pillar.number}
                className={`group relative overflow-hidden rounded-3xl border p-7 sm:p-9 ${
                  isBlue
                    ? "border-blue-100 bg-blue-50"
                    : "border-green-100 bg-green-50"
                }`}
              >
                <div
                  className={`absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl ${
                    isBlue ? "bg-blue-300/20" : "bg-green-300/20"
                  }`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-sm font-extrabold ${
                        isBlue ? "text-blue-700" : "text-green-700"
                      }`}
                    >
                      {pillar.number}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        isBlue
                          ? "bg-blue-700 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {isBlue ? "Technology Delivery" : "Professional Development"}
                    </span>
                  </div>

                  <p
                    className={`mt-8 text-sm font-bold uppercase tracking-[0.15em] ${
                      isBlue ? "text-blue-700" : "text-green-700"
                    }`}
                  >
                    {pillar.label}
                  </p>

                  <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    {pillar.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {pillar.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700"
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                            isBlue ? "bg-blue-600" : "bg-green-600"
                          }`}
                        >
                          ✓
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={pillar.href}
                    className={`mt-8 inline-flex items-center text-sm font-bold ${
                      isBlue
                        ? "text-blue-700 hover:text-blue-900"
                        : "text-green-700 hover:text-green-900"
                    }`}
                  >
                    Explore {isBlue ? "IT Services" : "Training & E-Learning"}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}