import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CodeXml,
  Database,
  Globe,
  ShieldCheck,
  Check,
} from "lucide-react";

const trainingAreas = [
  {
    title: "Data Science & Analytics",
    description:
      "Build practical skills in data analysis, visualization, statistics, machine learning and business intelligence.",
    href: "/training/data-science",
    icon: BarChart3,
  },
  {
    title: "Programming & Software Development",
    description:
      "Develop programming skills using modern languages, frameworks, development tools and software engineering practices.",
    href: "/training/programming",
    icon: CodeXml,
  },
  {
    title: "Database Management",
    description:
      "Learn database design, SQL, administration, performance, security and modern data management technologies.",
    href: "/training/database-management",
    icon: Database,
  },
  {
    title: "Networking & Cybersecurity",
    description:
      "Develop practical knowledge of networking infrastructure, security principles, systems administration and defensive technologies.",
    href: "/training/networking-cybersecurity",
    icon: ShieldCheck,
  },
  {
    title: "Web & Digital Technology",
    description:
      "Learn modern web technologies, digital platforms, hosting, cloud concepts and practical web development.",
    href: "/training/web-digital-technology",
    icon: Globe,
  },
  {
    title: "Business Technology",
    description:
      "Equip professionals and organizations with technology skills that improve productivity, decision-making and operations.",
    href: "/training/business-technology",
    icon: BriefcaseBusiness,
  },
];

const learningFormats = [
  "Instructor-led training",
  "Corporate training",
  "Practical workshops",
  "Professional development",
  "Online learning",
  "Customized programs",
];

export default function Training() {
  return (
    <section className="relative overflow-hidden bg-green-50 py-20 sm:py-24">
      {/* Technology background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
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
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700 sm:text-sm">
                Training & E-Learning
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Develop the skills behind digital transformation.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Technology creates possibilities. People create results. Our
            practical training programs help individuals, teams and
            organizations develop the technical capabilities required to
            succeed in a digital economy.
          </p>
        </div>

        {/* Training areas */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Link
                key={area.title}
                href={area.href}
                className="group relative overflow-hidden rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl hover:shadow-green-900/5"
              >
                {/* Background number */}
                <span className="pointer-events-none absolute -right-2 -top-5 text-8xl font-black leading-none text-green-950/[0.035] transition-colors duration-300 group-hover:text-green-600/[0.08]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-700 transition-all duration-300 group-hover:border-green-500 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-600/20">
                    <Icon size={22} strokeWidth={2} />
                  </span>

                  <span className="text-green-600 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight size={19} />
                  </span>
                </div>

                <div className="relative mt-5 text-xs font-bold tracking-widest text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="relative mt-3 text-xl font-bold text-slate-950">
                  {area.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {area.description}
                </p>

                <p className="relative mt-5 inline-flex items-center text-sm font-bold text-green-700">
                  Explore training

                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-green-600 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* Learning formats + CTA */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="relative overflow-hidden rounded-2xl border border-green-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Learning Formats
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Flexible learning designed around your needs.
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {learningFormats.map((format) => (
                  <div
                    key={format}
                    className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-green-200 hover:bg-green-100/70"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    {format}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-7 text-white shadow-xl sm:p-8">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-400">
                For Organizations
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Upskill your team with practical technology training.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                We can structure training around your organization&apos;s
                technology stack, business processes, workforce capability
                gaps and strategic objectives.
              </p>

              <Link
                href="/training"
                className="group mt-7 inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/30"
              >
                Explore Corporate Training

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold text-slate-950">
                Ready to develop your technology skills?
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Explore our courses and find a learning path that fits your
                goals.
              </p>
            </div>

            <Link
              href="/training"
              className="group inline-flex shrink-0 items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/20"
            >
              View All Training

              <ArrowRight
                size={17}
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
