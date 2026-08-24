import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Portal Development",
    description:
      "Secure, scalable portals that connect customers, employees, partners and business operations.",
    href: "/services/portal-development",
    icon: "◈",
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Custom business and enterprise software designed around your processes, users and operational requirements.",
    href: "/services/software-development",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Data Engineering",
    description:
      "Reliable data pipelines, database solutions and analytics-ready infrastructure for data-driven organizations.",
    href: "/services/data-engineering",
    icon: "◆",
  },
  {
    number: "04",
    title: "Executive Dashboard Design",
    description:
      "Executive KPI dashboards that turn business data into clear performance insights and actionable decisions.",
    href: "/services/executive-dashboard-design",
    icon: "▦",
  },
  {
    number: "05",
    title: "Business & IT Automation",
    description:
      "Technology-driven automation that reduces repetitive work, improves workflows and increases operational efficiency.",
    href: "/services/business-it-automation",
    icon: "↗",
  },
  {
    number: "06",
    title: "Computer Engineering",
    description:
      "Computer systems, hardware and technical infrastructure solutions designed for reliable business operations.",
    href: "/services/computer-engineering",
    icon: "▣",
  },
  {
    number: "07",
    title: "Network Engineering",
    description:
      "Network planning, implementation, optimization and support for secure and dependable connectivity.",
    href: "/services/network-engineering",
    icon: "⌁",
  },
  {
    number: "08",
    title: "Mobile App Development",
    description:
      "Modern mobile applications designed for engaging customer and business experiences across Android and iOS.",
    href: "/services/mobile-app-development",
    icon: "▤",
  },
  {
    number: "09",
    title: "IT Consulting",
    description:
      "Technology strategy, architecture and advisory services that align IT investments with business objectives.",
    href: "/services/it-consulting",
    icon: "◎",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              IT Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
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
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-blue-950/20"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold tracking-widest text-slate-500">
                  {service.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-sm font-bold text-blue-400">
                Explore service
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile / Android / iOS note */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-green-400">
              Mobile App Development
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Native and cross-platform experiences for Android and iOS.
            </p>
          </div>

          <Link
            href="/services/mobile-app-development"
            className="text-sm font-bold text-green-400 hover:text-green-300"
          >
            View mobile solutions →
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">
              Have a technology challenge?
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Let's discuss the right solution for your organization.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
          >
            Talk to MICT
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}