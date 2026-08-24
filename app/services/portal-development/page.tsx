import Link from "next/link";

const capabilities = [
  "Customer portals",
  "Employee portals",
  "Partner portals",
  "Self-service platforms",
  "Authentication and access control",
  "Workflow management",
  "Dashboard integration",
  "Database integration",
];

export default function PortalDevelopmentPage() {
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
              Portal Development
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Secure, scalable web portals designed to connect customers,
              employees, partners and business operations through a unified
              digital experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss Your Portal
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
                Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Digital portals built around your users and processes.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                MICT develops web-based portals that provide users with
                secure access to information, services, workflows and
                business processes.
              </p>

              <p>
                Whether the requirement is a customer self-service portal,
                employee platform, partner portal or specialized business
                application, we design solutions around the organization's
                operational requirements.
              </p>

              <p>
                Our approach combines user experience, application
                architecture, databases, authentication, workflow automation
                and integration capabilities.
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
              What we can build into your portal.
            </h2>
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

      {/* Use cases */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Use Cases
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Portals for modern organizations.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Customer Portals",
                description:
                  "Give customers secure access to services, requests, accounts, documents and transaction information.",
              },
              {
                title: "Employee Portals",
                description:
                  "Centralize internal information, workflows, applications and employee services.",
              },
              {
                title: "Business Portals",
                description:
                  "Connect partners, suppliers and other stakeholders to relevant business processes and information.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need a portal for your organization?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Tell us about your users, business processes and technology
            requirements and we can help define the right portal solution.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}