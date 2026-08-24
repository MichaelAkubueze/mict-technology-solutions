import Link from "next/link";

const projects = [
  {
    category: "Business Intelligence",
    status: "Demonstrated Technology",
    title: "Executive Performance Intelligence",
    description:
      "A data-driven executive intelligence solution designed to transform business data into clear performance insights, KPI monitoring and management reporting.",
    capabilities: [
      "Executive dashboards",
      "Revenue analysis",
      "Profitability analysis",
      "Customer analytics",
      "Performance reporting",
    ],
  },
  {
    category: "Fleet Technology",
    status: "Demonstrated Technology",
    title: "Enterprise Fleet Intelligence",
    description:
      "A modular fleet technology platform combining vehicle operations, maintenance, fuel intelligence, operational data and predictive analytics.",
    capabilities: [
      "Vehicle management",
      "Fleet operations",
      "Maintenance management",
      "Fuel intelligence",
      "Predictive analytics",
    ],
  },
  {
    category: "Digital Platforms",
    status: "Technology Capability",
    title: "Business Portal & Application Solutions",
    description:
      "Web-based business platforms designed to connect users, information, workflows and organizational processes through a unified digital experience.",
    capabilities: [
      "Customer portals",
      "Business applications",
      "Workflow management",
      "Authentication",
      "System integration",
    ],
  },
  {
    category: "Healthcare Technology",
    status: "Solution Concept",
    title: "Healthcare Digital Platform",
    description:
      "A proposed digital healthcare platform concept demonstrating how customers, healthcare products, professional review workflows, payments, consultations, orders and delivery processes can be connected through one platform.",
    capabilities: [
      "Customer accounts",
      "Healthcare product catalog",
      "Prescription submission",
      "Professional review workflow",
      "Online payments",
      "Consultation requests",
      "Order tracking",
      "Delivery monitoring",
    ],
  },
  {
    category: "Digital Learning",
    status: "Solution Capability",
    title: "Digital Learning & Training Platforms",
    description:
      "Technology-enabled learning environments supporting course delivery, learner management, assessments, progress tracking and professional development.",
    capabilities: [
      "Learning management",
      "Course delivery",
      "Learner portals",
      "Assessments",
      "Progress tracking",
    ],
  },
  {
    category: "Business Automation",
    status: "Technology Capability",
    title: "Business Process Automation",
    description:
      "Digital workflows and automation solutions designed to reduce repetitive manual processes, improve operational consistency and provide better visibility.",
    capabilities: [
      "Workflow automation",
      "Digital processes",
      "Data integration",
      "Automated reporting",
      "Operational monitoring",
    ],
  },
];

const capabilityGroups = [
  {
    title: "Software & Platforms",
    items: [
      "Enterprise web applications",
      "Customer portals",
      "Business applications",
      "Mobile applications",
    ],
  },
  {
    title: "Data & Intelligence",
    items: [
      "Data engineering",
      "Business intelligence",
      "Executive dashboards",
      "Predictive analytics",
    ],
  },
  {
    title: "Automation & Integration",
    items: [
      "Business process automation",
      "System integration",
      "Workflow digitization",
      "Operational intelligence",
    ],
  },
  {
    title: "Infrastructure & Technology",
    items: [
      "Computer engineering",
      "Network engineering",
      "IT infrastructure",
      "Technology consulting",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Projects & Technology Experience
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology capabilities demonstrated through practical solutions.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore selected technology projects, solution concepts and
              capabilities demonstrating how MICT approaches real-world
              business and technology requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio introduction */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Our Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A portfolio built around real technology capabilities.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our portfolio combines demonstrated technology work, reusable
            solution capabilities and clearly identified solution concepts.
            This allows prospective clients to understand both what we have
            built and what we can build.
          </p>
        </div>
      </section>

      {/* Project cards */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Visual */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <div
                    className={`absolute inset-0 ${
                      index % 3 === 0
                        ? "bg-gradient-to-br from-blue-900 via-slate-950 to-green-900"
                        : index % 3 === 1
                          ? "bg-gradient-to-br from-green-900 via-slate-950 to-blue-900"
                          : "bg-gradient-to-br from-slate-800 via-blue-950 to-green-900"
                    }`}
                  />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-12 rounded-full bg-blue-500" />
                      <span className="h-1.5 w-8 rounded-full bg-green-500" />
                      <span className="h-1.5 w-5 rounded-full bg-red-500" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    {project.status}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key capabilities
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare concept */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-blue-100 shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-blue-700 p-8 sm:p-12">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                  Solution Concept
                </span>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Healthcare Digital Platform
                </h2>

                <p className="mt-5 text-base leading-7 text-blue-100">
                  A conceptual digital platform demonstrating how healthcare
                  commerce, professional services, secure customer interaction
                  and operational workflows can be integrated into one
                  technology ecosystem.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
                >
                  Discuss a Similar Solution
                </Link>
              </div>

              <div className="bg-slate-50 p-8 sm:p-12">
                <h3 className="text-xl font-bold text-slate-950">
                  Example platform capabilities
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Customer registration & accounts",
                    "Healthcare product catalog",
                    "Prescription submission",
                    "Professional review workflow",
                    "Pharmacist consultation requests",
                    "Secure online payments",
                    "Order management",
                    "Delivery tracking",
                    "Notifications",
                    "Administrative dashboards",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
                    >
                      <span className="mr-2 text-green-600">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-900">
              <strong>Portfolio classification:</strong> This healthcare
              platform is presented as a solution concept demonstrating MICT's
              understanding of the technology requirements. It is not
              presented as a completed client implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
              Technology Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The technology disciplines behind our projects.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Complex projects often require several technical disciplines to
              work together. MICT brings these capabilities together according
              to the needs of each engagement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-bold text-white">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-green-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Tell us about your business objective, technical requirement or
            digital transformation initiative.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}