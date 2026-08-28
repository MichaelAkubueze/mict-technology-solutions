import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Digital Business Platforms",
    description:
      "Customer portals, internal platforms and integrated digital systems that bring people, processes and information together.",
    tags: ["Portals", "Enterprise Systems", "Digital Platforms"],
  },
  {
    number: "02",
    title: "Data & Business Intelligence",
    description:
      "Data pipelines, analytics solutions and executive dashboards that turn operational data into better business decisions.",
    tags: ["Data Engineering", "Analytics", "Dashboards"],
  },
  {
    number: "03",
    title: "Business Process Automation",
    description:
      "Automated workflows and technology solutions that reduce manual processes, improve efficiency and increase operational visibility.",
    tags: ["Automation", "Workflows", "Integration"],
  },
  {
    number: "04",
    title: "Digital Healthcare Solutions",
    description:
      "Technology platforms designed to support healthcare operations, digital customer experiences, professional review workflows and service delivery.",
    tags: ["Healthcare", "Digital Pharmacy", "Patient Services"],
  },
  {
    number: "05",
    title: "Enterprise Technology Infrastructure",
    description:
      "Computer systems, networking and technology infrastructure that provide the foundation for dependable digital operations.",
    tags: ["Networks", "Infrastructure", "IT Support"],
  },
  {
    number: "06",
    title: "Technology Capability Development",
    description:
      "Structured training and professional development programs that help organizations build stronger internal technology capabilities.",
    tags: ["Training", "Upskilling", "E-Learning"],
  },
];

export default function Solutions() {
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
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[45%] h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
              Business Solutions
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            We don&apos;t just deliver technology. We solve business problems.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            MICT combines software engineering, data, infrastructure,
            automation, consulting and professional training to create
            technology solutions aligned with how organizations actually work.
          </p>
        </div>

        {/* Solution cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
            >
              {/* Large background number */}
              <span className="pointer-events-none absolute -right-2 -top-4 text-8xl font-black leading-none text-slate-950/[0.035] transition-colors duration-300 group-hover:text-blue-600/[0.08]">
                {solution.number}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="text-sm font-extrabold text-blue-700">
                  {solution.number}
                </span>

                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-10" />
                </span>
              </div>

              <h3 className="relative mt-7 text-xl font-bold text-slate-950">
                {solution.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-slate-600">
                {solution.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {solution.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      index === 0
                        ? "bg-blue-50 text-blue-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Strategic healthcare positioning */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-900/10">
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                `,
                backgroundSize: "44px 44px",
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300 sm:text-sm">
                  Digital Healthcare
                </p>
              </div>

              <h3 className="mt-5 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                Building secure digital platforms for modern healthcare
                experiences.
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Our technology capabilities can support healthcare
                organizations with customer-facing platforms, product
                catalogues, prescription workflows, professional review,
                secure payments, order management, delivery visibility,
                reporting and operational dashboards.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/solutions"
                  className="group inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/30"
                >
                  Healthcare Solutions

                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  Discuss a Project
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-bold text-slate-400">
                Example digital capabilities
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Customer & patient portals",
                  "Product and service catalogues",
                  "Prescription submission workflows",
                  "Professional review workflows",
                  "Secure online transactions",
                  "Order & delivery tracking",
                  "Executive reporting dashboards",
                ].map((item) => (
                  <div
                    key={item}
                    className="group/item flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-green-400/20 hover:bg-green-500/5"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                      ✓
                    </span>

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="group inline-flex items-center rounded-full border border-blue-700 px-6 py-3 text-sm font-bold text-blue-700 transition-all hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-900/20"
          >
            Explore Business Solutions

            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}