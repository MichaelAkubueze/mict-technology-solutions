import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Portal Development",
    description:
      "Design and development of secure, scalable web portals for customers, employees, partners, institutions and other stakeholders.",
    capabilities: [
      "Customer portals",
      "Corporate portals",
      "Self-service platforms",
      "Secure authentication",
      "Role-based access",
    ],
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Custom business applications designed around specific operational requirements, workflows and organizational processes.",
    capabilities: [
      "Business applications",
      "Workflow systems",
      "Enterprise applications",
      "API development",
      "System integration",
    ],
  },
  {
    number: "03",
    title: "Data Engineering",
    description:
      "Build reliable data foundations that enable organizations to collect, transform, manage and use data effectively.",
    capabilities: [
      "Data pipelines",
      "Database solutions",
      "Data integration",
      "ETL processes",
      "Analytics-ready platforms",
    ],
  },
  {
    number: "04",
    title: "Executive Dashboard Design",
    description:
      "Transform operational data into clear executive intelligence through interactive dashboards, KPIs and decision-support reporting.",
    capabilities: [
      "Executive dashboards",
      "KPI frameworks",
      "Management reporting",
      "Performance analytics",
      "Decision-support systems",
    ],
  },
  {
    number: "05",
    title: "Business & IT Automation",
    description:
      "Reduce repetitive work, improve process efficiency and connect systems through intelligent business and IT automation.",
    capabilities: [
      "Workflow automation",
      "Process optimization",
      "System integration",
      "Automated reporting",
      "Operational efficiency",
    ],
  },
  {
    number: "06",
    title: "Computer Engineering",
    description:
      "Professional hardware, computing infrastructure and technical support services for organizations that depend on reliable technology.",
    capabilities: [
      "Computer systems",
      "Hardware support",
      "System configuration",
      "Infrastructure support",
      "Technical maintenance",
    ],
  },
  {
    number: "07",
    title: "Network Engineering",
    description:
      "Design, implementation and support of reliable network infrastructure for secure and connected organizations.",
    capabilities: [
      "LAN/WAN infrastructure",
      "Network design",
      "Network security",
      "Wireless networks",
      "Infrastructure support",
    ],
  },
  {
    number: "08",
    title: "Mobile App Development",
    description:
      "Build responsive mobile applications that extend digital services to customers, employees and other users.",
    capabilities: [
      "Android applications",
      "iOS applications",
      "Mobile business solutions",
      "API integration",
      "Cross-platform experiences",
    ],
  },
  {
    number: "09",
    title: "IT Consulting",
    description:
      "Strategic technology guidance that helps organizations evaluate opportunities, solve technology challenges and plan sustainable digital transformation.",
    capabilities: [
      "Technology strategy",
      "Digital transformation",
      "IT assessments",
      "Architecture planning",
      "Technology advisory",
    ],
  },
];

const outcomes = [
  "Digital transformation",
  "Operational efficiency",
  "Better decision making",
  "Secure technology infrastructure",
  "Improved customer experience",
  "Scalable technology platforms",
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              IT Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology solutions built around your business.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              From digital platforms and custom software to data engineering,
              automation, infrastructure and IT consulting, MICT helps
              organizations turn technology requirements into practical,
              scalable solutions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              End-to-end technology capabilities
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              We combine software, data, infrastructure and technology
              expertise to address both individual technology requirements and
              larger digital transformation initiatives.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">
                    {service.number}
                  </span>

                  <span className="h-1 w-10 rounded-full bg-green-500 transition-all group-hover:w-16" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-1 text-green-600">✓</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-blue-700 transition-colors hover:text-blue-500"
                  >
                    Discuss this service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business outcomes */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-600">
                Business Outcomes
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology should improve the way your organization works.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Our approach focuses on the measurable value technology can
                create—not simply the technology itself.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 font-bold text-green-700">
                      ✓
                    </span>

                    <span className="text-sm font-bold text-slate-800">
                      {outcome}
                    </span>
                  </div>
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
            Have a technology project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Tell us what you are trying to achieve and let's explore the right
            technology approach for your organization.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}