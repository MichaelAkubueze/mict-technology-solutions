import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  ServerCog,
} from "lucide-react";

const projects = [
  {
    type: "Business Intelligence",
    title: "Executive Performance Intelligence",
    description:
      "Data-driven executive dashboards and analytical reporting designed to give leadership teams clearer visibility into revenue, profitability, customers, operations and business performance.",
    tags: ["Data Analytics", "KPI Dashboards", "Executive Reporting"],
    href: "/projects/executive-performance-intelligence",
    icon: BarChart3,
    accent: "blue",
  },
  {
    type: "Fleet Technology",
    title: "Enterprise Fleet Intelligence",
    description:
      "A modular technology platform combining fleet operations, vehicle management, maintenance, fuel intelligence and predictive analytics.",
    tags: ["Fleet Management", "Predictive Analytics", "Enterprise Systems"],
    href: "/projects/fleet-intelligence",
    icon: ServerCog,
    accent: "green",
  },
  {
    type: "Digital Platforms",
    title: "Business Portal & Application Solutions",
    description:
      "Secure web-based platforms designed to connect users, business processes, information and operational workflows through a unified digital experience.",
    tags: ["Portal Development", "Web Applications", "Automation"],
    href: "/projects/business-platforms",
    icon: Globe2,
    accent: "blue",
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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background visual system */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-green-500/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0f172a 1px, transparent 1px),
              linear-gradient(90deg, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
                Projects & Experience
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Technology experience that demonstrates what we can build.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Explore selected examples of our technology capabilities across
              data, enterprise applications, analytics and digital platforms.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            View all projects

            <ArrowRight
              size={17}
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isGreen = project.accent === "green";

            return (
              <Link
                key={project.title}
                href={project.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/5"
              >
                {/* Project visual */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <div
                    className={`absolute inset-0 ${
                      isGreen
                        ? "bg-gradient-to-br from-green-900/80 via-slate-950 to-blue-950/70"
                        : "bg-gradient-to-br from-blue-900/80 via-slate-950 to-green-950/60"
                    }`}
                  />

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                      `,
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Glow */}
                  <div
                    className={`absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${
                      isGreen ? "bg-green-500/30" : "bg-blue-500/30"
                    }`}
                  />

                  {/* Project number */}
                  <span className="absolute right-5 top-5 text-6xl font-black leading-none text-white/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className={`absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur ${
                      isGreen ? "shadow-green-500/20" : "shadow-blue-500/20"
                    }`}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  {/* Type */}
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                    {project.type}
                  </div>

                  {/* Visual signal */}
                  <div className="absolute bottom-7 right-6 flex items-end gap-1">
                    <span className="h-3 w-1.5 rounded-full bg-blue-400" />
                    <span className="h-6 w-1.5 rounded-full bg-blue-400" />
                    <span className="h-9 w-1.5 rounded-full bg-green-400" />
                    <span className="h-5 w-1.5 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Project content */}
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

                  <div className="mt-6 flex items-center text-sm font-bold text-blue-700">
                    View project

                    <ArrowRight
                      size={17}
                      className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* Capability panel */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-slate-950 p-7 shadow-2xl sm:p-10 lg:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
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
                className="group mt-7 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-900/30"
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-colors hover:border-green-500/30 hover:bg-white/[0.08]"
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