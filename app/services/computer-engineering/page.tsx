import Link from "next/link";

const capabilities = [
  "Computer hardware assessment",
  "Desktop and workstation solutions",
  "Hardware installation and configuration",
  "Operating system installation",
  "System troubleshooting",
  "Hardware maintenance and upgrades",
  "Peripheral and device configuration",
  "Technical support",
];

const solutions = [
  {
    title: "Business Computer Systems",
    description:
      "Computer systems configured around the performance, software and operational requirements of your organization.",
  },
  {
    title: "Hardware Support",
    description:
      "Technical assistance for diagnosing, maintaining and resolving computer hardware and peripheral issues.",
  },
  {
    title: "System Upgrades",
    description:
      "Hardware and system upgrades that improve performance, reliability and the useful life of existing equipment.",
  },
];

const approach = [
  {
    number: "01",
    title: "Assess",
    text: "Understand the organization's equipment, users, applications and technical requirements.",
  },
  {
    number: "02",
    title: "Recommend",
    text: "Identify appropriate hardware, configurations and technical solutions based on operational needs.",
  },
  {
    number: "03",
    title: "Implement",
    text: "Configure, install and integrate computer systems and supporting equipment.",
  },
  {
    number: "04",
    title: "Support",
    text: "Provide troubleshooting, maintenance and technical guidance to keep systems reliable.",
  },
];

export default function ComputerEngineeringPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              IT Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Computer Engineering
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Reliable computer systems, hardware support and technical
              infrastructure solutions designed to keep people and businesses
              productive.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Requirement
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Computer Systems
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology infrastructure that keeps your organization moving.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Computers remain an essential part of modern business
                operations. From employee workstations to specialized systems,
                organizations need dependable equipment that supports their
                applications and workflows.
              </p>

              <p>
                MICT provides computer engineering and technical support
                services covering hardware assessment, installation,
                configuration, troubleshooting, maintenance and system
                upgrades.
              </p>

              <p>
                Our approach focuses on selecting and maintaining technology
                that is appropriate for the organization's users, workload,
                software environment and operational objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Practical computer engineering and technical support.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We provide technical capabilities covering the lifecycle of
              business computer systems and related equipment.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </span>

                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {capability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Computer Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Computer technology designed for real business needs.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Business Value
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Reliable computer systems support productive teams.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Well-configured and properly maintained computer systems help
                employees work efficiently while reducing avoidable technical
                interruptions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Improved Productivity",
                  text: "Provide users with systems capable of supporting their daily workloads.",
                },
                {
                  title: "Reduced Downtime",
                  text: "Identify and resolve technical problems before they significantly disrupt operations.",
                },
                {
                  title: "Longer Equipment Life",
                  text: "Maintain and upgrade existing systems where practical.",
                },
                {
                  title: "Technical Reliability",
                  text: "Establish consistent configurations and support practices across business systems.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-green-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Practical technical support from assessment to implementation.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {approach.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-xs font-bold tracking-widest text-green-400">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
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
            Need computer systems or technical support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Tell us about your organization's computer systems, hardware
            requirements or technical challenges and let's discuss the right
            solution.
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