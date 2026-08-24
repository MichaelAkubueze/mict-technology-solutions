import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Digital Platforms",
    description:
      "End-to-end digital platforms that connect customers, employees, partners and business processes through a unified experience.",
    capabilities: [
      "Customer portals",
      "Self-service platforms",
      "Secure authentication",
      "Workflow management",
      "Third-party integrations",
    ],
  },
  {
    number: "02",
    title: "Healthcare & Pharmaceutical Technology",
    description:
      "Digital solutions that can support healthcare operations, customer engagement, product management, professional review workflows and service delivery.",
    capabilities: [
      "Healthcare portals",
      "Product platforms",
      "Prescription workflows",
      "Customer services",
      "Operational dashboards",
    ],
  },
  {
    number: "03",
    title: "Business Intelligence",
    description:
      "Transform organizational data into actionable intelligence through dashboards, analytics and executive reporting.",
    capabilities: [
      "Executive dashboards",
      "KPI monitoring",
      "Business analytics",
      "Performance reporting",
      "Data visualization",
    ],
  },
  {
    number: "04",
    title: "Enterprise Automation",
    description:
      "Connect systems and automate repetitive workflows to improve efficiency, consistency and operational visibility.",
    capabilities: [
      "Workflow automation",
      "Process digitization",
      "System integration",
      "Automated reporting",
      "Business process optimization",
    ],
  },
  {
    number: "05",
    title: "Digital Commerce",
    description:
      "Technology platforms that enable organizations to present products and services, manage customers and support digital transactions.",
    capabilities: [
      "E-commerce platforms",
      "Product catalogs",
      "Customer accounts",
      "Payment integration",
      "Order management",
    ],
  },
  {
    number: "06",
    title: "Digital Learning Platforms",
    description:
      "Technology-enabled learning environments for institutions, organizations, training providers and professional development programs.",
    capabilities: [
      "Learning platforms",
      "Course management",
      "Learner portals",
      "Assessments",
      "Progress tracking",
    ],
  },
  {
    number: "07",
    title: "Fleet & Operations Technology",
    description:
      "Data-driven operational systems that help organizations manage assets, vehicles, workflows and operational performance.",
    capabilities: [
      "Fleet management",
      "Asset tracking",
      "Operational dashboards",
      "Maintenance workflows",
      "Predictive analytics",
    ],
  },
  {
    number: "08",
    title: "Custom Enterprise Solutions",
    description:
      "Technology solutions designed around unique organizational requirements where standard software does not adequately address the business need.",
    capabilities: [
      "Requirements analysis",
      "Solution architecture",
      "Custom applications",
      "Integration",
      "Ongoing improvement",
    ],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the business objective, users, processes and technology environment.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate requirements into a practical solution architecture and user experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our technical capabilities are combined to develop and integrate the solution.",
  },
  {
    number: "04",
    title: "Deploy & Improve",
    description:
      "We support implementation and continuous improvement as organizational needs evolve.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Digital Solutions
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Complete technology solutions for complex business needs.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              MICT combines software development, data engineering, mobile
              technology, automation, infrastructure and consulting to create
              integrated digital solutions for organizations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Discuss a Solution
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Solution Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From individual technology services to complete platforms.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our solution approach brings multiple technology capabilities
              together when a business challenge requires more than one
              technology discipline.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">
                    {solution.number}
                  </span>

                  <span className="h-1 w-9 rounded-full bg-green-500 transition-all group-hover:w-14" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {solution.description}
                </p>

                <ul className="mt-auto space-y-2 pt-6">
                  {solution.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2 text-xs font-medium text-slate-600"
                    >
                      <span className="text-green-600">✓</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture concept */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-600">
              Integrated Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              One business objective. Multiple technology capabilities.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Complex digital projects often require several disciplines to
              work together. MICT can bring those capabilities together under
              one solution architecture.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Software",
              "Data",
              "Mobile",
              "Automation",
              "Infrastructure",
              "Security",
              "Analytics",
              "Consulting",
            ].map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <span className="text-sm font-bold text-slate-800">
                  {capability}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-blue-700 p-6 text-center shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-100">
              Unified Outcome
            </p>

            <p className="mt-2 text-xl font-bold text-white">
              Complete Digital Solution
            </p>
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Our Delivery Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From business challenge to working solution.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We use a structured approach to reduce uncertainty, align
                technology with business requirements and create solutions
                that can evolve with the organization.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {deliverySteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-extrabold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
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
            Have a complex technology requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Tell us what you need to achieve. We can help define the technology
            architecture and the right path from concept to implementation.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Discuss Your Requirement →
          </Link>
        </div>
      </section>
    </main>
  );
}