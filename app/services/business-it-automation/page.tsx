import Link from "next/link";

const capabilities = [
  "Business process automation",
  "Workflow automation",
  "Data entry automation",
  "Document and approval workflows",
  "System integration",
  "Automated notifications",
  "Reporting automation",
  "Operational process improvement",
];

const solutions = [
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive business workflows, approvals, notifications and operational processes to reduce manual effort and improve consistency.",
  },
  {
    title: "System Integration",
    description:
      "Connect business applications and data sources so information can move between systems without unnecessary manual intervention.",
  },
  {
    title: "Reporting Automation",
    description:
      "Automate recurring reporting processes so management and operational teams can access important information more efficiently.",
  },
];

const benefits = [
  {
    title: "Reduced Manual Work",
    text: "Automate repetitive activities and allow employees to focus more time on higher-value responsibilities.",
  },
  {
    title: "Improved Efficiency",
    text: "Streamline workflows and reduce unnecessary steps across business processes.",
  },
  {
    title: "Fewer Errors",
    text: "Use structured technology workflows to reduce errors associated with repetitive manual data processing.",
  },
  {
    title: "Better Visibility",
    text: "Create traceable processes that make it easier to monitor activities, approvals and operational performance.",
  },
];

export default function BusinessItAutomationPage() {
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
              Business &amp; IT Automation
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Improve operational efficiency by automating repetitive
              processes, connecting systems and creating technology-enabled
              workflows around the way your organization operates.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Automation Project
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
                Business Process Automation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Replace repetitive processes with smarter technology.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Many organizations spend significant time performing
                repetitive activities such as data entry, approvals,
                notifications, reconciliation and recurring reporting.
              </p>

              <p>
                MICT helps organizations identify processes where technology
                can reduce manual effort, improve consistency and create more
                efficient workflows.
              </p>

              <p>
                Automation solutions can connect applications, databases,
                documents, users and business rules to create structured
                processes that operate more efficiently.
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
              Automation across the business process lifecycle.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We focus on practical automation opportunities that can improve
              productivity, consistency and operational visibility.
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
              Automation Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology that removes unnecessary operational friction.
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
                Automation should improve the way people work.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Effective automation is not simply about replacing manual
                activities. It is about designing better processes that help
                people work more efficiently and give organizations greater
                control over their operations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-green-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {benefit.text}
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
                Automate the right processes, not simply more processes.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Identify",
                  text: "Examine business processes and identify repetitive, inefficient or error-prone activities.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "Map the improved workflow, business rules, users, systems and information requirements.",
                },
                {
                  number: "03",
                  title: "Automate",
                  text: "Implement appropriate technologies, integrations and workflow automation.",
                },
                {
                  number: "04",
                  title: "Improve",
                  text: "Monitor the process and continuously refine the automation as business requirements evolve.",
                },
              ].map((step) => (
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
            Have a process that should be automated?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Tell us about the workflow, repetitive task or operational
            challenge you want to improve and let&apos;s explore the right
            technology approach.
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