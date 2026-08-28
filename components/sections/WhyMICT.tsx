import Link from "next/link";

const strengths = [
  {
    number: "01",
    title: "Business-First Technology",
    description:
      "We start with the business problem, understand the workflow and then design technology around the outcome—not the other way around.",
  },
  {
    number: "02",
    title: "Integrated Technical Expertise",
    description:
      "Software, data, infrastructure, automation and training work together under one technology partner.",
  },
  {
    number: "03",
    title: "Practical & Scalable Solutions",
    description:
      "We focus on solutions that are useful today while providing a foundation for future growth and expansion.",
  },
  {
    number: "04",
    title: "Data-Driven Decision Making",
    description:
      "We help organizations turn operational data into meaningful insights through analytics, dashboards and intelligent reporting.",
  },
  {
    number: "05",
    title: "Professional Capability Development",
    description:
      "Beyond implementation, we help organizations develop the people and technical skills needed to sustain their technology investments.",
  },
  {
    number: "06",
    title: "Long-Term Technology Partnership",
    description:
      "Our relationship doesn't have to end at deployment. We can support optimization, training, maintenance and continued digital transformation.",
  },
];

export default function WhyMICT() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background visual system */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300 sm:text-sm">
                Why MICT
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A technology partner focused on outcomes.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Organizations need more than technology vendors. They need
            partners who understand their objectives, solve practical problems
            and help their teams get lasting value from technology.
          </p>
        </div>

        {/* Strengths */}
        <div className="mt-14 grid gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, index) => (
            <article
              key={strength.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.055]"
            >
              {/* Large background number */}
              <span className="pointer-events-none absolute -right-1 -top-5 text-8xl font-black leading-none text-white/[0.035] transition-colors duration-300 group-hover:text-blue-400/[0.08]">
                {strength.number}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="text-sm font-extrabold text-blue-400">
                  {strength.number}
                </span>

                <span
                  className={`h-1 w-10 rounded-full ${
                    index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                  } transition-all duration-300 group-hover:w-16`}
                />
              </div>

              <h3 className="relative mt-7 text-xl font-bold text-white">
                {strength.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-slate-400">
                {strength.description}
              </p>

              <div className="mt-6 h-px w-full bg-white/10" />

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                  }`}
                />
                MICT Technology Solutions
              </div>
            </article>
          ))}
        </div>

        {/* Two pillars */}
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:grid-cols-2">
          {/* Technology Delivery */}
          <div className="relative overflow-hidden bg-blue-600 p-7 sm:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-100">
                  Technology Delivery
                </p>

                <span className="text-5xl font-black text-white/10">01</span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Build the right technology.
              </h3>

              <p className="mt-4 text-sm leading-6 text-blue-100">
                Software, portals, data platforms, dashboards, automation,
                infrastructure, mobile applications and IT consulting.
              </p>

              <Link
                href="/services"
                className="group mt-6 inline-flex items-center text-sm font-bold text-white hover:text-blue-100"
              >
                Explore IT Services

                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Professional Development */}
          <div className="relative overflow-hidden bg-green-600 p-7 sm:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-100">
                  Professional Development
                </p>

                <span className="text-5xl font-black text-white/10">02</span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Develop the people behind the technology.
              </h3>

              <p className="mt-4 text-sm leading-6 text-green-100">
                Practical technology training, corporate programs, professional
                development and e-learning designed around real skills.
              </p>

              <Link
                href="/training"
                className="group mt-6 inline-flex items-center text-sm font-bold text-white hover:text-green-100"
              >
                Explore Training

                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}