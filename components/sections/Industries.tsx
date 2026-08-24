import Link from "next/link";

const industries = [
  {
    title: "Healthcare & Pharmaceuticals",
    description:
      "Digital platforms, healthcare workflows, analytics, customer portals and operational systems.",
    href: "/industries/healthcare-pharmaceuticals",
    tag: "Healthcare",
  },
  {
    title: "Financial Services",
    description:
      "Business applications, data solutions, automation, dashboards and technology infrastructure.",
    href: "/industries/financial-services",
    tag: "Finance",
  },
  {
    title: "Education & Training",
    description:
      "Learning platforms, e-learning systems, digital classrooms and technology skills development.",
    href: "/industries/education",
    tag: "Education",
  },
  {
    title: "Government & Public Sector",
    description:
      "Digital services, portals, information systems, workflow automation and data-driven reporting.",
    href: "/industries/public-sector",
    tag: "Public Sector",
  },
  {
    title: "Professional Services",
    description:
      "Technology platforms, business automation, analytics and digital tools for professional organizations.",
    href: "/industries/professional-services",
    tag: "Professional Services",
  },
  {
    title: "SMEs & Growing Businesses",
    description:
      "Practical technology solutions that help growing businesses improve efficiency, visibility and digital presence.",
    href: "/industries/smes",
    tag: "SME",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Industries
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology that adapts to your industry.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Every organization has different processes, customers, regulatory
            requirements and technology challenges. Our approach combines
            technical expertise with an understanding of the business context.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-widest text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                  {industry.tag}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-950">
                {industry.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {industry.description}
              </p>

              <div className="mt-6 text-sm font-bold text-green-700">
                Explore industry solutions
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}