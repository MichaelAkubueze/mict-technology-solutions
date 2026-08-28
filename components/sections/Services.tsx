import Link from "next/link";
import {
  BarChart3,
  Code2,
  Database,
  Globe2,
  Lightbulb,
  MonitorCog,
  Network,
  Smartphone,
  Workflow,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Portal Development",
    description:
      "Secure, scalable portals that connect customers, employees, partners and business operations.",
    href: "/services/portal-development",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Custom business and enterprise software designed around your processes, users and operational requirements.",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    number: "03",
    title: "Data Engineering",
    description:
      "Reliable data pipelines, database solutions and analytics-ready infrastructure for data-driven organizations.",
    href: "/services/data-engineering",
    icon: Database,
  },
  {
    number: "04",
    title: "Executive Dashboard Design",
    description:
      "Executive KPI dashboards that turn business data into clear performance insights and actionable decisions.",
    href: "/services/executive-dashboard-design",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Business & IT Automation",
    description:
      "Technology-driven automation that reduces repetitive work, improves workflows and increases operational efficiency.",
    href: "/services/business-it-automation",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Computer Engineering",
    description:
      "Computer systems, hardware and technical infrastructure solutions designed for reliable business operations.",
    href: "/services/computer-engineering",
    icon: MonitorCog,
  },
  {
    number: "07",
    title: "Network Engineering",
    description:
      "Network planning, implementation, optimization and support for secure and dependable connectivity.",
    href: "/services/network-engineering",
    icon: Network,
  },
  {
    number: "08",
    title: "Mobile App Development",
    description:
      "Modern mobile applications designed for engaging customer and business experiences across Android and iOS.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    number: "09",
    title: "IT Consulting",
    description:
      "Technology strategy, architecture and advisory services that align IT investments with business objectives.",
    href: "/services/it-consulting",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Technology background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-[-12rem] bottom-20 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300 sm:text-sm">
                IT Services
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technology engineered around your business.
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              From software and data engineering to infrastructure, automation
              and consulting, MICT provides the technical capabilities needed
              to design, implement and improve modern business systems.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-blue-950/30"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-black text-white/[0.035] transition-colors duration-300 group-hover:text-blue-400/[0.08]">
                  {service.number}
                </span>

                <div className="relative flex items-start justify-between">
                  <span className="text-xs font-bold tracking-widest text-slate-500">
                    {service.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                <div className="relative mt-6 flex items-center text-sm font-bold text-blue-400">
                  Explore service

                  <ArrowRight
                    size={17}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* Mobile / Android / iOS note */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-green-500/20 bg-green-500/5 p-5 backdrop-blur-sm sm:flex sm:items-center sm:justify-between">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold text-green-400">
              Mobile App Development
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Native and cross-platform experiences for Android and iOS.
            </p>
          </div>

          <Link
            href="/services/mobile-app-development"
            className="relative mt-4 inline-flex items-center text-sm font-bold text-green-400 hover:text-green-300 sm:mt-0"
          >
            View mobile solutions

            <ArrowRight
              size={17}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">
              Have a technology challenge?
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Let&apos;s discuss the right solution for your organization.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-900/30"
          >
            Talk to MICT

            <ArrowRight
              size={17}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}