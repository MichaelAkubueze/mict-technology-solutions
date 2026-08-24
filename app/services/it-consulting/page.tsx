import Link from "next/link";

const capabilities = [
  "IT strategy and planning",
  "Technology architecture",
  "Digital transformation",
  "IT infrastructure advisory",
  "Software and systems assessment",
  "Technology project advisory",
  "IT process improvement",
  "Technology risk assessment",
];

const solutions = [
  {
    title: "Technology Strategy",
    description:
      "Practical technology strategies that align IT investments, systems and capabilities with organizational objectives.",
  },
  {
    title: "IT Advisory",
    description:
      "Independent technology guidance to help organizations evaluate systems, identify opportunities and make informed IT decisions.",
  },
  {
    title: "Digital Transformation",
    description:
      "Technology transformation initiatives that improve processes, information management, productivity and digital service delivery.",
  },
];

const approach = [
  {
    number: "01",
    title: "Assess",
    text: "Understand the organization's current technology environment, challenges and objectives.",
  },
  {
    number: "02",
    title: "Analyze",
    text: "Evaluate systems, processes, infrastructure and opportunities for improvement.",
  },
  {
    number: "03",
    title: "Recommend",
    text: "Develop practical recommendations based on business requirements and technology priorities.",
  },
  {
    number: "04",
    title: "Implement",
    text: "Support implementation and continuous improvement of the recommended technology solutions.",
  },
];

export default function ITConsultingPage() {
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
              IT Consulting
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Practical technology strategy and advisory services that help
              organizations make better IT decisions and build stronger
              digital capabilities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your IT Needs
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
                Technology Advisory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology decisions should support business objectives.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Organizations increasingly depend on technology for
                operations, communication, information management and service
                delivery.
              </p>

              <p>
                MICT provides technology consulting services that help
                organizations understand their current technology environment,
                identify opportunities and establish practical improvement
                strategies.
              </p>

              <p>
                Our consulting approach connects technology decisions with
                business requirements so that investments in systems,
                infrastructure and digital capabilities deliver meaningful
                organizational value.
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
              Practical guidance across the technology lifecycle.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our consulting capability covers technology planning,
              architecture, systems, infrastructure and digital transformation.
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
              Consulting Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology guidance designed around your organization.
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

      {/* Approach */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Advisory focused on practical business outcomes.
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
            Need technology guidance?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Tell us about your technology challenges, systems or business
            objectives and let's explore the right approach.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}