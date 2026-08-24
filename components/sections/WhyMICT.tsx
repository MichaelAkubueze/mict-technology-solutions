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
    <section className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
              Why MICT
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
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
        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength) => (
            <div
              key={strength.number}
              className="border-t border-white/10 pt-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-blue-400">
                  {strength.number}
                </span>

                <span className="h-1 w-10 rounded-full bg-green-500" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {strength.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two pillars */}
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-2">
          <div className="bg-blue-600 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-100">
              Technology Delivery
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Build the right technology.
            </h3>

            <p className="mt-4 text-sm leading-6 text-blue-100">
              Software, portals, data platforms, dashboards, automation,
              infrastructure, mobile applications and IT consulting.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-flex text-sm font-bold text-white hover:text-blue-100"
            >
              Explore IT Services →
            </Link>
          </div>

          <div className="bg-green-600 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-100">
              Professional Development
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Develop the people behind the technology.
            </h3>

            <p className="mt-4 text-sm leading-6 text-green-100">
              Practical technology training, corporate programs, professional
              development and e-learning designed around real skills.
            </p>

            <Link
              href="/training"
              className="mt-6 inline-flex text-sm font-bold text-white hover:text-green-100"
            >
              Explore Training →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}