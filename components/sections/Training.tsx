import Link from "next/link";

const trainingAreas = [
  {
    title: "Data Science & Analytics",
    description:
      "Build practical skills in data analysis, visualization, statistics, machine learning and business intelligence.",
    href: "/training/data-science",
  },
  {
    title: "Programming & Software Development",
    description:
      "Develop programming skills using modern languages, frameworks, development tools and software engineering practices.",
    href: "/training/programming",
  },
  {
    title: "Database Management",
    description:
      "Learn database design, SQL, administration, performance, security and modern data management technologies.",
    href: "/training/database-management",
  },
  {
    title: "Networking & Cybersecurity",
    description:
      "Develop practical knowledge of networking infrastructure, security principles, systems administration and defensive technologies.",
    href: "/training/networking-cybersecurity",
  },
  {
    title: "Web & Digital Technology",
    description:
      "Learn modern web technologies, digital platforms, hosting, cloud concepts and practical web development.",
    href: "/training/web-digital-technology",
  },
  {
    title: "Business Technology",
    description:
      "Equip professionals and organizations with technology skills that improve productivity, decision-making and operations.",
    href: "/training/business-technology",
  },
];

const learningFormats = [
  "Instructor-led training",
  "Corporate training",
  "Practical workshops",
  "Professional development",
  "Online learning",
  "Customized programs",
];

export default function Training() {
  return (
    <section className="relative overflow-hidden bg-green-50 py-20 sm:py-24">
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Training & E-Learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Develop the skills behind digital transformation.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Technology creates possibilities. People create results. Our
            practical training programs help individuals, teams and
            organizations develop the technical capabilities required to
            succeed in a digital economy.
          </p>
        </div>

        {/* Training areas */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingAreas.map((area, index) => (
            <Link
              key={area.title}
              href={area.href}
              className="group rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-sm font-extrabold text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-green-600 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {area.description}
              </p>

              <p className="mt-5 text-sm font-bold text-green-700">
                Explore training
              </p>
            </Link>
          ))}
        </div>

        {/* Learning formats + CTA */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-green-200 bg-white p-7 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
              Learning Formats
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Flexible learning designed around your needs.
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {learningFormats.map((format) => (
                <div
                  key={format}
                  className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                    ✓
                  </span>
                  {format}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 p-7 text-white sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-400">
              For Organizations
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Upskill your team with practical technology training.
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              We can structure training around your organization's technology
              stack, business processes, workforce capability gaps and
              strategic objectives.
            </p>

            <Link
              href="/training/corporate"
              className="mt-7 inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-500"
            >
              Explore Corporate Training
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-slate-950">
              Ready to develop your technology skills?
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Explore our courses and find a learning path that fits your
              goals.
            </p>
          </div>

          <Link
            href="/training"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
          >
            View All Training
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}