import Link from "next/link";

const capabilities = [
  "Android application development",
  "iOS application development",
  "Cross-platform applications",
  "Mobile user interface design",
  "API and backend integration",
  "Authentication and user management",
  "Push notifications",
  "Application testing and deployment",
];

const solutions = [
  {
    title: "Business Mobile Applications",
    description:
      "Mobile applications designed to support internal processes, field operations, workforce productivity and customer services.",
  },
  {
    title: "Customer Applications",
    description:
      "Engaging mobile experiences that allow customers to access services, information and digital platforms from their devices.",
  },
  {
    title: "Cross-Platform Solutions",
    description:
      "Modern applications designed to provide consistent experiences across Android and iOS while supporting efficient development.",
  },
];

const approach = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the users, business objectives, workflows and mobile requirements.",
  },
  {
    number: "02",
    title: "Design",
    text: "Design intuitive interfaces and define the application's structure, navigation and user experience.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Build the application and integrate required APIs, databases and business systems.",
  },
  {
    number: "04",
    title: "Deploy",
    text: "Test, refine and prepare the application for deployment and continued improvement.",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              IT Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mobile App Development
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Modern mobile applications designed to connect organizations,
              employees, customers and digital services across Android and iOS.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-green-500"
              >
                Discuss Your Mobile App
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Mobile Technology
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Put your digital services where your users are.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Mobile devices have become an important channel through which
                customers, employees and organizations interact with digital
                services.
              </p>

              <p>
                MICT develops mobile applications that connect users with
                business processes, information, services and operational
                systems.
              </p>

              <p>
                Applications can integrate with existing databases, APIs,
                authentication systems and enterprise platforms to create
                connected digital experiences.
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
              Mobile solutions built around real user needs.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our mobile development capability covers the core technologies
              required to create connected and maintainable mobile
              applications.
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
              Mobile Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Mobile technology designed for business.
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
                From mobile concept to working application.
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
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a mobile application idea?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Tell us about your users, business requirements or digital service
            and let's explore the right mobile solution.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}