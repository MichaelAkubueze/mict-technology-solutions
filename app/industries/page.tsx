import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Healthcare & Pharmaceuticals",
    description:
      "Digital platforms, data solutions and technology systems that can support healthcare providers, pharmaceutical organizations and health-related businesses.",
    solutions: [
      "Digital healthcare platforms",
      "Customer portals",
      "Product management systems",
      "Workflow automation",
      "Analytics & dashboards",
    ],
  },
  {
    number: "02",
    title: "Financial Services",
    description:
      "Technology solutions that support financial operations, customer experiences, reporting, automation and data-driven decision making.",
    solutions: [
      "Customer platforms",
      "Business automation",
      "Data engineering",
      "Executive dashboards",
      "System integration",
    ],
  },
  {
    number: "03",
    title: "Education & E-Learning",
    description:
      "Digital learning environments and technology solutions for training providers, educational institutions and organizations.",
    solutions: [
      "Learning platforms",
      "Student portals",
      "Course management",
      "Online assessments",
      "Learning analytics",
    ],
  },
  {
    number: "04",
    title: "Government & Public Sector",
    description:
      "Technology platforms that can help public-sector organizations digitize services, improve processes and make better use of information.",
    solutions: [
      "Citizen portals",
      "Digital services",
      "Workflow systems",
      "Data platforms",
      "Management dashboards",
    ],
  },
  {
    number: "05",
    title: "Manufacturing",
    description:
      "Technology solutions designed to improve operational visibility, process efficiency, data management and decision making.",
    solutions: [
      "Operations dashboards",
      "Automation",
      "Asset management",
      "Data analytics",
      "Enterprise applications",
    ],
  },
  {
    number: "06",
    title: "Logistics & Transportation",
    description:
      "Data-driven technology for organizations managing vehicles, assets, logistics operations and distributed teams.",
    solutions: [
      "Fleet management",
      "Asset tracking",
      "Operational dashboards",
      "Predictive analytics",
      "Workflow automation",
    ],
  },
  {
    number: "07",
    title: "Professional Services",
    description:
      "Digital systems and automation that help professional organizations manage customers, operations, information and performance.",
    solutions: [
      "Client portals",
      "Business applications",
      "Automation",
      "Reporting",
      "Data management",
    ],
  },
  {
    number: "08",
    title: "SMEs & Growing Businesses",
    description:
      "Practical technology solutions that help growing organizations establish strong digital foundations without unnecessary complexity.",
    solutions: [
      "Business websites",
      "Custom software",
      "Digital platforms",
      "Automation",
      "Technology consulting",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Industries
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology designed around industry needs.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Different industries face different technology challenges. MICT
              combines software, data, infrastructure, automation and training
              capabilities to address the specific requirements of
              organizations across multiple sectors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Industry
              </Link>

              <Link
                href="/solutions"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Sector Focus
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology capabilities across multiple sectors.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our technology capabilities can be adapted to different
              operational environments, business models and organizational
              objectives.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.number}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">
                    {industry.number}
                  </span>

                  <span className="h-1 w-9 rounded-full bg-green-500 transition-all group-hover:w-14" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-auto pt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Relevant capabilities
                  </p>

                  <ul className="space-y-2">
                    {industry.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex items-start gap-2 text-xs font-medium text-slate-600"
                      >
                        <span className="text-green-600">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare emphasis */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="bg-blue-700 p-8 sm:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
                  Featured Industry
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Healthcare & Pharmaceuticals
                </h2>

                <p className="mt-5 text-base leading-7 text-blue-100">
                  Healthcare organizations increasingly depend on secure
                  digital platforms, reliable information systems, integrated
                  workflows and data-driven decision making.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
                >
                  Discuss a Healthcare Solution
                </Link>
              </div>

              <div className="p-8 sm:p-12">
                <h3 className="text-xl font-bold text-slate-950">
                  Potential technology capabilities
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Digital customer platforms",
                    "Secure portals",
                    "Product & service platforms",
                    "Workflow automation",
                    "Data engineering",
                    "Executive dashboards",
                    "Mobile applications",
                    "System integration",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don't see your industry?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Our technology services can be adapted to different business
            models and organizational requirements.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Tell Us What You Need →
          </Link>
        </div>
      </section>
    </main>
  );
}