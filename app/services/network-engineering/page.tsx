import Link from "next/link";

const capabilities = [
  "Network planning and design",
  "LAN and WAN implementation",
  "Network configuration",
  "Router and switch configuration",
  "Wireless network solutions",
  "Network troubleshooting",
  "Network performance optimization",
  "Network security support",
];

const solutions = [
  {
    title: "Business Networks",
    description:
      "Reliable wired and wireless networks designed to connect employees, systems, devices and business applications.",
  },
  {
    title: "Network Infrastructure",
    description:
      "Network infrastructure planning and implementation designed around organizational requirements, users and operational environments.",
  },
  {
    title: "Network Support",
    description:
      "Technical troubleshooting, optimization and maintenance to help organizations maintain dependable connectivity.",
  },
];

const approach = [
  {
    number: "01",
    title: "Assess",
    text: "Understand existing infrastructure, users, applications, connectivity requirements and business objectives.",
  },
  {
    number: "02",
    title: "Design",
    text: "Develop an appropriate network architecture based on performance, scalability, security and operational requirements.",
  },
  {
    number: "03",
    title: "Implement",
    text: "Configure and deploy network infrastructure, connectivity equipment and supporting technologies.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Monitor performance, troubleshoot issues and improve the network as organizational requirements evolve.",
  },
];

export default function NetworkEngineeringPage() {
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
              Network Engineering
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Secure, dependable and scalable network infrastructure that keeps
              people, systems and business operations connected.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Network Requirement
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
                Network Infrastructure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Build the connectivity your organization depends on.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Modern organizations depend on reliable networks to connect
                employees, computers, servers, applications, cloud services and
                other digital systems.
              </p>

              <p>
                MICT provides network engineering services covering network
                planning, implementation, configuration, troubleshooting,
                optimization and technical support.
              </p>

              <p>
                Our approach considers users, applications, infrastructure,
                security, performance and future growth when designing network
                solutions.
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
              Network engineering for reliable digital operations.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We provide the technical capabilities required to design,
              implement and support dependable organizational networks.
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
              Network Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Connectivity designed around your organization.
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
                Reliable connectivity supports reliable business.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                A well-designed network gives employees dependable access to
                the systems, applications and information required for their
                work.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Reliable Connectivity",
                  text: "Provide dependable access to business systems and digital resources.",
                },
                {
                  title: "Better Performance",
                  text: "Design infrastructure around the performance requirements of users and applications.",
                },
                {
                  title: "Scalability",
                  text: "Build network solutions that can adapt as the organization grows.",
                },
                {
                  title: "Improved Security",
                  text: "Support appropriate network security practices and infrastructure controls.",
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
                Engineer the network around business requirements.
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
            Need a reliable business network?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Tell us about your connectivity requirements, existing
            infrastructure or network challenges and let&apos;s discuss the right
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