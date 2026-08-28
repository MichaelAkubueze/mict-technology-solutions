import Link from "next/link";

const capabilities = [
  "Data pipeline development",
  "Database integration",
  "ETL and ELT workflows",
  "Data transformation",
  "Data quality management",
  "Analytics-ready data platforms",
  "Data warehouse solutions",
  "Business intelligence integration",
];

const solutions = [
  {
    title: "Data Pipelines",
    description:
      "Reliable pipelines that collect, transform and move data between operational systems, databases and analytical environments.",
  },
  {
    title: "Database Solutions",
    description:
      "Structured database solutions designed to support reliable data storage, retrieval, integration and organizational reporting.",
  },
  {
    title: "Analytics Infrastructure",
    description:
      "Data foundations that prepare organizations for business intelligence, dashboards, reporting and predictive analytics.",
  },
];

export default function DataEngineeringPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              IT Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Data Engineering
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Build reliable data foundations that connect systems, organize
              information and prepare your business for analytics and
              intelligent decision-making.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Data Project
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Data Infrastructure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Turn scattered information into a reliable data foundation.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Modern organizations generate information across applications,
                databases, spreadsheets, operational systems and digital
                platforms. Without the right data architecture, valuable
                information can become difficult to access, reconcile and
                analyze.
              </p>

              <p>
                MICT develops data engineering solutions that help organizations
                collect, integrate, transform and organize information so it
                can support operational reporting, business intelligence and
                advanced analytics.
              </p>

              <p>
                Our approach considers data sources, business rules, database
                structures, transformation processes, data quality and the
                analytical requirements of the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Engineering the data layer behind better decisions.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We provide the technical capabilities required to establish
              dependable data flows and analytics-ready information.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </span>

                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {capability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Data Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Data technology designed for business use.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Business Value
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Better data creates better technology decisions.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                A dependable data foundation makes it easier for organizations
                to understand performance, monitor operations and build
                analytical solutions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Reliable Information",
                  text: "Improve consistency and accessibility of business information.",
                },
                {
                  title: "Better Reporting",
                  text: "Create stronger foundations for management reporting and dashboards.",
                },
                {
                  title: "Operational Visibility",
                  text: "Connect information from different systems to improve organizational visibility.",
                },
                {
                  title: "Analytics Readiness",
                  text: "Prepare structured information for advanced analytics and predictive models.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-green-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build the data foundation before the intelligence layer.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Assess",
                  text: "Understand existing data sources, systems, processes and business requirements.",
                },
                {
                  number: "02",
                  title: "Architect",
                  text: "Define appropriate data structures, integration patterns and processing workflows.",
                },
                {
                  number: "03",
                  title: "Engineer",
                  text: "Develop pipelines, transformations, integrations and analytics-ready data structures.",
                },
                {
                  number: "04",
                  title: "Improve",
                  text: "Monitor data quality and continuously improve performance, reliability and usability.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-xs font-bold tracking-widest text-green-400">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need a stronger data foundation?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Tell us about your data sources, reporting challenges or analytics
            objectives and let&apos;s discuss the right approach.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}