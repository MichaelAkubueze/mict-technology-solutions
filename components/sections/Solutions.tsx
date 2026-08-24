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
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Business Solutions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            We don't just deliver technology. We solve business problems.
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
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-blue-700">
                  {solution.number}
                </span>

                <span className="h-2 w-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 transition-all group-hover:w-14" />
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-950">
                {solution.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {solution.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Strategic healthcare positioning */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-slate-950">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
                Digital Healthcare
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
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
                  href="/solutions/healthcare"
                  className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-500"
                >
                  Healthcare Solutions
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white"
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
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
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
            className="inline-flex items-center rounded-full border border-blue-700 px-6 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
          >
            Explore Business Solutions
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}