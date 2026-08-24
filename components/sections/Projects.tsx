import Link from "next/link";

const projects = [
  {
    type: "Business Intelligence",
    title: "Executive Performance Intelligence",
    description:
      "Data-driven executive dashboards and analytical reporting designed to give leadership teams clearer visibility into revenue, profitability, customers, operations and business performance.",
    tags: ["Data Analytics", "KPI Dashboards", "Executive Reporting"],
    href: "/projects/executive-performance-intelligence",
  },
  {
    type: "Fleet Technology",
    title: "Enterprise Fleet Intelligence",
    description:
      "A modular technology platform combining fleet operations, vehicle management, maintenance, fuel intelligence and predictive analytics.",
    tags: ["Fleet Management", "Predictive Analytics", "Enterprise Systems"],
    href: "/projects/fleet-intelligence",
  },
  {
    type: "Digital Platforms",
    title: "Business Portal & Application Solutions",
    description:
      "Secure web-based platforms designed to connect users, business processes, information and operational workflows through a unified digital experience.",
    tags: ["Portal Development", "Web Applications", "Automation"],
    href: "/projects/business-platforms",
  },
];

const capabilities = [
  "Enterprise web applications",
  "Customer and employee portals",
  "Data engineering and analytics",
  "Executive dashboards",
  "Business process automation",
  "Mobile application development",
];

export default function Projects() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Projects & Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Technology experience that demonstrates what we can build.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Explore selected examples of our technology capabilities across
              data, enterprise applications, analytics and digital platforms.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            View all projects
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              {/* Visual placeholder */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-950 to-green-900/60" />

                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                  {project.type}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-12 rounded-full bg-blue-500" />
                    <span className="h-1.5 w-8 rounded-full bg-green-500" />
                    <span className="h-1.5 w-5 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm font-bold text-blue-700">
                  View project
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Capability panel */}
        <div className="mt-10 grid gap-8 rounded-3xl bg-slate-950 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
              What We Can Deliver
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              From concept to production-ready technology.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Our project approach brings business analysis, software
              engineering, data, infrastructure and user experience together
              to create practical technology solutions.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-500"
            >
              Start a Project
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                  ✓
                </span>

                <span className="text-sm font-medium text-slate-300">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bid-safe note */}
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-6 text-amber-900">
            <strong>Project presentation:</strong> New solution concepts and
            proposals are presented separately from completed project
            experience. This ensures prospective clients can clearly
            distinguish demonstrated capabilities from proposed solutions.
          </p>
        </div>
      </div>
    </section>
  );
}