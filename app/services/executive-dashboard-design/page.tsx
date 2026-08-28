import Link from "next/link";

const capabilities = [
  "Executive KPI dashboards",
  "Management reporting",
  "Business performance monitoring",
  "Financial dashboards",
  "Sales and revenue analytics",
  "Operational dashboards",
  "Interactive data visualization",
  "Automated reporting",
];

const dashboardSolutions = [
  {
    title: "Executive Dashboards",
    description:
      "High-level dashboards that give executives and management a clear view of organizational performance, priorities and key business indicators.",
  },
  {
    title: "Operational Dashboards",
    description:
      "Real-time or regularly refreshed dashboards that help teams monitor operational activity, identify issues and respond quickly.",
  },
  {
    title: "Performance Analytics",
    description:
      "Structured performance reporting that connects actual results with targets, trends, benchmarks and business objectives.",
  },
];

const benefits = [
  {
    title: "Clearer Decisions",
    text: "Transform complex business information into concise insights that support faster and better-informed decisions.",
  },
  {
    title: "Performance Visibility",
    text: "Monitor important KPIs, trends and operational indicators from a centralized reporting environment.",
  },
  {
    title: "Target Monitoring",
    text: "Compare actual performance against targets and identify areas requiring management attention.",
  },
  {
    title: "Automated Reporting",
    text: "Reduce manual reporting effort by creating structured dashboards and repeatable reporting processes.",
  },
];

export default function ExecutiveDashboardDesignPage() {
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
              Executive Dashboard Design
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Turn business data into clear, actionable performance insights
              through professionally designed executive dashboards,
              management reports and analytical views.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Dashboard Project
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
                Business Intelligence
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Make business performance easier to understand.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Organizations generate large amounts of operational and
                financial information. The challenge is turning that
                information into a format that decision-makers can understand
                quickly.
              </p>

              <p>
                MICT designs executive and management dashboards that organize
                important business indicators into clear visual experiences.
                Dashboards can combine data from databases, spreadsheets,
                business applications and other operational systems.
              </p>

              <p>
                Our approach focuses on the decisions the dashboard needs to
                support, the KPIs that matter and the business context behind
                the numbers.
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
              Dashboards designed around meaningful business metrics.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We combine data analysis, visualization and business
              understanding to create dashboards that communicate performance
              clearly.
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

      {/* Dashboard Solutions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Dashboard Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The right view for every level of the organization.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dashboardSolutions.map((solution) => (
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
                From raw numbers to actionable business intelligence.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                A well-designed dashboard helps management focus on what
                matters, identify emerging issues and understand whether
                business performance is moving in the right direction.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-green-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {benefit.text}
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
                Start with the decision, then design the dashboard.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Identify the business objectives, users, decisions and performance questions the dashboard must support.",
                },
                {
                  number: "02",
                  title: "Define",
                  text: "Establish the KPIs, calculations, targets, data sources and business rules required for meaningful reporting.",
                },
                {
                  number: "03",
                  title: "Design",
                  text: "Create a clear visual structure that presents important information in an intuitive and decision-focused way.",
                },
                {
                  number: "04",
                  title: "Improve",
                  text: "Refine the dashboard based on user feedback, changing business requirements and emerging analytical needs.",
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
      <section className="bg-blue-700 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need a dashboard that tells the real business story?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Tell us about your data, KPIs and reporting requirements and let&apos;s
            explore how MICT can turn your information into useful business
            intelligence.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}